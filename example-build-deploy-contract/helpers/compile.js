const path = require("path");
const fs = require("fs");
const solc = require("solc");

// Read the file from contracts folder and compile
// Return only the ABI and the bytecode, used to deploy and interact with the smart contract 
function compile(name) {
  const contract = `${name}.sol`;
  const pathContract = path.resolve(__dirname, `../contracts/${contract}`);
  const source = fs.readFileSync(pathContract, "utf8");
  const input = {
    language: "Solidity",
    sources: {
      [contract]: {
        content: source,
      },
    },
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"],
        },
      },
    },
  };

  const output = JSON.parse(solc.compile(JSON.stringify(input)));

  const {
    abi,
    evm: {
      bytecode: { object },
    },
  } = output.contracts[contract][name];

  return {
    abi,
    bytecode: object,
  };
}

module.exports = compile;
