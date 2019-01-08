var db=require('../dbconnection');
var nodemailer = require('nodemailer');
var login={
     onLogin:function(item,callback){
        db.query('select * from user_tbl where user_id=? and user_password=? and user_type=?',[item.user_id,item.user_password,item.user_type],callback);
    },
    getUsers:function(callback)
    {
        db.query('select * from user_tbl',callback);
    },
 
 sendMail:function(demo,callback){   
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aamena.shaikh98@gmail.com',
    pass: 'aamena@1508'
  }
});

var mailOptions = {
  from: 'aamena.shaikh98@gmail.com',
  to: demo.to,
  subject: 'sfasdfsdf',
  text: 'sgfsafgsfdsgsgsdfsdfsdfsdf'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

 }
}


module.exports=login;