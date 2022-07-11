const mongoose=require('mongoose');

exports.connectToDB=(Mongo_URL)=>{
    mongoose.connect(Mongo_URL,err=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Connected to DB");
        }
    })
}