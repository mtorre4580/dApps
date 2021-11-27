# Example to compile a smart contract with the solc library

## Steps

1. The smart contract is read, since it is not javascript code, using node's `fileSync` for example.
2. The Smart contract is compiled with the `compile` function from the [solc](https://www.npmjs.com/package/solc) lib.
3. The bytecode that will be read by the [EVM](https://ethereum.org/en/developers/docs/evm/) is obtained and the [ABI](https://ethereum.org/en/developers/docs/smart-contracts/compiling/#web-applications) (Application binary Interface) it's a JSON that is used to understand the Smart contract and call the functions.
