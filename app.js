const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

createFile(argv.b, argv.l, argv.h)
    .then((fileName) => console.log(colors.cyan(fileName), 'created'))
    .catch((e) => console.log(colors.red('ERROR: ', e)))