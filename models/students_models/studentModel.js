var db=require('../../dbconnection');
var student={
    viewClass:function(callback)
    {
        db.query('select * from student_tbl',callback);
    },
    AddStudent:function(item,filename,callback)
    {
        db.query('insert into student_tbl values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [item.s_gr_no,item.s_roll_no,item.s_sname,item.s_fname,item.s_lname,item.s_gender,item.s_dob,
            item.s_email,item.s_address,item.s_class,item.s_div,item.s_contactno,item.s_category,
            item.s_bloodgroup,item.s_classteacher,item.s_password,filename,item.fk_u_id],
        callback);
    },
    
    deleteStudent:function(s_roll_no,callback)
    {
        db.query('delete from student_tbl where s_roll_no=?',[s_roll_no],callback);
    },
    deleteAll:function(callback)
    {
        db.query('delete from student_tbl',callback);
    },
    updateStudent:function(item,s_gr_no,callback)
    {
            return db.query('update student_tbl set s_roll_no=?,s_sname=?,s_fname=?,s_lname=?,s_gender=?,s_dob=?,s_email=?,s_address=?,s_class=?,s_div=?,s_contactno=?,s_category=?,s_bloodgroup=?,s_classteacher=? where s_gr_no=?',[item.s_roll_no,item.s_sname,item.s_fname,item.s_lname,item.s_gender,item.s_dob,
                item.s_email,item.s_address,item.s_class,item.s_div,item.s_contactno,item.s_category,
                item.s_bloodgroup,item.s_classteacher,s_gr_no],callback);
    },
    getStudentBygrno:function(s_gr_no,callback)
    {
        return db.query('select * from student_tbl where s_gr_no=?',[s_gr_no],callback);
    },
    updateProfilepic:function(item,filename,callback)
    {
        return db.query('update student_tbl set s_profilepic=? where s_gr_no=?',[filename,item.s_gr_no],callback);
    },
    getStudentBygrnoforprofilepic:function(s_gr_no,callback)
    {
        return db.query('select * from student_tbl where s_gr_no=?',[s_gr_no],callback);
    }
};

module.exports=student;