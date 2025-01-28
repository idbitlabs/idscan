import React from "react";
import { FaRegSquare, FaRegFileAlt, FaExternalLinkAlt } from "react-icons/fa";

import { shortenAddress, convertIntoMatic } from "../../utils/index";

const LatestBlocks = ({ Data }) => {
  return (
    <div id="ContentPlaceHolder1_mainboxes" class="card py-5 px-4 mb-4 mt-n12">
      <div class="row g-lg-10">
        <div class="col-md-6 col-lg-4">
          <div class="d-flex">
            <div class="text-center me-3" style={{ width: "1.5rem" }}>
              <img
                class="img-fluid mx-auto"
                width="24"
                data-img-theme="light"
                src="icon.png"
              />
            </div>
            <div class="flex-grow-1">
              <div class="text-cap mb-px">IDBit Price</div>
              <a class="link-dark fs-base">
                $ {Data?.ETHER_LATEST_PRICE.ethusd}
                <span class="text-muted">
                  {" "}
                  {Data?.ETHER_LATEST_PRICE.ethbtc} POL
                </span>
                <span class="text-success small"> (+1.45%)</span>
              </a>
            </div>
          </div>

          <hr class="my-5" />

          <div class="d-flex">
            <div class="me-3">
              <i class="fal fa-globe" style={{ fontSize: "1.5rem" }}></i>
            </div>
            <div class="flex-grow-1">
              <div class="text-cap mb-px">IDT Market Cap on Idbitscan</div>
              <a class="link-dark fs-base">
                ${Data?.ETHER_SUPPLY}
                <span class="text-muted">(IDT)</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 border-md-start">
          <hr class="d-block d-md-none my-5" />
          <div class="d-flex">
            <div class="me-3">
              <i class="fal fa-server" style={{ fontSize: "1.5rem" }}></i>
            </div>
            <div class="flex-grow-1">
              <div class="text-cap mb-px">Transactions</div>
              <a href="#"> ${Data?.ETHER_SUPPLY_2.EthSupply}</a>
              <span
                class="text-muted small"
                style={{ fontSize: "14px" }}
                rel="tooltip"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Transactions per Second"
              >
                BTC
              </span>
            </div>
            <div class="text-end">
              <div class="text-cap mb-px">Med Gas Price</div>
              <a href="/gastracker" class="link-dark fs-base">
                45.6 Gwei
                <span class="text-muted small" style={{ fontSize: "14px" }}>
                  {" "}
                  $0.01
                </span>
              </a>
            </div>
          </div>
          <hr class="my-5" />
          <div class="d-flex">
            <div class="me-3">
              <i class="fal fa-gauge" style={{ fontSize: "1.5rem" }}></i>
            </div>
            <div class="flex-grow-1">
              <div class="text-cap mb-px">Total Nodes</div>
              <a
                rel="tooltip"
                class="fs-base link-dark"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="The latest Block No"
                href="/blocks"
              >
                <span id="lastblock">
                  {Data?.TOTAL_NODE_COUNT.TotalNodeCount}
                </span>
              </a>
              <a
                data-bs-toggle="tooltip"
                href="/chart/blocktime"
                class="small text-muted text-link"
                data-bs-placement="right"
                title="Average Block Time (The latest 5000 blocks)"
              >
                (
                <span id="avgblocktime"> {Data?.TOTAL_NODE_COUNT.UTCDate}</span>
                )
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 border-lg-start">
          <hr class="d-block d-lg-none my-5" />
          <div class="text-cap mb-px">Sponsored: IDBit INF CHAIN</div>
          <div class="w-100 pt-2" style={{ height: "105px" }}>
            <img
              src="logo.png"
              style={{ height: "auto", width: "20rem" }}
              alt="Infinity"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlocks;
