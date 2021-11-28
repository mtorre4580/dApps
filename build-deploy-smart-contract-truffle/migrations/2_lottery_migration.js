let LotteryContract = artifacts.require("./Lottery.sol");

module.exports = function (deployer) {
  deployer.deploy(LotteryContract);
};
