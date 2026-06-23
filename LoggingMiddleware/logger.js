// const axios=require('axios');

// async function Log(stack, level, package, message)
// {
//     try
//     {
//         await axios.post("https://127.0.0.1/bunny/logs",
//             {
//                 stack,
//                 level,
//                 package,
//                 message
//             },
//             {
//                 headers:
//                 {
//                     Authorization: `Bearer ${process.env.JWT_Token}`
//                 }
//             }
//         )
//     }
//     catch(err)
//     {
//         console.error("Logging failed",err.message);
//     }
// }
// module.exports=Log;

async function Log(stack, level, packageName, message) {
    try {
        console.log("========== LOG ==========");
        console.log({
            stack,
            level,
            package: packageName,
            message,
            time: new Date().toISOString()
        });
        console.log("=========================");
    } catch (err) {
        console.error("Logging failed:", err.message);
    }
}

module.exports = Log;