var login=require('../../models/loginModel');
var express=require('express');
var router=express.Router();

router.post('',function(req,res,next){
    login.onLogin(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.get('',function(req,res,next){
    login.getUsers(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.post('/',function(req,res,next){
    console.log(req.body);
    login.sendMail(req.body,function(err,message){

        if(err)
        {
            console.log(err);
            res.json(err);
        }
        else
        {
            return res.json({success: true, msg: 'sent'});//or return count for 1 or 0
        }
    });
});

    
module.exports=router;



