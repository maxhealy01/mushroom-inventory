import React, { useEffect, useState } from "react";

import { useMutation, useQuery } from "@apollo/react-hooks";
import { ADD_ORDER } from "../utils/mutations";
import { QUERY_ORDERS } from "../utils/queries";
import Nav from "../components/Nav";
import OrderForm from "../components/OrderForm";
import OrderDisplay from "../components/OrderDisplay";
import Totals from "../components/Totals";
import dayjs from "dayjs";

const Home = (orders) => {
	let myOrders = orders.orders.orders;
	// This is the logic to show only the orders of the current week by grabbing their index.
	let weekOfYear = require("dayjs/plugin/weekOfYear");
	let dayOfYear = require("dayjs/plugin/dayOfYear");
	dayjs.extend(dayOfYear);
	dayjs.extend(weekOfYear);
	let week = dayjs().week();

	const [showWeekSelecter, setShowWeekSelecter] = useState(false);
	const [selectedWeek, setSelectedWeek] = useState(week);

	const [displayedOrders, setDisplayedOrders] = useState(myOrders);

	useEffect(() => {
		if (myOrders) {
			let displayOrders = [];

			myOrders.forEach((order) => {
				let thisWeek = dayjs(order.date).week();
				if (thisWeek === Number(selectedWeek)) {
					displayOrders.push(order);
				}
				if (selectedWeek === "all") {
					displayOrders = myOrders;
				}
			});

			// Sort the displayed orders chronologically.
			displayOrders.sort(
				(a, b) => dayjs(a.date).dayOfYear() - dayjs(b.date).dayOfYear()
			);

			setDisplayedOrders(displayOrders);
		}
	}, [selectedWeek]);

	return (
		<div className="container">
			{myOrders && (
				<Nav
					selectedWeek={selectedWeek}
					setSelectedWeek={setSelectedWeek}
					showWeekSelecter={showWeekSelecter}
					setShowWeekSelecter={setShowWeekSelecter}
					orders={myOrders}
					week={week}
				/>
			)}
			<div className="orders-container">
				{myOrders &&
					displayedOrders.map((order) => (
						<OrderDisplay key={order.name} order={order} />
					))}
			</div>
			<div className="totals-container">
				{displayedOrders && <Totals orders={displayedOrders} />}
			</div>
		</div>
	);
};

export default Home;
