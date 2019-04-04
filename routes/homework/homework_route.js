var homework=require('../../models/homework/homework_model');
var express=require('express');
var router=express.Router();

    router.post('',function(req,res,next){
        homework.addHomework(req.body,function(err,rows){
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
    
    router.delete('/:h_id',function(req,res,next){
        homework.deleteHomework(req.params.h_id,function(err,rows){
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
        homework.viewHomework(function(err,rows){
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

    router.get('/:h_class/:h_div',function(req,res,next){
        homework.getHomeworkById(req.params.h_class,req.params.h_div,function(err,rows){
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
    
   
    router.delete('',function(req,res,next){
        homework.deleteAllHomework(function(err,rows){
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
    
        router.put('/:h_id',function(req,res,next){
            homework.updateHomeworkById(req.body,req.params.h_id,function(err,rows){
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

