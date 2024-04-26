const  mongoose = require('mongoose');
require('dotenv').config();
//define the mongodb url
//const mongoURL='mongodb://0.0.0.0:27017/clicks';
//const mongoURL='mongodb+srv://nikhilhazarika9:nikyour07@cluster0.2eai1ie.mongodb.net/clicks';
const mongoURL=process.env.DB_URL;
// setup connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;
db.on('connected',()=>{
    console.log("connect with mongodb")
})
db.on('disconnected',()=>{
    console.log("disconnected with mongodb")
})
db.on('error',()=>{
    console.log("error in mongodb")
})

module.exports=db;