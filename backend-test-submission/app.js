const express=require('express');
const dotenv=require('dotenv')
const connectDB=require('./config/db');
const URLSchema=require('./models/url');

const app=express()

dotenv.config();

app.use(express.json());

connectDB();

app.get("/",(req,res)=>{
      res.send("Server startted successfully");
});

const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Server startted on the port ${port}`);
});
