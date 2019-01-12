var db=require('../dbconnection');
var user={
    AddUser:function(item,callback)
    {
        db.query('insert into user_tbl values(?,?,?)',[item.user_id,item.user_password,item.user_type],callback);
    },
    getUser:function(callback)
    {
        db.query('select * from user_tbl',callback);
    }
    
};
module.exports=user;