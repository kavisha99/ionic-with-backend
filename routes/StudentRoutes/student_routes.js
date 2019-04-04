var student=require('../../models/students_models/studentModel');
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
    student.viewClass(function(err,rows){
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


router.post('',upload.single('s_profilepic'),function(req,res,next){
    student.AddStudent(req.body,req.file.filename,function(err,rows){
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
student.deleteStudent(req.params.fk_u_id,function(err,rows){
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
    student.deleteAll(function(err,rows){
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
  student.updateStudent(req.body,req.params.fk_u_id,function(err,rows){
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
        student.getStudentByUserId(req.params.fk_u_id,function(err,rows){
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
