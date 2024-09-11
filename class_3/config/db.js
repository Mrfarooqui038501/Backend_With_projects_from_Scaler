const mongoose = require("mongoose")

const dbURL = `mongodb+srv://mylaptop000123:u50vUlzqPOLmk7bA@users.umpxj.mongodb.net/?retryWrites=true&w=majority&appName=users`;

const connectDB = async () => {
try {
    await mongoose.connect(dbURL)
    console.log("connect to db succesfull")
} catch (error) {
    console.log("error cannot connect to db", err);
 }
};

module.exports = connectDB;