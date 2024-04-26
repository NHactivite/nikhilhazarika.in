const mongoose=require('mongoose');
const mongoseURL='mongodb://0.0.0.0:27017/clicks'
mongoose.connect(mongoseURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;

db.on("connected",()=>{
    console.log('connected')
})
db.on('disconect',()=>{
    console.log("disconnected")
})

module.exports=db;