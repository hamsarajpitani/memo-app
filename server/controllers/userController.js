const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require("../model/userModel");

exports.signinUser = async (req,res)=>{
    const {email,password} = req.body;
    console.log('SIGNINUSER',req.body);
    
    try {
        
        const userExists = await User.findOne({email});
        console.log('userEXISTS----->',userExists);
        // if(!userExists) return res.json({message:"user doesn't exits"});

        const isPasswordsCorrect = await  bcrypt.compare(password,userExists.password);
        if(!isPasswordsCorrect) return res.json({password:'Invalid Credentials'});

        //* Generate A Token */
        const token = jwt.sign( { email:userExists.email, id:userExists._id } ,'test' ,{expiresIn: "1h"});

        //** return everything */                 
        res.status(200).json( { result:userExists,token } );

    } catch (error) {
        console.log(error)
    }

}

exports.signupUser = async (req,res)=>{
    console.log(JSON.stringify(req.body));
    const {firstname,lastname,password,Cpassword,email} = req.body;

    try {
        const userExists = await User.findOne({email});
        if(userExists) return res.json({message:"user exits Already from backend log"});
        // if(password != Cpassword) return res.json("password doesn't Match")
        console.log('USEREXISTS--->',userExists);
        const hashedPassword = await bcrypt.hash(password,12);

        const result = await User.create(
                 {  email ,
                    password: hashedPassword,
                    name : `${firstname},${lastname}`
                });
        // const result = await result_obj.save();
        console.log('result--->',result)

          //* Generate A Token */
        const token = jwt.sign( { email:result.email, id:result._id } 
            ,'test'
            ,{expiresIn:"1h"});
        
              //** return everything */                 
        res.status(200).json( { result,token } );
    } catch (error) {
        console.log(error)
    }

}   