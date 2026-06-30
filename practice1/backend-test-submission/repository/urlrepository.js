const url=require('../models/url');
const log=require('../../LoggingMiddleware/logger');

const saveURL=async(urlData)=>
{
    try
    {
        await log(
            "Backend",
            "debug",
            "repository",
            "Saving the URL in the database"
        );
        const result=await url.create(urlData);
        await log(
            "Backend",
            "info",
            "repository",
            "Saving the URL in the database Successfully"
        );
        return result;
    }
    catch(error)
    {
        await log(
            "Backend",
            "error",
            "repository",
            `Error in saving the URL ${error.message}`
        );
        throw error;
    }
};

const findByShortCode=async(shortCode)=>{
    try
    {
        await log(
            "Backend",
            "debug",
            "repository",
            "Finding the URL in the database"
        );
        const result=await url.findOne({shortCode});
        if(result)
        {
            await log(
                "Backend",
                "info",
                "repository",
                `ShortCode ${shortCode} found in the database`
             );
        }
        else
        {
            await log(
                "Backend",
                "warn",
                "repository",
                `ShortCode ${shortCode} not found in the database`
             );
        }
        return result;
    }
    catch(error)
    {
        await log(
            "Backend",
            "error",
            "repository",
            `Error in fetching the shortCode ${shortCode}, ${error.message}`
        );
        throw error;
    }
};

const updateClicks=async(shortCode,clickData)=>{
    try{
        await log(
            "Backend",
            "debug",
            "repository",
            `Updating the clicks for the shortCode ${shortCode}`
        );
        const result=await url.findOneAndUpdate(
            {shortCode},
            {
                $inc:{clickCount:1},
                $push:{clickDetails, clickData}
            },
            {new:true}
        );
        await log(
            "Backend",
            "warn",
            "repository",
            `Click Statics successfully Updated for the ShortCode ${shortCode}`
        );
        return result;
    }
    catch{
        await log(
            "Backend",
            "error",
            "repository",
            `Error in Updating the click details for the ShortCode ${shortCode}, ${error.message}`
        );
        throw error;
    }
};

module.exports={
    saveURL,
    findByShortCode,
    updateClicks
};