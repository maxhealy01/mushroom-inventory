import React, { useEffect, useState } from "react";

import { useMutation, useQuery } from "@apollo/react-hooks";
import { ADD_ORDER } from "../utils/mutations";
import { QUERY_ORDERS } from "../utils/queries";
import Nav from "../components/Nav";
import OrderForm from "../components/OrderForm";
import OrderDisplay from "../components/OrderDisplay";
import Totals from "../components/Totals";
import dayjs from "dayjs";

const Home = () => {
	// This is the logic to show only the orders of the current week by grabbing their index.
	let weekOfYear = require("dayjs/plugin/weekOfYear");
	dayjs.extend(weekOfYear);
	let week = dayjs().week();

	const { loading, data } = useQuery(QUERY_ORDERS);

	const [showWeekSelecter, setShowWeekSelecter] = useState(false);
	const [selectedWeek, setSelectedWeek] = useState(week);

	const [displayedOrders, setDisplayedOrders] = useState([]);

	useEffect(() => {
		setDisplayedOrders(data.orders);
	}, [data]);

	useEffect(() => {
		if (data) {
			let displayOrders = [];
			let orders = data.orders;

			orders.forEach((order) => {
				let thisWeek = dayjs(order.date).week();
				if (thisWeek === Number(selectedWeek)) {
					displayOrders.push(order);
				}
				if (selectedWeek === "all") {
					displayOrders = orders;
				}
			});

			setDisplayedOrders(displayOrders);
		}
	}, [selectedWeek]);

	return (
		<div className="container">
			{data && (
				<Nav
					selectedWeek={selectedWeek}
					setSelectedWeek={setSelectedWeek}
					showWeekSelecter={showWeekSelecter}
					setShowWeekSelecter={setShowWeekSelecter}
					orders={data.orders}
					week={week}
				/>
			)}
			<div className="orders-container">
				{data &&
					displayedOrders.map((order) => (
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
