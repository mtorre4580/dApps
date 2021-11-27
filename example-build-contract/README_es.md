# Ejemplo para compilar un smart contract con la libreria solc

## Pasos

1. Se lee el Smart contract, al no ser código javascript, utilizando `fileSync` de node por ejemplo.
2. Se compila el Smart contract con la función `compile` de la lib [solc](https://www.npmjs.com/package/solc).
3. Se obtiene el bytecode que va ser leido por la [EVM](https://ethereum.org/en/developers/docs/evm/) (Ethereum Virtual Machine) y el [ABI](https://ethereum.org/en/developers/docs/smart-contracts/compiling/#web-applications) (Application binary Interface) es un JSON que se utiliza para entender el Smart contract y llamar a las funciones.

