const express = require('express')
const app = express()
const port = 8080
const cors=require("cors")
const {dbconnection}=require("./db")
const {UserRouter}=require("./routes/scores")
const {QuestionsRoute}=require("./routes/Questions")

app.use(cors({
    origin:"*"
}))

app.use(express.json())

app.use("/users",UserRouter)
app.use("/questions",QuestionsRoute)
app.get('/', (req, res) => res.send('Hellow world'))


app.listen(port, async() =>{  
   try{
    dbconnection
    console.log({"msg":"connected to database"})
   }catch(err){
    console.log(err)
   }
    console.log(`app listening to port ${port}!`)})