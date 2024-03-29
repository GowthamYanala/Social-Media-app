const mongoose = require('mongoose')
const config = require('config') 

const db= config.get('mongouri')

const connectDB = async()=>{
    try{
        await mongoose.connect(db,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex:true,
            useFindAndModify:false
        })
        console.log("connected to db sucessfully")
    }
    catch(err){
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDB
