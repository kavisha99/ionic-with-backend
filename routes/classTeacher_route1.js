var classTeacher=require('../models/classTeacher_model');
var express=require('express');
var router=express.Router();
    

router.get('/:c_t_name',function(req,res,next){
    classTeacher.getUserId(req.params.c_t_name,function(err,rows){
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
