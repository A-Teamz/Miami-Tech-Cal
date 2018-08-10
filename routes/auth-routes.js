const express    = require('express');
const passport   = require('passport');
const bcrypt     = require('bcryptjs');
const authRoutes = express.Router();
const cors = require('cors');

// const uploadCloud = require("../config/cloudinary");


// User model
const User       = require('../models/user');

authRoutes.post('/signup', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
  
    if (!username || !password) {
      res.status(400).json({ message: 'Provide username and password' });
      return;
    }

    User.findOne({ username }, '_id', (err, foundUser) => {
        if (foundUser) {
            res.status(400).json({ message: 'The username already exists' });
            return;
        }
    
        const salt     = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);
    
        const theUser = new User({
            username,
            password: hashPass
        });
    
        theUser.save((err) => {
            if (err) {
            res.status(400).json({ message: 'Something went wrong' });
            return;
            }
    
            // auto login after sign up
            req.login(theUser, (err) => {
            if (err) {
                res.status(500).json({ message: 'Something went wrong' });
                return;
            }
    
            res.status(200).json(req.user);
            });
        });
    });
});

authRoutes.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, theUser, failureDetails) => {
        if (err) {
            res.status(500).json({ message: 'Something went wrong' });
            return;
        }
    
        if (!theUser) {
            res.status(401).json(failureDetails);
            return;
        }
    
        req.login(theUser, (err) => {
            if (err) {
            res.status(500).json({ message: 'Something went wrong' });
            return;
            }
    
            // We are now logged in (notice req.user)
            res.status(200).json(req.user);
        });
    })(req, res, next);
});
  
authRoutes.post('/logout', (req, res, next) => {
    req.logout();
    res.status(200).json({ message: 'Success' });
});
  
// authRoutes.get('/loggedin', (req, res, next) => {
//     if (req.isAuthenticated()) {
//       res.status(200).json(req.user);
//       return;
//     }
  
//     res.status(403).json({ message: 'Unauthorized' });
// });

 
// Checks if logged in
authRoutes.get('/loggedin', (req, res, next) => {
    console.log('back: ', req.user);
    if (req.user) {
        res.status(200).json(req.user);
    }
    // if (req.isAuthenticated()) {
    //     res.status(200).json(req.user);
    //     return;
    // }
    res.status(403).json({ message: 'Unauthorized' });
}); // loggedin closed

authRoutes.post('/users/edit/:id', (req, res, next) => {
    const password = req.body.password;
    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);
    User.findByIdAndUpdate(req.params.id, {
        username: req.body.username,
        password: hashPass
    })
        .then((oneUser) => {
            res.json(oneUser)
                .catch(err => console.log("message: 'Something went wrong setting new password", err));
        });

    // User.save((err) => {
    //     if (err) {
    //       res.status(400).json({ message: 'Something went wrong' });
    //       return;
    //     }
    // })
});
   
// for Google login 
authRoutes.get("/auth/google", passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login",
            "https://www.googleapis.com/auth/plus.profile.emails.read"]
  }));
  
  authRoutes.get("/auth/google/callback", passport.authenticate("google", {
      
    successRedirect: '/',
		failureRedirect: '/auth/google/failure'
  }));



module.exports = authRoutes;