const Joi = require('joi');

const digitalLinkSchema = Joi.object({
  identifier: Joi.string().required().min(1).max(500),
  linkType: Joi.string().required().min(1).max(200),
  link: Joi.string().uri().required(),
  title: Joi.string().allow('').max(500),
  ianaLanguage: Joi.string().allow('').max(10),
  context: Joi.string().allow('').max(500),
  mimeType: Joi.string().allow('').max(100),
  active: Joi.boolean(),
  fwqs: Joi.boolean(),
  defaultLinkType: Joi.boolean(),
  defaultIanaLanguage: Joi.boolean(),
  defaultContext: Joi.boolean(),
  defaultMimeType: Joi.boolean(),
  authRequired: Joi.boolean()
});

const bulkDigitalLinkSchema = Joi.object({
  anchor: Joi.string().required().pattern(/^\/\w+\/.*$/),
  itemDescription: Joi.string().allow('').max(1000),
  defaultLinktype: Joi.string().required().min(1).max(200),
  links: Joi.array().items(
    Joi.object({
      linktype: Joi.string().required().min(1).max(200),
      href: Joi.string().uri().required(),
      title: Joi.string().allow('').max(500),
      type: Joi.string().allow('').max(100),
      hreflang: Joi.array().items(Joi.string().max(10))
    })
  ).min(1).required()
});

const updateDigitalLinkSchema = Joi.object({
  linkType: Joi.string().min(1).max(200),
  link: Joi.string().uri(),
  title: Joi.string().allow('').max(500),
  ianaLanguage: Joi.string().allow('').max(10),
  context: Joi.string().allow('').max(500),
  mimeType: Joi.string().allow('').max(100),
  active: Joi.boolean(),
  fwqs: Joi.boolean(),
  defaultLinkType: Joi.boolean(),
  defaultIanaLanguage: Joi.boolean(),
  defaultContext: Joi.boolean(),
  defaultMimeType: Joi.boolean(),
  authRequired: Joi.boolean()
}).min(1); // At least one field must be provided for update

const queryParamsSchema = Joi.object({
  linkType: Joi.string().min(1).max(200),
  active: Joi.boolean(),
  authRequired: Joi.boolean()
});

module.exports = {
  digitalLinkSchema,
  bulkDigitalLinkSchema,
  updateDigitalLinkSchema,
  queryParamsSchema
};
