import React from "react";
import { IoEye } from "react-icons/io5";
import { FaArrowRightLong, FaRegCopy } from "react-icons/fa6";

import { shortenAddress, convertIntoMatic } from "../../utils/index";

const Table = ({ transactions }) => {
  console.log(transactions);
  return (
    <div class="table-responsive">
      <table class="table table-hover table-align-middle mb-0">
        <thead
          id="ContentPlaceHolder1_theadAllTransactionTable"
          class="align-middle text-nowrap"
        >
          <tr>
            <th scope="col" width="10" class="text-center">
              <i class="far fa-question-circle text-muted"></i>
            </th>
            <th scope="col">Txn Hash</th>
            <th scope="col" data-highlight="">
              <div class="d-flex align-items-center gap-2">
                <span class="text-nowrap">
                  Method <i class="far fa-question-circle text-muted"></i>
                </span>
              </div>
            </th>
            <th scope="col">
              <div class="d-flex align-items-center gap-2">
                <span class="text-nowrap">Block</span>
              </div>
            </th>
            <th scope="col">
              <div class="d-flex align-items-center gap-2">
                <a class="age-datetime-with-tooltip">Index</a>
              </div>
            </th>
            <th scope="col" width="100" data-highlight="">
              <div class="d-flex align-items-center gap-2">
                <span>From</span>
              </div>
            </th>
            <th scope="col">&nbsp;</th>
            <th scope="col" data-highlight="">
              <div class="d-flex align-items-center gap-2">
                <span>To</span>
              </div>
            </th>
            <th scope="col">Value</th>
            <th scope="col">
              <a class="switch-txn-fee-gas-price">Txn Fee</a>
            </th>
          </tr>
        </thead>

        <tbody className="align-middle text-nowrap">
          {transactions?.map((item, index) => (
            <tr>
              <td>
                <button
                  type="button"
                  class="js-tnx-preview btn btn-sm btn-white fs-70x content-center mx-auto myFnExpandBox"
                  style={{ width: "1.75rem", height: "1.75rem" }}
                >
                  <i class="far ">
                    <IoEye />
                  </i>
                </button>
              </td>
              <td>
                <div class="d-flex align-items-center gap-1">
                  <span class="hash-tag text-truncate">
                    <a
                      href={`/tx/${item.hash}`}
                      class="myFnExpandBox_searchVal"
                    >
                      {item.hash}
                    </a>
                  </span>
                </div>
              </td>
              <td class="">
                <span
                  style={{ maxWidth: "95px" }}
                  class="d-block badge bg-light border border-dark dark:border-white border-opacity-10 text-dark fw-normal text-truncate w-100 py-1.5"
                  data-bs-toggle="tooltip"
                  data-bs-boundary="viewport"
                  data-bs-html="true"
                >
                  Approve
                </span>
              </td>
              <td>
                <a href={`/block/${item.blockNumber}`}>{item.blockNumber}</a>
              </td>

              <td class="showAge ">
                <span
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-title="2024-02-20 5:48:44"
                >
                  {item.transactionIndex}
                </span>
              </td>

              <td>
                <div class="d-flex align-items-center gap-1">
                  <a href={`/address/${item.from}`} class="">
                    <span class="border px-1 mx-n1 border-white">
                      {shortenAddress(item.from)}
                    </span>
                  </a>
                  <a class="js-clipboard link-secondary  ">
                    <i id="linkIcon_f_1" class="far fa-copy fa-fw">
                      <FaRegCopy />
                    </i>{" "}
                  </a>
                </div>
              </td>
              <td class="text-center">
                <span
                  class="bg-success bg-opacity-10 border border-success border-opacity-25 text-success fs-70x content-center rounded-pill mx-auto"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                >
                  <i class="far ">
                    <FaArrowRightLong />
                  </i>
                </span>
              </td>
              <td>
                <div class="d-flex align-items-center gap-1">
                  <div class="d-flex align-items-center gap-1 dom-texthighlight border border-white px-1 mx-n1">
                    <i
                      class="far fa-memo text-secondary"
                      data-bs-toggle="tooltip"
                      data-bs-title="Contract"
                    ></i>
                    <a href={`/address/${item.to}`} class="">
                      <span>{shortenAddress(item.to)}</span>
                    </a>
                  </div>
                  <a class="js-clipboard link-secondary  ">
                    <i id="linkIcon_t_1" class="far fa-copy fa-fw">
                      <FaRegCopy />
                    </i>{" "}
                  </a>
                </div>
              </td>
              <td>
                <span data-bs-toggle="tooltip" data-bs-title="0 MATIC">
                  {convertIntoMatic(item.value)}
                </span>
              </td>
              <td class="small text-muted showTxnFee ">
                {convertIntoMatic(item.gasLimit)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
