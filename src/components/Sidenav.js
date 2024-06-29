import React, { useState, useEffect } from "react";
import Navitem from "./Navitem";
import { useLocation } from "react-router-dom";

const Sidenav = () => {
	const [clickedTab, setClickedTab] = useState("");
	const location = useLocation();

	useEffect(() => {
		let pathArray = location?.pathname?.split("/");
		let lastParam = pathArray[pathArray.length - 1];
		if (lastParam === "Configuration") {
			setClickedTab("Widget Configurations");
		}
		if (lastParam === "profile") {
			setClickedTab("Settings");
		}
		if (lastParam === "upload") {
			setClickedTab("Projects");
		}
	}, [location.pathname]);

	return (
		<div className="sticky top-0 h-screen bg-[#f3e8ff] rounded-r-lg p-4">
			<div className="flex flex-col">
				<h1 className="text-purple-700 font-bold  text-2xl pl-2 flex gap-2 items-center">
					<svg
						width="40"
						height="40"
						viewBox="0 0 53 53"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						{/* Your SVG paths here */}
					</svg>
					<p className="text-3xl">LAMA.</p>{" "}
				</h1>
				<p className="font-semibold text-[14px] text-black mt-4 ml-4">
					Podcast Upload flow
				</p>

				<Navitem
					selected={clickedTab === "Projects" || clickedTab === "transcript"}
					name="Projects"
					number="1"
					setClickedTab={() => setClickedTab("Projects")}
					navigateTo="/project/0/upload"
				/>
				<Navitem
					selected={clickedTab === "Widget Configurations"}
					name="Widget Configurations"
					number="2"
					setClickedTab={() => setClickedTab("Widget Configurations")}
					navigateTo="/project/Configuration"
				/>
			</div>

			<div className="mt-96">
				<hr className="border-t-2 border-gray-300 my-4" />
				<Navitem
					selected={clickedTab === "Settings"}
					name="Settings"
					number="3"
					setClickedTab={() => setClickedTab("Settings")}
					navigateTo="/profile"
				/>
			</div>
		</div>
	);
};

export default Sidenav;
