import Joi from '@hapi/joi';

const schema = {
	_id: Joi.string(),
	siteName: Joi.string(),
	siteLocation: Joi.string(),
	createdBy: Joi.string(), // sites owner agent
	createdAt: Joi.string(),
	updatedAt: Joi.string(),
};

const { _id, siteName, siteLocation, createdBy, createdAt, updatedAt } = schema;

export const createSitesSchema = Joi.object({
	siteName,
	siteLocation,
	createdBy,
});

export const createSitesSchemaResponse = Joi.string();

export const getSitesSchemaResponse = Joi.object().keys({
	sites: Joi.array().items({
		_id,
		siteName,
		siteLocation,
		createdBy,
		createdAt,
		updatedAt,
	}),
});
