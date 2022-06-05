const router=require("express").Router();
const bcrypt=require('bcrypt');
const User=require("../models/User");
const jwt=require("jsonwebtoken");


router.put("/:id",async (req,res)=>{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    if (req.body.password) {
        req.body.password = hashedPassword
      }
    try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        res.status(500).json(err);
      }
    
});


router.delete("/:id", async (req, res) => {
    
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    
  });

router.get("/find/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...info } = user._doc;
      res.status(200).json(info);
    } catch (err) {
      res.status(500).json(err);
    }
  });  

router.get("/", async (req, res) => {
    const query = req.query.new;
    
      try {
        const users = query
          ? await User.find().sort({ _id: -1 }).limit(5)
          : await User.find();
        res.status(200).json(users);
      } catch (err) {
        res.status(500).json(err);
      }
    
  });


router.get("/stats", async (req, res) => {
    const today = new Date();
    const latYear = today.setFullYear(today.setFullYear() - 1);
  
    try {
      const data = await User.aggregate([
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
  });  


module.exports=router;  
