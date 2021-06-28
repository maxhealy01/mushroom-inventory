const { gql } = require("apollo-server-express");

// All of this data was lifted from the shop-shop module.
// The only reason it's here is so that the server could start!
const typeDefs = gql`
	type Mushroom {
		_id: ID
		name: String
		avgYield: Float
		blocksPerRack: Int
		blocksPerShelf: Int
	}

	type Pack {
		_id: ID
		name: String
		blueOyster: Float
		lionsMane: Float
		shiitake: Float
		royalTrumpet: Float
		maitake: Float
		yellowOyster: Float
	}

	type Order {
		_id: ID
		name: String
		date: String
		blueOyster: Int
		lionsMane: Int
		royalTrumpet: Int
		maitake: Int
		yellowOyster: Int
		umami: Int
		maitakePack: Int
		fancy: Int
		mixOys: Int
		blue: Int
		kingPack: Int
		yellow: Int
		lion: Int
	}

	type Total {
		blueOyster: Int
		lionsMane: Int
		royalTrumpet: Int
		maitake: Int
		yellowOyster: Int
		shiitake: Int
		order: Order
	}

	type Query {
		mushrooms: [Mushroom]
		packs: [Pack]
		orders: [Order]
	}

	type Mutation {
		addMushroom(
			name: String!
			avgYield: Float
			blocksPerRack: Int
			blocksPerShelf: Int
		): Mushroom
		addPack(
			name: String!
			blueOyster: Float
			lionsMane: Float
			shiitake: Float
			royalTrumpet: Float
			maitake: Float
			yellowOyster: Float
		): Pack
		addOrder(
			name: String
			date: String
			blueOyster: Int
			lionsMane: Int
			royalTrumpet: Int
			maitake: Int
			yellowOyster: Int
			umami: Int
			maitakePack: Int
			fancy: Int
			mixOys: Int
			blue: Int
			kingPack: Int
			yellow: Int
			lion: Int
		): Order
		deleteOrder(_id: ID!): Order
	}
`;

module.exports = typeDefs;
