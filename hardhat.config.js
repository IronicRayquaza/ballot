require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths:{
    artifacts:'./src/artifacts'
  },
  networks:{
    hardhat:{
      chainID: 31337
    },
    volta:{
      url: 'https://volta-rpc.energyweb.org',
      accounts: ["ab28378fa64d5e10b25d8e6d0f2213cfe52366eb4852193a8be00bb845fe58d7"]
    }
  }
};
