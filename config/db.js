//backend/config/db.js
const mongoose = require('mongoose');



// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDB');
const connection = mongoose.connection;
connection.on("connected", () => { console.log("connected with mongoDB successfully...!"); });
connection.on("error", (error) => { console.log("there is a problem with mongoDB", error); });

module.exports = connection;