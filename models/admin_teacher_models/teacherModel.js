var db=require('../../dbconnection');
var teacher={
    viewTeacherList:function(callback)
    {
        db.query('select * from teacher_tbl',callback);
    },
    AddTeacher:function(item,filename,callback)
    {
        db.query('insert into teacher_tbl values(?,?,?,?,?,?,?,?,?,?,?)',
        [item.t_number,item.t_name,item.t_address,item.t_email,item.t_qualification,filename,item.t_contactno,item.fk_u_id
            ,item.t_dob,item.t_category,
            item.t_gender],
        callback);
    },
    deleteTeacher:function(fk_u_id,callback)
    {
        db.query('delete from teacher_tbl where fk_u_id=?',[fk_u_id],callback);
    },
    deleteAll:function(callback)
    {
        db.query('delete from teacher_tbl',callback);
    },
    updateTeacher:function(item,fk_u_id,callback)
    {
            return db.query('update teacher_tbl set t_name=?,t_address=?,t_email=?,t_qualification=?,t_profilepic=?,t_contactno=?,t_dob=?,t_category=?,t_gender=? where fk_u_id=?',
            [item.t_name,item.t_address,item.t_email,item.t_qualification,item.t_profilepic,item.t_contactno,item.t_dob,item.t_category,
                item.t_gender,fk_u_id]
               ,callback);
    },
    getTeacherByUserId:function(fk_u_id,callback)
    {
        return db.query('select * from teacher_tbl where fk_u_id=?',[fk_u_id],callback);
    },
    updateProfilepic:function(item,filename,callback)
    {
        return db.query('update teacher_tbl set t_profilepic=? where fk_u_id=?',[filename,item.fk_u_id],callback);
    },
    getTeacherByUseridforprofilepic:function(fk_u_id,callback)
    {
        return db.query('select * from teacher_tbl where fk_u_id=?',[fk_u_id],callback);
    }
};

module.exports=teacher;