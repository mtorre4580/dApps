const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");

// Deploy Smart Contract with hdwallet-provider
// Pass the mnemonic, url from afura and the contract (bytecode, abi, args)
async function deploy({ mnemonic: phrase, url, contract }) {
  const provider = new HDWalletProvider({
    mnemonic: {
      phrase,
    },
    providerOrUrl: url,
  });

  const web3 = new Web3(provider);
  const { abi, bytecode, arguments } = contract;

  const accounts = await web3.eth.getAccounts();

  await new web3.eth.Contract(abi)
    .deploy({ data: bytecode, arguments })
    .send({ gas: 1000000, from: accounts[0] });
}

module.exports = deploy;
