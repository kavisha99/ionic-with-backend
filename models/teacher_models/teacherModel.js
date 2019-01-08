var db=require('../../dbconnection');
var teacher={
    viewTeacherList:function(callback)
    {
        db.query('select * from teacher_tbl',callback);
    },
    AddTeacher:function(item,filename,callback)
    {
        db.query('insert into teacher_tbl values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [item.t_name,item.t_address,item.t_email,item.t_qualification,filename,item.t_contactno,item.t_userid,
            item.t_password,item.t_subjectname,item.t_classteacher,item.t_classdiv,item.t_dob,item.t_category,
            item.t_gender],
        callback);
    },
    deleteTeacher:function(t_id,callback)
    {
        db.query('delete from teacher_tbl where t_id=?',[t_id],callback);
    },
    deleteAll:function(callback)
    {
        db.query('delete from teacher_tbl',callback);
    },
    updateTeacher:function(item,t_id,callback)
    {
            return db.query('update teacher_tbl set t_id=?,t_name=?,t_address=?,t_email=?,t_qualification=?,t_profilepic=?,t_contactno=?,t_userid=?,t_password=?,t_subjectname=?,t_classteacher=?,t_classdiv=?,t_dob=?,t_category=?,t_gender=? where t_id=?',
            [item.t_name,item.t_address,item.t_email,item.t_qualification,filename,item.t_contactno,item.t_userid,
                item.t_password,item.t_subjectname,item.t_classteacher,item.t_classdiv,item.t_dob,item.t_category,
                item.t_gender]
               ,callback);
    },
    getTeacherById:function(t_id,callback)
    {
        return db.query('select * from teacher_tbl where t_id=?',[t_id],callback);
    },
    updateProfilepic:function(item,filename,callback)
    {
        return db.query('update teacher_tbl set t_profilepic=? where t_id=?',[filename,item.t_id],callback);
    },
    getTeacherByidforprofilepic:function(t_id,callback)
    {
        return db.query('select * from teacher_tbl where t_id=?',[t_id],callback);
    }
};

module.exports=teacher;