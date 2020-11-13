export const SERVER = {
	PORT: 8000,
	BASE_URL: '/api/v1',
};

export const SECURITY = {
	jwtPrivateKey: 'Test!1@2',
};

export const MAIL_CONFIG = {
	HOST_CONFIG: {
		HOST: 'smtp.gmail.com',
		PORT: 465,
		SECURE: true,
		AUTH: {
			USERNAME: '/YourEmailid/',
			PASSWORD: '/Password/',
		},
	},
	MAIL_SENDER: 'samrat1903y@gmail.com',
	MAIL_OPTION: {
		FROM_EMAIL: "'SimForm' <info@simform.com>",
		TO_EMAIL: 'akshaydhawle531@gmail.com',
		SUPPORT_EMAIL: 'support@simform.com',
	},
};

export const CORS = {
	ORIGINS: ['*'],
	METHODS: '',
};

export const ADMIN_CRED = {
	email: 'contactyogesh02@gmail.com',
	password: 'test',
	role: 'ADMIN',
};

export const MONGO_CONFIG = {
	URI: 'mongodb://localhost:27017/test',
	DEBUG: '',
	SSl_CA: '',
	SSl_CERT: '',
	SSl_KEY: '',
};
