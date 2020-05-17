const express = require('express')
const tweetsRouter = express.Router();

const controller = (req, res) => {
  res.send({ message: 'hello' })
}

tweetsRouter.route('/')
  .get(controller)
  .post(controller)

tweetsRouter.route('/:id')
  .get(controller)
  .put(controller)
  .delete(controller)

  
module.exports = tweetsRouter
