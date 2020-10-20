const express = require('express')
const userRouter = express.Router()
const mongoose = require('mongoose')

userRouter.route('/')
  .post((req, res) => {
    res.send({'message': 'it worked'})
  })

  module.exports = userRouter
