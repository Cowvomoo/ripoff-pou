// run `node index.js` in the terminal
const readline = require('readline');

const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://spektree1:BeginningMeepCityDos2@cluster0.tpyi0wq.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(console.log('connected!'))
  .catch((err) => console.error(err));

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
