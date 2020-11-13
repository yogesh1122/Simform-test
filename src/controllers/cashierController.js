import { cashiersModel } from '../models';
import { AppError } from '../utils';
import { paginateOptions } from '../utils/utility';
import { Types } from 'mongoose';

const { ObjectId } = Types;

export const cashierController = {
	ping,
	createCashier,
	getCashiers,
};

async function ping(req, res) {
	res.send('heath ok');
}

async function createCashier(req, res) {
	const { name, siteId } = req.body;

	let cashier = await cashiersModel.findOne({
		$and: [{ siteId: siteId }, { name }],
	});
	if (cashier) throw new AppError('cashier already exists', 409);

	await cashiersModel(req.body).save();

	res.status(201).send('cashier created successfully.');
}

async function getCashiers(req, res) {
	const { limit, skip } = paginateOptions(req.body);

	const { siteId } = req.query;

	if (!siteId) throw new AppError('siteId is mandatory', 400);

	const cashiers = await cashiersModel
		.find({ siteId: ObjectId(siteId) })
		.limit(limit)
		.skip(skip);

	res.status(200).send(cashiers);
}
