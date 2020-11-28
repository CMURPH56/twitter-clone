const mongoose = require('mongoose')
const passport = require('passport')
const router = require('express').Router()
const auth = require('../auth/auth')
const userModel = require('./user.model')


router.post('/create', auth.optional, (req, res, next) => {


  const { body: { user } } = req;


  if(!user){
    return res.status(422).json({
      errors: {
        empty: ' nothing here ',
      },
    });
  }

  if(!user.username){
    return res.status(422).json({
      errors: {
        username: 'is required',
      },
    });
  }

  
  if(!user.email){
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    })
  }

  const finalUser = new userModel(user);

  finalUser.setPassword(user.password);


  mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true})
  const connection = mongoose.connection
  connection.once("open", function(){
    try {
      
      connection.db.collection('users').insertOne(finalUser)
      return res.status(201).json(finalUser.toAuthJSON())
    } catch (err){
      console.log(err.message)
      return res.status(400).json({message: err.message})
    }
  })
});

router.post('/login', auth.optional, (req, res, next) => {

  console.log(req.body)
  
  const { body: { user } } = req;

  if(!user.email){
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password){
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
    console.log('inside return statement')
    if(err) {
      console.log('error')
      return next(err)
    }
    console.log(passportUser)
    console.log('testing')
    if(passportUser) {
      console.log('inside return if')
      const user = passportUser;
      user.token = passportUser.generateJWT();
      return res.json({user: user.toAuthJSON()})
    }
    console.log('after if')
    return res.status(400).info;
  })(req, res, next)
});
module.exports = router
