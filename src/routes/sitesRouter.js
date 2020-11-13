import express from 'express';

import { sitesController } from '../controllers';
import { createSitesSchema } from '../validations';
import { asyncHandler, auth, Joi } from '../middlewares';

const sitesRouter = express.Router();

sitesRouter.get('/ping', asyncHandler(sitesController.ping));

sitesRouter.use(auth(['ADMIN', 'AGENT']));
sitesRouter.post('/create', Joi(createSitesSchema, 'body'), asyncHandler(sitesController.createSites));
sitesRouter.get('/', asyncHandler(sitesController.getSites));

export default sitesRouter;
