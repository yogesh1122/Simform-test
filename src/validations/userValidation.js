import Joi from '@hapi/joi';

import { ROLES } from '../constants';

const schema = {
	id: Joi.string().required(),
	firstName: Joi.string(),
	lastName: Joi.string(),
	email: Joi.string().required(),
	password: Joi.string().required(),
	age: Joi.number(),
	dob: Joi.string(),
	gender: Joi.string(),
	address: Joi.string(),
	role: Joi.string()
		.valid(...ROLES)
		.required(),
};

const { firstName, lastName, email, password, age, dob, gender, address, role } = schema;

export const createAgentSchema = Joi.object({
	firstName,
	lastName,
	email,
	password,
	age,
	dob,
	gender,
	address,
	role,
});

export const createAgentSchemaResponse = Joi.string();

export const loginSchema = Joi.object({
	email,
	password,
	role,
});

export const loginSchemaResponse = Joi.string();
