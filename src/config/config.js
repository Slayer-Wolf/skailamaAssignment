var backendApi = process.env.BACKEND_API_URL;

module.exports = {
	API_URL:
		process.env.NODE_ENV === "production"
			? backendApi
			: "http://localhost:8080",
};
