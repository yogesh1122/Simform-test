import bcrypt from 'bcryptjs';

export const findUser = async ({ userId, msg, email, select }) => {
	let user;
	if (!select) select = '_id ';
	if (email) user = await userModel.findOne({ email }).select(select);
	else user = await userModel.findById(userId).select(select);
	if (!user) throw new AppError(`${msg} not found`, 404);
	return user;
};

export const validatePassword = async ({ user, plainPass, encryptPass }) => {
	const validPassword = await bcrypt.compare(plainPass, encryptPass);
	if (!validPassword) throw new AppError(`Invalid  password.`, 400);
	return validPassword;
};

export const hashPassword = async ({ rounds = 10, password = '' }) => {
	const salt = await bcrypt.genSalt(rounds);
	let pass = await bcrypt.hash(password, salt);
	return pass;
};
