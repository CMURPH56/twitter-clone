const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const tweetsRouter = require('./tweet/tweet.router')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  const nuxt = new Nuxt(config)
  const { host, port } = nuxt.options.server
  await nuxt.ready()
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  dotenv.config()

  app.use(bodyParser.urlencoded({extended: false}))

  var Tweet = require('./tweet/tweets.model')

  app.post('/api/tweets/', (req, res) => {
    mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true})
    const connection = mongoose.connection
    connection.once("open", function (){
      console.log("successful connection established")
      const tweet = new Tweet(req.body)
      connection.db.collection('tweets').insertOne(
        tweet
      )
    })
  })

  // express work 
  app.use(express.json());
  // Give nuxt middleware to express
  app.use(nuxt.render)
  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
