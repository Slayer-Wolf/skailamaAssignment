import React from "react";
import { Input } from "./Input";
const GeneralTabConfig = () => {
	return (
		<>
			<form className="flex flex-col gap-1">
				<Input className="text-xl font-bold" label="Chatbot Name" />
				<p className="text-md text-gray-400">
					Lorem ipsuim dolor sit Lorem ipsuim dolor sit
				</p>

				<Input className="text-xl font-bold" label="Welcome Message" />
				<p className="text-md text-gray-400">
					Lorem ipsuim dolor sit Lorem ipsuim dolor sit
				</p>
				<Input className="text-xl font-bold" label="Input Placeholder" />
				<p className="text-md text-gray-400">
					Lorem ipsuim dolor sit Lorem ipsuim dolor sit
				</p>
			</form>
		</>
	);
};

export default GeneralTabConfig;
