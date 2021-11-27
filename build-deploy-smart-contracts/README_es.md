# Compile / Deploy un smart contract con la libreria solc y web3

## Pasos

1. Se lee el Smart contract, al no ser código Javascript, utilizando `fileSync` de node por ejemplo
2. Se compila el Smart contract con la función `compile` de la lib [solc](https://www.npmjs.com/package/solc)
3. Se obtiene el bytecode que va ser leido por la [EVM](https://ethereum.org/en/developers/docs/evm/) (Ethereum Virtual Machine) y el [ABI](https://ethereum.org/en/developers/docs/smart-contracts/compiling/#web-applications) (Application binary Interface) es un JSON que se utiliza para entender el Smart contract y llamar a las funciones

## Testing

Para testear los Smart Contracts, el primer paso es deployar en una red blockchain, ejecutar algun método o transacción, validar la ejecución mediante asserts

## Libs

- [solc](https://www.npmjs.com/package/solc): Lib para compilar el Smart contract
- [web3](https://www.npmjs.com/package/web3): Lib para poder interactuar con el Smart contract desde Javascript, ejemplo `web3.eth`
- [ganache-cli](https://www.npmjs.com/package/ganache-cli): Lib para crear una red blockchain de prueba para testeo
- [mocha](https://mochajs.org/): Lib para testear los Smart contracts
- [truffle-hd-wallet](https://www.npmjs.com/package/@truffle/hdwallet-provider): Lib para configurar la red de ethereum via infura [infura.io](https://infura.io/)
