deploy:
	yarn hardhat deploy --network $(network) --tags Proxy

init:
	npx hardhat init-farming --networkname ${network}  --network ${network}
	npx hardhat init-staking --networkname ${network}  --network ${network}
re-deploy:
	yarn hardhat deploy --network $(network) --tags Proxy -- reset