# Example compile / deploy a smart contract with the solc library and web3

## Steps

1. The smart contract is read, since it is not javascript code, using node's `fileSync` for example
2. The Smart contract is compiled with the `compile` function from the [solc](https://www.npmjs.com/package/solc) lib
3. The bytecode that will be read by the [EVM](https://ethereum.org/en/developers/docs/evm/) is obtained and the [ABI](https://ethereum.org/en/developers/docs/smart-contracts/compiling/#web-applications) (Application binary Interface) it's a JSON that is used to understand the Smart contract and call the functions

## Testing

To test the Smart Contracts, the first step is to deploy in a blockchain network, execute a method or transaction, validate the execution through asserts

## Libs

- solc: Lib to compile Smart contract
- web3: Lib to interact with the Smart contract in javascript, example `web3.eth`
- ganache-cli: Lib to create a network for testing
- mocha: Lib to test the Smart contract