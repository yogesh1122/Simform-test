import { ADMIN_CRED } from '../config';
import { usersModel } from '../models';

export const seedData = async () => {
	try {
		const user = await usersModel.findOne({ email: ADMIN_CRED.email }).select('email');
		if (user) return;

		await usersModel(ADMIN_CRED).save();
	} catch (error) {
		console.log('something wrong', error);
	}
};
