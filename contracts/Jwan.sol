// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Jwan is ERC20 {

    constructor() ERC20("Jwan", "Jwan") {
        _mint(_msgSender(), 11111111111100000000);
    }

    function decimals() public view override returns (uint8) {
        return 8;
    }
}