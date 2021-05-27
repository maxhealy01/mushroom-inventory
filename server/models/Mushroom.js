const mongoose = require("mongoose");
const { Schema } = mongoose;

const mushroomSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	avgYield: {
		type: Number,
	},
	blocksPerRack: {
		type: Number,
	},
	blocksPerShelf: {
		type: Number,
	},
});

const Mushroom = mongoose.model("Mushroom", mushroomSchema);

module.exports = Mushroom;
