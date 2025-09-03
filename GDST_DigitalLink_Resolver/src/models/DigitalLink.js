const mongoose = require('mongoose');

const digitalLinkSchema = new mongoose.Schema({
  identifier: {
    type: String,
    required: true,
    index: true
  },
  linkType: {
    type: String,
    required: true,
    index: true
  },
  link: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  ianaLanguage: {
    type: String,
    default: ''
  },
  context: {
    type: String,
    default: ''
  },
  mimeType: {
    type: String,
    default: ''
  },
  active: {
    type: Boolean,
    default: false
  },
  fwqs: {
    type: Boolean,
    default: false
  },
  defaultLinkType: {
    type: Boolean,
    default: false
  },
  defaultIanaLanguage: {
    type: Boolean,
    default: false
  },
  defaultContext: {
    type: Boolean,
    default: false
  },
  defaultMimeType: {
    type: Boolean,
    default: false
  },
  authRequired: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Compound index for efficient querying
digitalLinkSchema.index({ identifier: 1, linkType: 1 });

// Create a compound unique index to prevent duplicate entries
digitalLinkSchema.index(
  { identifier: 1, linkType: 1, link: 1 },
  { unique: true }
);

const DigitalLink = mongoose.model('DigitalLink', digitalLinkSchema);

module.exports = DigitalLink;
