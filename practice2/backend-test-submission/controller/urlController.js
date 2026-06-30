const {log}=require("../utils/loggingmiddleware.js");
const urlStore=new Map();
const createShortUrl=async(req,res)=>{
    try{
        await log("backend","info","controller","recievedrequest to the shorten url");
        const {url,validity=30,shortcode}=req.body;
        if(!url)
        {
            await log("Backend","error","controller","URL is not provided");
            return res.status(400).json({error:"url is required"});
        }
        let shortId=shortcode;
        if(urlstore.has(storeId))
        {
            await log("Backend","warn","repository",`shortcode ${shortId} already exists`);
            return res.status(409).json({error:"shortcode already exists"});
        }
        const expirydate=new Date(Date.now+validity*60*1000);
        urlStore.set(shortId,{url,expiry:expirydate});
        await log("Backend","infor","repository",`short url create for the ${url} with ${expirydate.toIOString()}`);
        return res.status(201).json({
            shortLink:`http://localhost:8000/${shortId}`,
            expiry:expirydate.toIOString()
        });
    }
    catch(error)
    {
        console.log("Error in creating the short Url");
        return res.status(500).json({
            "message":"Error in creting the short URL",
            "error":error.message
        })
    }
},
const getOriginalUrl=async(req,res)=>{
    try{
        const{shortId}=req.params;
        await log("Backend","Info","Controller",`Lookup request for the shortId : ${shortId}`);
        const entry=urlStore.get(shortId);
        if(!entry)
        {
            await loc("Backend","warn","repository",`shortId ${shortId} not found`);
            return res.status(404).json({error:"URL not Found"});
        }
        if(new Date()>new Date(entry.expiry))
        {
            await log("Backend","warn","repository",`shortId ${shortId} expired`);
            urlStore.delete(shortId);
            return res.status(409).json({error : "URL expired"});
        }
        await log("backend","info","controler",`redirecting ${shortId}-> ${entry.url}`);
        return res.json({url:entry.url,shortId});
    }
    catch(error)
    {
        console.log("Error in creating the short Url");
        return res.status(500).json({
            "message":"Error in creting the short URL",
            "error":error.message
        })
    }
},
const getAllUrl=async(req,res)=>{
    try{
        return res.josn({urlStore});
    }
    catch(error)
    {
        console.log("Error in creating the short Url");
        return res.status(500).json({
            "message":"Error in creting the short URL",
            "error":error.message
        })
    }
}

module.exports={
    createShortUrl,getOriginalUrl,getAllUrl
};