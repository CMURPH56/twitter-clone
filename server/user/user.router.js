const express = require('express')
const userRouter = express.Router()
const mongoose = require('mongoose')

userRouter.route('/')
  .post((req, res) => {
    console.log('testing')
  })

  module.exports = userRouter
