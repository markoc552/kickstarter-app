import Web3 from "web3";

//window global variable that is available only on browser

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  window.ethereum.enable();
  web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/cfa590d4101540ac842853a371485a85"
  );
  web3 = new Web3(provider); // creating our own provider with url from node that we are accesing
}

export default web3;
