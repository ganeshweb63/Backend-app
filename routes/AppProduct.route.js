const express=require('express');
const AppProductController=require('../controllers/AppProduct.controller');

const router=express.Router();

router.post('/data',AppProductController.addAppProducts);
router.get('/getdata',AppProductController.getAppProducts);


module.exports=router; 