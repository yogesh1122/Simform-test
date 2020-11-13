import express from 'express';

import { cashierController } from '../controllers';
import { createCashierSchema } from '../validations';
import { asyncHandler, auth, Joi } from '../middlewares';

const cashierRouter = express.Router();

cashierRouter.get('/ping', asyncHandler(cashierController.ping));

cashierRouter.use(auth(['ADMIN', 'AGENT']));
cashierRouter.post('/create', Joi(createCashierSchema, 'body'), asyncHandler(cashierController.createCashier));
cashierRouter.get('/', asyncHandler(cashierController.getCashiers));

export default cashierRouter;
