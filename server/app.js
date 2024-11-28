const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");
const app = express();
const dotenv = require("dotenv");

// Config
dotenv.config({ path: ".env" });

// Apply Middleware
app.use(express.json({limit: "25mb"}));
app.use(bodyParser.urlencoded({limit: "25mb", extended: true}));

app.use(cors({origin: process.env.FRONTEND_URL}));

// app.use(cors());
app.use(fileUpload({
	limits: {
		fileSize: 50 * 1024 * 1024
	}
}));

// Load upload folder
app.use('/api/uploads', express.static(path.join(__dirname, "./api/uploads")));

// Route Imports
const errorMiddleware = require("./middleware/error");
const admin = require("./routes/adminRoutes");
const user = require("./routes/userRoutes");

// End Points
app.use("/api/v1", admin);
app.use("/api/v1", user);

// Test End Point
app.get("/api/v1/testingapi", (req, res) => {
	res.json({status: true, message: "Everything is perfect"});
});

// 404 Not Found
app.get("*", (req, res) => {
	res.json({status: true, statusCode: 404, message: "That endpoint does not exist."});
});

// Use Middleware
app.use(errorMiddleware);

module.exports = app;
