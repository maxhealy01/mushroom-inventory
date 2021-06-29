import React, { useState } from "react";
import { QUERY_ORDERS } from "../utils/queries";
import { useQuery } from "@apollo/react-hooks";
import Home from "../pages/Home";

const Shell = () => {
	const { loading, data } = useQuery(QUERY_ORDERS);

	return <div>{data && <Home orders={data} />}</div>;
};

export default Shell;
