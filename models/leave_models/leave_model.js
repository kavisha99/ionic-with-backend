var db = require("../../dbconnection");
var leaves = {
    addLeaves:function(item, callback) {
        console.log("called");
        console.log(item.fk_u_id);
        db.query(
            "insert into leave_tbl(`l_id`, `fk_u_id`, `l_fromdate`, `l_todate`, `l_totaldays`, `l_leavetype`, `l_description`, `l_status`) values(?,?,?,?,?,?,?,?)",
            [
                item.l_id,
                item.fk_u_id,
                item.l_fromdate,
                item.l_todate,
                item.l_totaldays,
                item.l_leavetype,
                item.l_description,
                item.l_status
            ],
            callback
        );
    },

    viewLeaves: function(callback) {
        db.query("select * from leave_tbl", callback);
    },

    getLeavesById: function(l_id, callback) {
        db.query("select * from leave_tbl where l_id=?", [l_id], callback);
    }
};

module.exports = leaves;

