const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const compile = require("../compile");

// Instance web3 with the provider from ganache
const web3 = new Web3(ganache.provider());

// Compile the contract "Storage.sol"
const { abi, bytecode } = compile("Storage");

let accounts;
let contract;
let initalNumber = 1234;

beforeEach(async () => {
  // Get new accounts for each test
  accounts = await web3.eth.getAccounts();

  // Create the contract with the ABI
  contract = await new web3.eth.Contract(abi)
    // Deploy the contract with the first account from ganache
    // arguments is used to pass data to the constructor (SmartContract)
    .deploy({ data: bytecode, arguments: [initalNumber] })
    .send({ from: accounts[0], gas: 1000000 });
});

describe("Storage contract", async () => {
  it("deploys a contract", () => {
    // Check if the address exists, it's ok the deploy
    assert.ok(contract.options.address);
  });

  it("should initialize the contract with the initalNumber", async () => {
    // Call the method "retrieve" from the smart contract
    const number = await contract.methods.retrieve().call();

    assert.equal(number, initalNumber);
  });

  it("should be abble to change the number", async () => {
    const numberToUpdate = 5678;
    // Call the method "store" from the smart contract
    await contract.methods.store(numberToUpdate).send({ from: accounts[0] });

    const updatedNumber = await contract.methods.retrieve().call();

    assert.equal(updatedNumber, numberToUpdate);
  });
});
