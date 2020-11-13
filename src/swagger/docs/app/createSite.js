import joi2swagger from 'joi-to-swagger';
import HTTP_CODES from 'http-status';
import { createSitesSchema, createSitesSchemaResponse } from '../../../validations';

const { swagger: requestSwagger } = joi2swagger(createSitesSchema);
const { swagger: responseSwagger } = joi2swagger(createSitesSchemaResponse);

export const createSiteDoc = {
	post: {
		tags: ['sites'],
		summary: 'create sites for agent',
		description: ' agent are allowed to create sites',
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
