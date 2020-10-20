const mongoose = require('mongoose')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const { Schema } = mongoose

const UsersSchema = new Schema({
  email: String,
  hash: String,
  salt: String,
})
