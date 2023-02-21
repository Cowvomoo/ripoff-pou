// run `node index.js` in the terminal
const readline = require('readline');

const mongoose = require('mongoose');

console.log(`Hello Node.js v${process.versions.node}!`);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('se llama gilbert \n', (res) => {
  console.log('que linda es no');
  console.log(res);
});
//
