import React, { useState } from "react";

import { FaSortDown, FaRegBell } from "react-icons/fa6";
import { SlHome } from "react-icons/sl";
import united from "../assets/united-kingdom.png";
import GeneralTabConfig from "./GeneralTabConfig";
import DisplayTabConfig from "./DisplayTabConfig";
import { SlPencil } from "react-icons/sl";
import { BiZoomIn } from "react-icons/bi";

const Configuration = () => {
	const [selectedCategory, setSelectedCategory] = useState("general");

	const handleCategoryClick = (category) => {
		setSelectedCategory(category);
	};
	return (
		<div className="flex flex-col mx-12 gap-8">
			<div className="flex mt-5 justify-between">
				<div className="flex gap-2">
					<a href="/home">
						<SlHome className="text-[#7e22ce] font-bold text-xl " />
					</a>

					<span className="text-[#a7a7a7] font-semibold pl-2">
						/ Sample Project /
					</span>
					<span className="text-[#7e22ce] pl-2 font-bold text-lg">
						Widget Configuration
					</span>
				</div>
				<div className="flex gap-2">
					<FaSortDown />
					<h2 className="pl-2 font-semibold">EN</h2>
					<img src={united} className="h-[30px] pl-2" />
					<FaRegBell className="p-1 text-3xl font-bold" />
				</div>
			</div>
			<p className="text-4xl text-[#7e22ce] font-bold">Configuration</p>
			<div className="flex flex-col">
				<div className="flex text-md font-bold  gap-5">
					<h2
						onClick={() => {
							setSelectedCategory("general");
						}}
						class={`cursor-pointer ${
							selectedCategory === "general"
								? "z-20 border-b-4 border-[#7e22ce] text-[#7e22ce]"
								: ""
						}`}
					>
						General
					</h2>

					<h2
						onClick={() => {
							setSelectedCategory("display");
						}}
						class={`cursor-pointer ${
							selectedCategory === "display"
								? "z-20 border-b-4 border-[#7e22ce] text-[#7e22ce]"
								: ""
						}`}
					>
						Display
					</h2>
					<h2
						onClick={() => {
							setSelectedCategory("advance");
						}}
						class={`cursor-pointer ${
							selectedCategory === "advance"
								? "z-20 border-b-4 border-[#7e22ce] text-[#7e22ce]"
								: ""
						}`}
					>
						Advance
					</h2>
				</div>

				<div className="border-t-4 border-gray-400 width-full mt-[-4px] rounded"></div>
			</div>

			{selectedCategory === "general" && <GeneralTabConfig />}

			{selectedCategory === "display" && <DisplayTabConfig />}

			{selectedCategory === "advance" && <div>Advance</div>}
		</div>
	);
};

export default Configuration;
