import joi2swagger from 'joi-to-swagger';
import HTTP_CODES from 'http-status';
import { getCashiersResponse } from '../../../validations';

const { swagger: responseSwagger } = joi2swagger(getCashiersResponse);

export const getCashiersDoc = {
	get: {
		tags: ['cashiers'],
		summary: 'cashiers',
		description: 'agent can view his sites cashiers',
		produces: 'application/json',
		parameters: [
			{
				$ref: '#definitions/common/token',
			},
			{
				in: 'query',
				name: 'siteId',
				description: 'site id',
				required: true,
				type: 'string',
			},
		],

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
