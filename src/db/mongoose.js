const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_SERVER, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
