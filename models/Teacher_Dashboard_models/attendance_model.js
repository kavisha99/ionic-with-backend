var db=require('../../dbconnection');
var s_attendance={
    AddAttendance:function(item,callback)
    {
        db.query('insert into stu_attendance_tbl values(?,?,?,?,?,?,?)',[item.s_a_id,item.s_a_status,item.fk_s_number,item.s_a_date,item.fk_class_id,item.fk_div_name,item.fk_s_gr_no],callback);
    },
    getStudentByclassdiv:function(c_no,d_name,callback)
    {
        db.query('select s.* from student_tbl s,class_tbl c,division_tbl d where s.s_class=c.class_number and s.s_class=? and s.s_div=d.div_name and s.s_div=?',[c_no,d_name],callback);
    },
    getStudentAttendance:function(callback)
    {
        db.query('select * from stu_attendance_tbl',callback);
    }
};
module.exports=s_attendance;