const HDWalletProvider = require("truffle-hdwallet-provider");

const secret = "0xa181f09a24c8739ea44aeba5095cb049ccb36fe1b9c2e243adbe7511613eca1c";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      from: "0x228099a04cF7cCc537c815883e09836EA29307bf",
      gas: 6721975,
      gasPrice: 20000000000,
    },
    test: {
      provider: () => new HDWalletProvider(secret, "http://localhost:8545"),
      port: 8545,
      from: "0x6039167D825C6a727e146C48D054EA8570DeB08b",
      network_id: "1641232476259",
    },
  },
  compilers: {
    solc: {
      version: "0.4.17", // ex:  "0.4.20". (Default: Truffle's installed solc)
    },
  },
};
