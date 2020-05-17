const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

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
  

  // CRUD -- Create Read Update Destroy
  
  // To post is to create
  app.post('/api/test', (req, res) => {
    console.log('test post')
  })

  // To get is to read 
  app.get('/api/test', (req, res) => {
    res.send({message : 'Welcome Home'});
  });

  // put and post are the same thing kinda 
  
  // To push is to update
  app.push('/api/test', (req,res) => {
    console.log('test push')
  })

  app.delete('/api/test/', (req, res) => {
    console.log('test delete')
  })
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
