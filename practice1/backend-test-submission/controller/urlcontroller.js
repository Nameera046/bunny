const {createShortUrl,validateUrl,redirectToOrginalUrl,getUrlStatistics}=require('../service/urlservice');
const log=require('../../LoggingMiddleware/logger');

const createUrl=async(req,res)=>{
    try
    {
        await log(
            "Backend",
            "info",
            "controller",
            "create URL request received"
        );
        const {originalUrl,validity}=req.body;
        const isvalid=await validateUrl(originalUrl);
        if(!isvalid)
        {
            await log(
                "Backend",
                "warn",
                "contoller",
                "Invalid URL provided"
            );
            return res.status(400).json({message:"Invalid URL"});
        }
        const result=await createShortUrl(originalUrl,validity);
        return res.status(201).json(result);
    }
    catch(error)
    {
        await log(
            "Backend",
            "error",
            "controller",
            error.message
        )
        return res.status(500).json({message:"Internal Server Error"});
    }
};
const redirectToUrl=async(req,res)=>{
    try
    {
        const {shortCode}=req.params;
        const originalUrl=await redirectToOrginalUrl(
            shortCode,
            {
                timestamp:new Date(),
                source:req.headers.referer || "direct"
            });
        if(!originalUrl)
        {
            await log(
                "Backend",
                "warn",
                "contoller",
                "URL  is not matched"
            );
            return res.status(401).json({message:"ShortCode is not found"});
        }
        return res.redirect(url.originalUrl);
    }
    catch(error)
    {
        await log(
            "Backend",
            "error",
            "controller",
            error.message
        )
        return res.status(500).json({message:"Internal Server Error"});
    }
};
const getStatistics=async(req,res)=>{
    try
    {
        const {shortCode}=req.params;
        const stats=await getUrlStatistics(shortCode);
        if(!stats)
        {
            await log(
                "Backend",
                "warn",
                "contoller",
                "ShortCode is not found"
            );
            return res.status(401).json({message:"ShortCode is not found"});
        }
        return res.status(200).json(stats);
    }
    catch(error)
    {
        await log(
            "Backend",
            "error",
            "controller",
            error.message
        )
        return res.status(500).json({message:"Internal Server Error"});
    }
};
module.exports={
    createUrl,
    redirectToUrl,
    getStatistics
};
