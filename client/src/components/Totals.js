import React, { useEffect, useState } from "react";

const Totals = ({ orders }) => {
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
		totals.blue += order.boTotal;
		totals.lion += order.lmTotal;
		totals.yellow += order.yoTotal;
		totals.royal += order.rtTotal;
		totals.shiitake += order.shiTotal;
		totals.maitake += order.maiTotal;
	});

	let blocks = {
		blue: Math.ceil(totals.blue / 2.8),
		lion: Math.ceil(totals.lion / 1.1),
		yellow: Math.ceil(totals.yellow / 1.2),
		royal: Math.ceil(totals.royal / 1.3),
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
						</tr>
						<tr>
							<td>Maitake</td>
							<td>{totals.maitake}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="table">
				<table>
					<thead>
						<tr>
							<th></th>
							<th>Blue Oyster</th>
							<th>Lion's Mane</th>
							<th>Yellow Oyster</th>
							<th>Royal Trumpet</th>
							<th>Shiitake</th>
							<th>Maitake</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Current inventory</th>
							<td>
								<input type="text" value={blue} onChange={handleBlueChange} />
							</td>
							<td>
								<input type="text" value={lion} onChange={handleLionChange} />
							</td>
							<td>
								<input
									type="text"
									value={yellow}
									onChange={handleYellowChange}
								/>
							</td>
							<td>
								<input type="text" value={royal} onChange={handleRoyalChange} />
							</td>
							<td>
								<input
									type="text"
									value={shiitake}
									onChange={handleShiitakeChange}
								/>
							</td>
							<td>
								<input
									type="text"
									value={maitake}
									onChange={handleMaitakeChange}
								/>
							</td>
						</tr>
						<tr>
							<th>Needed</th>
							<td>{totals.blue - blue}</td>
							<td>{totals.lion - lion}</td>
							<td>{totals.yellow - yellow}</td>
							<td>{totals.royal - royal}</td>
							<td>{totals.shiitake - shiitake}</td>
							<td>{totals.maitake - maitake}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Totals;
