const tweetModel = require('./tweets.model.js')
const connect = require('../utils/db')
import mongoose from 'mongoose'

const run = async () => {
  await connect()

}
