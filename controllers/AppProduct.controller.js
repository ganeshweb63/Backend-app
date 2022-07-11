const AppProductModel=require('../models/AppProduct.model');

exports.addAppProducts=(req,res)=>{
    const body=req.body;

    var documentProduct=new AppProductModel(body);
    documentProduct.save((err,doc)=>{
        if(err){
            res.send(err.message); 
            console.log(err.message);
        }
        if(doc){
            res.send("added product");
        }
    })

};
 
exports.getAppProducts=(req,res)=>{
     AppProductModel.find({},(err,docs)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            if(docs){
                res.send(docs);
            }
        }
    })
}