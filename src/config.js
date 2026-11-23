const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV || 'staging'}`) });

module.exports = {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI,
};
