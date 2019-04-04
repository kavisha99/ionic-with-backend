var db=require('../../dbconnection');
var stu_timetable={
    addStudentTimetable:function(item,filename,callback)
    {
        db.query('insert into stu_timetable_tbl values(?,?,?,?,?)',
        [item.s_timetable_id,item.s_timetable_date,item.fk_class_id,
        item.fk_div_id,filename],
        callback);
    },

    viewStudentTimetable:function(callback)
    {
        db.query('select * from stu_timetable_tbl',callback);
    },

    getStudentTimetableByclass:function(fk_class_id,callback)
    {
        db.query('select * from stu_timetable_tbl where fk_class_id=?',[fk_class_id],callback);
    },

    deleteStudentTimetable:function(fk_class_id,callback)
    {
        db.query('delete from stu_timetable_tbl where fk_class_id=?',[fk_class_id],callback);
    },

    deleteAllStudentTimetable:function(callback)
    {
        db.query('delete from stu_timetable_tbl',callback);
    },

    
    
}

module.exports=stu_timetable;