import React from "react";

function Nav(props) {
	const { navLinks = [], setCurrentNavLink } = props;

	console.log(navLinks);
	return (
		<nav>
			<ul className="flex-row">
				{navLinks.map((tab) => (
					<li className="mx-1" key={tab}>
						<span
							onClick={() => {
								setCurrentNavLink(tab);
								console.log(tab);
							}}
						>
							{tab}
						</span>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Nav;
