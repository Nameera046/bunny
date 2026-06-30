const express=require("express");
const cors=require("cors");
// const dotenv=require("dotenv");

// dotenv.config();

const app=express();
app.use(express.json());

app.use(cors());

const logRoutes=require('./routes/logRoutes');
app.use('/api/logs',logRoutes);

app.listen(6000,()=>{
    console.log("Log Server Started");
});
