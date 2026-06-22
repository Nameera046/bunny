const {saveURL, findByShortCode, updateClicks}=require('../repository/urlrepository');
const generateshortCode=require('../utils/util');
const log=require('../Logging Middleware1/logger');

const createShortUrl=async(OriginalURL,validate=30)=>{
      await log(
        "Backend",
        "Debug",
        "Service",
        `Creating shortcode for the URL ${OriginalURL}`
      );
      const shortCode=generateShortCode();
      const expiry=new Date(Date.now()+validity*60*1000);
      const urlData={OriginalURL, shortCode,expiry};
      const result=await saveURL(urlData);
      await log(
        "Backend",
        "info",
        "Service",
        `Creating an shortcode for the URL ${OriginalURL} with the shortcode ${shortCode}`
      );
    return result;
};
const validateUrl=async(url)=>{
    await log(
        "Backend",
        "Debug",
        "Service",
        `Validating the URL ${url}`
    );
    try{
        new URL(url);
        await log(
            "Backend",
            "Debug",
            "Service",
            `URL ${url} validated Successfully`
        );
        return true;
    }
    catch{
        await log(
            "Backend",
            "warn",
            "Service",
            `URL ${url} validation failed`
        );
    return false;
    }
};
const redirectToOrginalUrl=async(shortCode,clickData)=>{
    await log(
        "Backend",
        "Debug",
        "Service",
        `Redirecting to the Orginal URL from the shortCode ${shortCode}`
    );
    const url=await findByShortCode(shortCode)
    if(!url)
    {
        await log(
            "Backend",
            "warn",
            "Service",
            `shortCode ${shortCode} was not found`
        );
        return null;
    }
    await updateClicks(shortCode,clickDate);
    await log(
        "Backend",
        "warn",
        "Service",
        `Redirecting to the Orginal URL  ${url}`
    );
    return url.OriginalURL;
};
const getUrlStatistics=async(shortcode)=>{
    await log(
        "Backend",
        "Debug",
        "Service",
        `Getting URL Statics for the shortCode ${shortCode}`
    );
    const url=await findByShortCode(shortCode);
    if(!url)
    {
        await log(
            "Backend",
            "warn",
            "Service",
            `shortCode ${shortCode} was not found`
        );
        return null;
    }
    await log(
        "Backend",
        "Debug",
        "Service",
        `URL Statics fetched for the shortCode ${shortCode}`
    );
    return {
        OriginalURl:url.OriginalURL,
        shortCode:shortCode,
        createdAt:url.createdAt,
        expiry:url.expiry,
        clickCount:url.clickCount,
        clickDetails:url.clickDetails    
    }
};
module.export={
    createShortUrl,
    validateUrl,
    redirectToOrginalUrl,
    getUrlStatistics
};