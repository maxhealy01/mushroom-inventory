import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_ORDER } from "../utils/mutations";

const OrderForm = () => {
	const [addOrder] = useMutation(ADD_ORDER);

	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const [bluePack, setBluePack] = useState(0);
	const [fancy, setFancy] = useState(0);
	const [king, setKing] = useState(0);
	const [lionPack, setLionPack] = useState(0);
	const [mix, setMix] = useState(0);
	const [yellowPack, setYellowPack] = useState(0);
	const [umami, setUmami] = useState(0);
	const [blue, setBlue] = useState(0);
	const [lion, setLion] = useState(0);
	const [yellow, setYellow] = useState(0);
	const [royal, setRoyal] = useState(0);
	const [maitake, setMaitake] = useState(0);

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
		blue,
		lion,
		yellow,
		royal,
		maitake,
	]);

	const submitOrder = (event) => {
		let totals = {};
		totals.blue = Math.ceil(
			(formState.umami * 0.25 +
				formState.mixOys * 0.4 +
				formState.blue * 0.625) *
				8 +
				formState.blueOyster * 5.25
		);
		totals.lion = Math.ceil(
			(formState.lion * 0.625 + formState.fancy * 0.25) * 8 +
				formState.lionsMane * 5.25
		);
		totals.yellow = Math.ceil(
			(formState.mixOys * 0.2 + formState.yellow * 0.625) * 8 +
				formState.yellowOyster * 4.25
		);
		totals.royal = Math.ceil(
			(formState.umami * 0.25 +
				formState.fancy * 0.21875 +
				formState.kingPack * 0.625) *
				8 +
				formState.royalTrumpet * 5.25
		);
		totals.shiitake = Math.ceil(formState.umami * 0.125 * 8);
		totals.maitake = Math.ceil(
			formState.fancy * 0.1875 * 8 + formState.maitake * 5.25
		);

		console.log(totals);
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
				yellow: formState.yellow,
				yellowOyster: formState.yellowOyster,
				boTotal: totals.blue,
				lmTotal: totals.lion,
				yoTotal: totals.yellow,
				shiTotal: totals.shiitake,
				maiTotal: totals.maitake,
				rtTotal: totals.royal,
			},
		});
	};

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

	return (
		<form onSubmit={submitOrder} className="order-form" id="new-order">
			<div className="table">
				<table>
					<thead>
						<tr>
							<th>Type</th>
							<th>Quantity</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Name</td>
							<td>
								<input type="text" value={name} onChange={handleNameChange} />
							</td>
						</tr>
						<tr>
							<td>Date</td>
							<td>
								<input type="date" value={date} onChange={handleDateChange} />
							</td>
						</tr>
						<tr>
							<td>Blue Pack</td>
							<td>
								<input
									type="number"
									value={bluePack}
									onChange={handleBluePackChange}
								/>
							</td>
						</tr>
						<tr>
							<td>Fancy Pack</td>
							<td>
								<input
									type="number"
									value={fancy}
									onChange={handleFancyChange}
								/>
							</td>
						</tr>
						<tr>
							<td>King Pack</td>
							<td>
								<input type="number" value={king} onChange={handleKingChange} />
							</td>
						</tr>
						<tr>
							<td>Lion Pack</td>
							<td>
								<input
									type="number"
									value={lionPack}
									onChange={handleLionPackChange}
								/>
							</td>
						</tr>
						<tr>
							<td>Mixed Oyster Pack</td>
							<td>
								<input type="number" value={mix} onChange={handleMixChange} />
							</td>
						</tr>
						<tr>
							<td>Yellow Pack</td>
							<td>
								<input
									type="number"
									value={yellowPack}
									onChange={handleYellowPackChange}
								/>
							</td>
						</tr>
						<tr>
							<td>Umami Pack</td>
							<td>
								<input
									type="number"
									value={umami}
									onChange={handleUmamiChange}
								/>
							</td>
						</tr>
						<tr>
							<td>Blue Oyster (Bulk)</td>
							<td>
								<input type="number" value={blue} onChange={handleBlueChange} />
							</td>
						</tr>
						<tr>
							<td>Lion's Mane (Bulk)</td>
							<td>
								<input type="number" value={lion} onChange={handleLionChange} />
							</td>
						</tr>
						<tr>
							<td>Yellow Oyster (Bulk)</td>
							<td>
								<input
									type="number"
									value={yellow}
									onChange={handleYellowChange}
								/>
							</td>
						</tr>
						<tr>
							<td>Royal Trumpet (Bulk)</td>
							<td>
								<input
									type="number"
									value={royal}
									onChange={handleRoyalChange}
								/>
							</td>
						</tr>
						<tr>
							<td>Maitake (Bulk)</td>
							<td>
								<input
									type="number"
									value={maitake}
									onChange={handleMaitakeChange}
								/>
							</td>
						</tr>
						<tr>
							<td colSpan="2">
								<button className="order-button" type="submit">
									Submit
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</form>
	);
};

export default OrderForm;
