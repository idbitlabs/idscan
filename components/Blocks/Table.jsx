import React from "react";
import { FaArrowRightLong, FaRegCopy } from "react-icons/fa6";

//INTERNAL IMPORT
import {
  shortenAddress,
  convertIntoPOL,
  getBlockReward,
} from "../../utils/index";

const Table = ({ blocks, PROVIDER }) => {
  return (
    <div class="table-responsive">
      <table class="table table-hover table-align-middle mb-0">
        <thead class="text-nowrap">
          <tr>
            <th scope="col">Block</th>
            <th scope="col">
              <a id="lnkAgeDateTimeV2" class="hc_lnkAgeDateTime">
                Age
              </a>
            </th>

            <th scope="col">Txn</th>
            <th data-highlight scope="col">
              Validator
            </th>
            <th id="ContentPlaceHolder1_thGasUsed" scope="col" width="100">
              Gas Used
            </th>
            <th scope="col">Gas Limit</th>
            <th scope="col">Difficulty</th>
            <th scope="col">Reward</th>
            <th
              scope="col"
              title="Percentage of FeesBurnt/TxFees Earned (excluding base block reward)"
            >
              Burnt Fees (POL)
            </th>
          </tr>
        </thead>

        <tbody class="align-middle text-nowrap">
          {blocks?.map((block, index) => (
            <tr key={index + 1}>
              <td>
                <a href={`/block/${block.blockNo}`}>{block.blockNo}</a>
              </td>

              <td class="showAge ">
                <span>
                  {new Date(block.blockTimeStamp * 1000).toDateString()}
                </span>
              </td>

              <td>
                <a href="/txs?block=53618185">
                  {block.blockTransactions.length}
                </a>
              </td>
              <td>
                <span class="d-flex align-items-center gap-1">
                  <a href={`/address/${block.blockMiner}`}>
                    <span>{shortenAddress(block.blockMiner)}</span>
                  </a>
                  <a class="js-clipboard link-secondary  ">
                    <i id="linkIcon_1" class="far fa-copy fa-fw">
                      <FaRegCopy />
                    </i>{" "}
                  </a>
                </span>
              </td>
              <td>
                <div>{convertIntoPOL(block.blockGasUsed)}</div>
                <div class="progress mt-1" style={{ height: "2px" }}>
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "59%" }}
                  ></div>
                </div>
              </td>
              <td>{convertIntoPOL(block?.blockGasLimit)}</td>
              <td>{block.blockDifficulty}</td>
              <td>{block.blockReward}</td>
              <td>
                0.283660 <span class="small text-muted">(29.77%)</span>
                <div class="progress mt-1 d-none" style={{ height: "2px" }}>
                  <div
                    class="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "29.77%" }}
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
