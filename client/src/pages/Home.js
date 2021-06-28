import React, { useEffect, useState } from "react";

import { useMutation, useQuery } from "@apollo/react-hooks";
import { ADD_ORDER } from "../utils/mutations";
import { QUERY_ORDERS } from "../utils/queries";
import OrderForm from "../components/OrderForm";
import OrderDisplay from "../components/OrderDisplay";
import Totals from "../components/Totals";
import dayjs from "dayjs";

const Home = () => {
	// This is the logic to show only the orders of the current week by grabbing their index.
	let weekOfYear = require("dayjs/plugin/weekOfYear");
	dayjs.extend(weekOfYear);
	let week = dayjs().week();
	console.log(week);

	const { loading, data } = useQuery(QUERY_ORDERS);
	const [showOrder, setShowOrder] = useState(false);
	const onClick = () => setShowOrder(!showOrder);

	if (data) {
		console.log(data.orders);
	}

	return (
		<div className="container">
			<div className="order-form-container">
				<button className="order-show-button btn" onClick={onClick}>
					NEW ORDER
				</button>
				{showOrder && <OrderForm />}
			</div>
			<div className="orders-container">
				{data &&
					data.orders.map((order) => (
						<OrderDisplay key={order.name} order={order} />
					))}
			</div>
			<div className="totals-container">
				{data && <Totals orders={data.orders} />}
			</div>
		</div>
	);
};

export default Home;
