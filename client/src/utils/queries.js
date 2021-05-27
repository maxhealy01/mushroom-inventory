import gql from "graphql-tag";

export const QUERY_PACKS = gql`
	query {
		packs {
			_id
			name
			blueOyster
			lionsMane
			shiitake
			royalTrumpet
			maitake
			yellowOyster
		}
	}
`;

export const QUERY_ORDERS = gql`
	query {
		orders {
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
			boTotal
			yoTotal
			shiTotal
			maiTotal
			rtTotal
			lmTotal
		}
	}
`;

export const QUERY_MUSHROOMS = gql`
	query {
		mushrooms {
			_id
			name
			avgYield
			blocksPerRack
			blocksPerShelf
		}
	}
`;
