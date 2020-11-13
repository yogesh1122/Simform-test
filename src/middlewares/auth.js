import jwt from 'jsonwebtoken';
import { SECURITY } from '../config';
import { usersModel } from '../models';
const { jwtPrivateKey } = SECURITY;

export const auth = (arr) => async (req, res, next) => {
	const token = req.header('x-auth-token');
	if (!token) return res.status(401).send('Access denied. No token provided.');
	try {
		const decoded = jwt.verify(token, jwtPrivateKey);
		let jwtinfo = decoded;
		if (!arr.includes(jwtinfo.role)) return res.status(403).send('Permission denied.');

		console.log(jwtinfo);
		const user = await usersModel.findById(jwtinfo._id).select('firstName lastName email _id');
		if (user) req.user = { ...JSON.parse(JSON.stringify(user)), jwtinfo };

		next();
	} catch (ex) {
		res.status(400).send('Invalid token.', ex);
	}
};
