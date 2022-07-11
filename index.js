const express=require('express');
const cors=require('cors');
const env=require('dotenv');


env.config();
const dbServer=require('./services/db.service');
const AppProductRouter=require('./routes/AppProduct.route');

dbServer.connectToDB(process.env.MONGO_URL);

const app=express();
app.use(express.json());
app.use(cors());
app.use(AppProductRouter);


app.get('/data',(req,res)=>{
    res.send("<p>Helle App is running...</p>");
})

app.listen(process.env.PORT_NO,()=>{
    console.log("server started on "+ process.env.PORT_NO);
});