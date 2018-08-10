const LocalStrategy = require('passport-local').Strategy;
const User          = require('../models/user');
const bcrypt        = require('bcryptjs');
const passport = require('passport');

const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;


passport.serializeUser((loggedInUser, cb) => {
  cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
  User.findById(userIdFromSession, (err, userDocument) => {
    if (err) {
      cb(err);
      return;
    }

    cb(null, userDocument);
  });
});

passport.use(new LocalStrategy((username, password, next) => {
  User.findOne({ username }, (err, foundUser) => {
    if (err) {
      next(err);
      return;
    }

    if (!foundUser) {
      next(null, false, { message: 'Incorrect username' });
      return;
    }

    if (!bcrypt.compareSync(password, foundUser.password)) {
      next(null, false, { message: 'Incorrect password' });
      return;
    }

    next(null, foundUser);
  });
}));

console.log('clientID:  = = == = = = ', process.env.googleClientID);
// for Google login
passport.use(new GoogleStrategy({
  clientID: process.env.googleClientID,  // <----- in ENV 
  clientSecret: process.env.googleClientSecret, // <----- in ENV 
  callbackURL: "/api/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
  
  process.nextTick( ()=> {
    
  





    User.findOne({ googleID: profile.id }, (err, user) => {
      if (err) {
        // console.log("profile.id", )

        return done(err);
      }
      if (user) {
        return done(null, user);
      }

      const newUser = new User({
        googleID: profile.id
      });
      console.log('who is: ', newUser);

      newUser.save((err) => {
        if (err) {

          return done(err);
        }

        done(null, newUser);
      });
    });
  });
}));

