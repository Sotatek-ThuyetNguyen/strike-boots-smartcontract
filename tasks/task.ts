import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { task } from "hardhat/config";

import { config as dotenvConfig } from "dotenv";
import { ethers, Wallet } from "ethers"
import { getChainConfig } from "../hardhat.config"
import { resolve } from "path";
import {
  StableFinancePool__factory,
  StableFarmingPool__factory
} from "../typechain"
dotenvConfig({ path: resolve(__dirname, "./.env") });


task("task").addOptionalParam("networkname").setAction(async (args, hre) => {
  console.log("example task")
})

