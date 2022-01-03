import FactoryCampaign from "./abi/FactoryCampaign.json";
import Campaign from "./abi/Campaign.json";
import web3 from "./web3";

export const getCampaignContract = (address) => {
  return new web3.eth.Contract(JSON.parse(Campaign.interface), address);
};

export default new web3.eth.Contract(
  JSON.parse(FactoryCampaign.interface),
  "0x4348d0a4252e1990dbfc265548ee7d5594b00d32"
);
