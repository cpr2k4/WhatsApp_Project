import express from "express";
const app = express();
import Connection from "./database/db.js";
import cors from 'cors'
import route from "./routes/route.js";
import bodyParser from "body-parser";

const PORT = 8080;

//db
Connection();

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));    

app.listen(PORT,()=>{
    console.log("server is listening at port : ",PORT);
})

app.get("/", (req, res) => {
    res.send("Arnold is numero uno");
});

app.use("/",route);