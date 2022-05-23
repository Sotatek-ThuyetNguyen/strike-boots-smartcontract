import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";
dotenvConfig({ path: resolve(__dirname, "./.env") });


const func: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment,
): Promise<void> {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  console.log("deployer: ", deployer);

  await deploy("StrikeBoostFarm", {
    from: deployer,
    log: true,
    args: [
      process.env.STRK,
      process.env.REWARD,
      process.env.VSTRK,
      process.env.NFT,
      "10000",
      "10662058",
      "11706422"
    ]
  })
};


func.tags = ["StrikeBoostFarm"];
export default func;
