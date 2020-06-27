const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const MongoClient = require('mongodb').MongoClient
const tweetsRouter = require('../server/routes/tweet.router')
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

  
  MongoClient
    .connect(process.env.MONGO_URI,
      function(err, client) {
        if (err) throw err
        var db = client.db('twitter-clone')
        db.collection('tweets').find().toArray(function (err, result) {
          if(err) throw err
          console.log(result)
        })
      }
    )

    // express work 
  app.use(express.json());
  app.use('/api/tweets/', tweetsRouter)

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
