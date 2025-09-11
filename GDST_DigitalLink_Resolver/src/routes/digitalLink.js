const express = require('express');
const router = express.Router();
const DigitalLink = require('../models/DigitalLink');
const { digitalLinkSchema, bulkDigitalLinkSchema, updateDigitalLinkSchema, queryParamsSchema } = require('../validation/schemas');

// Helper function to parse anchor and extract identifier
function parseAnchor(anchor) {
  // Matches patterns like /00/urn:epc:id:sscc:... or /417/urn:epc:pgln:...
  const match = anchor.match(/^\/(\w+)\/(.+)$/);
  if (!match) {
    throw new Error('Invalid anchor format. Expected format: /keyType/identifier');
  }
  return {
    keyType: match[1],
    identifier: match[2]
  };
}

// Helper function to build full identifier based on keyType and identifier
function buildFullIdentifier(keyType, identifier) {
  // Handle different key types
  if (keyType === '00') {
    // SSCC format
    return identifier; // Already in full format like urn:epc:id:sscc:...
  } else if (keyType === '417') {
    // PGLN format  
    return identifier; // Already in full format like urn:epc:pgln:...
  } else {
    // Default: assume it's already in full format
    return identifier;
  }
}

// POST /digitallink/new - Create multiple digital links from bulk format
router.post('/new', async (req, res, next) => {
  try {
    // Validate request body
    const { error, value } = bulkDigitalLinkSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: 'Validation Error',
        message: error.details[0].message
      });
    }

    const { anchor, itemDescription, defaultLinktype, links } = value;
    
    // Parse the anchor to get identifier
    const { identifier } = parseAnchor(anchor);

    // Convert each link to our digital link format
    const digitalLinks = [];
    const createdLinks = [];

    for (const link of links) {
      const digitalLinkData = {
        identifier: identifier,
        linkType: link.linktype,
        link: link.href,
        title: link.title || '',
        mimeType: link.type || '',
        ianaLanguage: link.hreflang && link.hreflang.length > 0 ? link.hreflang[0] : '',
        context: '',
        active: true,
        fwqs: false,
        defaultLinkType: link.linktype === defaultLinktype,
        defaultIanaLanguage: link.hreflang && link.hreflang.length > 0,
        defaultContext: false,
        defaultMimeType: !!link.type,
        authRequired: false
      };

      try {
        const digitalLink = new DigitalLink(digitalLinkData);
        const savedDigitalLink = await digitalLink.save();
        createdLinks.push({
          id: savedDigitalLink._id,
          identifier: savedDigitalLink.identifier,
          linkType: savedDigitalLink.linkType,
          link: savedDigitalLink.link
        });
      } catch (saveError) {
        // Handle duplicate key errors gracefully
        if (saveError.code === 11000) {
          console.warn(`Duplicate link skipped: ${digitalLinkData.linkType} for ${digitalLinkData.identifier}`);
        } else {
          throw saveError;
        }
      }
    }

    res.status(201).json({
      message: 'Digital links created successfully',
      anchor: anchor,
      itemDescription: itemDescription,
      created: createdLinks.length,
      data: createdLinks
    });

  } catch (error) {
    next(error);
  }
});

// GET /digitallink/:keyType/:identifier - Get digital links by identifier and linkType
router.get('/:keyType/:identifier', async (req, res, next) => {
  try {
    const { keyType, identifier } = req.params;
    const { linkType, active, authRequired } = req.query;

    // Validate query parameters
    const { error: queryError } = queryParamsSchema.validate(req.query);
    if (queryError) {
      return res.status(400).json({
        error: 'Invalid query parameters',
        message: queryError.details[0].message
      });
    }

    // Build the full identifier based on keyType and identifier
    const fullIdentifier = buildFullIdentifier(keyType, identifier);

    // Build query filter
    const filter = { identifier: fullIdentifier };
    
    if (linkType) {
      filter.linkType = linkType;
    }
    if (active !== undefined) {
      filter.active = active;
    }
    if (authRequired !== undefined) {
      filter.authRequired = authRequired;
    }

    const digitalLinks = await DigitalLink.find(filter)
      .select('-_id -__v -createdAt -updatedAt')
      .lean();

    if (digitalLinks.length === 0) {
      return res.status(404).json({
        error: 'Oliot DL Not Found',
        message: 'No digital links found for the specified identifier'
      });
    }

    res.json(digitalLinks);
  } catch (error) {
    next(error);
  }
});

