const readline = require('readline');

const gilbert = require('./gilbertschema.js');

const mongoose = require('mongoose');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let gilb;
const login = new Promise((name) => {
  gilb = gilbert.find((x) => x === name);
});

rl.question('Please Enter Your Name to Log In \n', (res) => {
  login(res)
    .then(console.log(`You have been logged in as ${gilb.name}`)
    .catch(
      x => {
      console.log(`User Not Found`);
      rl.question('Would You Like To Create a New Gilbert?\n (Please Respond Y or N) \n', (res => {
        if (res === 'Y') {
          
        }
      }))
      })
    )
});