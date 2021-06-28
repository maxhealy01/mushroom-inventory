import gql from "graphql-tag";

export const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser(
		$firstName: String!
		$lastName: String!
		$email: String!
		$password: String!
	) {
		addUser(
			firstName: $firstName
			lastName: $lastName
			email: $email
			password: $password
		) {
			token
			user {
				_id
			}
		}
	}
`;

export const ADD_MUSHROOM = gql`
	mutation addMushroom(
		$name: String!
		$avgYield: Float
		$blocksPerRack: Int
		$blocksPerShelf: Int
	) {
		addMushroom(
			name: $name
			avgYield: $avgYield
			blocksPerRack: $blocksPerRack
			blocksPerShelf: $blocksPerShelf
		) {
			_id
			name
			avgYield
			blocksPerRack
			blocksPerShelf
		}
	}
`;

export const ADD_ORDER = gql`
	mutation addOrder(
		$name: String!
		$date: String!
		$blueOyster: Int
		$lionsMane: Int
		$royalTrumpet: Int
		$maitake: Int
		$yellowOyster: Int
		$umami: Int
		$maitakePack: Int
		$fancy: Int
		$mixOys: Int
		$blue: Int
		$kingPack: Int
		$yellow: Int
		$lion: Int
	) {
		addOrder(
			name: $name
			date: $date
			blueOyster: $blueOyster
			lionsMane: $lionsMane
			royalTrumpet: $royalTrumpet
			maitake: $maitake
			yellowOyster: $yellowOyster
			umami: $umami
			maitakePack: $maitakePack
			fancy: $fancy
			mixOys: $mixOys
			blue: $blue
			kingPack: $kingPack
			yellow: $yellow
			lion: $lion
		) {
			_id
			name
			date
			blueOyster
			lionsMane
			royalTrumpet
			maitake
			yellowOyster
			umami
			fancy
			mixOys
			blue
			kingPack
			yellow
			lion
		}
	}
`;

export const ADD_TOTAL = gql`
	mutation addTotal(
		$blueOyster: Int
		$lionsMane: Int
		$royalTrumpet: Int
		$maitake: Int
		$yellowOyster: Int
		$shiitake: Int
		$order: ID
	) {
		addTotal(
			blueOyster: $blueOyster
			lionsMane: $lionsMane
			royalTrumpet: $royalTrumpet
			maitake: $maitake
			yellowOyster: $yellowOyster
			shiitake: $shiitake
			order: $order
		) {
			blueOyster
			lionsMane
			royalTrumpet
			maitake
			yellowOyster
			shiitake
			order {
				_id
				date
			}
		}
	}
`;

export const DELETE_ORDER = gql`
	mutation deleteOrder($ID: ID!) {
		deleteOrder(_id: $ID) {
			_id
		}
	}
`;
