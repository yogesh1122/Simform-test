import mongoose, { Schema } from 'mongoose';

const options = { timestamps: true };

const cashiers = new Schema(
	{
		name: String,
		siteId: { type: Schema.Types.ObjectId, ref: 'sites' },
	},
	options
);

export const cashiersModel = mongoose.model('cashiers', cashiers);
