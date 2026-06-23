const jwt=require('jsonwebtoken');
const createToken=(payload)=>
{
    try{
        const token=jwt.sign(
            payload,
            process.env.JWT_Secret,
            {
                expiresIn:"1h"
            }
        );
        return token;
    }
    catch{
        console.error("creating of the jwt token failed",error.message);
        return null;
    }
};


const verifyToken=(token)=>
{
    try{
        const decode=jwt.verify(
            token,
            process.env.JWT_Secret
        );
        return decode;
    }
    catch{
        console.error("Verification of the jwt token failed",error.message);
        return null;
    }
};
module.exports={
    createToken,
    verifyToken
};