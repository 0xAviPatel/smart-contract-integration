import React from "react";
import web3 from "web3";
import {ABI}

const App = () => {
  const accountAddress = web3.eth.getAccounts();
  const contractAddress = "0x0db8C099B426677f575D512874D45A767e9acC3c";

  const contract = new web3.eth.Contract(ABI, contractAddress);

const numNFTs = await contract.methods.balanceOf(accountAddress).call();
for (let i = 0; i < numNFTs; i++) {
  const nftID = await contract.methods.tokenOfOwnerByIndex(accountAddress, i).call();
  // Do something with the NFT ID
}

  return <div>App</div>;
};

export default App;
