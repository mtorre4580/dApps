# Example to compile a smart contract with the solc library

## Steps

1. The Smart contract is read, as it isn't Javascript, it needs to be read as if it were a file, using node's `fileSync` for example.
2. The configuration to compile the Smart contract is defined.
3. The Smart contract is compiled with the `compile` function from the [solc](https://www.npmjs.com/package/solc) lib.
4. The bytecode that will be read by the [EVM](https://ethereum.org/en/developers/docs/evm/) is obtained and the [ABI](https://ethereum.org/en/developers/docs/smart-contracts/compiling/#web-applications) (Application binary Interface)


# Ejemplo para compilar un smart contract con la libreria solc

## Pasos

1. Se lee el Smart contract, al no ser Javascript, se necesita leer como si fuera un file, utilizando `fileSync` de node por ejemplo.
2. Se define la configuración para compilar el Smart contract.
3. Se compila el Smart contract con la función `compile` de la lib [solc](https://www.npmjs.com/package/solc).
4. Se obtiene el bytecode que va ser leido por la [EVM](https://ethereum.org/en/developers/docs/evm/) (Ethereum Virtual Machine) y el [ABI](https://ethereum.org/en/developers/docs/smart-contracts/compiling/#web-applications) (Application binary Interface)

