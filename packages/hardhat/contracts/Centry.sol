//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Centry {

    address payable public recipient;
    uint256 public entranceFee;
    string public description;
    uint8 public immutable maxParticipants;
    uint8 public pCounter;

    mapping(address => bool) public isParticipant;

    event Newparticipant(address _participant);

    constructor(address payable _recipient, uint8 _maxParticipants, uint256 _entranceFee, string memory _description){
        recipient = _recipient;
        maxParticipants = _maxParticipants;
        entranceFee = _entranceFee;
        description = _description;
    }

    function enterCentry() public payable {
        require(msg.value == entranceFee, "Not enough ETH");
        isParticipant[msg.sender] = true;
        pCounter += 1;
        emit Newparticipant(msg.sender);
        
        if (pCounter == maxParticipants){
            _payRecipient();
        }
        
    }

    function _payRecipient() internal {
        (bool sent,) = recipient.call{value: address(this).balance}("");
        require(sent, "Failed to send ETH");
    }
}