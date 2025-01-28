import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
//ICON
import { FaRegSquare, FaRegFileAlt, FaExternalLinkAlt } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { CgMenuRight } from "react-icons/cg";

//INTERNAL IMPORT
import { CONTEXT } from "../../context/ContextProvider";
import { shortenAddress, convertIntoMatic } from "../../utils/index";
import { Loader } from "../index";

const LatestTransactions = () => {
  const { getLatestBlock, getLatestTransaction } = useContext(CONTEXT);
  const [blocks, setBlocks] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getLatestBlock(10).then((items) => {
      setBlocks(items?.reverse());
    });
    getLatestTransaction().then((items) => {
      setTransactions(items?.reverse());
      setLoader(false);
    });
  }, []);

  return (
    <div id="ContentPlaceHolder1_divBlkTxn" class="row gx-4">
      <div class="col-lg-6 mb-4">
        <div class="card h-100">
          <div class="card-header d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-between align-items-center gap-1">
              <h2 class="card-header-title">Latest Blocks</h2>
              <button
                type="button"
                id="card1AdvancedFilterListButton"
                class="btn btn-sm btn-ghost-white d-none"
                data-bs-toggle="modal"
                data-bs-target="#advancedFilterListModal"
                data-bs-card-index="1"
              >
                <i class="far fa-pen-to-square fa-fw"></i>
              </button>
            </div>
            <button
              id="ContentPlaceHolder1_btnCustomizeCard1"
              type="button"
              class="btn btn-sm btn-white"
              data-bs-toggle="modal"
              data-bs-target="#customizeCardModal"
              data-bs-card-index="1"
            >
              <i class="far fa-grid-2 me-1">
                <CgMenuRight />
              </i>
              Customize
            </button>
          </div>
          {loader && <Loader />}
          <div
            class="card-body overflow-auto scrollbar-custom"
            style={{ maxHeight: "30.3rem" }}
            id="mCSB_1_container"
          >
            {blocks?.map((block, index) => (
              <div key={index + 2}>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="d-flex align-items-center gap-2">
                      <div
                        class="d-none d-sm-flex content-center bg-light text-muted rounded p-3"
                        style={{ height: "3rem", width: "3rem" }}
                      >
                        <i class="fal fa-cube fs-lg">
                          <FaExternalLinkAlt />
                        </i>
                      </div>
                      <div class="d-flex flex-row flex-sm-column align-items-center align-items-sm-start gap-1 gap-sm-0">
                        <span class="d-inline-block d-sm-none">Block</span>

                        <a
                          href={`/block/${block.blockNo}`}
                          class="text-truncate"
                          style={{ maxWidth: "6rem" }}
                        >
                          {block.blockNo}
                        </a>

                        <div class="small text-muted">
                          {" "}
                          {new Date(block.blockTimeStamp * 1000).toDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-8 d-flex justify-content-sm-between align-items-end align-items-sm-center position-relative">
                    <div class="pe-0 pe-sm-2">
                      <div class="d-flex flex-wrap gap-1">
                        Validated By
                        <a href={`/address/${block.blockMiner}`}>
                          <span>{shortenAddress(block.blockMiner)}</span>
                        </a>
                      </div>

                      <a href="/txs?block=53617196">
                        {block.blockTransactions.length} txns
                      </a>

                      <span class="small text-muted me-2">
                        in {block.blockTimeStamp} secs
                      </span>
                      <span class="d-inline-block d-sm-none badge border border-dark dark:border-white border-opacity-15 text-dark fw-medium py-1 py-sm-1.5 px-1.5 px-sm-2">
                        {convertIntoMatic(block.blockGasUsed)} IDT
                      </span>
                    </div>
                    <div class="d-none d-sm-block text-end ms-2 ms-sm-0">
                      <span class="badge border border-dark dark:border-white border-opacity-15 text-dark fw-medium py-1.5 px-2">
                        {convertIntoMatic(block.blockGasUsed)} IDT
                      </span>
                    </div>
                  </div>
                </div>
                {index == 5 ? "" : <hr />}
              </div>
            ))}
          </div>

          <a
            href="/blocks"
            class="card-footer bg-light fw-medium text-cap link-muted text-center"
          >
            View all blocks
            <i class="far fa-long-arrow-right ms-1">
              <GoArrowRight />
            </i>
          </a>
        </div>
      </div>

      <div class="col-lg-6 mb-4">
        <div class="card h-100">
          <div class="card-header d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-between align-items-center gap-1">
              <h2 class="card-header-title">Latest Transactions</h2>
              <button
                type="button"
                id="card2AdvancedFilterListButton"
                class="btn btn-sm btn-ghost-white d-none"
                data-bs-toggle="modal"
                data-bs-target="#advancedFilterListModal"
                data-bs-card-index="2"
              >
                <i class="far fa-pen-to-square fa-fw"></i>
              </button>
            </div>
            <button
              id="ContentPlaceHolder1_btnCustomizeCard2"
              type="button"
              class="btn btn-sm btn-white"
              data-bs-toggle="modal"
              data-bs-target="#customizeCardModal"
              data-bs-card-index="2"
            >
              <i class="far fa-grid-2 me-1">
                <CgMenuRight />
              </i>
              Customize
            </button>
          </div>
          {loader && <Loader />}
          <div
            class="card-body overflow-auto scrollbar-custom"
            style={{ maxHeight: "30.3rem" }}
            id="mCSB_2_container"
          >
            {transactions?.map((transaction, index) => (
              <div key={index + 5}>
                <div class="row">
                  <div class="col-sm-4 col-lg-5">
                    <div class="d-flex align-items-center gap-2">
                      <div
                        class="d-none d-sm-flex content-center bg-light text-muted rounded p-3"
                        style={{ height: "3rem", width: "3rem" }}
                      >
                        <i class="fal ">
                          <FaRegFileAlt />
                        </i>
                      </div>
                      <div class="d-flex align-items-center align-items-sm-start flex-row flex-sm-column gap-1 gap-sm-0">
                        <span class="d-inline-block d-sm-none">TX#</span>

                        <a
                          href={`/tx/${transaction.hash}`}
                          class="d-block text-truncate"
                          style={{ maxWidth: "8rem" }}
                        >
                          {transaction.hash}
                        </a>

                        <div class="small text-muted">20 secs ago</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-8 col-lg-7 d-flex justify-content-sm-between align-items-end align-items-sm-center">
                    <div class="pe-0 pe-sm-2">
                      <div class="d-flex flex-wrap gap-1">
                        From
                        <a href={`/address/${transaction.to}`}>
                          <span> {shortenAddress(transaction.from)}</span>
                        </a>
                      </div>
                      <div class="d-flex align-items-center flex-wrap gap-1">
                        To
                        <a href={`/address/${transaction.to}`}>
                          <span>{shortenAddress(transaction.to)}</span>
                        </a>
                        <span class="d-inline d-sm-none badge border border-dark dark:border-white border-opacity-15 text-dark ms-1 py-1.5 px-2 fw-medium">
                          1<b>.</b>60034 IDT
                        </span>
                      </div>
                    </div>
                    <div
                      class="d-none d-sm-block text-end ms-2 ms-sm-0"
                      data-bs-toggle="tooltip"
                      title="Amount"
                    >
                      <span class="badge border border-dark dark:border-white border-opacity-15 text-dark py-1.5 px-2 fw-medium">
                        {convertIntoMatic(transaction?.value)} IDT
                      </span>
                    </div>
                  </div>
                </div>
                {index == 5 ? "" : <hr />}
              </div>
            ))}
          </div>

          <a
            href="/txs"
            class="card-footer bg-light fw-medium text-cap link-muted text-center"
          >
            View all transactions
            <i class="far fa-long-arrow-right ms-1">
              {" "}
              <GoArrowRight />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatestTransactions;
