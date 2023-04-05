//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Centry.sol";

contract FactoryCentry {

    Centry[] public centrys;

    event CentryCreated(Centry _centry);

    function createCentry(
        address payable _recipient,
        uint8 _maxParticipants, 
        uint256 _entranceFee, 
        string memory _description, 
        uint256 _numOfDays
        ) 
        public 
    {
        Centry centry = (new Centry)(_recipient, _maxParticipants, _entranceFee, _description, _numOfDays);

        centrys.push(centry);
        emit CentryCreated(centry);
    }

}