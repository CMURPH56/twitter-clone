const MongoClient = require('mongodb').MongoClient

const connect = () => {
  return MongoClient
  .connect(process.env.MONGO_URI,
    function(err, client) {
      if (err) throw err
      db = client.db('twitter-clone')
      console.log('Connected to Database')
    })
}
module.exports = connect
