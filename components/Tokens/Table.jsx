import React from "react";
import { GoQuestion } from "react-icons/go";

const Table = () => {
  return (
    <div class="table-responsive">
      <div id="ContentPlaceHolder1_tblErc20Tokens">
        <table class="table table-hover mb-0">
          <thead class="align-middle text-nowrap">
            <tr>
              <th scope="col" width="20" class="text-center text-muted">
                #
              </th>
              <th scope="col">Token</th>
              <th scope="col">
                <a
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover"
                  data-bs-title="Click for descending sort"
                >
                  Price
                </a>
              </th>
              <th scope="col">
                <a
                  href="./tokens?sort=percent_change_24h&order=desc"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover"
                  data-bs-title="Click for descending sort"
                >
                  Change (%)
                </a>
              </th>
              <th scope="col">
                <a
                  href="./tokens?sort=24h_volume_usd&order=desc"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover"
                  data-bs-title="Click for descending sort"
                >
                  Volume (24H)
                </a>
              </th>
              <th scope="col">
                <i class="far fa-arrow-down-wide-short small text-secondary me-0.5"></i>
                <a
                  href="./tokens?sort=marketcap&order=asc"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover"
                  data-bs-title="Sorted in descending order, Click for ascending sort"
                >
                  Circulating Market Cap
                </a>
                <i
                  class="far fa-question-circle text-muted"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover"
                  data-bs-title="Calculated by multiplying the number of tokens in circulating supply across all chains with the current market price per token."
                >
                  <GoQuestion />
                </i>
              </th>
              <th scope="col">
                <a href="#">
                  On-Chain Market Cap
                  <i
                    class="far fa-question-circle text-muted"
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    data-bs-title="Calculated by multiplying the token's Total Supply on Polygon PoS Chain with the current market price per token."
                  >
                    <GoQuestion />
                  </i>
                </a>
              </th>
              <th scope="col">
                <a
                  href="./tokens?sort=holders&order=desc"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover"
                  data-bs-title="Click for descending sort"
                >
                  Holders
                </a>
              </th>
            </tr>
          </thead>
          <tbody class="align-middle text-nowrap">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <a class="d-flex align-items-center gap-1 link-dark" href="#">
                    <div class="d-flex gap-1">
                      <div class="hash-tag text-truncate fw-medium">
                        (PoS) IDBit IDT
                      </div>
                      <span class="text-muted">
                        (USDT)
                        <i
                          role="button"
                          class="far fa-info-circle text-secondary pe-auto ms-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="auto"
                          title="Cross-Chain"
                        ></i>
                      </span>
                    </div>
                  </a>
                </td>
                <td>
                  <div
                    class="d-inline"
                    data-bs-toggle="tooltip"
                    data-bs-title="$1.001"
                  >
                    $0.000252
                  </div>
                  <div class="text-muted small">0.000707POL</div>
                </td>
                <td>15%</td>
                <td>$44,755.00</td>
                <td>$97,647,000.00&nbsp;&nbsp;&nbsp;</td>
                <td>$467,253,858.00&nbsp;&nbsp;&nbsp;</td>
                <td>
                  <div>1,328</div>
                  <div
                    class="text-danger small d-inline"
                    data-bs-toggle="tooltip"
                    data-bs-title="A +0.015% decrease in Token holders from previous day count of 312"
                  >
                    +0.015%
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
