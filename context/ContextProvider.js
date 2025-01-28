import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import axios from "axios";
import { useRouter } from "next/router";

///INTERNAL IMPORT
import {
  getBalance,
  checkIfWalletConnected,
  connectWallet,
  parseErrorMsg,
} from "../utils/index";
import {
  //ADDRESS
  USER_BALANCE,
  NORMAL_TRANSACTION,
  INTERNAL_TRANSACTION,
  INTERNAL_TRANSACTION_HASH,
  INTERNAL_TRANSACTION_BLOCK,
  ERC20_TOKEN_TRANSFER,
  ERC721_TOKEN_TRANSFER,
  ERC1155_TOKEN_TRANSFER,
  BLOCK_VALIDATED,
  BEACON_CHAIN,
  //TOKEN
  TOKEN_SUPPLY_ERC20,
  TOKEN_BALANCE,
  //CONTRACT
  GET_CONTRACT_ABI,
  GET_CONTRACT_SOURCE_CODE,
  GET_CONTRACT_CREATOR,
  //HOMEPAGE
  getLatestBlock,
  getLatestTransaction,
  ENS_NAME,
} from "./api";

export const CONTEXT = React.createContext();

export const INFINITY_Provider = ({ children }) => {
  const INFINITY_SCAN = process.env.NEXT_PUBLIC_INFINITY_SCAN;
  const ETHERSCAN_API_KEY = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY_KEY;
  const ETHERSCAN_ENDPOINT = process.env.NEXT_PUBLIC_ETHERSCAN_ENDPOINT;

  //CONNECT WALLET
  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("Install MateMask");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const firstAccount = accounts[0];
      setAddress(firstAccount);
    } catch (error) {
      console.log(error);
    }
  };

  //STATS
  const GET_STATS = async (ADDRESS) => {
    try {
      //ETHER_SUPPLY
      const ETHER_SUPPLY = await axios.get(
        `${ETHERSCAN_ENDPOINT}?module=stats&action=ethsupply&apikey=${ETHERSCAN_API_KEY}`
      );

      //ETHER_SUPPLY_2
      const ETHER_SUPPLY_2 = await axios.get(
        `${ETHERSCAN_ENDPOINT}?module=stats&action=ethsupply2&apikey=${ETHERSCAN_API_KEY}`
      );

      //ETHER_LATEST_PRICE
      const ETHER_LATEST_PRICE = await axios.get(
        `${ETHERSCAN_ENDPOINT}?module=stats&action=ethprice&apikey=${ETHERSCAN_API_KEY}`
      );

      //TOTAL_NODE_COUNT
      const TOTAL_NODE_COUNT = await axios.get(
        `${ETHERSCAN_ENDPOINT}?module=stats&action=nodecount&apikey=${ETHERSCAN_API_KEY}`
      );

      const contract = {
        ETHER_SUPPLY: ETHER_SUPPLY.data.result,
        ETHER_SUPPLY_2: ETHER_SUPPLY_2.data.result,
        ETHER_LATEST_PRICE: ETHER_LATEST_PRICE.data.result,
        TOTAL_NODE_COUNT: TOTAL_NODE_COUNT.data.result,
      };

      return contract;
    } catch (error) {
      const errorMsg = parseErrorMsg(error);
      console.log(error);
    }
  };

  return (
    <CONTEXT.Provider
      value={{
        connectWallet,
        GET_STATS,
        //ADDRESS
        USER_BALANCE,
        NORMAL_TRANSACTION,
        INTERNAL_TRANSACTION,
        INTERNAL_TRANSACTION_HASH,
        INTERNAL_TRANSACTION_BLOCK,
        ERC20_TOKEN_TRANSFER,
        ERC721_TOKEN_TRANSFER,
        ERC1155_TOKEN_TRANSFER,
        BLOCK_VALIDATED,
        BEACON_CHAIN,
        //TOKEN
        TOKEN_SUPPLY_ERC20,
        TOKEN_BALANCE,
        //CONTRACT
        GET_CONTRACT_ABI,
        GET_CONTRACT_SOURCE_CODE,
        GET_CONTRACT_CREATOR,
        //HOMEPAGE
        getLatestBlock,
        getLatestTransaction,
        ENS_NAME,
      }}
    >
      {children}
    </CONTEXT.Provider>
  );
};
