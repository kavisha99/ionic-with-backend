var db=require('../dbconnection');
var div={
    addDiv:function(item,callback)
    {
        db.query('insert into division_tbl values(?,?)',[item.div_id,item.div_name],callback);
    },
    getDiv:function(callback)
    {
        db.query('select * from division_tbl',callback);
    },
    deleteDiv:function(div_name,callback)
    {
        db.query('delete from division_tbl where div_name=?',[div_name],callback);
    },
      
};
module.exports=div;