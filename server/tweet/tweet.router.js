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
      console.log(newTweet)
      try {
        connection.db.collection('tweets').insertOne(newTweet)
        res.status(201).json(newTweet);
      } catch (err) {
        console.log(err.message)
        res.status(400).json({ message: err.message })
      }
    })
  })

tweetsRouter.route('/:id')
  .get()
  .put()
  .delete()

  
module.exports = tweetsRouter
