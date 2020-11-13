import { usersModel } from '../models';
import { AppError } from '../utils';
import { sendEmailTemplate } from '../utils/mailer';
import { validatePassword } from '../services';

export const userController = {
	ping,
	createAgent,
	login,
};

async function ping(req, res) {
	res.send('heath ok');
}

async function createAgent(req, res) {
	const { email, role, password } = req.body;

	if (role != 'AGENT') throw new AppError('you can add only agent here', 400);

	let agent = await usersModel.findOne({ $and: [{ email: email }, { role: role }] });
	if (agent) throw new AppError('agent already exists', 409);

	agent = await usersModel(req.body).save();

	// send email
	const body = { email, password };
	await sendEmailTemplate('Agents credentials', 'agentCreds', body, email);

	// send token
	res.status(201).send(await agent.generateAuthToken());
}

async function login(req, res) {
	const { email, password, role } = req.body;

	let user = await usersModel.findOne({ $and: [{ email: email }, { role: role }] });
	if (!user) throw new AppError('Invalid email', 404);
	await validatePassword({ user, plainPass: password, encryptPass: user.password });

	const token = user.generateAuthToken();
	res.send(token);
}
