const router=require("express").Router();
const User=require("../models/User");
const jwt=require("jsonwebtoken");
const bcrypt=require('bcrypt');


router.post("/register",async (req,res)=>{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser=new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    });
    try{
        const user=await newUser.save();
        res.status(201).json(user);
    }catch(err){
        res.status(500).json(err);
    }
});

router.post("/login",async (req,res)=>{
    try{
        const user= await User.findOne({email:req.body.email});
        !user && res.status(401).json("Wrong password or username!");
        
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("wrong password");

        const accesstoken=jwt.sign({id :user._id, isAdmin :user.isAdmin } ,"lama", {expiresIn :"5d"});
        const {password,...info}=user._doc;
        res.status(200).json({...info,accesstoken});
    }catch(err){
        res.status(500).json(err);
    }
    
});

module.exports= router;