# Example to compile a smart contract with the solc library

## Steps

1. The Smart contract is read, as it isn't Javascript, it needs to be read as if it were a file, using node's `fileSync` for example.
2. The configuration to compile the Smart contract is defined.
3. The Smart contract is compiled with the `compile` function from the [solc](https://www.npmjs.com/package/solc) lib.
4. The bytecode that will be read by the [EVM](https://ethereum.org/en/developers/docs/evm/) is obtained and the [ABI](https://ethereum.org/en/developers/docs/smart-contracts/compiling/#web-applications) (Application binary Interface)
