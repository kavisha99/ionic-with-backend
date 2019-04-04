var db=require('../../dbconnection');
var notes={
    addNotes:function(item,filename,callback)
    {
        db.query('insert into notes_tbl values(?,?,?,?,?,?,?,?)',
        [item.notes_id,item.notes_title,item.notes_description,
        filename,item.notes_date,item.fk_class_id,
        item.fk_div_id,item.notes_uploadedby],
        callback);
    },

    viewNotes:function(callback)
    {
        db.query('select * from notes_tbl',callback);
    },

    getNotesById:function(notes_id,callback)
    {
        db.query('select * from notes_tbl where notes_id=?',[notes_id],callback);
    },

    deleteNotes:function(notes_id,callback)
    {
        db.query('delete from notes_tbl where notes_id=?',[notes_id],callback);
    },

    deleteAllNotes:function(callback)
    {
        db.query('delete from notes_tbl',callback);
    },

    updateNotesById:function(item,notes_id,callback)
    {
            return db.query('update notes_tbl set notes_title=?,notes_description=?,notes_attachment=?,notes_date=?,fk_class_id=?,fk_div_id=?,notes_uploadedby=? where notes_id=?',
            [item.notes_title,item.notes_description,
                item.attachment,item.notes_date,item.fk_class_id,
                item.fk_div_id,item.notes_uploadedby,notes_id]
               ,callback);
    }
    
}

module.exports=notes;