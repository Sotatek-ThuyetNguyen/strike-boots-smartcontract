# Solidity Template

My favourite setup for writing Solidity smart contracts.

- [Hardhat](https://github.com/nomiclabs/hardhat): compile and run the smart contracts on a local development network
- [TypeChain](https://github.com/ethereum-ts/TypeChain): generate TypeScript types for smart contracts
- [Ethers](https://github.com/ethers-io/ethers.js/): renowned Ethereum library and wallet implementation
- [Waffle](https://github.com/EthWorks/Waffle): tooling for writing comprehensive smart contract tests
- [Solhint](https://github.com/protofire/solhint): linter
- [Solcover](https://github.com/sc-forks/solidity-coverage): code coverage
- [Prettier Plugin Solidity](https://github.com/prettier-solidity/prettier-plugin-solidity): code formatter

This is a GitHub template, which means you can reuse it as many times as you want. You can do that by clicking the "Use this
template" button at the top of the page.

## Usage

### Pre Requisites

- Yarn >= v1.22.15
- Node.js >= v12.22.6

```sh
cp .env.example .env
```

Then, proceed with installing dependencies:

```sh
yarn install
```

### Compile

Compile the smart contracts with Hardhat:

```sh
$ yarn compile
```

### Setup variable

Set variables in .env file:

```js
  DEPLOYER_PRIVATE_KEY=
  INFURA_API_KEY=
  ETHERSCAN_API_KEY=
  STRK=
  VSTRK=
  NFT=
  REWARD=
```

Then go to `deployments/migrations/deploy-boost-farming.ts` to set 3 params: `rewards_per_block`, `start_bonus_block_number`, `end_bonus_block_number`

```js
  await deploy("StrikeBoostFarm", {
      from: deployer,
      log: true,
      args: [
        process.env.STRK,
        process.env.REWARD,
        process.env.VSTRK,
        process.env.NFT,
        <rewards_per_block>,
        <start_bonus_block_number>,
        <end_bonus_block_number>
      ]
    })
```


### Deploy

Deploy the contracts to Hardhat Network:

```sh
$ make deploy network={your network you want to deploy}
```

