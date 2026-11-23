const express = require('express');
const mongoose = require('mongoose');
const { port, mongoUri } = require('./config');

const app = express();
app.use(express.json());
app.use('/products', require('./product.routes'));

mongoose.connect(mongoUri).then(() => {
  app.listen(port, () => console.log(`[${process.env.NODE_ENV}] running on port ${port}`));
});
