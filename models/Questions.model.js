const mongoose =require("mongoose")
let QuestionScema=mongoose.Schema({
    category:String,
    type:String,
    difficulty:String,
    question:String,
    correct_answer:String,
incorrect_answers:Array,

})


let QuestionModel=mongoose.model("Questions",QuestionScema)

module.exports={QuestionModel}