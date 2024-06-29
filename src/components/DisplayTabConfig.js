import React from "react";

const DisplayTabConfig = () => {
	return (
		<>
			<div>
				<div className="grid grid-cols-1 grid-row-2 md:grid-cols-2 gap-3">
					<div>
						<label className="block font-bold text-xl text-gray-700">
							Primary Color
						</label>
						<div className="flex  justify-between item-center text-center gap-1">
							<input
								type="text"
								value="#7BD568"
								className="mt-1 p-2 block w-10/12 border border-gray-300 rounded-md shadow-sm"
							/>
							<input
								type="color"
								value="#7BD568"
								className="mt-2 block  w-50 h-10   rounded-md "
							/>
						</div>
						<p className="text-gray-500 text-l block">
							Lorem ipsum dolor sit Lorem ipsum dolor sit
						</p>
					</div>

					<div>
						<label className="block font-bold text-xl text-gray-700">
							Font Color
						</label>
						<div className="flex  justify-between item-center text-center gap-1">
							<input
								type="text"
								value="#3C3C3C"
								className="mt-1 p-2 block w-10/12 border border-gray-300 rounded-md shadow-sm"
							/>

							<input
								type="color"
								value="#3C3C3C"
								className="mt-2  block w-50 h-10  rounded-md shadow-sm"
							/>
						</div>
						<p className="text-gray-500 text-l block">
							Lorem ipsum dolor sit Lorem ipsum dolor sit
						</p>
					</div>

					<div>
						<label className="block font-bold text-xl text-gray-700">
							Font Size (in px)
						</label>
						<input
							type="text"
							value="25"
							className="mt-1 p-2 block w-full h-10 border border-gray-300 rounded-md shadow-sm"
						/>
						<p className="text-gray-500 text-l block">
							Lorem ipsum dolor sit Lorem ipsum dolor sit
						</p>
					</div>

					<div>
						<label className="block text-xl font-bold ">
							Chat Height (in % of total screen)
						</label>
						<input
							type="text"
							placeholder="Lorem ipsum"
							className="mt-1 m h-10 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
						/>
						<p className="text-gray-500 text-l block">
							Lorem ipsum dolor sit Lorem ipsum dolor sit
						</p>
					</div>

					<div className="col-span-1 md:col-span-2 flex items-center justify-between ">
						<label className="text-gray-700 text-xl font-bold mr-4 text-bold">
							Show Sources
						</label>

						<label class="relative inline-flex items-center cursor-pointer">
							<input
								type="checkbox"
								value=""
								checked
								className="sr-only peer"
							/>
							<div className="group peer ring-5 shadow-xl border-grey-500 border rounded-full outline-none duration-300 after:duration-300 w-20 h-10  shadow-md peer-checked:bg-[#7e22ce]  peer-focus:outline-none    after:rounded-full after:absolute after:bg-gray-300 after:outline-none after:h-8 after:w-8 after:top-1 after:-left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12  peer-hover:after:scale-90"></div>
						</label>
					</div>
					<p className="text-gray-500 mt-[-15px] text-l block">
						Lorem ipsum dolor sit Lorem ipsum dolor sit
					</p>

					<div className="col-span-1 md:col-span-2 border-t border-gray-200 pt-4">
						<h2 className="text-purple-700 font-bold text-xl">Chat Icon</h2>

						<div className="mt-4">
							<label className="block font-bold text-xl text-gray-700">
								Chat Icon Size
							</label>
							<select className="mt-1 h-10 block w-full border border-gray-300 rounded-md shadow-sm">
								<option>Small (48x48 px)</option>
							</select>
						</div>

						<div className="mt-4">
							<label className="block font-bold text-xl text-gray-700">
								Position on Screen
							</label>
							<select className="mt-1 h-10  block w-full border border-gray-300 rounded-md shadow-sm">
								<option>Bottom Right</option>
							</select>
						</div>

						<div className="mt-4">
							<label className="block font-bold text-xl text-gray-700">
								Distance from Bottom (in px)
							</label>
							<input
								type="text"
								value="20"
								className="mt-1 h-10  block w-full border border-gray-300 rounded-md shadow-sm"
							/>
						</div>

						<div className="mt-4">
							<label className="block font-bold text-xl text-gray-700">
								Horizontal Distance (in px)
							</label>
							<input
								type="text"
								value="20"
								className="mt-1 h-10  block w-full border border-gray-300 rounded-md shadow-sm"
							/>
						</div>

						<div className="mt-4">
							<label className="block text-xl font-bold text-gray-700">
								Bot Icon
							</label>
							<div className="mt-1 flex items-center">
								<div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
								<button className="bg-purple-700 text-white py-2 px-4 rounded-md">
									Upload Image
								</button>
							</div>
							<p className="text-gray-500 mt-2">Recommended Size: 48x48px</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DisplayTabConfig;
