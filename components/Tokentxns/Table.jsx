import React from "react";
import { GoQuestion } from "react-icons/go";
import { MdRemoveRedEye } from "react-icons/md";
import { FaRegCopy, FaArrowRightLong } from "react-icons/fa6";
const Table = () => {
  return (
    <div class="table-responsive">
      <table class="table table-hover mb-0">
        <thead class="align-middle text-nowrap">
          <tr>
            <th scope="col" width="10" class="text-center">
              <i
                class="far fa-question-circle text-muted"
                data-bs-toggle="popover"
                data-bs-trigger="hover"
                data-bs-content="See preview of the transaction details."
              >
                <GoQuestion />
              </i>
            </th>
            <th scope="col">Txn Hash</th>
            <th scope="col">
              <span class="text-nowrap">
                Method{" "}
                <i
                  class="far fa-question-circle text-muted"
                  data-bs-toggle="popover"
                  data-bs-trigger="hover"
                  data-bs-content="Function executed based on decoded input data. For unidentified functions, method ID is displayed instead."
                >
                  <GoQuestion />
                </i>
              </span>
            </th>

            <th scope="col">
              <a
                class="age-datetime-with-tooltip"
                data-bs-toggle="tooltip"
                data-bs-trigger="hover"
              >
                Age
              </a>
            </th>
            <th data-highlight scope="col" width="100">
              From
            </th>
            <th scope="col" width="20">
              &nbsp;
            </th>
            <th data-highlight scope="col" width="100">
              To
            </th>
            <th scope="col">Value</th>
            <th data-highlight scope="col">
              Token
            </th>
          </tr>
        </thead>
        <tbody class="align-middle text-nowrap">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <tr key={index + 1}>
              <td>
                <button
                  type="button"
                  class="js-tnx-preview btn btn-sm btn-white fs-70x content-center mx-auto myFnExpandBox"
                  style={{ width: "1.75rem", height: "1.75rem" }}
                >
                  <i class="far ">
                    <MdRemoveRedEye />
                  </i>
                </button>
              </td>
              <td>
                <span class="hash-tag text-truncate">
                  <a
                    href="/tx/0x6cd68b418b50edbcfe650e8e664c3e8863002187a15b2ea5365c9b0d8ff39184"
                    class="myFnExpandBox_searchVal"
                  >
                    0x6cd68b418b50edbcfe650e8e664c3e8863002187a15b2ea5365c9b0d8ff39184
                  </a>
                </span>
              </td>
              <td class>
                <span
                  style={{ maxWidth: "95px" }}
                  class="d-block badge bg-light border border-dark dark:border-white border-opacity-10 text-dark fw-normal text-truncate w-100 py-1.5"
                >
                  Renewal Pack For...
                </span>
              </td>
              <td class="showDate " style={{ display: "none !important " }}>
                <span
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-title="18 secs ago"
                >
                  2024-02-17 6:21:58
                </span>
              </td>
              <td class="showAge ">
                <span
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-title="2024-02-17 6:21:58"
                >
                  18 secs ago
                </span>
              </td>
              <td class="showLocalDate" style={{ display: "none !important" }}>
                <span
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-title="18 secs ago"
                >
                  1708150918
                </span>
              </td>
              <td>
                <div class="d-flex align-items-center gap-1">
                  <a
                    data-highlight-target="0x4aac95ebe2ea6038982566741d1860556e265f8b"
                    href="/address/0x4aac95ebe2ea6038982566741d1860556e265f8b#tokentxns"
                  >
                    <span data-highlight-target="0x4aac95EBE2eA6038982566741d1860556e265F8B">
                      0x4aac95...6e265F8B
                    </span>
                  </a>
                  <a class="js-clipboard-required-confirmation link-secondary  btn-show-copy-confirmation">
                    <i id="linkIcon_f_1" class="far fa-copy fa-fw">
                      <FaRegCopy />
                    </i>{" "}
                  </a>
                </div>
              </td>
              <td>
                <span
                  class="bg-success bg-opacity-10 border border-success border-opacity-25 text-success fs-70x content-center rounded-pill mx-auto"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                >
                  <i class="far fa-arrow-right-long">
                    <FaArrowRightLong />
                  </i>
                </span>
              </td>
              <td>
                <div class="d-flex align-items-center gap-1">
                  <i
                    class="far fa-memo text-secondary"
                    data-bs-toggle="tooltip"
                    data-bs-title="Contract"
                  ></i>
                  <a href="#">
                    <span data-highlight-target="0x830017756Ce93b471f90A0502985766C9bb9bAF4">
                      0x830017...9bb9bAF4
                    </span>
                  </a>
                  <a class="js-clipboard-required-confirmation link-secondary  btn-show-copy-confirmation">
                    <i id="linkIcon_t_1" class="far fa-copy fa-fw">
                      <FaRegCopy />
                    </i>{" "}
                  </a>
                </div>
              </td>
              <td>
                <span
                  class="hash-tag text-truncate"
                  data-bs-toggle="tooltip"
                  data-bs-title="1.3185"
                >
                  1.3185
                </span>
              </td>
              <td>
                <a class="d-flex align-items-center gap-1 link-dark">
                  <img
                    src="icon.png"
                    width="18"
                    height="18"
                    class="rounded-circle"
                  />
                  <div class="d-flex gap-1">
                    <span class="hash-tag text-truncate">Idbitscan</span>
                    <span class="text-muted">(IDT)</span>
                  </div>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
