const mongoose = require('mongoose');

const gilbert = new mongoose.Schema({
  name: String,
  password: String,
  hunger: {
    type: Number,
    required: true,
    default: 50,
  },
  health: {
    type: String,
    required: true,
    default: 'not sick :D',
  },
  happiness: {
    type: Number,
    required: true,
    default: 90,
  },
  energy: {
    type: Number,
    required: true,
    default: 90,
  },
  fun: {
    type: Number,
    required: true,
    default: 90,
  },

  inventory: Array,
});

gilbert.methods.useItem = (name) => {
  item = this.inventory.filter((item) => item.name === name);
  if (item) {
    item.use(this._id);
  }
};
module.exports = mongoose.model('Gilbert', gilbert);
