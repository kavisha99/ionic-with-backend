var db=require('../../dbconnection');
var student={
    viewClass:function(callback)
    {
        db.query('select * from student_tbl',callback);
    },
    AddStudent:function(item,filename,callback)
    {
        db.query('insert into student_tbl values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [item.s_gr_no,item.s_roll_no,item.s_sname,item.s_fname,item.s_lname,item.s_gender,item.s_dob,
            item.s_email,item.s_address,item.s_class,item.s_div,item.s_contactno,item.s_category,
            item.s_bloodgroup,filename,item.fk_u_id],
        callback);
    },
    
    deleteStudent:function(fk_u_id,callback)
    {
        db.query('delete from student_tbl where fk_u_id=?',[fk_u_id],callback);
    },
    deleteAll:function(callback)
    {
        db.query('delete from student_tbl',callback);
    },
    updateStudent:function(item,fk_u_id,callback)
    {
            return db.query('update student_tbl set s_roll_no=?,s_sname=?,s_fname=?,s_lname=?,s_gender=?,s_dob=?,s_email=?,s_address=?,s_class=?,s_div=?,s_contactno=?,s_category=?,s_bloodgroup=? where fk_u_id=?',[item.s_roll_no,item.s_sname,item.s_fname,item.s_lname,item.s_gender,item.s_dob,
                item.s_email,item.s_address,item.s_class,item.s_div,item.s_contactno,item.s_category,
                item.s_bloodgroup,fk_u_id],callback);
    },
    updatePassword:function(item,fk_u_id,callback)
    {
            return db.query('update student_tbl set s_password=? where fk_u_id=?',[item.s_password,fk_u_id],callback);
    },
    getStudentByUserId:function(fk_u_id,callback)
    {
        return db.query('select * from student_tbl where fk_u_id=?',[fk_u_id],callback);
    },
    updateProfilepic:function(item,filename,callback)
    {
        return db.query('update student_tbl set s_profilepic=? where fk_u_id=?',[filename,item.fk_u_id],callback);
    },
    getStudentByUserIdforprofilepic:function(fk_u_id,callback)
    {
        return db.query('select * from student_tbl where fk_u_id=?',[fk_u_id],callback);
    }
};

module.exports=student;