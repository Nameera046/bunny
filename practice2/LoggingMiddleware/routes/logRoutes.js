const express=require("express");
const router=express.Router();

const {logdata}=require("./controller/logController");

router.post("/",logdata);
// router.get("/",(req,res)=>{
//     res.send("Hello from the log routes");
// })
module.exports=router;
