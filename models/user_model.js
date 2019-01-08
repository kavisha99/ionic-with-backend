var db=require('../dbconnection');
var user={
    AddUser:function(item,callback)
    {
        console.log(item.user_id);
        console.log(item.user_password);
        console.log(item.user_type);

        db.query('insert into user_tbl values(?,?,?)',[item.user_id,item.user_password,item.user_type],callback);
    },
    getUser:function(callback)
    {
        db.query('select * from user_tbl',callback);
    }
    
};
module.exports=user;