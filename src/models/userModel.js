import mongoose, { Schema } from 'mongoose';
import { ROLES } from '../constants';
import { hashPassword } from '../services';
import { SECURITY } from '../config';
import jwt from 'jsonwebtoken';

const { jwtPrivateKey } = SECURITY;
const options = { timestamps: true };

const users = new Schema(
	{
		firstName: String,
		lastName: String,
		email: { type: String, unique: true },
		password: String,
		age: Number,
		dob: Date,
		gender: String,
		address: String,
		role: { type: String, enum: ROLES },
	},
	options
);

//mongo hooks
users.pre('save', async function save(next) {
	if (!this.password) return next();
	this.password = await hashPassword({ rounds: 10, password: this.password });
	return next();
});

//genrate jwt
users.methods.generateAuthToken = function () {
	const token = jwt.sign(
		{
			_id: this._id,
			email: this.email,
			role: this.role,
		},
		jwtPrivateKey
	);
	return token;
};

export const usersModel = mongoose.model('users', users);
