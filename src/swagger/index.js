import { SERVER } from '../config';
import { definitions } from './definitions';
import { info } from './info';

import { createAgentDoc, createCashierDoc, createSiteDoc, getSitesDoc, getCashiersDoc, loginDoc } from './docs/app';

const { BASE_URL: basePath } = SERVER;

const paths = {
	[`${basePath}/user/login`]: loginDoc,
	[`${basePath}/user/create-agent`]: createAgentDoc,
	[`${basePath}/sites/create`]: createSiteDoc,
	[`${basePath}/sites/`]: getSitesDoc,
	[`${basePath}/cashiers/create`]: createCashierDoc,
	[`${basePath}/cashiers/`]: getCashiersDoc,
};

export const docs = { ...info, paths, definitions };
