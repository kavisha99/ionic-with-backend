var notes=require('../../models/notes_models/notes_model');
var express=require('express');
var router=express.Router();
var multer=require('multer');
var path=require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'public/attachment_files')
    },
    filename: (req, file, cb) => {
    x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
    });
    var upload = multer({storage: storage});

    router.put('/:notes_id',function(req,res,next){
        notes.updateNotesById(req.body,req.params.notes_id,function(err,rows){
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
