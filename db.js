const mongoose = require("mongoose");

const mongoURL =
  "Enter Your Mongo URI here";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("MongoDB connection failed");
});

connection.on("connected", () => {
  console.log("MongoDB connected successfully");
});

module.exports = connection;
