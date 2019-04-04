var db=require('../../dbconnection');
var homework={
    addHomework:function(item,callback)
    {
        db.query('insert into homework_tbl values(?,?,?,?,?,?)',
        [item.h_id,item.h_subject,item.h_date,item.h_description,item.h_uploadedby,
        item.h_class,item.h_div],
        callback);
    },

    viewHomework:function(callback)
    {
        db.query('select * from homework_tbl',callback);
    },

    getHomeworkById:function(h_class,h_div,callback)
    {
        db.query('select * from homework_tbl where h_class=? and h_div=?',[h_class,h_div],callback);
    },

    deleteHomework:function(h_id,callback)
    {
        db.query('delete from homework_tbl where h_id=?',[h_id],callback);
    },

    deleteAllHomework:function(callback)
    {
        db.query('delete from homework_tbl',callback);
    },

    updateHomeworkById:function(item,h_id,callback)
    {
            return db.query('update homework_tbl set h_subject,h_date=?,h_description=?,h_uploadedby=?,h_class=?,h_div=? where h_id=?',
            [item.h_subject,item.h_date,item.h_description,item.h_uploadedby,
                item.h_class,item.h_div,h_id]
               ,callback);
    }
    
}

module.exports=homework;