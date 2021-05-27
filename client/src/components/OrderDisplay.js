import React from "react";
import { DELETE_ORDER, ADD_TOTAL } from "../utils/mutations";
import { useMutation } from "@apollo/react-hooks";

const OrderDisplay = (order) => {
	order = order.order;
	console.log(order);
	let name = order.name;
	let date = order.date;
	let retail = {
		blue: order.blue,
		fancy: order.fancy,
		kingPack: order.kingPack,
		lion: order.lion,
		mixOys: order.mixOys,
		yellow: order.yellow,
		umami: order.umami,
	};

	let bulk = {
		blueOyster: order.blueOyster,
		lionsMane: order.lionsMane,
		maitake: order.maitake,
		royalTrumpet: order.royalTrumpet,
		yellowOyster: order.yellowOyster,
	};

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
	//
	//
	//

	return (
		<div className="order-display">
			<h3>{name}</h3>
			<h4>{date}</h4>
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
							<th>Quantity</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Blue Oyster</td>
							<td>{order.boTotal}</td>
						</tr>
						<tr>
							<td>Lion's Mane</td>
							<td>{order.lmTotal}</td>
						</tr>
						<tr>
							<td>Yellow Oyster</td>
							<td>{order.yoTotal}</td>
						</tr>
						<tr>
							<td>Royal Trumpet</td>
							<td>{order.rtTotal}</td>
						</tr>
						<tr>
							<td>Shiitake</td>
							<td>{order.shiTotal}</td>
						</tr>
						<tr>
							<td>Maitake</td>
							<td>{order.maiTotal}</td>
						</tr>
					</tbody>
				</table>
				<button onClick={deleteOrderHandler} className="btn-delete btn">
					Delete Order
				</button>
			</div>
		</div>
	);
};

export default OrderDisplay;
