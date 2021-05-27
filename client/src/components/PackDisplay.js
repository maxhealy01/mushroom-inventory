import React, { useEffect } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { ADD_MUSHROOM } from "../utils/mutations";
import { QUERY_PACKS } from "../utils/queries";

const PackDisplay = () => {
	const [addMushroom] = useMutation(ADD_MUSHROOM);
	const { loading, data } = useQuery(QUERY_PACKS);
	useEffect(() => {
		if (data) {
			console.log(data);
		}
	}, [loading, data]);
	return (
		<div className="container">
			<p>Sup ya bish</p>
		</div>
	);
};

export default PackDisplay;
