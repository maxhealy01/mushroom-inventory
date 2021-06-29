import React, { useState } from "react";
import OrderForm from "./OrderForm";
import WeekSelect from "./WeekSelect";

function Nav(props) {
	const {
		selectedWeek,
		setSelectedWeek,
		showWeekSelecter,
		setShowWeekSelecter,
		orders,
		week,
	} = props;

	const [showOrder, setShowOrder] = useState(false);
	const showNewOrder = () => setShowOrder(!showOrder);
	const setThisWeek = () => setSelectedWeek(week);
	const showWeekSelecterHandler = () => setShowWeekSelecter(!showWeekSelecter);

	return (
		<div>
			<nav>
				<button className="btn nav-btn" onClick={setThisWeek}>
					This Week's Orders
				</button>
				<button
					className="order-show-button nav-btn btn"
					onClick={showNewOrder}
				>
					NEW ORDER
				</button>

				<button className="btn nav-btn" onClick={showWeekSelecterHandler}>
					Orders by Week
				</button>
				{showWeekSelecter && (
					<WeekSelect orders={orders} setSelectedWeek={setSelectedWeek} />
				)}
			</nav>
			{showOrder && (
				<OrderForm showOrder={showOrder} setShowOrder={setShowOrder} />
			)}
		</div>
	);
}

export default Nav;
