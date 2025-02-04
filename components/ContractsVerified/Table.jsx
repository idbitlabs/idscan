import React from "react";
import { FaArrowRightLong, FaRegCopy } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { AiFillTool } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { IoWarningOutline } from "react-icons/io5";

const Table = () => {
  return (
    <div class="table-responsive">
      <table class="table table-hover table-align-middle mb-0">
        <thead class="text-nowrap">
          <tr>
            <th scope="col">Address</th>
            <th scope="col">Contract Name</th>
            <th scope="col">Compiler</th>
            <th scope="col">Version</th>
            <th scope="col">Balance</th>
            <th scope="col" width="20">
              Txns
            </th>
            <th scope="col">Setting</th>
            <th scope="col">Verified</th>
            <th scope="col">
              Audit
              <i
                class="far fa-question-circle text-muted ms-1"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-trigger="hover"
                title="Smart Contracts Audit and Security"
                data-bs-content="Smart Contracts Audit and Security"
              >
                <GoQuestion />
              </i>
            </th>
            <th scope="col">
              License
              <a href="/contract-license-types" target="_blank">
                <i
                  class="far fa-question-circle ms-1"
                  data-bs-placement="top"
                  data-bs-trigger="hover"
                  data-bs-toggle="tooltip"
                  title="Contract Source Code License Type, click for more info"
                >
                  <GoQuestion />
                </i>
              </a>
            </th>
            <th scope="col">Similar Contract</th>
          </tr>
        </thead>
        <tbody class="align-middle text-nowrap">
          {[1, 2, 3, 4, 5, 6, 7, 89, 9].map((item, index) => (
            <tr key={index + 1}>
              <td>
                <span class="d-flex align-items-center gap-1">
                  <a
                    class="me-1"
                    data-bs-trigger="hover"
                    data-bs-toggle="tooltip"
                    title="0xD6C86015a60C3dEEDa96F7c9B70A4C43f0E49FFC"
                    href="/address/0xD6C86015a60C3dEEDa96F7c9B70A4C43f0E49FFC#code"
                  >
                    <span class="d-flex align-items-center">
                      <i class="far fa-file-alt text-secondary me-1">
                        <FaRegFileAlt />
                      </i>
                      <span data-highlight-target="0xD6C86015a60C3dEEDa96F7c9B70A4C43f0E49FFC">
                        0xD6C860...f0E49FFC
                      </span>
                    </span>{" "}
                  </a>
                  <a
                    class="js-clipboard link-secondary"
                    href="javascript:;"
                    data-clipboard-text="0xD6C86015a60C3dEEDa96F7c9B70A4C43f0E49FFC"
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    title="Copy Address"
                    data-hs-clipboard-options='{ "type": "tooltip", "successText": "Copied!", "classChangeTarget": "#linkIcon_f_tx_1", "defaultClass": "fa-copy", "successClass": "fa-check" }'
                  >
                    <i id="linkIcon_f_tx_1" class="far fa-copy fa-fw">
                      <FaRegCopy />
                    </i>{" "}
                  </a>
                </span>
              </td>
              <td>PLUG</td>
              <td>Solidity</td>
              <td>
                <span>
                  <i id="linkIcon_f_tx_1" class="far fa-copy fa-fw">
                    <IoWarningOutline />
                  </i>{" "}
                  0.8.24
                </span>
              </td>
              <td>0 POL</td>
              <td>6</td>
              <td>
                <div class="d-flex gap-1">
                  <span
                    class="badge bg-light border text-muted rounded-circle content-center"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Constructor Arguments"
                  >
                    <i class="fas fa-wrench">
                      <AiFillTool />
                    </i>
                  </span>
                </div>
              </td>
              <td>2/17/2024</td>
              <td>-</td>
              <td>MIT</td>
              <td>
                <a
                  class="btn btn-sm btn-secondary"
                  href="/find-similar-contracts?a=0xD6C86015a60C3dEEDa96F7c9B70A4C43f0E49FFC&m=low"
                >
                  <i class="far fa-search me-0.5">
                    <IoIosSearch />
                  </i>{" "}
                  Search
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
