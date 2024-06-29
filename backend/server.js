const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const projectRoutes = require("./routes/projectRoutes");
const userRoutes = require("./routes/userRoutes.js");
const episodeRoutes = require("./routes/episodeRoutes");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/projects", projectRoutes);
app.use("/user", userRoutes);
app.use("/episodes", episodeRoutes);

let mongoURI;
if (process.env.NODE_ENV === "production") {
	mongoURI =
		"mongodb+srv://jhammer228:<password>@skailama.xlrp5rs.mongodb.net/?retryWrites=true";
} else {
	mongoURI = "mongodb://localhost:27017/skailama";
}

mongoose.connect(mongoURI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
	console.log("Connected to MongoDB");
});

app.get("/", (req, res) => {
	res.json({
		hello: "welcome",
	});
});

// node / express server
app.listen(8080, () => {
	console.log(`server started on 8080`);
});
