export const info = {
	openapi: '3.0.1',
	info: {
		title: 'SimForm Apis ',
		version: '0.0.1',
		description: 'Stripe wallet app',
	},
	servers: [
		{
			url: 'http://localhost:8000',
			description: 'Local server',
		},
	],
	tags: [
		{
			name: 'user',
		},
		{
			name: 'sites',
		},
		{
			name: 'cashiers',
		},
	],
};
