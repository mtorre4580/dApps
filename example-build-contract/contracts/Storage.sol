// Define the licence of the contract, more info in https://spdx.org/licenses/
// SPDX-License-Identifier: GPL-3.0

// Current version compiler
pragma solidity >=0.7.0 <0.9.0;

contract Storage {

    uint256 number;

    // Store the number in the smart contract
    function store(uint256 num) public {
        number = num;
    }

    // Retrieve the data from number
    function retrieve() public view returns (uint256){
        return number;
    }
}