const {createShortURL,validateUrl,redirectToOriginalUrL,getUrlStatistics}=require('../servicer/urlservice');
const log=require('../logging Middleware1/logger');

const createUrl=async(req,res)=>{
    try
    {
        await log(
            "Backend",
            "info",
            "controller",
            "create URL request received"
        );
        const {OriginalURl,validity}=req.body;
        const isvalid=await validateUrl(OriginalURL);
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
        const result=await createShortURL(OriginalURL,validity);
        return res.status(201).json(result);
    }
    catch(error)
    {
        await log(
            "Backend",
            "error",
            "controller",
            erro.message
        )
        return res.status(500).json({message:"Internal Server Error"});
    }
},
const redirectToUrl=async(req,res)=>{
    try
    {
        const {shortCode}=req.params;
        const OriginalURL=await redirectToOriginalUrL(
            shortCode,
            {
                timestamp:new Date(),
                source:req.headers.referer || "direct"
            });
        if(!OriginalURL)
        {
            await log(
                "Backend",
                "warn",
                "contoller",
                "URL  is not matched"
            );
            return res.status(401).json({message:"ShortCode is not found"});
        }
        return res.redirectToOriginalUrL;
    }
    catch(error)
    {
        await log(
            "Backend",
            "error",
            "controller",
            erro.message
        )
        return res.status(500).json({message:"Internal Server Error"});
    }
},
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
            erro.message
        )
        return res.status(500).json({message:"Internal Server Error"});
    }
}
module.exports={
    createUrl,
    redirectToUrl,
    getStatistics
};
