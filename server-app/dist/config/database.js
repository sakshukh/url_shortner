import mongoose from "mongoose";
// const mongoose = require("mongoose");
export const hello = "sdjksdjsd";
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.CONNECTION_URI}`);
        console.log(`Connected to ${connect.connection.host} and ${connect.connection.name}`);
    }
    catch (e) {
        console.error("database connection error " + e);
        process.exit(1);
    }
};
// module.exports = connectDb;
export default connectDb;
