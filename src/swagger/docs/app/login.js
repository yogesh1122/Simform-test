import joi2swagger from 'joi-to-swagger';
import HTTP_CODES from 'http-status';
import { loginSchema, loginSchemaResponse } from '../../../validations';

const { swagger: requestSwagger } = joi2swagger(loginSchema);
const { swagger: responseSwagger } = joi2swagger(loginSchemaResponse);

export const loginDoc = {
	post: {
		tags: ['user'],
		summary: 'login',
		description: 'login',
		produces: 'application/json',
		parameters: [],
		requestBody: {
			description: 'Sample input',
			required: true,
			content: {
				'application/json': {
					schema: requestSwagger,
				},
			},
		},
		responses: {
			[HTTP_CODES.OK]: {
				description: 'OK',
				content: {
					'application/json': {
						schema: responseSwagger,
					},
				},
			},
			400: {
				description: '',
				content: {
					'application/json': {
						schema: '#/definitions/badRequest',
					},
				},
			},
		},
	},
};
