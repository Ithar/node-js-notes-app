const validator = require('validator');
const chalk = require('chalk');

const getNotes = require('./notes.js');

console.log(validator.isEmail('jane.doe@example.com'));
console.log(validator.isURL('http://test.com'));

console.log(chalk.bluers.bold(getNotes()));

