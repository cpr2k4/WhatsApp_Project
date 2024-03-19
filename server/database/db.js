import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = async()=>{
    const DB_URL = process.env.DB_URL;
    try{
        await mongoose.connect(DB_URL);
        console.log("Connected to DB...");
    }
    catch(err){
        console.log("Error while connecting to mongoDB",err.message);
    }
}

export default Connection;