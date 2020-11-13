import joi2swagger from 'joi-to-swagger';
import HTTP_CODES from 'http-status';
import { createAgentSchema, createAgentSchemaResponse } from '../../../validations';

const { swagger: requestSwagger } = joi2swagger(createAgentSchema);
const { swagger: responseSwagger } = joi2swagger(createAgentSchemaResponse);

export const createAgentDoc = {
	post: {
		tags: ['user'],
		summary: 'createAgent',
		description: 'createAgent and returns token',
		produces: 'application/json',
		parameters: [
			{
				$ref: '#definitions/common/token',
			},
		],
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
			[HTTP_CODES[201]]: {
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
