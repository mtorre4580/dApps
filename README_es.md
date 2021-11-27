# DApps  

Aplicaciones decentralizadas que corren en una red blockchain o en una red peer-to-peer (P2P)

## Blockchain

La cadena de bloques se encuentra compuesta por diferentes bloques unidos entre si.
Dichos bloques contienen transacciones y almacenan la huella digital del bloque inmediatamente anterior, 
de tal modo que es practicamente imposible poder modificar un bloque sin que todos los bloques sucesivos queden invalidados

## Ethereum

Ethereum es una plataforma decentralizada que permite correr Smart Contracts, son máquinas distribuidas en varios
nodos que ejecutan el código, sin posibilidad de fraude o intervención de terceros

- La red de ethereum son usadas para transferir dinero y guardar datos
- Existen varias redes
- Las redes estan formadas por nodos, donde cada nodo es 1 máquina
- Cada nodo contiene una copia del blockchain
- Blockchain es una base de datos que guarda el registro de cada transacción

## Smart Contracts

Los Smart Contracts en Ethereum, permiten ejecutar código en el blockchain

## EVM (Ethereum Virtual Machine)

La EVM permite que la red de Ethereum pueda ser programable, los Smart Contracts son escritos en un lenguaje de alto nivel 
[Solidity](https://docs.soliditylang.org/en/v0.8.10/), que se compila a bytecode que entiende la EVM.

## Web3

[web3](https://www.npmjs.com/package/web3) libreria para poder comunicarse con el Smart Contract

## Remix

[Remix] (https://remix-project.org/) IDE permite desarrollar, implementar y administrar Smart Contracts para Ethereum.

## Solidity

Lenguaje de programación para crear Smart Contracts

https://docs.soliditylang.org/en/latest/

### Types

- address
- uint
- int
- fixed
- bool
- string

### Types Complex

- fixed array: Array fijo, un solo type
- dynamic array: Array dinamico, un solo type
- mapping: Mapa, similar a javascript key, value
- struct: Struct para crear tipo de datos complejos

### Global variables

- `msg`: Properties data, gas, sender, value

- `require`: Función para validar, si falla la expresión corta el flow

### Modifier

Permite crear funciones para reutilizarlas

````
modifier protected() {
    require();
    _;
}

function myFunction() public protected {

}
````