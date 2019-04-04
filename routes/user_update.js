var user=require('../models/user_model');
var express=require('express');
var router=express.Router();

router.put('/:user_id',function(req,res,next){
    user.updateuserPassword(req.body,req.params.user_id,function(err,rows){
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