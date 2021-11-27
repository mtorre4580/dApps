# DApps

Decentralized applications that run on a blockchain network or a peer-to-peer (P2P) network

## Blockchain

The blockchain is made up of different blocks linked together.
These blocks contain transactions and store the fingerprint of the immediately preceding block,
in such a way that it is practically impossible to be able to modify a block without all the successive blocks being invalidated

## Ethereum

Ethereum is a decentralized platform designed to run smart contracts. It is a distributed computer spread across many nodes around 
the world that executes the code people feed in it, without any possibility of downtime, fraud, censorship, or third party intervention

- The ethereum network is used to transfer money and save data
- The are several networks
- Networks are made up of nodes, where each node is 1 machine
- Each node contains a copy of the blockchain
- Blockchain is a database that keeps the record of each transaction

## Smart Contracts

Smart contracts on Ethereum enable us to execute arbitrary computations on the blockchain

## EVM (Ethereum Virtual Machine)

The Ethereum Virtual Machine enables the Ethereum blockchain to be programmable. Ethereum Smart Contracts are written 
in high level programming languages like [Solidity](https://docs.soliditylang.org/en/v0.8.10/), which have to be compiled down to Ethereum Virtual Machine (EVM) code

## Web3

[web3](https://www.npmjs.com/package/web3) library to be able to communicate with the Smart Contract

## Remix

[Remix](https://remix-project.org/) IDE allows developing, deploying and administering smart contracts for Ethereum like blockchains. It can also be used as a learning platform.

## Solidity

Solidity is an object-oriented, high-level language for implementing smart contracts.

https://docs.soliditylang.org/en/latest/

### Types

- address
- uint
- int
- fixed
- bool
- string

### Types Complex

- fixed array
- dynamic array
- mapping: Map, hashmap key, value
- struct: struct to build complex types

### Global variables

- `msg`: Properties data, gas, sender, value

- `require`: Función to validate actions

### Modifier

Build functions , decorators

````
modifier protected() {
    require();
    _;
}

function myFunction() public protected {

}
````