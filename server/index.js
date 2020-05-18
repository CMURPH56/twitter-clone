const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const MongoClient = require('mongodb').MongoClient
const tweetsRouter = require('../server/routes/tweet.router')
const dotenv = require('dotenv')

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

  // express work 

  app.use('/api/tweets/', tweetsRouter)

  console.log(`test ${process.env.PORT}`)

  MongoClient
    .connect(`mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@ds115396.mlab.com:15396/twitter-clone`,
      function(err, client) {
        if (err) throw err
        var db = client.db('twitter-clone')
        db.collection('tweets').find().toArray(function (err, result) {
          if(err) throw err
          console.log(result)
        })
      }
    )


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
