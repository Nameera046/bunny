const express=require('express');
const {createUrl,
    redirectToUrl,
    getStatistics
}=require('../controller/urlcontroller.js');
const router=express.Router();
const log=require("../Logging Middleware1/logger");

router.post("/shorturls",(req,res,next)=>{
    await log(
        "Backend",
        "info",
        "Router",
        "POST /shortcuts request received"
    );
    next();
},createUrl);

router.get("/:shortCode",(req,res,next)=>{
    await log(
        "Backend",
        "info",
        "Router",
        `GET /${req.params.shortCode} request received`
    );
    next();
},redirectToUrl);
router.get("/shorturls/:shortCode",(req,res,next)=>{
    await log(
        "Backend",
        "info",
        "Router",
        `GET /${req.params.shortCode} request received`
    );
    next();
},getStatistics);

module.exports=router;