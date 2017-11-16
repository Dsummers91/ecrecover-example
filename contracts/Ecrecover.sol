pragma solidity ^0.4.18;

contract Ecrecover {
  function verify(bytes32 _hash, uint8 _v, bytes32 _r, bytes32 _s) constant returns (address) {
    _hash = keccak256("\x19Ethereum Signed Message:\n32", _hash);
    return ecrecover(_hash, _v, _r, _s);
  }
}
