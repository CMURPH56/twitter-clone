const express = require('express')
const tweetsRouter = express.Router();
const tweetModel = require('../models/tweets.model.js')

const controller = (req, res) => {
  res.send({ message: 'hello' })
}

tweetsRouter.route('/')
  .get(controller)
  .post((req, res) => {
    const tweet = new tweetModel(req.body)
    try {
      const newTweet = tweet.save()
      res.status(201).json(newTweet);
    } catch (err) {
      console.log(err.message)
      res.status(400).json({ message: err.message })
    }

    tweet.save()
    console.log(tweet);
    res.send({message: 'worked'})
  })

tweetsRouter.route('/:id')
  .get(controller)
  .put(controller)
  .delete(controller)

  
module.exports = tweetsRouter
