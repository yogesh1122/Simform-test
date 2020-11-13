import { common } from './common';
import { badRequestError, InternalServerError } from '../validations/commonValidations.js';

export const definitions = { common, badRequest: badRequestError, InternalServerError };
