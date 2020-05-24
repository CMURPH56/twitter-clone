var mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema({
  id: Number,
  user: String,
  handle: String,
  message: String,
  liked: Boolean,
  comments: [String],
  hashTags: [String]
})

var tweetModel = mongoose.model('TweetSchema', tweetSchema)

module.exports =  tweetModel
