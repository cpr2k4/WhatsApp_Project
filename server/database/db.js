import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = async()=>{
    // const DB_URL = process.env.DB_URL;
    const DB_URL = "mongodb://127.0.0.1:27017/whatsapp";
    try{
        await mongoose.connect(DB_URL);
        console.log("Connected to DB...");
    }
    catch(err){
        console.log("Error while connecting to mongoDB",err.message);
    }
}

//main() for mongodb connection
// main()
// .then((res)=>{
//     console.log("Connection established.....");
// })
// .catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
// }

export default Connection;