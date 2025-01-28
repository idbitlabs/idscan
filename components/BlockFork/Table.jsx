import React from "react";
import { FaArrowRightLong, FaRegCopy } from "react-icons/fa6";

const Table = () => {
  return (
    <div class="table-responsive">
      <table class="table table-hover table-align-middle mb-0">
        <thead
          id="ContentPlaceHolder1_theadAddressBlockForkedTable"
          class="text-nowrap"
        >
          <tr>
            <th scope="col">Height</th>
            <th scope="col">
              <a
                href="javascript:;"
                onclick="switchAgeToDateTime(this)"
                id="lnkAgeDateTime"
              >
                Age
              </a>
            </th>
            <th scope="col">Txn</th>
            <th scope="col">Uncles</th>
            <th data-highlight scope="col">
              Validator
            </th>
            <th scope="col">Gas Limit</th>
            <th scope="col">Difficulty</th>
            <th scope="col">Reward</th>
            <th scope="col">ReorgDepth</th>
          </tr>
        </thead>
        <tbody class="align-middle text-nowrap">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <tr key={index + 1}>
              <td>
                <a href="/block/53612878/f?hash=0x84b0cd2699730780f022ae9030a608d39ba42842501b9abb238d02660740139e">
                  53612878
                </a>
              </td>

              <td class="showAge ">
                <span
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-title="2024-02-17 2:53:17"
                >
                  3 hrs 19 mins ago
                </span>
              </td>

              <td>85</td>
              <td>0</td>
              <td>
                <span class="d-flex align-items-center gap-1">
                  <a
                    href="/address/0x9ead03f7136fc6b4bdb0780b00a1c14ae5a8b6d0"
                    data-bs-toggle="tooltip"
                    title="0x9ead03f7136fc6b4bdb0780b00a1c14ae5a8b6d0"
                  >
                    <span data-highlight-target="0x9eaD03F7136Fc6b4bDb0780B00a1c14aE5A8B6d0">
                      0x9eaD03...E5A8B6d0
                    </span>
                  </a>
                  <a
                    class="js-clipboard link-secondary  "
                    href="javascript:;"
                    data-clipboard-text="0x9eaD03F7136Fc6b4bDb0780B00a1c14aE5A8B6d0"
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    title="Copy Address"
                    data-hs-clipboard-options='{ "type": "tooltip", "successText": "Copied!", "classChangeTarget": "#linkIcon_1", "defaultClass": "fa-copy", "successClass": "fa-check" }'
                  >
                    <i id="linkIcon_1" class="far fa-copy fa-fw">
                      <FaRegCopy />
                    </i>{" "}
                  </a>
                </span>
              </td>
              <td>29,970,275</td>
              <td>0.000 TH</td>
              <td>
                0<b>.</b>61411 MATIC
              </td>
              <td>7</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
