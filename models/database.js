const mongoose = require('mongoose');
require('dotenv').config();

const baseUri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

if (!baseUri || !dbName) {
  throw new Error('MONGODB_URI أو DB_NAME غير معرف في متغيرات البيئة');
}

const uri = `${baseUri}/${dbName}`;

mongoose
  .connect(uri)
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose;
