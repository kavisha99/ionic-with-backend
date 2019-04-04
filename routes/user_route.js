var user=require('../models/user_model');
var express=require('express');
var router=express.Router();

router.get('',function(req,res,next){
    user.getUser(function(err,rows){
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

router.get('/:user_id',function(req,res,next){
    user.getUserById(req.params.user_id,function(err,rows){
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


router.post('',function(req,res,next){
   // console.log(req.body);
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



router.delete('/:user_id',function(req,res,next){
    user.deleteUser(req.params.user_id,function(err,rows){
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
    

    router.put('/:user_id',function(req,res,next){
        user.updateUser(req.body,req.params.user_id,function(err,rows){
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
