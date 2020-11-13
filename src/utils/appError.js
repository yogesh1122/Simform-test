export class AppError extends Error {
	constructor(message, status, data) {
		console.log(message, status);
		super(message);
		this.name = 'AppError';
		this.status = status;
		this.errorData = data;
		Error.captureStackTrace(this, AppError);
	}
}
export const sendError = ({ error, res }) => {
	return res.status(error.status ? error.status : 500).send(error.message);
};
