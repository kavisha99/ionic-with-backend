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

    router.post('',upload.single('t_profilepic'),function(req,res,next){
        teacher.updateProfilepic(req.body,req.file.filename,function(err,rows){
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
        teacher.getTeacherByidforprofilepic(req.params.s_gr_no,function(err,rows){
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

          