var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var student=require('./routes/StudentRoutes/student_routes');
var profilepic=require('./routes/StudentRoutes/profilepic_routes');
var login=require('./routes/LoginRoutes/login_routes');
var teacher=require('./routes/TeacherRoutes/Teacher_route1');
var t_profile=require('./routes/TeacherRoutes/Teacher_profilepic');
var users=require('./routes/user_route');
var user_update=require('./routes/user_update')
var notice=require('./routes/notice_route');
var s_attendance=require('./routes/Teacher_Dashboard_Routes/s_attendance_routes');
var classTeacher=require('./routes/classTeacher_routes');
var classTeacher1=require('./routes/classTeacher_route1');
var div=require('./routes/division_routes');
var notesAddGetDelete=require('./routes/notes_routes/notes_route');
var updateNotes=require('./routes/notes_routes/updateNotes_route');
var addGetLeaves=require('./routes/leave_routes/leave_route');
var stu_timetable=require('./routes/student_timetable/student_timetable_routes');
var class_tbl=require('./routes/class_routes/class_routes');
var emailVarify=require('./routes/email_varify_route/email_varify_routes');
var homework=require('./routes/homework/homework_route');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students',student);
app.use('/profile',profilepic);
app.use('/login',login);
app.use('/teacher',teacher);
app.use('/tprofile',t_profile);
app.use('/user',users);
app.use('/userupdate',user_update);
app.use('/notice',notice);
app.use('/s_attendance',s_attendance);
app.use('/classTeacher',classTeacher);
app.use('/classTeacher1',classTeacher1);
app.use('/div',div);
app.use('/notesAddGetDelete',notesAddGetDelete);
app.use('/updateNotes',updateNotes);
app.use('/addGetLeaves',addGetLeaves);
app.use('/stu_timetable',stu_timetable);
app.use('/class',class_tbl);
app.use('/emailvarify',emailVarify);
app.use('/homework',homework);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
