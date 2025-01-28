import axios from "axios";
import { ethers } from "ethers";
import toast from "react-hot-toast";

const ETHERSCAN_API_KEY = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY;
const ETHERSCAN_ENDPOINT = process.env.NEXT_PUBLIC_ETHERSCAN_ENDPOINT;
const INFURA_API_KEY = process.env.NEXT_PUBLIC_INFURA_API_KEY;
const INFURA_ENDPOINT = process.env.NEXT_PUBLIC_INFURA_ENDPOINT;

import { parseErrorMsg } from "../utils/index";

//NOTIFICATION
const notifyError = (msg) => toast.error(msg, { duration: 4000 });
const notifySuccess = (msg) => toast.success(msg, { duration: 4000 });

//-----------------ADDRESS PAGE FUNCTIONS--------------

//USER_BALANCE
export const USER_BALANCE = async (ADDRESS) => {
  try {
    const USER_BALANCE_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=account&action=balance&address=${ADDRESS}&tag=latest&apikey=${ETHERSCAN_API_KEY}`
    );
    return USER_BALANCE_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//NORMAL_TRANSACTION
export const NORMAL_TRANSACTION = async (ADDRESS) => {
  try {
    const NORMAL_TRANSACTION_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=account&action=txlist&address=${ADDRESS}&startblock=0&endblock=99999999&page=1&offset=25&sort=asc&apikey=${ETHERSCAN_API_KEY}`
    );
    return NORMAL_TRANSACTION_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//INTERNAL_TRANSACTION
export const INTERNAL_TRANSACTION = async (ADDRESS) => {
  try {
    const INTERNAL_TRANSACTION_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=account&action=txlistinternal&address=${ADDRESS}&startblock=0&endblock=99999999&page=1&offset=25&sort=asc&apikey=${ETHERSCAN_API_KEY}`
    );
    return INTERNAL_TRANSACTION_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//INTERNAL_TRANSACTION_HASH
export const INTERNAL_TRANSACTION_HASH = async () => {
  try {
    const HASH =
      "0x852e99d94597f45915086053fc39f945d6247fa7e69916a7b6667025124a2397";
    const INTERNAL_TRANSACTION_HASH_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=account&action=txlistinternal&address=${HASH}&startblock=0&endblock=99999999&page=1&offset=50&sort=asc&apikey=${ETHERSCAN_API_KEY}`
    );
    return INTERNAL_TRANSACTION_HASH_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//INTERNAL_TRANSACTION_BLOCK
export const INTERNAL_TRANSACTION_BLOCK = async () => {
  try {
    const INTERNAL_TRANSACTION_BLOCK_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=account&action=txlistinternal&startblock=13481773&endblock=13491773&page=1&offset=50&sort=asc&apikey=${ETHERSCAN_API_KEY}`
    );
    return INTERNAL_TRANSACTION_BLOCK_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//ERC20_TOKEN_TRANSFER
export const ERC20_TOKEN_TRANSFER = async (ADDRESS) => {
  try {
    const ERC20_TOKEN_TRANSFER_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=account&action=tokentx&address=${ADDRESS}&offset=100&sort=asc&apikey=${ETHERSCAN_API_KEY}`
    );
    return ERC20_TOKEN_TRANSFER_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//ERC721_TOKEN_TRANSFER
export const ERC721_TOKEN_TRANSFER = async (ADDRESS) => {
  try {
    const ERC721_TOKEN_TRANSFER_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=account&action=tokennfttx&address=${ADDRESS}&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=${ETHERSCAN_API_KEY}`
    );
    return ERC721_TOKEN_TRANSFER_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//ERC1155_TOKEN_TRANSFER
export const ERC1155_TOKEN_TRANSFER = async (ADDRESS) => {
  try {
    const ERC1155_TOKEN_TRANSFER = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=account&action=token1155tx&address=${ADDRESS}&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=${ETHERSCAN_API_KEY}`
    );
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//BLOCK_VALIDATED
export const BLOCK_VALIDATED = async (ADDRESS) => {
  try {
    const BLOCK_VALIDATED_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=account&action=getminedblocks&address=${ADDRESS}&blocktype=blocks&page=1&offset=10&apikey=${ETHERSCAN_API_KEY}`
    );
    return BLOCK_VALIDATED_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

// BEACON_CHAIN
export const BEACON_CHAIN = async (ADDRESS) => {
  try {
    const BEACON_CHAIN = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=account&action=txsBeaconWithdrawal&address=${ADDRESS}&startblock=0&endblock=99999999&page=1&offset=100&sort=asc&apikey=${ETHERSCAN_API_KEY}`
    );
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//------------CONTRACT FUNCTIONS------------

//GET_CONTRACT_ABI
export const GET_CONTRACT_ABI = async (CONTRACT_ADDRESS) => {
  try {
    const GET_CONTRACT_ABI_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=contract&action=getabi&address=${CONTRACT_ADDRESS}&apikey=${ETHERSCAN_API_KEY}`
    );
    return GET_CONTRACT_ABI_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//GET_CONTRACT_SOURCE_CODE
export const GET_CONTRACT_SOURCE_CODE = async (CONTRACT_ADDRESS) => {
  try {
    const GET_CONTRACT_SOURCE_CODE_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=contract&action=getsourcecode&address=${CONTRACT_ADDRESS}&apikey=${ETHERSCAN_API_KEY}`
    );
    return GET_CONTRACT_SOURCE_CODE_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//GET_CONTRACT_CREATOR
export const GET_CONTRACT_CREATOR = async (CONTRACT_ADDRESS) => {
  try {
    const GET_CONTRACT_CREATOR_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=contract&action=getcontractcreation&contractaddresses=${CONTRACT_ADDRESS}&apikey=${ETHERSCAN_API_KEY}`
    );
    return GET_CONTRACT_CREATOR_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//-------------TRANSACTION-----------------

//CHECK_TRANSACTION_EXCUARION
export const CHECK_TRANSACTION_EXCUARION = async (TRANSACTION_HASH) => {
  const TEST_TRANSACTION_1 =
    "0x15f8e5ea1079d9a0bb04a4c58ae5fe7654b5b2b4463375ff7ffb490aa0032f3a";
  try {
    const CHECK_TRANSACTION_EXCUARION_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=transaction&action=getstatus&txhash=${TEST_TRANSACTION_1}&apikey=${ETHERSCAN_API_KEY}`
    );
    return CHECK_TRANSACTION_EXCUARION_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//CHECK_TRANSACTION_STATUS
export const CHECK_TRANSACTION_STATUS = async (TRANSACTION_HASH) => {
  const TEST_TRANSACTION_2 =
    "0x513c1ba0bebf66436b5fed86ab668452b7805593c05073eb2d51d3a52f480a76";
  try {
    const CHECK_TRANSACTION_STATUS_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=transaction&action=gettxreceiptstatus&txhash=${TEST_TRANSACTION_2}&apikey=${ETHERSCAN_API_KEY}`
    );
    return CHECK_TRANSACTION_STATUS_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//--------------BLOCK-----------------------

//GET_BLOCK_REWAEDED
export const GET_BLOCK_REWAEDED = async (BLOCKNO) => {
  const BLOCK_1 = 2165403;
  try {
    const GET_BLOCK_REWAEDED_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=block&action=getblockreward&blockno=${BLOCK_1}&apikey=${ETHERSCAN_API_KEY}`
    );
    return GET_BLOCK_REWAEDED_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//GET_ESTIMATED_BLOCK_COUNTDOWN
export const GET_ESTIMATED_BLOCK_COUNTDOWN = async (BLOCKNO) => {
  const BLOCK_2 = 16701588;
  try {
    const GET_ESTIMATED_BLOCK_COUNTDOWN_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=block&action=getblockcountdown&blockno=${BLOCK_2}&apikey=${ETHERSCAN_API_KEY}`
    );
    return GET_ESTIMATED_BLOCK_COUNTDOWN_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//GET_BLOCK_NUMBER_TIMESTEMP
export const GET_BLOCK_NUMBER_TIMESTEMP = async (TIMESTAMP) => {
  try {
    const TIMESTAMP_TEST = 1578638524;
    const GET_BLOCK_NUMBER_TIMESTEMP = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=block&action=getblocknobytime&timestamp=${TIMESTAMP_TEST}&closest=before&apikey=${ETHERSCAN_API_KEY}`
    );
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//------------LOGS-------------------

//GET_EVENTS_LOG_ADD
export const GET_EVENTS_LOG_ADDRESS = async (ADDRESS) => {
  const TEST_ADD = "0xbd3531da5cf5857e7cfaa92426877b022e612cf8";
  try {
    const GET_EVENTS_LOG_ADD = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=logs&action=getLogs&address=${TEST_ADD}&fromBlock=12878196&toBlock=12878196&page=1&offset=1000&apikey=${ETHERSCAN_API_KEY}`
    );
    return GET_EVENTS_LOG_ADD;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

const TOPIC_1 =
  "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";
const TOPIC_2 =
  "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";

//GET_EVENTS_TOPIC
export const GET_EVENTS_TOPIC = async (TOPIC) => {
  try {
    const GET_EVENTS_TOPIC_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=logs&action=getLogs&fromBlock=12878196&toBlock=12879196&topic0=${TOPIC_1}&topic0_1_opr=and&topic1=${TOPIC_2}&page=1&offset=1000apikey=${ETHERSCAN_API_KEY}`
    );
    return GET_EVENTS_TOPIC_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//GET_EVENTS_ADDRESS_FILTER
const TEST_ADDRESS = "0x59728544b08ab483533076417fbbb2fd0b17ce3a";
export const GET_EVENTS_ADDRESS_FILTER = async () => {
  try {
    const GET_EVENTS_ADDRESS_FILTER_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=logs&action=getLogs&fromBlock=12878196&toBlock=12879196&address${TEST_ADDRESS}&topic0=${TOPIC_1}&topic0_1_opr=and&topic1=${TOPIC_2}&page=1&offset=1000apikey=${ETHERSCAN_API_KEY}`
    );
    return GET_EVENTS_ADDRESS_FILTER_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//---------------GETH/PROXY--------------

//GET_ETH_BLOCK_NUMBER
export const GET_ETH_BLOCK_NUMBER = async () => {
  try {
    const GET_ETH_BLOCK_NUMBER_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=proxy&action=eth_blockNumber&apikey=${ETHERSCAN_API_KEY}`
    );
    return GET_ETH_BLOCK_NUMBER_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//GET_ETH_BLOCK_BY_NUMBER
export const GET_ETH_BLOCK_BY_NUMBER = async () => {
  try {
    const GET_ETH_BLOCK_BY_NUMBER_DAtA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=proxy&action=eth_getBlockByNumber&tag=0x10d4f&boolean=true&apikey=${ETHERSCAN_API_KEY}`
    );
    return GET_ETH_BLOCK_BY_NUMBER_DAtA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//eth_getUncleByBlockNumberAndIndex
export const eth_getUncleByBlockNumberAndIndex = async () => {
  try {
    const eth_getUncleByBlockNumberAndIndex_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=proxy&action=eth_getUncleByBlockNumberAndIndex&tag=0xC63276&index=0x0&apikey=${ETHERSCAN_API_KEY}`
    );
    return eth_getUncleByBlockNumberAndIndex_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//eth_getBlockTransactionCountByNumber
export const eth_getBlockTransactionCountByNumber = async () => {
  try {
    const eth_getBlockTransactionCountByNumber_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=proxy&action=eth_getBlockTransactionCountByNumber&tag=0x10FB78&apikey=${ETHERSCAN_API_KEY}`
    );
    return eth_getBlockTransactionCountByNumber_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//eth_getTransactionByHash
export const eth_getTransactionByHash = async () => {
  try {
    const HASH_1 =
      "0xbc78ab8a9e9a0bca7d0321a27b2c03addeae08ba81ea98b03cd3dd237eabed44";
    const eth_getTransactionByHash_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=proxy&action=eth_getTransactionByHash&txhash=${HASH_1}&apikey=${ETHERSCAN_API_KEY}`
    );
    return eth_getTransactionByHash_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//eth_getTransactionByBlockNumberAndIndex
export const eth_getTransactionByBlockNumberAndIndex = async () => {
  try {
    const eth_getTransactionByBlockNumberAndIndex_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=proxy&action=eth_getTransactionByBlockNumberAndIndex&tag=0xC6331D&index=0x11A&apikey=${ETHERSCAN_API_KEY}`
    );
    return eth_getTransactionByBlockNumberAndIndex_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//eth_getTransactionCount
export const eth_getTransactionCount = async () => {
  try {
    const TEST_ADDRESS = "0x4bd5900Cb274ef15b153066D736bf3e83A9ba44e";
    const eth_getTransactionCount_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=proxy&action=eth_getTransactionCount&address=${TEST_ADDRESS}&tag=latest&apikey=${ETHERSCAN_API_KEY}`
    );
    return eth_getTransactionCount_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//eth_sendRawTransaction
export const eth_sendRawTransaction = async () => {
  try {
    const eth_sendRawTransaction_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=proxy&action=eth_sendRawTransaction&hex=0xf904808000831cfde080&apikey=${ETHERSCAN_API_KEY}`
    );
    return eth_sendRawTransaction_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//eth_getTransactionReceipt
export const eth_getTransactionReceipt = async () => {
  try {
    const HASH_REC =
      "0xadb8aec59e80db99811ac4a0235efa3e45da32928bcff557998552250fa672eb";
    const eth_getTransactionReceipt_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=proxy&action=eth_getTransactionReceipt&txhash=${HASH_REC}&apikey=${ETHERSCAN_API_KEY}`
    );
    return eth_getTransactionReceipt_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//eth_call
export const eth_call = async () => {
  try {
    const TO_ADD = "0xAEEF46DB4855E25702F8237E8f403FddcaF931C0";
    const DATA =
      "0x70a08231000000000000000000000000e16359506c028e51f16be38986ec5746251e9724";
    const eth_call_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=proxy&action=eth_call&to=${TO_ADD}&data=${DATA}&tag=latest&apikey=${ETHERSCAN_API_KEY}`
    );
    return eth_call_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//eth_getCode
export const eth_getCode = async () => {
  try {
    const TO_ADD_2 = "0xf75e354c5edc8efed9b59ee9f67a80845ade7d0c";
    const eth_getCode_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=proxy&action=eth_getCode&address=${TO_ADD_2}&tag=latest&apikey=${ETHERSCAN_API_KEY}`
    );
    return eth_getCode_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//eth_getStorageAt
export const eth_getStorageAt = async () => {
  try {
    const TO_ADD_3 = "0x6e03d9cce9d60f3e9f2597e13cd4c54c55330cfd";
    const eth_getStorageAt_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=proxy&action=eth_getStorageAt&address=${TO_ADD_3}&position=0x0&tag=latest&apikey=${ETHERSCAN_API_KEY}`
    );
    return eth_getStorageAt_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//eth_gasPrice
export const eth_gasPrice = async () => {
  try {
    const eth_gasPrice_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=proxy&action=eth_gasPrice&apikey=${ETHERSCAN_API_KEY}`
    );
    return eth_gasPrice_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//eth_estimateGas
export const eth_estimateGas = async () => {
  try {
    const eth_estimateGas_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=proxy&action=eth_estimateGas&data=0x4e71d92d&to=0xf0160428a8552ac9bb7e050d90eeade4ddd52843&value=0xff22&gasPrice=0x51da038cc&gas=0x5f5e0ff&apikey=${ETHERSCAN_API_KEY}`
    );
    return eth_estimateGas_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//----------------TOKEN-------------------

//TOKEN_SUPPLY_ERC20
export const TOKEN_SUPPLY_ERC20 = async (TOKEN_ADDRESS) => {
  try {
    const TOKEN_SUPPLY_ERC20_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=stats&action=tokensupply&contractaddress=${TOKEN_ADDRESS}&apikey=${ETHERSCAN_API_KEY}`
    );

    return TOKEN_SUPPLY_ERC20_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//TOKEN_BALANCE
export const TOKEN_BALANCE = async (TOKEN_ADDRESS, USER) => {
  try {
    console.log(TOKEN_ADDRESS, USER);
    const TOKEN_BALANCE_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=account&action=tokenbalance&contractaddress=${TOKEN_ADDRESS}&address=${USER}&tag=latest&apikey=${ETHERSCAN_API_KEY}`
    );
    return TOKEN_BALANCE_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//-----------------STATS----------------

//ETHER_SUPPLY
export const ETHER_SUPPLY = async () => {
  try {
    const ETHER_SUPPLY_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=stats&action=ethsupply&apikey=${ETHERSCAN_API_KEY}`
    );
    return ETHER_SUPPLY_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//ETHER_SUPPLY_2
export const ETHER_SUPPLY_2 = async () => {
  try {
    const ETHER_SUPPLY_2_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=stats&action=ethsupply2&apikey=${ETHERSCAN_API_KEY}`
    );
    return ETHER_SUPPLY_2_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//ETHER_LATEST_PRICE
export const ETHER_LATEST_PRICE = async () => {
  try {
    const ETHER_LATEST_PRICE_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=stats&action=ethprice&apikey=${ETHERSCAN_API_KEY}`
    );
    return ETHER_LATEST_PRICE_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//TOTAL_NODE_COUNT
export const TOTAL_NODE_COUNT = async () => {
  try {
    const TOTAL_NODE_COUNT_DATA = await axios.get(
      `${ETHERSCAN_ENDPOINT}?module=stats&action=nodecount&apikey=${ETHERSCAN_API_KEY}`
    );
    return TOTAL_NODE_COUNT_DATA;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

//---------------HOMEPAGE FUNCTIONS------------------------
export const getLatestBlock = async (length) => {
  try {
    const PROVIDER = new ethers.providers.JsonRpcProvider(
      `${INFURA_ENDPOINT}${INFURA_API_KEY}`
    );
    const getCurrentBlock = await PROVIDER.getBlockNumber();

    //TOP TEN BLOCK
    const previousBlock = getCurrentBlock - Number(length);
    const listTenBlock = Array.from(
      { length: Number(length) },
      (_, index) => previousBlock + index + 1
    );

    //GET BLOCK DETAILS
    const blockDetailsPromises = listTenBlock.map(async (el) => {
      const singleBlock = await PROVIDER.getBlock(el);

      const blockDetails = {
        blockNo: el,
        blockReward: 1.2,
        blockTimeStamp: singleBlock.timestamp,
        blockMiner: singleBlock.miner,
        blockTransactions: singleBlock.transactions,
        blockHash: singleBlock.hash,
        blockGasUsed: singleBlock.gasUsed,
        blockGasLimit: singleBlock.gasLimit,
        blockDifficulty: singleBlock.difficulty,
        blockExtraData: singleBlock.extraData,
        blockBaseFeePerGas: singleBlock.baseFeePerGas,
        blockParentHash: singleBlock.parentHash,
      };
      return blockDetails;
    });
    const tenBlockWithDetails = await Promise.all(blockDetailsPromises);
    return tenBlockWithDetails;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

export const getLatestTransaction = async () => {
  try {
    //GET LATEST BLOCK
    const PROVIDER = new ethers.providers.JsonRpcProvider(
      `${INFURA_ENDPOINT}${INFURA_API_KEY}`
    );

    const getCurrentBlock = await PROVIDER.getBlockNumber();
    const blockTransaction = await PROVIDER.getBlock(getCurrentBlock);

    const newArray = blockTransaction.transactions.slice(0, 25);

    //GET BLOCK TRANSACTIONS
    const transaction = newArray.map(async (hash) => {
      return PROVIDER.getTransaction(hash);
    });
    //GET TRANSACTIONS DETAILS
    const transactionArray = await Promise.all(transaction);
    return transactionArray;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};

export const ENS_NAME = async (ADDRESS) => {
  try {
    //GET LATEST BLOCK
    const PROVIDER = new ethers.providers.JsonRpcProvider(
      `${INFURA_ENDPOINT}${INFURA_API_KEY}`
    );
    const ESN = await PROVIDER.lookupAddress(ADDRESS);
    return ESN;
  } catch (error) {
    const errorMsg = parseErrorMsg(error);
    notifyError(errorMsg);
    console.log(error);
  }
};
