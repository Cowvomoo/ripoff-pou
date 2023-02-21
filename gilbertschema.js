const mongoose = require('mongoose');

const gilbert = new mongoose.Schema({
  name: string,
  password: string,
  hunger: {
    type: int,
    required: true,
    default: 50,
  },
  health: {
    type: string,
    required: true,
    default: 'not sick :D',
  },
  happiness: {
    type: int,
    required: true,
    default: 90,
  },
  energy: {
    type: int,
    required: true,
    default: 90,
  },
  fun: {
    type: int,
    required: true,
    default: 90,
  },

  inventory: array,

  useItem(name) {
    item = this.inventory.filter((item) => item.name === name);
    if (item) {
      item.use(this._id);
    }
  },
});

module.exports = mongoose.model('Gilbert', gilbert);
