import debug from 'debug';
import { MAIL_CONFIG, CLIENT } from '../config';
import ejs from 'ejs';
import htmlToText from 'html-to-text';
import mailer from 'nodemailer';

const log = debug('app:mailer');

const getTemplate = async (templateName, options = {}) => {
	const html = ejs.renderFile(`${__dirname}/../views/${templateName}.ejs`, options);
	return html;
};

export const getEmailServer = (mailConfig) => {
	// its send for local and stage
	const {
		HOST: host,
		PORT: port,
		SECURE: secure,
		AUTH: { USERNAME: user, PASSWORD: pass },
	} = MAIL_CONFIG.HOST_CONFIG;

	return mailer.createTransport({
		host,
		port,
		secure,
		auth: { user, pass },
	});
};

export const sendEmail = (options) => {
	return new Promise(async (resolve, rejects) => {
		// get mail server based on mail configuration
		const server = await getEmailServer(MAIL_CONFIG);
		// make default email options
		const mailOptions = {
			from: MAIL_CONFIG.MAIL_OPTION.FROM_EMAIL,
			to: options.to,
			subject: options.subject,
		};

		// if template name is exist then choose pug template from views
		if (options.templateName) {
			mailOptions.html = await getTemplate(options.templateName, options.replace);
			mailOptions.text = htmlToText.fromString(mailOptions.html);
		}

		// if text body then assign as text
		if (options.body) mailOptions.text = options.body;

		// if html body then assign as html
		if (options.htmlBody) mailOptions.html = options.htmlBody;

		log(JSON.stringify(mailOptions));

		/**
		 * sendMail
		 */
		// add nodemailer on server
		server.sendMail(mailOptions, async (err, info) => {
			log(JSON.stringify(err));
			if (info) {
				log(JSON.stringify(info));

				resolve({
					success: true,
					item: info,
				});
			} else {
				rejects({
					success: false,
					error: err,
				});
			}
		});
	});
};

export const sendEmailTemplate = async (subject, templateName, body, to) => {
	const options = {
		subject,
		templateName,
		replace: { body },
		to: to.toString(),
	};
	return sendEmail(options);
};
