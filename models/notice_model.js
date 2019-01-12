var db=require('../dbconnection');
var notice={
    AddNotice:function(item,callback)
    {
        db.query('insert into notice_tbl values(?,?,?,?)',[item.n_id,item.n_date,item.n_title,item.n_description],callback);
    },
    getNotice:function(callback)
    {
        db.query('select * from notice_tbl',callback);
    }
    
};
module.exports=notice;