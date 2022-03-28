const BN = require('bn.js');

require('dotenv').config();

const {
    OWNER
} = process.env;

const Jwan = artifacts.require("Jwan");

const debug = "true";

const ZERO = new BN(0);
const ONE = new BN(1);
const TWO = new BN(2);
const THREE = new BN(3);

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

module.exports = async function (deployer, network) {
    await deployer.deploy(
        Jwan
    );
    let JwanInst = await Jwan.deployed();
    await JwanInst.transfer(OWNER, await JwanInst.totalSupply());
    console.log("Jwan =", JwanInst.address);
};