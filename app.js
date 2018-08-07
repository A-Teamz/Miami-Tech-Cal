require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path = require('path');

const LocalStrategy = require('passport-local').Strategy;
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');

const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

require('./config/passport');
// require('./config/cloudinary');


mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/starter-code', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


// Sessions
app.use(session({
  secret: 'angular auth passport secret shh',
  resave: true,
  saveUninitialized: true
}));
      
app.use(passport.initialize());
app.use(passport.session());


// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';


//so the API chills
app.use(cors({
  credentials: true,
  origin: ['http://localhost:4200']
}));



const index = require('./routes/index');
app.use('/', index);

const eventRoutes = require('./routes/events');
app.use('/api', eventRoutes);

const authRoutes = require('./routes/auth-routes');
app.use('/api', authRoutes);

const commentsRoutes = require('./routes/comments-routes');
app.use('/api', commentsRoutes);


app.all('/*', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;