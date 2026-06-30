const log=async(stack,level,package,message)=>{
    try{
        console.log(`logged Locally on [${stack}], [${level}], [${package}], [${message}]`)
        const response=await fetch('http://localhost:5000/api/log',{
            method:post,
            body:{
                stack,
                level,
                package,
                message
            },
            headers:{
                "content-type":"application/json"
            }
            
        });
        return response.data;
    }
    catch(error)
    {
        console.log("Failed due to the local API : ",error.message);
        // return res.status(500).json({"message":"Internal Error","error":error.message});
        return{
            logID:"local-fallback",
            message:"logged locally"
        }
    }
}
module.exports=log;