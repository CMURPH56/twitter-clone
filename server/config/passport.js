const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local')

const userModel = require('../user/user.model')

passport.use(new LocalStrategy({
  usernameField: 'user[email]',
  passwordField: 'user[password]'
}, (email, password, done) => {
  userModel.findOne({ email})
    .then((user) => {
      if(!user || !user.validatePassword(password)) {
        return done(null, false, {errors: { 'email or password' :'is invalid'}});
      }
      
      return done(null, user)
    }).catch(done);
  }));
