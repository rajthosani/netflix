const router = require("express").Router();
const List=require("../models/List");
const {verify}=require("../verifyToken");

router.post("/",async(req,res)=>{
   
        const newList=new List(req.body);
        try{
            const savedList= await newList.save();
            res.status(200).json(savedList);
        } catch(err){
            res.status(500).json(err);
        }
    

});

router.delete("/:id", async (req, res) => {
    
      try {
        await List.findByIdAndDelete(req.params.id);
        res.status(201).json("The list has been delete...");
      } catch (err) {
        res.status(500).json(err);
      }
   
  });

router.get("/", async (req,res)=>{
    const typequery=req.query.type;
    const genrequery=req.query.genre;
    let list=[];
    try{
        if(typequery){
            if(genrequery){
                list = await List.aggregate([{$sample : {size :10}},{$match:{type : typequery,genre : genrequery}}]);
            }
            else{
                list = await List.aggregate([{$sample : {size :10}},{$match:{type : typequery}}]);
            }
    }
        else {
            list = await List.aggregate([{ $sample: { size: 10 } }]);
            }

        res.status(200).json(list);}  catch(err){
            res.status(500).json(err);
        }
});




module.exports=router;