// POST /digitallink - Create a new digital link
router.post('/', async (req, res, next) => {
  try {
    // Validate request body
    const { error, value } = digitalLinkSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: 'Validation Error',
        message: error.details[0].message
      });
    }

    const digitalLink = new DigitalLink(value);
    const savedDigitalLink = await digitalLink.save();

    res.status(201).json({
      message: 'Digital link created successfully',
      data: {
        id: savedDigitalLink._id,
        identifier: savedDigitalLink.identifier,
        linkType: savedDigitalLink.linkType,
        link: savedDigitalLink.link
      }
    });
  } catch (error) {
    next(error);
  }
});

// GET /digitallink - Get all digital links (with pagination)
router.get('/', async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = Math.min(parseInt(req.query.limit) || 20, 100); // Max 100 per page
    const skip = (page - 1) * limit;

    const { linkType, active, authRequired } = req.query;

    // Build query filter
    const filter = {};
    if (linkType) filter.linkType = linkType;
    if (active !== undefined) filter.active = active;
    if (authRequired !== undefined) filter.authRequired = authRequired;

    const [digitalLinks, total] = await Promise.all([
      DigitalLink.find(filter)
        .select('-__v')
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 })
        .lean(),
      DigitalLink.countDocuments(filter)
    ]);

    res.json({
      data: digitalLinks,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    next(error);
  }
});

// PUT /digitallink/:id - Update a digital link
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    // Validate request body
    const { error, value } = updateDigitalLinkSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: 'Validation Error',
        message: error.details[0].message
      });
    }

    const updatedDigitalLink = await DigitalLink.findByIdAndUpdate(
      id,
      { ...value, updatedAt: new Date() },
      { new: true, runValidators: true }
    ).select('-__v');

    if (!updatedDigitalLink) {
      return res.status(404).json({
        error: 'Oliot DL  Not Found',
        message: 'Digital link not found'
      });
    }

    res.json({
      message: 'Digital link updated successfully',
      data: updatedDigitalLink
    });
  } catch (error) {
    next(error);
  }
});

// DELETE /digitallink/:id - Delete a digital link
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedDigitalLink = await DigitalLink.findByIdAndDelete(id);

    if (!deletedDigitalLink) {
      return res.status(404).json({
        error: 'Oliot DL  Not Found',
        message: 'Digital link not found'
      });
    }

    res.json({
      message: 'Digital link deleted successfully'
    });
  } catch (error) {
    next(error);
  }
});

// POST /digitallink/seed - Seed database with sample data (development only)
router.post('/seed', async (req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(403).json({
      error: 'Forbidden',
      message: 'Seeding is not allowed in production'
    });
  }

  try {
    // Clear existing data
    await DigitalLink.deleteMany({});

    // Sample data based on the test.http file
    const sampleData = [
      {
        identifier: "urn:epc:id:sscc:08600031303.0003",
        linkType: "gs1:epcis",
        link: "https://capability-service.traceability-dialogue.org/epcis",
        title: "",
        ianaLanguage: "",
        context: "",
        mimeType: "",
        active: false,
        fwqs: false,
        defaultLinkType: false,
        defaultIanaLanguage: false,
        defaultContext: false,
        defaultMimeType: false,
        authRequired: true
      },
      {
        identifier: "urn:epc:id:sscc:08600031303.0003",
        linkType: "gs1:masterData",
        link: "https://master-data-service.traceability-dialogue.org/masterdata",
        title: "Master Data Service",
        ianaLanguage: "en",
        context: "",
        mimeType: "application/json",
        active: true,
        fwqs: false,
        defaultLinkType: true,
        defaultIanaLanguage: true,
        defaultContext: false,
        defaultMimeType: true,
        authRequired: false
      }
    ];

    await DigitalLink.insertMany(sampleData);

    res.json({
      message: 'Database seeded successfully',
      count: sampleData.length
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
