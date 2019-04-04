var class_tbl=require('../../models/class_model/classmodel');
var express=require('express');
var router=express.Router();

router.get('',function(req,res,next){
    class_tbl.viewClass(function(err,rows){
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

router.get('/:class_id',function(req,res,next){
    class_tbl.viewClassById(req.params.class_id,function(err,rows){
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