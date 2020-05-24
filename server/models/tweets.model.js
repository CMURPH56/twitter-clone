import mongoose from 'mongoose'
import { introspectionFromSchema } from 'graphql'

const tweetSchema = new mongoose.Schema({
  id: Number,
  user: String,
  handle: String,
  message: String,
  liked: Boolean,
  comments: [String],
  hashTags: [String]
})
