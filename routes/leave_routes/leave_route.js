var leaves=require('../../models/leave_models/leave_model');
var express=require('express');
var router=express.Router();

    router.post('/',function(req,res,next){
        console.log(req.body);
        leaves.addLeaves(req.body,function(err,rows){
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
    
        

    router.get('',function(req,res,next){
        leaves.viewLeaves(function(err,rows){
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

    router.get('/:l_id',function(req,res,next){
        leaves.getLeavesById(req.params.l_id,function(err,rows){
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


