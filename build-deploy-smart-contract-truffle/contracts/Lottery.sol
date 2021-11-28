// Define the licence of the contract, more info in https://spdx.org/licenses/
// SPDX-License-Identifier: GPL-3.0

// Current version compiler
pragma solidity >=0.7.0 <0.9.0;

contract Lottery {

    // address with the person who created the smart contract
    address public manager;

    // array of address with all the players in the lottery
    address[] public players;

    constructor() {
        manager = msg.sender;
    }

    // join to the lottery, to join you need to pay ether
    function enter() public payable {
        // validate the value before add the player
        require(msg.value > .02 ether);
        players.push(msg.sender);
    }

    // generate custom random number
    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty)));
    }

    // get a winner with the random utils
    function pickWinner() public protected {
        // validate only the manager pick the winner
        require(manager == msg.sender);
        // get random value
        uint index = random() % players.length;
        // retrieve the index from the player winner
        address winner = players[index];
        // retrieve the current address
        address lotteryAddress = address(this);
        // send all the balance inside the contract
        payable(winner).transfer(lotteryAddress.balance);
        // clean all players
        players = new address[](0);
    }

    // create a modifier to validations
    modifier protected() {
        require(msg.sender == manager);
        _;
    }

    function getPlayers() public view returns (address[] memory) {
        return players;
    }
}