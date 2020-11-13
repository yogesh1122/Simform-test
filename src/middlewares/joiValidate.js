export const Joi = (schema, type) => (req, res, next) => {
	try {
		const { error } = schema.validate(req[type]);
		if (error) return res.status(400).send(error.details[0].message);
		if (!next) return;
		next();
	} catch (ex) {
		console.log(ex);
		res.status(400).send('Invalid token.');
	}
};
