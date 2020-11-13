import joi2swagger from 'joi-to-swagger';
import HTTP_CODES from 'http-status';
import { getSitesSchemaResponse } from '../../../validations';

const { swagger: responseSwagger } = joi2swagger(getSitesSchemaResponse);

export const getSitesDoc = {
	get: {
		tags: ['sites'],
		summary: 'sites',
		description: 'agent can only view his sites ',
		produces: 'application/json',
		parameters: [
			{
				$ref: '#definitions/common/token',
			},
		],
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
