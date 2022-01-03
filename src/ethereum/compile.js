const solc = require("solc");
const fs = require("fs-extra");
const path = require("path");

const buildPath = path.resolve(__dirname, "abi");

const contract = path.resolve(__dirname, "contracts", "Campaign.sol");

const src = fs.readFileSync(contract, "utf8");
const output = solc.compile(src, 1).contracts;

fs.ensureDirSync(buildPath);

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}
