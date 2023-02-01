const {UserModel}=require("../models/user.model")
const express=require("express")
const UserRouter=express.Router()

UserRouter.get("/",async(req,res)=>{
    try{
const allUsers=await UserModel.find()
res.send(allUsers)
    }catch(err){

    }
})

UserRouter.post("/",async(req,res)=>{
   
   try{
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.send({ msg: "Score added successfully" });
   }catch(err){
res.send({"msg":"something went wrong"})
   }
  })


module.exports={UserRouter}