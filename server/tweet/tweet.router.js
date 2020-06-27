const express = require('express')
const tweetsRouter = express.Router();
const tweetModel = require('./tweets.model.js')
const connect = require('../utils/db')
// Twitter Post Method
tweetsRouter.route('/')
  .post((req, res) => {

    var db = connect
    const tweet = new tweetModel(req.body)
    console.log(tweet)
    try {
      const newTweet =  db.tweets.insertOne(tweet)
      res.status(201).json(newTweet);
    } catch (err) {
      console.log(err.message)
      res.status(400).json({ message: err.message })
    }
  })

tweetsRouter.route('/:id')
  .get()
  .put()
  .delete()

  
module.exports = tweetsRouter
