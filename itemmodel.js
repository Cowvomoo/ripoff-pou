const mongoose = require('mongoose');

const item = new mongoose.Schema({
  price: Number,
  name: String,
});
