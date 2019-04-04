var div=require('../models/division_model');
var express=require('express');
var router=express.Router();

router.get('',function(req,res,next){
    div.getDiv(function(err,rows){
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

router.post('/',function(req,res,next){
   // console.log(req.body);
    div.addDiv(req.body,function(err,rows){
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



router.delete('/:div_name',function(req,res,next){
    div.deleteDiv(req.params.div_name,function(err,rows){
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
