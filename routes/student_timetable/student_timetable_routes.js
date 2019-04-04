var stu_timetable_model=require('../../models/student_timetable/stu_timetable_model');
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

    router.post('',upload.single('s_timetable_pdfpath'),function(req,res,next){
        stu_timetable_model.addStudentTimetable(req.body,req.file.filename,function(err,rows){
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
    
    router.delete('/:fk_class_id',function(req,res,next){
        stu_timetable_model.deleteStudentTimetable(req.params.fk_class_id,function(err,rows){
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
        stu_timetable_model.viewStudentTimetable(function(err,rows){
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

    router.get('/:fk_class_id',function(req,res,next){
        stu_timetable_model.getStudentTimetableByclass(req.params.fk_class_id,function(err,rows){
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
        stu_timetable_model.deleteAllStudentTimetable(function(err,rows){
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

