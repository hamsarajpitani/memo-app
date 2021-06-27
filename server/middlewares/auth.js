const jwt = require("jsonwebtoken");

exports.auth = async (req,res,next) =>{

    try {
        console.log('REQUEST-->',req.headers.authorization);
        const token = req.headers.authorization;
        console.log(token);
        const iscustomAuth = token.length < 500;

        let decodedData;

        if(token && iscustomAuth){
            decodedData = jwt.verify(token,'test');

            req.userId = decodedData?.Id;
        }else{
            //** i'ts Google Token */
            decodedData = jwt.decode(token);

            //** Sub is a google name for Id specific user */
            req.userId = decodedData?.sub;
        }

        next();

    } catch (error) {
        console.log(error)
    }

}
