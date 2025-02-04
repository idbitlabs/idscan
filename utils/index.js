import { ethers } from "ethers";
import Web3Moal from "web3modal";

//CHECK WALLET CONNECTION
export const checkIfWalletConnected = async () => {
  try {
    if (!window.ethereum) return console.log("Install MateMask");

    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });
    const firstAccount = accounts[0];
    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};

//GET USER BALANCE
export const getBalance = async () => {
  try {
    const web3modal = new Web3Moal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    return await signer.getBalance();
  } catch (error) {
    console.log(error);
  }
};

export const convertIntoPOL = (amount) => {
  const POL = ethers.utils.formatEther(amount || String(100000), "ether");
  return POL;
};

export const parseErrorMsg = (e) => {
  const json = JSON.parse(JSON.stringify(e));
  return json?.reason || json?.error?.message;
};

export const shortenAddress = (address) =>
  `${address?.slice(0, 12)}...${address?.slice(address.length - 4)}`;

export const getBlockReward = async (blockNumber) => {
  try {
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.NEXT_PUBLIC_RPC_MAINNET
    );
    const block = await provider.getBlock(blockNumber);
    const blockReward = ethers.utils.parseEther("2"); // Initial block reward is 2 ETH

    // Fetch transaction fees
    let totalTransactionFees = ethers.BigNumber.from(0);
    for (const txHash of block.transactions) {
      const tx = await provider.getTransaction(txHash);
      totalTransactionFees = totalTransactionFees.add(
        tx.gasPrice.mul(tx.gasLimit)
      );
    }

    // Calculate total reward
    const totalReward = blockReward.add(totalTransactionFees);
    return totalReward.toString(); // Convert to string for easier handling
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
