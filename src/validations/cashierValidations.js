import Joi from '@hapi/joi';

const schema = {
	_id: Joi.string(),
	name: Joi.string(),
	siteId: Joi.string(), // sites owner agent
	createdAt: Joi.string(),
	updatedAt: Joi.string(),
};

const { _id, name, siteId, createdAt, updatedAt } = schema;

export const createCashierSchema = Joi.object({
	name,
	siteId,
});

export const createCashierSchemaResponse = Joi.string();

export const getCashiersResponse = Joi.array().items({
	_id,
	name,
	siteId,
	createdAt,
	updatedAt,
});
