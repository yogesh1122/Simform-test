import { sitesModel } from '../models';
import { paginateOptions } from '../utils/utility';
import { Types } from 'mongoose';
import { AppError } from '../utils';

const { ObjectId } = Types;
export const sitesController = {
	ping,
	createSites,
	getSites,
};

async function ping(req, res) {
	res.send('heath ok');
}

async function createSites(req, res) {
	const { siteName, siteLocation, createdBy } = req.body;

	let site = await sitesModel.findOne({ $and: [{ siteName: siteName }, { siteLocation }, { createdBy: createdBy }] });
	if (site) throw new AppError('site already exists', 409);

	await sitesModel(req.body).save();

	res.status(201).send('site created successfully.');
}

async function getSites(req, res) {
	const { limit, skip } = paginateOptions(req.body);

	const { _id } = req.user;

	const sites = await sitesModel
		.find({ createdBy: ObjectId(_id) })
		.limit(limit)
		.skip(skip);

	res.status(200).send({ sites });
}
