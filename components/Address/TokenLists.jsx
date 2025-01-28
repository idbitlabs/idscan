import React, { useEffect, useState } from "react";
import { FaWallet } from "react-icons/fa";

import { shortenAddress, convertIntoMatic } from "../../utils/index";
const TokenLists = ({ ERC20_TOKEN_TRANSFER, addressExplor }) => {
  const [transactions, setTransactions] = useState();

  const loadDetails = async (addressExplor) => {
    ///ERC20_TOKEN_TRANSFER
    const apiData = await ERC20_TOKEN_TRANSFER(addressExplor);
    setTransactions(apiData.data.result);
    console.log(apiData);
  };

  useEffect(() => {
    loadDetails(addressExplor);
  }, [addressExplor]);
  return (
    <>
      {transactions == "Max rate limit reached" ||
      transactions == "Error! Invalid address format" ? (
        "API ERROR"
      ) : (
        <div class="dropdown-menu overflow-hidden w-100 p-0 ms-md-4 mt-n3 new_disply_Block_buy_adddess token_Model">
          <div class="p-3">
            <input
              type="text"
              class="js-input-focus form-control bg-light bg-focus-white search"
              placeholder="Search for Token Name"
              id="token-balance-search"
            />
          </div>

          <div
            class="overflow-y-auto scrollbar-custom px-3 pb-3 "
            style={{ maxHeight: "19rem" }}
          >
            {/* //1? */}
            <div
              class="list-not-found text-center py-12"
              style={{ display: "none" }}
            >
              <span
                class="bg-warning bg-opacity-10 border border-warning border-opacity-25 text-yellow-600 fs-70x content-center rounded-pill mx-md-auto mb-2"
                style={{ width: "3.5rem", height: "3.5rem" }}
              >
                <i class="far fa-file-slash fs-4"></i>
              </span>
              <p class="text-muted mb-0">Could not find any matches!</p>
            </div>
            {/* //2 */}

            <ul class="list nav nav-pills nav-pills-flush nav-list flex-column w-100 ">
              <li class="nav-item list-custom-divider-ERC20">
                <div class="d-flex justify-content-between align-items-baseline bg-light rounded py-1.5 px-2">
                  <span class="fw-medium">
                    ERC-20 transactions ({transactions?.length})
                  </span>
                  <button
                    class="btn btn-sm py-0 text-muted"
                    id="btn_ERC20_sort"
                    data-bs-toggle="tooltip"
                    aria-label="Click to sort"
                  >
                    <i class="fad fa-sort-down"></i>
                  </button>
                </div>
              </li>
              {transactions?.map((token, index) => (
                <li class="nav-item list-custom-ERC20">
                  <a
                    class="nav-link d-flex justify-content-between align-items-center gap-2 px-2"
                    href="#"
                  >
                    <div>
                      <div class="d-flex align-items-center gap-1">
                        <img
                          src="/icon.png"
                          width="14"
                          height="14"
                          class="rounded-circle"
                          alt="USDC.e"
                        />
                        <div class="d-flex gap-1">
                          <span class="list-name hash-tag text-truncate">
                            <span
                              class="text-wrap text-truncate"
                              data-bs-toggle="tooltip"
                            >
                              {token.tokenName}
                            </span>{" "}
                            {token.transactionsymbol}
                          </span>
                        </div>
                      </div>
                      <span class="text-muted">
                        {shortenAddress(token.contractAddress)}
                      </span>
                    </div>
                    <div class="text-end">
                      <div class="list-usd-value">
                        {convertIntoMatic(token.value)}
                      </div>
                      <div class="list-usd-rate small text-muted">@0.9992</div>
                    </div>
                  </a>
                  <hr class="mt-2 mb-1" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default TokenLists;
