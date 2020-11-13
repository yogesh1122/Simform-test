import express from 'express';

import { userController } from '../controllers';
import { createAgentSchema, loginSchema } from '../validations';
import { asyncHandler, Joi, auth } from '../middlewares';

const userRouter = express.Router();

userRouter.get('/ping', asyncHandler(userController.ping));
userRouter.post('/login', Joi(loginSchema, 'body'), asyncHandler(userController.login));

userRouter.use(auth(['ADMIN']));
userRouter.post('/create-agent', Joi(createAgentSchema, 'body'), asyncHandler(userController.createAgent));

export default userRouter;
