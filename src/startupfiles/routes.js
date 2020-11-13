import express from 'express';
import { SERVER } from '../config';
import swaggerUi from 'swagger-ui-express';
import { docs } from '../swagger/index';
import { userRouter, sitesRouter, cashierRouter } from '../routes/';

const { BASE_URL } = SERVER;

const RouteData = [
	{ path: '/user', router: userRouter },
	{ path: '/sites', router: sitesRouter },
	{ path: '/cashiers', router: cashierRouter },
];

const options = {
	explorer: true,
};

export const Routes = (app) => {
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	app.use(BASE_URL + '/swagger-docs', swaggerUi.serve, swaggerUi.setup(docs, options));

	// Setting application routes
	RouteData.forEach((route) => app.use(BASE_URL + route.path, route.router));
};
