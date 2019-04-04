var classTeacher=require('../models/classTeacher_model');
var express=require('express');
var router=express.Router();
    

router.get('',function(req,res,next){
    classTeacher.getclassTeacher(function(err,rows){
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
    classTeacher.addclassTeacher(req.body,function(err,rows){
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



    router.delete('/:fk_u_id',function(req,res,next){
classTeacher.deleteclassTeacher(req.params.fk_u_id,function(err,rows){
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





    router.put('/:fk_u_id',function(req,res,next){
  classTeacher.updateclassTeacher(req.body,req.params.fk_u_id,function(err,rows){
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
    

    router.get('/:fk_u_id',function(req,res,next){
        classTeacher.getclassTeacherByUserId(req.params.fk_u_id,function(err,rows){
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
