require('dotenv').config();

module.exports = {
    MONGO_DB: process.env.MONGO_DB || 'mongodb://localhost/rental',
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: '127.0.0.1',
    PORT: process.env.PORT ||  3000
  }