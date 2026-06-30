const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const {log}=require("./utils/loggingmiddleware.js");
const {urlRoutes}=require("./routes.urlRoutes.js");

dotenv.config();

const app=express();
const port=3000;

app.use(express.json());
app.use("/",urlRoutes);

app.listen(port,()=>{
    console.log(`Backend server started at the port ${port}`);
});