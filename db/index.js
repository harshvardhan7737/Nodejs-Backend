import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`\n MONGODB connected !!!  DB Host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB Connection ERROR:", error);
        process.exit(1);
    }
}

export default connectDb;