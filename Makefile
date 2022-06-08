deploy:
	yarn hardhat deploy --network $(network) --tags StrikeBoostFarm

re-deploy:
	yarn hardhat deploy --network $(network) --tags StrikeBoostFarm -- reset