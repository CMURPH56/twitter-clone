const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const userModel = require('../user/user.model')


// TODO: Debug this to get the proper user
// Fails because user.validatePassword is not a function
passport.use(new LocalStrategy({
  usernameField: 'user[email]',
  passwordField: 'user[password]'
}, (email, password, done) => {

  mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true})
  const connection = mongoose.connection
  connection.once("open", function(){
  connection.db.collection('users').findOne({email})
    .then((user) => {
      var formattedUser = new userModel(user);
      console.log(formattedUser)
      if(!formattedUser || !formattedUser.validatePassword(password)) {
        console.log('inside if statement')
        return done(null, false, {errors: {'email or password': 'is invalid'}});
      }
      return done(null,formattedUser)
    }).catch(done);
  })
}));
