const express=require('express');
const dotenv=require('dotenv')

const app=express()

dotenv.config();

app.get("/",(req,res)=>{
      res.send("Server startted successfully");
});
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Server startted on the port ${port}`);
});
