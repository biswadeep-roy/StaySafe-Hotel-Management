const mongoose = require("mongoose");

const mongoURL = "mongodb+srv://biswadeeproy1230:Ojaswi12345@cluster0.wvxzefn.mongodb.net/mern-rooms";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.on('error', () => {
    console.log("MongoDB connection failed");
});

connection.on('connected', () => {
    console.log('MongoDB connected successfully');
});

module.exports = connection; // Export the database connection
