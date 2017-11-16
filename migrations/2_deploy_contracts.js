var Ecrecover = artifacts.require("./Ecrecover.sol");

module.exports = function(deployer) {
  deployer.deploy(Ecrecover);
};
