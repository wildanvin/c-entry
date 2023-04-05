//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Centry {

    address payable public recipient;
    uint256 public entranceFee;
    uint256 public dueDate;
    string public description;
    uint8 public immutable maxParticipants;
    uint8 public participantsCounter;

    mapping(address => bool) public isParticipant;
    mapping(address => uint256) public balances;

    event NewParticipant(address _participant);

    modifier notFull {
        require (participantsCounter < maxParticipants, "c-entry is full");
        _;
    }

    modifier onlyParticipant {
        require (isParticipant[msg.sender], "Only participants");
        _;
    }

    constructor(address payable _recipient, uint8 _maxParticipants, uint256 _entranceFee, string memory _description, uint256 _numOfDays){
        recipient = _recipient;
        maxParticipants = _maxParticipants;
        entranceFee = _entranceFee;
        description = _description;
        dueDate = block.timestamp + (_numOfDays * 1 days);
    }

    function enterCentry() notFull public payable {
        require(msg.value == entranceFee, "Not enough ETH");
        isParticipant[msg.sender] = true;
        balances[msg.sender] = msg.value;
        participantsCounter += 1;
        emit NewParticipant(msg.sender);
        
        if (participantsCounter == maxParticipants){
            _payRecipient();
        }   
    }

    function claimEntranceFee () onlyParticipant public {
        require(block.timestamp >= dueDate, "Not time yet");
        uint256 amount = balances[msg.sender];
        balances[msg.sender] = 0;
        (bool sent,) = msg.sender.call{value: amount}("");
        require(sent, "Failed to send ETH");
    }

    function _payRecipient() internal {
        (bool sent,) = recipient.call{value: address(this).balance}("");
        require(sent, "Failed to send ETH");
    }
}