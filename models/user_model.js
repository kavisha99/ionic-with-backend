var db=require('../dbconnection');
var user={
    AddUser:function(item,callback)
    {
        db.query('insert into user_tbl values(?,?,?)',[item.user_id,item.user_password,item.user_type],callback);
    },
    getUser:function(callback)
    {
        db.query('select * from user_tbl',callback);
    },
    getUserById:function(user_id,callback)
    {
        db.query('select * from user_tbl where user_id=?',[user_id],callback);
    },
    deleteUser:function(user_id,callback)
    {
        db.query('delete from user_tbl where user_id=?',[user_id],callback);
    },
    updateUser:function(item,user_id,callback)
    {
            return db.query('update user_tbl set user_password=?,user_type=? where user_id=?',[item.user_password,item.user_type,user_id],callback);
    },
    updateuserPassword:function(item,user_id,callback)
    {
            return db.query('update user_tbl set user_password=? where user_id=?',[item.user_password,user_id],callback);
    },
};
module.exports=user;