import React, { useState, useEffect } from "react";
import { DELETE_ORDER, ADD_ORDER } from "../utils/mutations";
import { useMutation } from "@apollo/react-hooks";
import dayjs from "dayjs";

const OrderDisplay = (order) => {
	order = order.order;

	let orderName = order.name;
	let orderDate = dayjs(order.date).format("ddd, MM/DD/YYYY");
	let cutDate = dayjs(orderDate).subtract(10, "days").format("MM/DD/YYYY");

	let retail = {
		blue: order.blue,
		fancy: order.fancy,
		kingPack: order.kingPack,
		lion: order.lion,
		mixOys: order.mixOys,
		yellow: order.yellow,
		umami: order.umami,
		maitakePack: order.maitakePack,
	};

	let bulk = {
		blueOyster: order.blueOyster,
		lionsMane: order.lionsMane,
		maitake: order.maitake,
		royalTrumpet: order.royalTrumpet,
		yellowOyster: order.yellowOyster,
	};

	// These are the pieces of state needed to keep track of order editing. Pretty much a direct copy from the order form.
	const [edit, setEdit] = useState(false);
	const [name, setName] = useState(orderName);
	const [date, setDate] = useState(orderDate);
	const [bluePack, setBluePack] = useState(retail.blue);
	const [fancy, setFancy] = useState(retail.fancy);
	const [king, setKing] = useState(retail.kingPack);
	const [lionPack, setLionPack] = useState(retail.lion);
	const [mix, setMix] = useState(retail.mixOys);
	const [yellowPack, setYellowPack] = useState(retail.yellow);
	const [umami, setUmami] = useState(retail.umami);
	const [maitakePack, setMaitakePack] = useState(retail.maitakePack);
	const [blue, setBlue] = useState(bulk.blueOyster);
	const [lion, setLion] = useState(bulk.lionsMane);
	const [yellow, setYellow] = useState(bulk.yellowOyster);
	const [royal, setRoyal] = useState(bulk.royalTrumpet);
	const [maitake, setMaitake] = useState(bulk.maitake);

	const handleNameChange = (event) => {
		setName(event.target.value);
	};
	const handleDateChange = (event) => {
		setDate(event.target.value);
	};
	const handleBluePackChange = (event) => {
		setBluePack(event.target.value);
	};
	const handleFancyChange = (event) => {
		setFancy(event.target.value);
	};
	const handleKingChange = (event) => {
		setKing(event.target.value);
	};
	const handleLionPackChange = (event) => {
		setLionPack(event.target.value);
	};
	const handleMixChange = (event) => {
		setMix(event.target.value);
	};
	const handleYellowPackChange = (event) => {
		setYellowPack(event.target.value);
	};
	const handleUmamiChange = (event) => {
		setUmami(event.target.value);
	};
	const handleMaitakePackChange = (event) => {
		setMaitakePack(event.target.value);
	};
	const handleBlueChange = (event) => {
		setBlue(event.target.value);
	};
	const handleLionChange = (event) => {
		setLion(event.target.value);
	};
	const handleYellowChange = (event) => {
		setYellow(event.target.value);
	};
	const handleRoyalChange = (event) => {
		setRoyal(event.target.value);
	};
	const handleMaitakeChange = (event) => {
		setMaitake(event.target.value);
	};

	const [formState, setFormState] = useState({
		name: name,
		date: date,
		blue: bluePack,
		fancy: fancy,
		king: king,
		lion: lionPack,
		mixOys: mix,
		yellow: yellowPack,
		umami: umami,
		maitakePack: maitakePack,
		blueOyster: blue,
		lionsMane: lion,
		yellowOyster: yellow,
		royalTrumpet: royal,
		maitake: maitake,
	});

	useEffect(() => {
		setFormState({
			name: name,
			date: date,
			blue: Number(bluePack),
			fancy: Number(fancy),
			kingPack: Number(king),
			lion: Number(lionPack),
			mixOys: Number(mix),
			yellow: Number(yellowPack),
			umami: Number(umami),
			maitakePack: Number(maitakePack),
			blueOyster: Number(blue),
			lionsMane: Number(lion),
			yellowOyster: Number(yellow),
			royalTrumpet: Number(royal),
			maitake: Number(maitake),
		});
	}, [
		name,
		date,
		bluePack,
		fancy,
		king,
		lionPack,
		mix,
		yellowPack,
		umami,
		maitakePack,
		blue,
		lion,
		yellow,
		royal,
		maitake,
	]);

	// Logic for order Deletion
	const [deleteOrder] = useMutation(DELETE_ORDER);

	const deleteOrderHandler = () => {
		let id = order._id;
		deleteOrder({
			variables: { ID: id },
		});
		window.location.reload();
	};
	// Logic for order editing !!!!
	const [addOrder] = useMutation(ADD_ORDER);

	const editOrderHandler = () => {
		setEdit(true);
	};

	const submitOrderHandler = () => {
		let id = order._id;
		deleteOrder({
			variables: { ID: id },
		});

		addOrder({
			variables: {
				name: formState.name,
				date: formState.date,
				blue: formState.blue,
				blueOyster: formState.blueOyster,
				fancy: formState.fancy,
				kingPack: formState.kingPack,
				lion: formState.lion,
				lionsMane: formState.lionsMane,
				maitake: formState.maitake,
				mixOys: formState.mixOys,
				royalTrumpet: formState.royalTrumpet,
				umami: formState.umami,
				maitakePack: formState.maitakePack,
				yellow: formState.yellow,
				yellowOyster: formState.yellowOyster,
			},
		});

		window.location.reload();
	};

	const cancelEditHandler = () => {
		setEdit(false);
	};

	// Logic for TOTALING orders
	let totals = {};
	totals.blue = Math.ceil(
		(retail.umami * 0.25 + retail.mixOys * 0.4 + retail.blue * 0.625) * 8 +
			bulk.blueOyster * 5.25
	);
	totals.lion = Math.ceil(
		(retail.lion * 0.625 + retail.fancy * 0.25) * 8 + bulk.lionsMane * 5.25
	);
	totals.yellow = Math.ceil(
		(retail.mixOys * 0.2 + retail.yellow * 0.625) * 8 + bulk.yellowOyster * 4.25
	);
	totals.royal = Math.ceil(
		(retail.umami * 0.25 + retail.fancy * 0.21875 + retail.kingPack * 0.625) *
			8 +
			bulk.royalTrumpet * 5.25
	);
	totals.shiitake = Math.ceil(retail.umami * 0.125 * 8);
	totals.maitake = Math.ceil(
		(retail.fancy * 0.1875 + retail.maitakePack * 0.625) * 8 +
			bulk.maitake * 5.25
	);

	let blocks = {
		blue: totals.blue / 2.8,
		lion: totals.lion / 1.1,
		yellow: totals.yellow / 1.2,
		royal: totals.royal / 1.3,
		shiitake: totals.shiitake / 5,
		maitake: totals.maitake / 5,
	};

	if (edit) {
		return (
			<div className="order-display">
				<h3>
					<input value={name} onChange={handleNameChange}></input>
				</h3>
				<h4>
					<input type="date" value={date} onChange={handleDateChange}></input>
				</h4>
				<div className="table">
					<h4>Retail Orders</h4>
					<table>
						<thead>
							<tr>
								<th>Type</th>
								<th>Quantity</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Blue Pack</td>
								<td>
									<input
										value={bluePack}
										onChange={handleBluePackChange}
									></input>
								</td>
							</tr>
							<tr>
								<td>Fancy Pack</td>
								<td>
									<input value={fancy} onChange={handleFancyChange}></input>
								</td>
							</tr>
							<tr>
								<td>King Pack</td>
								<td>
									<input value={king} onChange={handleKingChange}></input>
								</td>
							</tr>
							<tr>
								<td>Lion Pack</td>
								<td>
									{" "}
									<input
										value={lionPack}
										onChange={handleLionPackChange}
									></input>
								</td>
							</tr>
							<tr>
								<td>Mixed Oyster Pack</td>
								<td>
									{" "}
									<input value={mix} onChange={handleMixChange}></input>
								</td>
							</tr>
							<tr>
								<td>Yellow Pack</td>
								<td>
									{" "}
									<input
										value={yellowPack}
										onChange={handleYellowPackChange}
									></input>
								</td>
							</tr>
							<tr>
								<td>Umami</td>
								<td>
									{" "}
									<input value={umami} onChange={handleUmamiChange}></input>
								</td>
							</tr>
							<tr>
								<td>Maitake Pack</td>
								<td>
									<input
										value={maitakePack}
										onChange={handleMaitakePackChange}
									></input>{" "}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="table">
					<h4>Bulk Orders</h4>
					<table>
						<thead>
							<tr>
								<th>Type</th>
								<th>Quantity</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Blue Oyster</td>
								<td>
									{" "}
									<input value={blue} onChange={handleBlueChange}></input>
								</td>
							</tr>
							<tr>
								<td>Lion's Mane</td>
								<td>
									{" "}
									<input value={lion} onChange={handleLionChange}></input>
								</td>
							</tr>
							<tr>
								<td>Maitake</td>
								<td>
									{" "}
									<input value={maitake} onChange={handleMaitakeChange}></input>
								</td>
							</tr>
							<tr>
								<td>Royal Trumpet</td>
								<td>
									{" "}
									<input value={royal} onChange={handleRoyalChange}></input>
								</td>
							</tr>
							<tr>
								<td>Yellow Oyster</td>
								<td>
									{" "}
									<input value={yellow} onChange={handleYellowChange}></input>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="table">
					<button onClick={submitOrderHandler} className="btn-submit btn">
						Submit Edits
					</button>
					<button onClick={cancelEditHandler} className="btn-cancel btn">
						Cancel
					</button>
				</div>
			</div>
		);
	}
	return (
		<div className="order-display">
			<h3>{orderName}</h3>
			<h4>{orderDate}</h4>
			<h5>Cut Date: {cutDate}</h5>
			<div className="table">
				<h4>Retail Orders</h4>
				<table>
					<thead>
						<tr>
							<th>Type</th>
							<th>Quantity</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Blue Pack</td>
							<td>{retail.blue}</td>
						</tr>
						<tr>
							<td>Fancy Pack</td>
							<td>{retail.fancy}</td>
						</tr>
						<tr>
							<td>King Pack</td>
							<td>{retail.kingPack}</td>
						</tr>
						<tr>
							<td>Lion Pack</td>
							<td>{retail.lion}</td>
						</tr>
						<tr>
							<td>Mixed Oyster Pack</td>
							<td>{retail.mixOys}</td>
						</tr>
						<tr>
							<td>Yellow Pack</td>
							<td>{retail.yellow}</td>
						</tr>
						<tr>
							<td>Umami</td>
							<td>{retail.umami}</td>
						</tr>
						<tr>
							<td>Maitake Pack</td>
							<td>{retail.maitakePack}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="table">
				<h4>Bulk Orders</h4>
				<table>
					<thead>
						<tr>
							<th>Type</th>
							<th>Quantity</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Blue Oyster</td>
							<td>{bulk.blueOyster}</td>
						</tr>
						<tr>
							<td>Lion's Mane</td>
							<td>{bulk.lionsMane}</td>
						</tr>
						<tr>
							<td>Maitake</td>
							<td>{bulk.maitake}</td>
						</tr>
						<tr>
							<td>Royal Trumpet</td>
							<td>{bulk.royalTrumpet}</td>
						</tr>
						<tr>
							<td>Yellow Oyster</td>
							<td>{bulk.yellowOyster}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="table">
				<h4>Totals</h4>
				<table>
					<thead>
						<tr>
							<th>Type</th>
							<th>Quantity (lbs)</th>
							<th>Blocks</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Blue Oyster</td>
							<td>{totals.blue}</td>
							<td>{blocks.blue.toFixed(1)}</td>
						</tr>
						<tr>
							<td>Lion's Mane</td>
							<td>{totals.lion}</td>
							<td>{blocks.lion.toFixed(1)}</td>
						</tr>
						<tr>
							<td>Yellow Oyster</td>
							<td>{totals.yellow}</td>
							<td>{blocks.yellow.toFixed(1)}</td>
						</tr>
						<tr>
							<td>Royal Trumpet</td>
							<td>{totals.royal}</td>
							<td>{blocks.royal.toFixed(1)}</td>
						</tr>
						<tr>
							<td>Shiitake</td>
							<td>{totals.shiitake}</td>
							<td>{blocks.shiitake.toFixed(1)} cases</td>
						</tr>
						<tr>
							<td>Maitake</td>
							<td>{totals.maitake}</td>
							<td>{blocks.maitake.toFixed(1)} cases</td>
						</tr>
					</tbody>
				</table>
				<div className="order-buttons">
					<button onClick={editOrderHandler} className="btn-edit btn">
						Edit Order
					</button>
					<button onClick={deleteOrderHandler} className="btn-delete btn">
						Delete Order
					</button>
				</div>
			</div>
		</div>
	);
};

export default OrderDisplay;
