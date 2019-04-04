var notes=require('../../models/notes_models/notes_model');
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

    router.post('',upload.single('notes_attachment'),function(req,res,next){
        notes.addNotes(req.body,req.file.filename,function(err,rows){
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
    
    router.delete('/:notes_id',function(req,res,next){
        notes.deleteNotes(req.params.notes_id,function(err,rows){
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
        notes.viewNotes(function(err,rows){
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

    router.get('/:notes_id',function(req,res,next){
        notes.getNotesById(req.params.notes_id,function(err,rows){
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
        notes.deleteAllNotes(function(err,rows){
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

