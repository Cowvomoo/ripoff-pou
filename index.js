// run `node index.js` in the terminal
const readline = require('readline');

const Gilbert = require('./gilbertschema.js');

const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://spektree1:BeginningMeepCityDos2@cluster0.tpyi0wq.mongodb.net/Gilbert?retryWrites=true&w=majority'
  )
  .then(console.log('connected!'))
  .catch((err) => console.error(err));

console.log(`Hello Node.js v${process.versions.node}!`);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let gilb;
const login = (name) => {
  return new Promise((resolve, reject) => {
    gilb = Gilbert.find((x) => x === name);
    console.log(gilb);
    if (gilb === []) {
      reject('xd');
    } else {
      resolve('xd');
    }
  });
};

rl.question('Please Enter Your Name to Log In \n', (res) => {
  let tempName = res;
  login(res).then(
    console.log(`You have been logged in as ${gilb.name}`).catch((x) => {
      console.log(`User Not Found`);
      rl.question(
        'Would You Like To Create a New Gilbert?\n (Please Respond Y or N) \n',
        (res) => {
          if (res === 'Y') {
            gilb = new Gilbert();
            gilb.name = tempName;
          } else {
            console.log('oh... ok! restart program if you change your mind \n');
          }
        }
      );
    })
  );
});
//
