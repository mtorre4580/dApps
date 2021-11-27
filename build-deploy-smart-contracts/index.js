const compile = require("./compile");
const deploy = require("./deploy");

// Replace this values with your config
const URL_INFURA = '';
const MNEMONIC = '';

(async () => {
  console.log("Compiling Smart Contract...");

  const contract = compile("Storage");

  const { abi, bytecode } = contract;

  console.log("Deploying Smart Contract in https://infura.io");

  await deploy({
    mnemonic: MNEMONIC,
    url: URL_INFURA,
    contract: {
      abi,
      bytecode,
      arguments: [1],
    },
  });

  console.log("Deploying success...");
})();
