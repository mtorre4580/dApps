const { compile, logger } = require('./helpers');

const { abi, bytecode } = compile('Storage');

logger('\n------------ABI------------\n');

console.log(abi);

logger('\n------------BYTECODE------------\n');

console.log(bytecode);