const { request } = require("express")
const express=require("express")
const {QuestionModel}=require("../models/Questions.model")
const QuestionsRoute= express.Router()




QuestionsRoute.get("/",async(req,res)=>{
    
    let requiredQuestions=await QuestionModel.find(req.query)
    res.send(requiredQuestions)


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