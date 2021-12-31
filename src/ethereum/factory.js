import web3 from "./web3";
import factory from "./build/FactoryCampaign.json";

const instance = new web3.eth.Contract(
  JSON.parse(factory.interface),
  "0x57eF7c6fE51E0c56ecdc2416c3F196f389dAbf54"
);

export default instance;
