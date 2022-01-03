var FactoryCampaign = artifacts.require("FactoryCampaign");

module.exports = async function (deployer) {
  await deployer.deploy(FactoryCampaign);
};
