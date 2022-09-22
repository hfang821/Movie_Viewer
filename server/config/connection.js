const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/moviedb',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
).then(con=>{
  console.log(`MongoDB database connected with host: ${con.connection.host}`)
})


module.exports = mongoose.connection;