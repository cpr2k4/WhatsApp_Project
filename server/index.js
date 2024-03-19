import express from "express";
const app = express();

const PORT = 8080;

app.listen(PORT,()=>{
    console.log("server is listening at port : ",PORT);
})

app.get("/", (req, res) => {
    res.send("Arnold is numero uno");
});