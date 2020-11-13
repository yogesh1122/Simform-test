import cors from 'cors';
import { CORS } from '../config';
export const corsV2 = (app) => {
	var corsOptions = {
		origin: CORS.ORIGINS,
		optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	};
	app.use(cors(corsOptions));
};
