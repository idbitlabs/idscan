import React from "react";
import { IoEye } from "react-icons/io5";
import { FaArrowRightLong, FaRegCopy } from "react-icons/fa6";
import { GoQuestion } from "react-icons/go";

const Table = () => {
  return (
    <div class="table-responsive">
      <table class="table table-hover table-align-middle mb-0">
        <thead
          id="ContentPlaceHolder1_theadAllTransactionTable"
          class="align-middle text-nowrap"
        >
          <tr>
            <th scope="col" width="10" class="text-center">
              <i class="far fa-question-circle text-muted">
                {" "}
                <GoQuestion />
              </i>
            </th>
            <th scope="col">Txn Hash</th>
            <th scope="col" data-highlight="">
              <div class="d-flex align-items-center gap-2">
                <span class="text-nowrap">
                  Method{" "}
                  <i class="far fa-question-circle text-muted">
                    <GoQuestion />
                  </i>
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
                <a href="javascript:;">Age</a>
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
              <a href="javascript:;">Txn Fee</a>
            </th>
          </tr>
        </thead>

        <tbody className="align-middle text-nowrap">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item, index) => (
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
                      href="/tx/0x8707b5a7d606aa4202aaaf9672250c7f903fbca0dbf950225522addf06a09b33"
                      class="myFnExpandBox_searchVal"
                    >
                      0x8707b5a7d606aa4202aaaf9672250c7f903fbca0dbf950225522addf06a09b33
                    </a>
                  </span>
                </div>
              </td>
              <td class="">
                <span
                  style={{ maxWidth: "95px" }}
                  class="d-block badge bg-light border border-dark dark:border-white border-opacity-10 text-dark fw-normal text-truncate w-100 py-1.5"
                >
                  Approve
                </span>
              </td>
              <td>
                <a href="/block/53734461">53734461</a>
              </td>

              <td class="showAge ">
                <span
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-title="2024-02-20 5:48:44"
                >
                  1 min ago
                </span>
              </td>
              <td class="showLocalDate" style={{ display: "none !important" }}>
                <span>1708408124</span>
              </td>
              <td>
                <div class="d-flex align-items-center gap-1">
                  <a href="/address/0xc8a84867d1ae31301b34b87c677927e2db9a8d69">
                    <span class="border px-1 mx-n1 border-white">
                      0xc8A848...DB9a8D69
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
                    <i class="far fa-memo text-secondary"></i>
                    <a href="/address/0x8f9dd2064eb38e8e40f2ab67bde27c0e16ea9b08">
                      <span>0x8f9Dd2...16ea9B08</span>
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
                <span data-bs-toggle="tooltip" data-bs-title="0 POL">
                  0 POL
                </span>
              </td>
              <td class="small text-muted showTxnFee ">
                0<b>.</b>00255264
              </td>
              <td
                style={{ display: "none !important " }}
                class="small text-muted showGasPrice "
              >
                55<b>.</b>1255678
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
