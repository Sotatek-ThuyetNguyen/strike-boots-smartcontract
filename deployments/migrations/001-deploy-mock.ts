import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment,
): Promise<void> {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    console.log("deployer: ", deployer);

    await deploy("ANN", {
        from: deployer,
        log: true,
        args: [deployer]
    })

    const mockToken = await deploy("ERC20Mock", {
        from: deployer,
        log: true,
        args: ["Mock", "M", "2000000000000000000000000000"]
    })
    await deploy("VANNToken", {
        from: deployer,
        log: true,
        args: ["vStrk", "vStrk"]
    })

    await deploy("AnnexIronWolf", {
        from: deployer, log: true,
        args: [
            "AnnexIronWolf",
            "AWN",
            "https://nftassets.annex.finance/ipfs/QmeHoeon52U4HYuemkfuKtzxcSZV2xSW69rBeEKKPzav4G",
            mockToken.address
        ]
    });
};


func.tags = ["Mock"];
export default func;
