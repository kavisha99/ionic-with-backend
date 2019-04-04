var db=require('../dbconnection');
var classTeacher={
    getclassTeacher:function(callback)
    {
        db.query('select * from class_teacher_tbl',callback);
    },
    addclassTeacher:function(item,callback)
    {
        db.query('insert into class_teacher_tbl values(?,?,?,?,?)',
        [item.c_t_id,item.c_t_name,item.c_t_class,item.c_t_div,item.fk_u_id],
        callback);
    },
    
    deleteclassTeacher:function(fk_u_id,callback)
    {
        db.query('delete from class_teacher_tbl where fk_u_id=?',[fk_u_id],callback);
    },
    updateclassTeacher:function(item,fk_u_id,callback)
    {
            return db.query('update class_teacher_tbl set c_t_name=?,c_t_class=?,c_t_div=? where fk_u_id=?',[item.c_t_name,item.c_t_class,item.c_t_div,fk_u_id],callback);
    },
    getclassTeacherByUserId:function(fk_u_id,callback)
    {
        return db.query('select * from class_teacher_tbl where fk_u_id=?',[fk_u_id],callback);
    },
    getUserId:function(c_t_name,callback)
    {
        return db.query('select fk_u_id from teacher_tbl where t_name=?',[c_t_name],callback);
    }
    
};

module.exports=classTeacher;