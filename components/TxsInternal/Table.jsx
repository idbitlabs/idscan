import React from "react";
import { FaArrowRightLong, FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";
import { FiFilter } from "react-icons/fi";

const Table = () => {
  return (
    <div className="table-responsive">
      <table className="table table-hover table-align-middle mb-0">
        <thead
          id="ContentPlaceHolder1_theadTxnTable"
          class="align-middle text-nowrap"
        >
          <tr>
            <th scope="col">Txn Hash</th>
            <th scope="col">
              Method{" "}
              <i
                class="far fa-question-circle text-muted ms-1"
                data-bs-toggle="popover"
                data-bs-placement="top"
                data-bs-trigger="hover"
                data-bs-content="Function executed based on decoded input data. For unidentified functions, method ID is displayed instead."
              ></i>
            </th>
            <th scope="col">
              <a
                href="/txsPending?ps=50&amp;sort=nonce&amp;order=desc&amp;m="
                data-bs-trigger="hover"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              >
                Nonce
              </a>
            </th>
            <th scope="col">Last Seen</th>
            <th scope="col">
              <a
                href="txsPending?ps=50&amp;sort=gaslimit&amp;order=desc&amp;m="
                data-bs-trigger="hover"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              >
                Gas Limit
              </a>
            </th>
            <th scope="col">
              <a
                href="/txsPending?ps=50&amp;sort=gasprice&amp;order=desc&amp;m="
                data-bs-trigger="hover"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              >
                Gas Price
              </a>
            </th>
            <th data-highlight="" scope="col" width="100">
              From
            </th>
            <th data-highlight="" scope="col">
              To
            </th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody
          id="ContentPlaceHolder1_tbodyTxnTable"
          className="align-middle text-nowrap"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item, index) => (
            <tr key={index}>
              <td>
                <span class="hash-tag text-truncate">
                  <a href="/tx/0x3119ac95a90800b9f93450450cd4791083e6c360859e88933d9d9b112c8d5b0b">
                    0x3119ac95a90800b9f93450450cd4791083e6c360859e88933d9d9b112c8d5b0b
                  </a>
                </span>
              </td>
              <td class="">
                <span
                  style={{ maxWidth: "95px" }}
                  class="d-block badge bg-light border border-dark dark:border-white border-opacity-10 text-dark fw-normal text-truncate w-100 py-1.5 font-italic"
                  data-bs-toggle="tooltip"
                  data-bs-boundary="viewport"
                  data-bs-html="true"
                >
                  Claim Key
                </span>
              </td>
              <td>17</td>
              <td>
                <span data-bs-trigger="hover" data-bs-toggle="tooltip">
                  6 secs ago
                </span>
              </td>
              <td>33881</td>
              <td data-bs-trigger="hover" data-bs-toggle="tooltip">
                69<b>.</b>749 Gwei
              </td>
              <td>
                <span class="d-flex align-items-center gap-2">
                  <a
                    href="/address/0xfec4338edd2449bc2e737737efd8287440c3318a"
                    data-bs-trigger="hover"
                    data-bs-toggle="tooltip"
                  >
                    <span
                      data-highlight-target="0xFEC4338Edd2449bc2e737737Efd8287440c3318a"
                      class="border border-white px-1 mx-n1"
                    >
                      0xFEC433...40c3318a
                    </span>
                  </a>
                  <a
                    class="js-clipboard link-secondary  "
                    href="javascript:;"
                    data-clipboard-text="0xFEC4338Edd2449bc2e737737Efd8287440c3318a"
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    data-hs-clipboard-options='{ "type": "tooltip", "successText": "Copied!", "classChangeTarget": "#linkIcon_f_tx_1", "defaultClass": "fa-copy", "successClass": "fa-check" }'
                    aria-label="Copy Address"
                  >
                    <i id="linkIcon_f_tx_1" class="far fa-copy fa-fw">
                      <FaRegCopy />
                    </i>{" "}
                  </a>
                  <a
                    class="link-secondary"
                    href="/txsPending?a=0xfec4338edd2449bc2e737737efd8287440c3318a"
                  >
                    <i
                      class="far fa-filter"
                      data-bs-toggle="tooltip"
                      aria-label="Apply filter by address"
                    >
                      <FiFilter />
                    </i>
                  </a>
                </span>
              </td>
              <td>
                <span class="d-flex align-items-center gap-2">
                  <a
                    href="/address/0x0f3284bfebc5f55b849c8cf792d39cc0f729e0bc"
                    data-bs-trigger="hover"
                    data-bs-toggle="tooltip"
                  >
                    <span
                      data-highlight-target="0x0f3284bFEbc5f55B849c8CF792D39cC0f729e0BC"
                      class="border border-white px-1 mx-n1"
                    >
                      0x0f3284...f729e0BC
                    </span>
                  </a>
                  <a
                    class="js-clipboard link-secondary  "
                    href="javascript:;"
                    data-clipboard-text="0x0f3284bFEbc5f55B849c8CF792D39cC0f729e0BC"
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    data-hs-clipboard-options='{ "type": "tooltip", "successText": "Copied!", "classChangeTarget": "#linkIcon_t_tx_1", "defaultClass": "fa-copy", "successClass": "fa-check" }'
                    aria-label="Copy Address"
                  >
                    <i id="linkIcon_t_tx_1" class="far fa-copy fa-fw">
                      <FaRegCopy />
                    </i>{" "}
                  </a>
                  <a
                    class="link-secondary"
                    href="/txsPending?a=0x0f3284bfebc5f55b849c8cf792d39cc0f729e0bc"
                  >
                    <i
                      class="far fa-filter"
                      data-bs-toggle="tooltip"
                      aria-label="Apply filter by address"
                    >
                      <FiFilter />
                    </i>
                  </a>
                </span>
              </td>
              <td class="text-nowrap">0 MATIC</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
