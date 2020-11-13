import Joi from '@hapi/joi';
const joi2swagger = require('joi-to-swagger');

// for error
const badRequest = Joi.string();
const InternalServer = Joi.string();

const { swagger: badRequestError } = joi2swagger(badRequest);
const { swagger: InternalServerError } = joi2swagger(InternalServer);

export default {
	badRequestError,
	InternalServerError,
};
