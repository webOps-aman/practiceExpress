const mongoose = require('mongoose');
// const URI = "mongodb://127.0.0.1:27017/mern_admin";
const URI = process.env.MONGODB_URI;

const connectdb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected to MongoDB successfully!")
    } catch (error) {
        console.error("Could not connect to MongoDB:", error);
        process.exit(0);
    }
};

module.exports = connectdb;