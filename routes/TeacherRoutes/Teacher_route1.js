var teacher=require('../../models/teacher_models/teacherModel');
var express=require('express');
var router=express.Router();
var multer=require('multer');
var path=require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
    x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
    });
    var upload = multer({storage: storage});

router.get('',function(req,res,next){
    teacher.viewTeacherList(function(err,rows){
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


router.post('',upload.single('t_profilepic'),function(req,res,next){
    teacher.AddTeacher(req.body,req.file.filename,function(err,rows){
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


    router.delete('/:t_id',function(req,res,next){
teacher.deleteTeacher(req.params.t_id,function(err,rows){
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
    teacher.deleteAll(function(err,rows){
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


    router.put('/:t_id',function(req,res,next){
  teacher.updateTeacher(req.body,req.params.t_id,function(err,rows){
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
    

    router.get('/:t_id',function(req,res,next){
        teacher.getTeacherById(req.params.t_id,function(err,rows){
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
