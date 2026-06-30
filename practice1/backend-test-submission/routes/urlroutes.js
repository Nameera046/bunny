const express=require('express');
const {createUrl,
    redirectToUrl,
    getStatistics
}=require('../controller/urlcontroller.js');
const router=express.Router();
const log=require("../../LoggingMiddleware/logger");

router.post("/shorturls",async(req,res,next)=>{
    await log(
        "Backend",
        "info",
        "routes",
        "POST /shortcuts request received"
    );
    next();
},createUrl);

router.get("/:shortCode",async(req,res,next)=>{
    await log(
        "Backend",
        "info",
        "routes",
        `GET /${req.params.shortCode} request received`
    );
    next();
},redirectToUrl);
router.get("/shorturls/:shortCode",async(req,res,next)=>{
    await log(
        "Backend",
        "info",
        "routes",
        `GET /${req.params.shortCode} request received`
    );
    next();
},getStatistics);

module.exports=router;