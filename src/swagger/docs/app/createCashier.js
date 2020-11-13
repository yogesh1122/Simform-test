import joi2swagger from 'joi-to-swagger';
import HTTP_CODES from 'http-status';
import { createCashierSchema, createCashierSchemaResponse } from '../../../validations';

const { swagger: requestSwagger } = joi2swagger(createCashierSchema);
const { swagger: responseSwagger } = joi2swagger(createCashierSchemaResponse);

export const createCashierDoc = {
	post: {
		tags: ['cashiers'],
		summary: 'cashiers',
		description: 'agent can create cashiers for particular site',
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
