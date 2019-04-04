var db=require('../../dbconnection');
var class_model={
    viewClass:function(callback)
    {
        db.query('select * from class_tbl',callback);
    },
    viewClassById:function(class_id,callback)
    {
        db.query('select * from class_tbl where class_id=?',[class_id],callback);
    }
};
module.exports=class_model;