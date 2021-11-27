# Example to compile a smart contract with the solc library

## Steps

1. The smart contract is read, since it is not javascript code, using node's `fileSync` for example.
2. The Smart contract is compiled with the `compile` function from the [solc](https://www.npmjs.com/package/solc) lib.
3. The bytecode that will be read by the [EVM](https://ethereum.org/en/developers/docs/evm/) is obtained and the [ABI](https://ethereum.org/en/developers/docs/smart-contracts/compiling/#web-applications) (Application binary Interface) it's a JSON that is used to understand the Smart contract and call the functions.


# Ejemplo para compilar un smart contract con la libreria solc

## Pasos

1. Se lee el Smart contract, al no ser código javascript, utilizando `fileSync` de node por ejemplo.
2. Se compila el Smart contract con la función `compile` de la lib [solc](https://www.npmjs.com/package/solc).
3. Se obtiene el bytecode que va ser leido por la [EVM](https://ethereum.org/en/developers/docs/evm/) (Ethereum Virtual Machine) y el [ABI](https://ethereum.org/en/developers/docs/smart-contracts/compiling/#web-applications) (Application binary Interface) es un JSON que se utiliza para entender el Smart contract y llamar a las funciones.

