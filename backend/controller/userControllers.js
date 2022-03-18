import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import { genarateToken } from '../utils/genarateToken.js';

export const login = asyncHandler(async (req,res) => {
    
    const {email,password} = req.body;
    
    const user = await User.findOne({email});
    
    
    if(!user){
        
        res.status(400);
        throw new Error('the validation faild: check the email or passowrd')
    }

   if(!user.matchPassword(password)){
    res.status(400);
    throw new Error('the validation faild: check the email or passowrd')
   }



   res.status(201).json({
        _id:user._id,
        ...user._doc,
        token:genarateToken(user)
   })


})

export const registerUser = asyncHandler(async (req,res) => {
 
    const user = await User.create(req.body);
    res.status(201).json({
        _id:user._id,
        ...user._doc,
        token:genarateToken(user)
    })
})


export const getAllUser = asyncHandler(async (req,res) => {
    console.log(req.user.isAdmin);
    const users = await User.find({});
    res.status(200).json(users);
})



