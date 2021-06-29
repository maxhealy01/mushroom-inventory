import React, { useState } from "react";
import dayjs from "dayjs";

function WeekSelect(props) {
	const { orders, setSelectedWeek } = props;
	let weekOfYear = require("dayjs/plugin/weekOfYear");
	dayjs.extend(weekOfYear);

	let weeks = [];
	for (let i = 0; i < orders.length; i++) {
		let date = dayjs(orders[i].date);

		let week = {
			start: date.startOf("week").format("MM/DD"),
			end: date.endOf("week").format("MM/DD"),
			week: date.startOf("week").week(),
		};

		// Check if the week is already in the array of weeks.
		if (!weeks.some((time) => time.start === week.start)) {
			weeks.push(week);
		}
	}
	const weekSelectHandler = (event) => {
		setSelectedWeek(event.target.value);
	};
	const allWeekHandler = (event) => {
		setSelectedWeek("all");
	};

	return (
		<div className="week-select">
			{weeks.map((week) => (
				<button
					className="btn week-btn"
					key={week.start}
					onClick={weekSelectHandler}
					value={week.week}
				>
					{week.start}-{week.end}
				</button>
			))}
			<button
				className="btn week-btn"
				key="all-button"
				onClick={allWeekHandler}
			>
				ALL
			</button>
		</div>
	);
}

export default WeekSelect;
