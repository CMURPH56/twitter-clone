const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const MongoClient = require('mongodb').MongoClient
const tweetsRouter = require('./tweet/tweet.router')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  dotenv.config()

  // var db;
  // MongoClient
  //   .connect(process.env.MONGO_URI,
  //     function(err, client) {
  //       if (err) throw err
  //       db = client.db('twitter-clone')
  //       console.log('Connected to Database')
  //     })
    
  // express work 
  app.use('/api/tweets/', tweetsRouter)
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
