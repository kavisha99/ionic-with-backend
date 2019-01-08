var user=require('../models/user_model');
var express=require('express');
var router=express.Router();

router.post('',function(req,res,next){
    console.log(req.body);
    user.AddUser(req.body,function(err,rows){
        if(err)
        {
           res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});


    
module.exports=router;
