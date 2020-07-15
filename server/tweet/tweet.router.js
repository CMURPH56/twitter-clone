const express = require('express')
const tweetsRouter = express.Router();
const tweetModel = require('./tweets.model.js')
const connect = require('../utils/db')
const mongoose = require('mongoose')

// Twitter Post Method
tweetsRouter.route('/')
  .post((req, res) => {
    mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true})
    const connection = mongoose.connection
    connection.once("open", function(){
      const newTweet = new tweetModel(req.body)
      try {
        connection.db.collection('tweets').insertOne(newTweet)
        res.status(201).json(newTweet);
      } catch (err) {
        console.log(err.message)
        res.status(400).json({ message: err.message })
      }
    })
  })
  .get((req, res) => {
    mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true})
    const connection = mongoose.connection
    connection.once("open", function() {
      try {
        connection.db.collection('tweets').find().toArray(function (err, result) {
          if(err) throw err;
          res.send(result)
        })
      }catch (err){
        console.log(err.message)
      }
    })
  })

tweetsRouter.route('/:id')
  .put()
  .delete()

  
module.exports = tweetsRouter
