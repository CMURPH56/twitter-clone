const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const tweetsRouter = require('./tweet/tweet.router')
const userRouter = require('./user/user.router')
const dotenv = require('dotenv')

require('./user/user.model')
const tweetModel = require('./tweet/tweets.model.js')
const passportConfig = require('./config/passport')

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

  app.use(express.json())

  app.use('/api/auth', userRouter)

  app.use('/api/tweets/', tweetsRouter)
  
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
