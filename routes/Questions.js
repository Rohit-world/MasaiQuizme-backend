const { request } = require("express")
const express=require("express")
const {QuestionModel}=require("../models/Questions.model")
const QuestionsRoute= express.Router()




QuestionsRoute.get("/",async(req,res)=>{
    
   if(res.query){
    let requiredQuestions=await QuestionModel.find(req.query)
    res.send(requiredQuestions)
   }else{
    let requiredQuestions=await QuestionModel.find()
    res.send(requiredQuestions)
   }


})

QuestionsRoute.get("/:ID",async(req,res)=>{
    
   try{
    let ID=req.params.ID
    let requiredQuestions=await QuestionModel.findById(ID)
    res.send(requiredQuestions)

   }catch(err){
res.send({"msg":"error in server"})
   }
    })
 
 


QuestionsRoute.post("/",async(req,res)=>{
QuestionModel.insertMany(req.body,(err,result)=>{
    if(err){
        res.send({"msg":"error in posting data"})
    }else{
       res.send({"msg":"Questions added successfully"})
    }
})

})


module.exports={QuestionsRoute}