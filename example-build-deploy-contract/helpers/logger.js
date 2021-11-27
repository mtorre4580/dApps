const { green } = require('chalk');

function logger(message) {
  console.log(green(message));
}

module.exports = logger;
