const mongoose = require("mongoose");

const { Schema } = mongoose;

const totalSchema = new Schema({
	blueOyster: {
		type: Number,
	},
	lionsMane: {
		type: Number,
	},
	royalTrumpet: {
		type: Number,
	},
	yellowOyster: {
		type: Number,
	},
	maitake: {
		type: Number,
	},
	shiitake: {
		type: Number,
	},
	order: {
		type: Schema.Types.ObjectId,
		ref: "Order",
		required: true,
		unique: true,
	},
});

const Total = mongoose.model("Total", totalSchema);

module.exports = Total;
