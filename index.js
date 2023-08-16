const express = require("express");
var app = express();

//Route
app.get("/", (req, res) => {
	res.send("hello world");
});

//MongoDB connection
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });
mongoose.connection.once("open",()=> {
		console.log("Database connected Successfully");
	}).on("error", (err)=> {
		console.log("Error", err);
	});

//Servers
app.listen(8000,  () => {
	console.log("Server is Up at: http://localhost:8000");
});

const router = require("./routes/emp");
app.use("/emp", router);
