const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const compile = require("../compile");

// Instance web3 with the provider from ganache
const web3 = new Web3(ganache.provider());

// Compile the contract "Lottery.sol"
const { abi, bytecode } = compile("Lottery");

let accounts;
let contract;

beforeEach(async () => {
  // Get new accounts for each test
  accounts = await web3.eth.getAccounts();

  // Create the contract with the ABI
  contract = await new web3.eth.Contract(abi)
    // Deploy the contract with the first account from ganache
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: 1000000 });
});

describe("Lottery contract", async () => {
  it("deploys a contract", () => {
    // Check if the address exists, it's ok the deploy
    assert.ok(contract.options.address);
  });

  it("should add player to the lottery", async () => {
    // Call method to join the lottery with the minium amount
    await contract.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei("0.03", "ether"),
    });

    // Retrieve the current players
    const players = await contract.methods.getPlayers().call({
      from: accounts[0],
    });

    assert.equal(accounts[0], players[0]);
    assert.equal(1, players.length);
  });

  it("should require minimum amount ether to join", async () => {
    try {
      // Call method to join the lottery with less amount
      await contract.methods.enter().send({
        from: accounts[0],
        value: web3.utils.toWei("0.01", "ether"),
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it("should only call pickWinner the manager", async () => {
    try {
      // Call method to pickup the winner
      await contract.methods.pickWinner().send({
        from: accounts[1],
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });
});
