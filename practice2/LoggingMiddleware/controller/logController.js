// const logdata=async(req,res)=>
// {
//     const { stack, level, package: packageName, message } = req.body;
//     if(!stack||!level||!packageName||!message)
//     {
//         return res.status(404).json({"meassage":"The Log fields are misssing"});
//     }
//     try
//     {
//         // console.log(process.env.LOG_API);
//         // const response=await fetch(process.env.LOG_API,{
//         //     method:"POST",
//         //     body:JSON.stringify({
//         //         stack,
//         //         level,
//         //         package:packageName,
//         //         message
//         //     }),
//         //     headers:
//         //     {
//         //         "Content-Type": "application/json",
//         //         'Authorization':`Bearer ${process.env.Bearer_Token}`
//         //     }
//         // });
//         console.log(`Logged-> [${stack}] [${level}] [${packageName}] [${message}]`);
//         const data=await response.json();
//         console.log(`Respose Log`,data);
//         res.status(200).json({
//             message:"Log created Successfully",
//             data:data
//         });
//     }
//     catch(error)
//     {
//         console.log("failed to send log :",error.message);
//         return res.status(500).json({"message":"Intenal Error ","error":error.message});
//     }
// }
// module.exports={
//     logdata
// };


const logdata = async (req, res) => {
    try {
        const { stack, level, package: packageName, message } = req.body;

        if (!stack || !level || !packageName || !message) {
            return res.status(400).json({
                message: "All log fields are required"
            });
        }

        console.log(
            `Logged -> [${stack}] [${level}] [${packageName}] [${message}]`
        );

        return res.status(200).json({
            message: "Log created successfully"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Error",
            error: error.message
        });
    }
};

module.exports = { logdata };