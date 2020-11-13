import mongoose, { Schema } from 'mongoose';

const options = { timestamps: true };

const sites = new Schema(
	{
		siteName: String,
		siteLocation: String,
		createdBy: { type: Schema.Types.ObjectId, ref: 'users' }, // sites owner agent
	},
	options
);

export const sitesModel = mongoose.model('sites', sites);
