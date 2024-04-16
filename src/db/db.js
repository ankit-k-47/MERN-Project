import mongoose from "mongoose";
import { DB_N } from "../constants.js";

const connection=async ()=>{
    try {
        const conIns = await mongoose.connect(`${process.env.MONGO_URI}/${DB_N}`)
        console.log(`\nMongoDB connected Host : ${conIns.connection.host}`);
    } catch (error) {
        console.log("Not connected",error);
        process.exit(1);
    }
}
export default connection