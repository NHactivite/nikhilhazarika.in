const express = require("express");
const app = express();
const db=require('./db')
const candidate=require('./candidate')
const path=require('path')
// body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')))


app.get("/", (req, res) => {
  res.sendFile(__dirname+'/public/index.html');   
});

app.post('/clicked',async (req,res)=>{
  try{   
       const data=req.body;
       const newCandidate=new candidate(data);
       const response=await newCandidate.save();
       res.status(200).json({response:response})
   }catch(error){
       console.log(error)
       res.status(500).json({error:"internal server error user not signup"})
   }
  
})

app.listen(3000, () => {
  console.log("listening on port ");
});
