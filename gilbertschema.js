const mongoose = require('mongoose');

const gilbert = new mongoose.Schema({
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
});

module.exports = mongoose.model('Gilbert', gilbert);
