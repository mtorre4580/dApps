# Ejemplo compile / deploy un smart contract con la libreria solc y web3

## Pasos

1. Se lee el Smart contract, al no ser código javascript, utilizando `fileSync` de node por ejemplo
2. Se compila el Smart contract con la función `compile` de la lib [solc](https://www.npmjs.com/package/solc)
3. Se obtiene el bytecode que va ser leido por la [EVM](https://ethereum.org/en/developers/docs/evm/) (Ethereum Virtual Machine) y el [ABI](https://ethereum.org/en/developers/docs/smart-contracts/compiling/#web-applications) (Application binary Interface) es un JSON que se utiliza para entender el Smart contract y llamar a las funciones

## Testing

Para testear los Smart Contracts, el primer paso es deployar en una red blockchain, ejecutar algun método o transacción, validar la ejecución mediante asserts

## Libs

- solc: Lib para compilar el Smart contract
- web3: Lib para poder interactuar con el Smart contract desde javascript, ejemplo `web3.eth`
- ganache-cli: Lib para crear una red blockchain de prueba para testeo
- mocha: Lib para testear los Smart contracts
