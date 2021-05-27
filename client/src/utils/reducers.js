import { useReducer } from "react";
import { UPDATE_TOTALS } from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
		case UPDATE_TOTALS:
			return {
				...state,
				totals: [...action],
			};
	}
};

export function useProductReducer(initialState) {
	return useReducer(reducer, initialState);
}
