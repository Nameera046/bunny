const logdata=async(req,res)=>
{
    if(!stack||!level||!package||!message)
    {
        res.status(404).json({"meassage":"The Log fields are misssing"});
    }
    try
    {
        const response=await fetch(process.env.LOG_API,{
            method:post,
            body:{
                stack,
                level,
                package,
                message
            },
            headers:
            {
                'Authorization':`Bearer ${process.env.Bearer_Token}`
            }
        });
        console.log(`Logged-> [${stack}] [${level}] [${package}] [${message}]`);
        console.log(`Respose Log`,response.data);
        res.status(200).json({
            message:"Log created Successfully",
            data:response.data
        });
    }
    catch(error)
    {
        console.log("failed to send log :",error.message);
        return res.status(500).json({"message":"Intenal Error ","error":error.message});
    }
}
module.exports={
    logdata
};
