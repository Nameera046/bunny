const axios=require('axios');

async function Log(stack, level, package, message)
{
    try
    {
        await axios.POST("https://127.0.0.1/bunny/logs",
            {
                stack,
                level,
                package: packageName,
                message
            },
            {
                headers:
                {
                    Authorization: `Bearer ${process.env_JWT_Token}`
                }
            }
        )
    }
    catch(err)
    {
        console.error("Logging failed",err.message);
    }
}
module.exports=Log;