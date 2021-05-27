const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	date: {
		type: String,
		required: true,
	},
	blueOyster: {
		type: Number,
	},
	lionsMane: {
		type: Number,
	},
	royalTrumpet: {
		type: Number,
	},
	maitake: {
		type: Number,
	},
	yellowOyster: {
		type: Number,
	},
	umami: {
		type: Number,
	},
	fancy: {
		type: Number,
	},
	mixOys: {
		type: Number,
	},
	blue: {
		type: Number,
	},
	kingPack: {
		type: Number,
	},
	yellow: {
		type: Number,
	},
	lion: {
		type: Number,
	},
	boTotal: {
		type: Number,
	},
	yoTotal: {
		type: Number,
	},
	rtTotal: {
		type: Number,
	},
	shiTotal: {
		type: Number,
	},
	maiTotal: {
		type: Number,
	},
	lmTotal: {
		type: Number,
	},
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
