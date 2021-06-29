import React, { useEffect, useState } from "react";

const Totals = ({ orders }) => {
	console.log(orders);

	// Create variables to track all the totals
	let totals = {
		blue: 0,
		lion: 0,
		yellow: 0,
		royal: 0,
		shiitake: 0,
		maitake: 0,
	};

	orders.forEach((order) => {
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

		totals.blue += Math.ceil(
			(retail.umami * 0.25 + retail.mixOys * 0.4 + retail.blue * 0.625) * 8 +
				bulk.blueOyster * 5.25
		);
		totals.lion += Math.ceil(
			(retail.lion * 0.625 + retail.fancy * 0.25) * 8 + bulk.lionsMane * 5.25
		);
		totals.yellow += Math.ceil(
			(retail.mixOys * 0.2 + retail.yellow * 0.625) * 8 +
				bulk.yellowOyster * 4.25
		);
		totals.royal += Math.ceil(
			(retail.umami * 0.25 + retail.fancy * 0.21875 + retail.kingPack * 0.625) *
				8 +
				bulk.royalTrumpet * 5.25
		);
		totals.shiitake += Math.ceil(retail.umami * 0.125 * 8);
		totals.maitake += Math.ceil(
			(retail.fancy * 0.1875 + retail.maitakePack * 0.625) * 8 +
				bulk.maitake * 5.25
		);

		console.log(retail, bulk);
	});

	console.log(totals);

	let blocks = {
		blue: Math.ceil(totals.blue / 2.8),
		lion: Math.ceil(totals.lion / 1.1),
		yellow: Math.ceil(totals.yellow / 1.2),
		royal: Math.ceil(totals.royal / 1.3),
		shiitake: totals.shiitake / 5,
		maitake: totals.maitake / 5,
	};

	let racks = {
		blue: (blocks.blue / 50).toFixed(1),
		lion: (blocks.lion / 70).toFixed(1),
		yellow: (blocks.yellow / 70).toFixed(1),
		royal: (blocks.royal / 75).toFixed(1),
	};
	let shelves = {
		blue: (blocks.blue / 10).toFixed(1),
		lion: (blocks.lion / 14).toFixed(1),
		yellow: (blocks.yellow / 14).toFixed(1),
		royal: (blocks.royal / 15).toFixed(1),
	};

	// Create variables to track the current inventory
	const [blue, setBlue] = useState(0);
	const [lion, setLion] = useState(0);
	const [yellow, setYellow] = useState(0);
	const [royal, setRoyal] = useState(0);
	const [maitake, setMaitake] = useState(0);
	const [shiitake, setShiitake] = useState(0);

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
	const handleShiitakeChange = (event) => {
		setShiitake(event.target.value);
	};

	return (
		<div className="total-display">
			<div className="table">
				<h4>Totals for Week</h4>
				<table>
					<thead>
						<tr>
							<th>Type</th>
							<th>Amount (lbs)</th>
							<th>Blocks Needed</th>
							<th>Blocks Needed (w/ 20% Buffer)</th>
							<th>Blocks Needed (w/ 10% Buffer)</th>
							<th>Racks Needed</th>
							<th>Shelves Needed</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Blue Oyster</td>
							<td>{totals.blue}</td>
							<td>{blocks.blue}</td>
							<td>{(blocks.blue * 1.2).toFixed(1)}</td>
							<td>{(blocks.blue * 1.1).toFixed(1)}</td>
							<td>{racks.blue}</td>
							<td>{shelves.blue}</td>
						</tr>
						<tr>
							<td>Lion's Mane</td>
							<td>{totals.lion}</td>
							<td>{blocks.lion}</td>
							<td>{(blocks.lion * 1.2).toFixed(1)}</td>
							<td>{(blocks.lion * 1.1).toFixed(1)}</td>
							<td>{racks.lion}</td>
							<td>{shelves.lion}</td>
						</tr>
						<tr>
							<td>Yellow Oyster</td>
							<td>{totals.yellow}</td>
							<td>{blocks.yellow}</td>
							<td>{(blocks.yellow * 1.2).toFixed(1)}</td>
							<td>{(blocks.yellow * 1.1).toFixed(1)}</td>
							<td>{racks.yellow}</td>
							<td>{shelves.yellow}</td>
						</tr>
						<tr>
							<td>Royal Trumpet</td>
							<td>{totals.royal}</td>
							<td>{blocks.royal}</td>
							<td>{(blocks.royal * 1.2).toFixed(1)}</td>
							<td>{(blocks.royal * 1.1).toFixed(1)}</td>
							<td>{racks.royal}</td>
							<td>{shelves.royal}</td>
						</tr>
						<tr>
							<td>Shiitake</td>
							<td>{totals.shiitake}</td>
							<td className="case-row">{blocks.shiitake} cases</td>
						</tr>
						<tr>
							<td>Maitake</td>
							<td>{totals.maitake}</td>
							<td className="case-row">{blocks.maitake} cases</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="table">
				<table>
					<thead>
						<tr>
							<th></th>
							<th>Current Inventory</th>
							<th>Total Needed</th>
							<th>Remaining</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Blue Oyster</th>
							<td>
								<input type="text" value={blue} onChange={handleBlueChange} />
							</td>
							<td>{totals.blue}</td>
							<td>{totals.blue - blue}</td>
						</tr>
						<tr>
							<th>Lion's Mane</th>
							<td>
								<input type="text" value={lion} onChange={handleLionChange} />
							</td>
							<td>{totals.lion}</td>
							<td>{totals.lion - lion}</td>
						</tr>
						<tr>
							<th>Yellow Oyster</th>
							<td>
								<input
									type="text"
									value={yellow}
									onChange={handleYellowChange}
								/>
							</td>
							<td>{totals.yellow}</td>
							<td>{totals.yellow - yellow}</td>
						</tr>
						<tr>
							<th>Royal Trumpet</th>
							<td>
								<input type="text" value={royal} onChange={handleRoyalChange} />
							</td>
							<td>{totals.royal}</td>
							<td>{totals.royal - royal}</td>
						</tr>
						<tr>
							<th>Shiitake</th>
							<td>
								<input
									type="text"
									value={shiitake}
									onChange={handleShiitakeChange}
								/>
							</td>
							<td>{totals.shiitake}</td>
							<td>{totals.shiitake - shiitake}</td>
						</tr>
						<tr>
							<th>Maitake</th>
							<td>
								<input
									type="text"
									value={maitake}
									onChange={handleMaitakeChange}
								/>
							</td>
							<td>{totals.maitake}</td>
							<td>{totals.maitake - maitake}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Totals;
