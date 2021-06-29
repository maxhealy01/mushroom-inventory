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
		<nav>
			<button className="btn">This Week's Orders</button>
			<div className="order-form-container">
				<button className="order-show-button btn" onClick={showNewOrder}>
					NEW ORDER
				</button>
				{showOrder && <OrderForm />}
			</div>
			<button className="btn" onClick={showWeekSelecterHandler}>
				Orders by Week
			</button>
			{showWeekSelecter && (
				<WeekSelect orders={orders} setSelectedWeek={setSelectedWeek} />
			)}
		</nav>
	);
}

export default Nav;
