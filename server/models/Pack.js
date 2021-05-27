const mongoose = require("mongoose");

const { Schema } = mongoose;

const packSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	blueOyster: {
		type: Number,
	},
	lionsMane: {
		type: Number,
	},
	shiitake: {
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
});

const Pack = mongoose.model("Pack", packSchema);

module.exports = Pack;
