const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const cors=require("cors");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
require("dotenv").config({path: "./config.env"});
const path=require("path");


//const MONGO_URL="mongodb+srv://raj:thosani8281@netflix.izj6l.mongodb.net/test";
const PORT=8800;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });
app.use(express.json());
app.use(cors());


app.listen(PORT, () => {
    console.log("Backend server is running!");
  });

if (process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname,"/client/build")));
  
  app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"client","build","index.html"));});
    
  }
  else{
    app.get("/",(req,res)=>{
      res.send("Api running")});
  }

app.use('/api/auth', authRoute);  
app.use('/api/users', userRoute);
app.use('/api/movies', movieRoute);
app.use('/api/lists', listRoute);
  