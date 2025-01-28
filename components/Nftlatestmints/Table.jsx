import React from "react";
import { GoQuestion } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { CiBoxes } from "react-icons/ci";
import { FaRegCopy, FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineMenuOpen } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
const Table = () => {
  return (
    <div class="table-responsive">
      <table
        id="datatable"
        class="table table-lg table-hover text-nowrap mb-0 dataTable no-footer"
        aria-describedby="datatable_info"
        role="grid"
      >
        <thead class="text-nowrap">
          <tr role="row">
            <th
              scope="col"
              width="10"
              class="text-center sorting_disabled"
              rowspan="1"
              colspan="1"
            >
              <i
                class="far fa-question-circle text-muted"
                data-bs-toggle="popover"
                data-bs-trigger="hover"
                data-bs-content="See preview of the transaction details."
              >
                <GoQuestion />
              </i>
            </th>
            <th scope="col" class="sorting_disabled" rowspan="1" colspan="1">
              Transaction Info
            </th>
            <th scope="col" class="sorting_disabled" rowspan="1" colspan="1">
              Block
            </th>
            <th scope="col" class="sorting_disabled" rowspan="1" colspan="1">
              <a
                href="javascript:;"
                onclick="switchAgeToDateTimeV2(this)"
                id="lnkAgeDateTimeV2"
                class="hc_lnkAgeDateTime"
                data-bs-toggle="tooltip"
              >
                Age
              </a>
            </th>
            <th
              data-highlight=""
              scope="col"
              class="sorting_disabled"
              rowspan="1"
              colspan="1"
            >
              Maker
            </th>
            <th scope="col" class="sorting_disabled" rowspan="1" colspan="1">
              Type
            </th>
            <th scope="col" class="sorting_disabled" rowspan="1" colspan="1">
              Item
            </th>
          </tr>
        </thead>
        <tbody class="align-middle text-nowrap">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <tr key={index} role="row" class={index / 2 == 0 ? "odd" : "even"}>
              <td>
                <button
                  type="button"
                  class="js-tnx-preview btn btn-sm btn-white fs-70x content-center mx-auto myFnExpandBox"
                  style={{ width: "1.75rem", height: "1.75rem" }}
                >
                  <i class="far fa-eye">
                    <IoEye />
                  </i>
                </button>
              </td>
              <td>
                <span
                  class="hash-tag text-truncate myFnExpandBox_searchVal"
                  style={{ maxWidth: "7rem" }}
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover"
                  data-bs-html="true"
                  data-bs-boundary="viewport"
                >
                  <a href="tx/0x77943b7394b92554430b03f6f6fb935bb19d9c6ab69cb9ed3e08d75cfe4c8e58">
                    0x77943b7394b92554430b03f6f6fb935bb19d9c6ab69cb9ed3e08d75cfe4c8e58
                  </a>
                </span>
              </td>
              <td>
                <a href="/block/54556744" target="_parent">
                  54556744
                </a>
              </td>
              <td>
                <div class="showAge">
                  <span
                    rel="tooltip"
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    data-bs-html="true"
                    data-bs-boundary="viewport"
                  >
                    1 min ago
                  </span>
                </div>
              </td>
              <td>
                <span class="d-flex d-flex align-items-center gap-2">
                  <a
                    href="/address/0x9dff7d081b131eaefb698eca7a77aefd1c5e560d"
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    data-bs-html="true"
                    data-bs-boundary="viewport"
                  >
                    <span
                      data-highlight-target="0x9DfF7d081b131eaEfb698ECa7a77AEfD1c5e560d"
                      class="border border-white ps-1 pe-2 ms-n1 me-n2"
                    >
                      0x9DfF7d08...D1c5e560d
                    </span>
                  </a>
                  <a
                    class="js-clipboard link-secondary"
                    href="javascript:;"
                    data-clipboard-text="0x9DfF7d081b131eaEfb698ECa7a77AEfD1c5e560d"
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    data-bs-html="true"
                    data-bs-boundary="viewport"
                    data-hs-clipboard-options='{ "type": "tooltip", "successText": "Copied!", "classChangeTarget": "#linkIcon_0", "defaultClass": "fa-copy", "successClass": "fa-check" }'
                    aria-label="Copy Address"
                  >
                    <i id="linkIcon_0" class="far fa-copy fa-fw">
                      <FaRegCopy />
                    </i>{" "}
                  </a>
                </span>
              </td>
              <td>
                <span class="badge border text-dark fw-normal rounded-pill px-2 py-1.5">
                  ERC-721
                </span>
              </td>
              <td>
                <a
                  class="d-flex align-items-center gap-2 link-dark"
                  href="/nft/0x9b39dbdf20517bdeed1f21233207ed6542b6fd08/43464"
                  target="_parent"
                >
                  <div
                    class="content-center bg-light border rounded"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <img width="24" src="icon.png" />
                  </div>
                  <div class="flex-grow-1">
                    <span
                      class="hash-tag text-truncate"
                      style={{ maxWidth: "11rem" }}
                    >
                      <span
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-html="true"
                        data-bs-boundary="viewport"
                        data-bs-placement="top"
                      >
                        Source Token#43464
                      </span>
                    </span>
                    <div class="d-flex align-items-center gap-1 small">
                      <span class="hash-tag text-truncate text-muted">
                        <span
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                          data-bs-html="true"
                          data-bs-boundary="viewport"
                        >
                          Source Token
                        </span>
                      </span>
                    </div>
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
