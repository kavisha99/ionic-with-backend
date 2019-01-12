var db=require('../../dbconnection');
var teacher={
    viewTeacherList:function(callback)
    {
        db.query('select * from teacher_tbl',callback);
    },
    AddTeacher:function(item,filename,callback)
    {
        db.query('insert into teacher_tbl values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [item.t_number,item.t_name,item.t_address,item.t_email,item.t_qualification,filename,item.t_contactno,item.fk_u_id,
            item.t_password,item.t_classdiv,item.t_class,item.t_dob,item.t_category,
            item.t_gender],
        callback);
    },
    deleteTeacher:function(t_number,callback)
    {
        db.query('delete from teacher_tbl where t_number=?',[t_number],callback);
    },
    deleteAll:function(callback)
    {
        db.query('delete from teacher_tbl',callback);
    },
    updateTeacher:function(item,t_number,callback)
    {
            return db.query('update teacher_tbl set t_name=?,t_address=?,t_email=?,t_qualification=?,t_profilepic=?,t_contactno=?,t_password=?,t_class=?,t_classdiv=?,t_dob=?,t_category=?,t_gender=? where t_number=?',
            [item.t_name,item.t_address,item.t_email,item.t_qualification,item.t_profilepic,item.t_contactno,
                item.t_password,item.t_class,item.t_classdiv,item.t_dob,item.t_category,
                item.t_gender,t_number]
               ,callback);
    },
    getTeacherById:function(t_number,callback)
    {
        return db.query('select * from teacher_tbl where t_number=?',[t_number],callback);
    },
    updateProfilepic:function(item,filename,callback)
    {
        return db.query('update teacher_tbl set t_profilepic=? where t_number=?',[filename,item.t_number],callback);
    },
    getTeacherByidforprofilepic:function(t_number,callback)
    {
        return db.query('select * from teacher_tbl where t_number=?',[t_number],callback);
    }
};

module.exports=teacher;