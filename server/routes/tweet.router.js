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
    tweet.save()
    console.log(tweet);
    res.send({message: 'worked'})
  })

tweetsRouter.route('/:id')
  .get(controller)
  .put(controller)
  .delete(controller)

  
module.exports = tweetsRouter
