const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { Mushroom, Pack, Order, Total } = require("../models");

const resolvers = {
	Query: {
		mushrooms: async () => {
			return await Mushroom.find();
		},
		packs: async () => {
			return await Pack.find();
		},
		orders: async () => {
			return await Order.find();
		},
	},
	Mutation: {
		addMushroom: async (parent, args) => {
			const mushroom = await Mushroom.create(args);
			return mushroom;
		},
		addPack: async (parent, args) => {
			const pack = await Pack.create(args);
			return pack;
		},
		addOrder: async (parent, args) => {
			const order = await Order.create(args);
			return order;
		},
		deleteOrder: async (parent, { _id }) => {
			const order = await Order.findByIdAndDelete(_id);
			Total.findOneAndDelete;
			return order;
		},
	},
};

module.exports = resolvers;
