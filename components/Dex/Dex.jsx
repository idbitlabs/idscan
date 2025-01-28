import React from "react";
import { FiSearch } from "react-icons/fi";

const Dex = () => {
  return (
    <main id="content" class="main-content" role="main">
      <input type="hidden" name="hdnAgeText" id="hdnAgeText" value="Age" />
      <input
        type="hidden"
        name="hdnDateTimeText"
        id="hdnDateTimeText"
        value="Date Time (UTC)"
      />
      <input
        type="hidden"
        name="hdnAgeTitle"
        id="hdnAgeTitle"
        value="Click to show Age Format"
      />
      <input
        type="hidden"
        name="hdnDateTimeTitle"
        id="hdnDateTimeTitle"
        value="Click to show Datetime Format"
      />
      <input type="hidden" name="hdnTxnText" id="hdnTxnText" value="Txn Fee" />
      <input
        type="hidden"
        name="hdnGasPriceText"
        id="hdnGasPriceText"
        value="Gas Price"
      />
      <input
        type="hidden"
        name="hdnTxnFeeTitle"
        id="hdnTxnFeeTitle"
        value="(Gas Price * Gas Used by Txns) in MATIC"
      />
      <input
        type="hidden"
        name="hdnGasPriceTitle"
        id="hdnGasPriceTitle"
        value="Gas Price in Gwei"
      />
      <input
        type="hidden"
        name="hdnSiteName"
        id="hdnSiteName"
        value="polygonscan"
      />
      <input
        type="hidden"
        name="hdnSiteEmptyToken"
        id="hdnSiteEmptyToken"
        value="./assets/poly/images/svg/empty-token.svg?v=24.2.2.0"
      />
      <input
        type="hidden"
        name="hdnSiteShortUrl"
        id="hdnSiteShortUrl"
        value="polygonscan.com"
      />
      <section class="container-xxl">
        <div class="d-flex flex-wrap justify-content-between align-items-center border-bottom gap-3 py-5">
          <div class="d-flex flex-wrap align-items-center gap-1">
            <h1 class="h5 mb-0">DEX Tracker</h1>
          </div>
        </div>
      </section>

      <div class="container-xxl pt-5 pb-12">
        <ul class="nav nav-pills gap-2 pb-3" id="myTab" role="tablist">
          <li class="nav-item snap-align-start" role="presentation">
            <button
              type="button"
              role="tab"
              class="nav-link active"
              id="transactionsTabNav"
              data-bs-toggle="pill"
              data-bs-target="#transactionsTabContent"
              aria-controls="transactionsTabContent"
              aria-selected="true"
            >
              Transactions
            </button>
          </li>
        </ul>

        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade "
            id="transactionsTabContent"
            role="tabpanel"
            aria-labelledby="transactionsTabNav"
            tabindex="0"
          >
            <iframe
              id="txnsiframe"
              class="w-100 card d-block"
              frameborder="0"
              scrolling="no"
              src="/dextracker_txns"
              style={{ height: "1421.25px" }}
            ></iframe>
          </div>

          <div
            class="tab-pane fade active show"
            id="tradingpairsTabContent"
            role="tabpanel"
            aria-labelledby="tradingPairsTabNav"
            tabindex="0"
          >
            <div class="card">
              <div class="card-header d-flex flex-wrap justify-content-between align-items-center gap-2">
                <div class="d-flex flex-wrap align-content-center justify-content-between gap-2">
                  <div class="dropdown">
                    <button
                      type="button"
                      id="dexDropdownButton"
                      class="btn btn-sm btn-white text-start w-100 dropdown-toggle"
                      data-bs-auto-close="outside"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Select DEX
                      <span id="selectedDexLabel">
                        <span class="text-secondary mx-1">|</span>
                        <img
                          class="me-1"
                          width="15"
                          src="/images/defi/uniswap_3.png"
                          alt=""
                        />
                        Uniswap V3: (Fee: 0.30%)
                      </span>
                    </button>
                    <div
                      id="dexDropdownItems"
                      class="dropdown-menu dropdown-menu-sm-end"
                      aria-labelledby="dexDropdownButton"
                      style={{ width: "max-content" }}
                    >
                      <div
                        class="overflow-auto scrollbar-custom px-3 pb-3"
                        style={{ maxHeight: "19rem" }}
                      >
                        <ul class="list nav nav-pills nav-pills-flush nav-list flex-column w-100">
                          <li class="nav-item">
                            <div class="dropend position-static">
                              <button
                                type="button"
                                id="uniV3DropdownButton"
                                class="nav-link w-100 text-start d-flex align-items-center justify-content-between gap-1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span>
                                  <img
                                    class="me-1"
                                    width="15"
                                    src="/images/defi/uniswap_3.png"
                                    alt="Uniswap V3"
                                  />
                                  Uniswap V3
                                </span>
                                <i class="fa-regular fa-chevron-right ms-1"></i>
                              </button>
                              <ul
                                id="uniV3DropdownItems"
                                class="dropdown-menu dropdown-menu-sm-end"
                                aria-labelledby="uniV3DropdownButton"
                              >
                                <li class="nav-item">
                                  <button
                                    type="button"
                                    class="nav-link w-100 text-start dex-dropdown-item"
                                    data-dex="uniswapv3"
                                    data-fee="100"
                                  >
                                    Fee: 0.01%
                                  </button>
                                  <hr class="mt-2 mb-1" />
                                </li>
                                <li class="nav-item">
                                  <button
                                    type="button"
                                    class="nav-link w-100 text-start dex-dropdown-item"
                                    data-dex="uniswapv3"
                                    data-fee="500"
                                  >
                                    Fee: 0.05%
                                  </button>
                                  <hr class="mt-2 mb-1" />
                                </li>
                                <li class="nav-item">
                                  <button
                                    type="button"
                                    class="nav-link w-100 text-start dex-dropdown-item"
                                    data-dex="uniswapv3"
                                    data-fee="3000"
                                  >
                                    Fee: 0.30%
                                  </button>
                                  <hr class="mt-2 mb-1" />
                                </li>
                                <li class="nav-item">
                                  <button
                                    type="button"
                                    class="nav-link w-100 text-start dex-dropdown-item"
                                    data-dex="uniswapv3"
                                    data-fee="10000"
                                  >
                                    Fee: 1.00%
                                  </button>
                                </li>
                              </ul>
                            </div>
                            <hr class="mt-2 mb-1" />
                          </li>
                          <li class="nav-item">
                            <button
                              type="button"
                              class="nav-link w-100 text-start d-flex align-items-center gap-1 dex-dropdown-item"
                              data-dex="uniswapv2"
                            >
                              <img
                                width="15"
                                src="/images/defi/uniswap_2.svg"
                                alt="Uniswap V2"
                              />
                              <span>Uniswap V2</span>
                            </button>
                            <hr class="mt-2 mb-1" />
                          </li>
                          <li class="nav-item">
                            <button
                              type="button"
                              class="nav-link w-100 text-start d-flex align-items-center gap-1 dex-dropdown-item"
                              data-dex="sushiswap"
                            >
                              <img
                                width="15"
                                src="/images/defi/sushiswap.png"
                                alt="SushiSwap"
                              />
                              <span>SushiSwap</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="dropdown">
                    <button
                      type="button"
                      id="pairCategoryDropdownButton"
                      class="btn btn-sm btn-white text-start w-100 dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Select Pair Category
                      <span id="selectedPairTypeLabel"></span>
                    </button>
                    <div
                      id="pairCategoryDropdownItems"
                      class="dropdown-menu dropdown-menu-sm-end"
                      aria-labelledby="pairCategoryDropdownButton"
                      style={{ width: "max-content" }}
                    >
                      <div
                        class="overflow-auto scrollbar-custom px-3 pb-3"
                        style={{ maxHeight: "19rem" }}
                      >
                        <ul class="list nav nav-pills nav-pills-flush nav-list flex-column w-100">
                          <li class="nav-item">
                            <button
                              type="button"
                              class="nav-link w-100 text-start pairTypeItem"
                              onclick="updatePairTypeFilter(this)"
                              data-value="All"
                              data-description=""
                            >
                              All
                            </button>
                            <hr class="mt-2 mb-1" />
                          </li>
                          <li class="nav-item">
                            <button
                              type="button"
                              class="nav-link w-100 text-start pairTypeItem"
                              onclick="updatePairTypeFilter(this)"
                              data-value="NativeTokenStableCoinPair"
                              data-description="ETH / Stablecoin"
                            >
                              ETH / Stablecoin
                            </button>
                            <hr class="mt-2 mb-1" />
                          </li>
                          <li class="nav-item">
                            <button
                              type="button"
                              class="nav-link w-100 text-start pairTypeItem"
                              onclick="updatePairTypeFilter(this)"
                              data-value="NativeTokenPair"
                              data-description="Others / ETH"
                            >
                              Others / ETH
                            </button>
                            <hr class="mt-2 mb-1" />
                          </li>
                          <li class="nav-item">
                            <button
                              type="button"
                              class="nav-link w-100 text-start pairTypeItem"
                              onclick="updatePairTypeFilter(this)"
                              data-value="StableCoinPair"
                              data-description="Stablecoin / Stablecoin"
                            >
                              Stablecoin / Stablecoin
                            </button>
                            <hr class="mt-2 mb-1" />
                          </li>
                          <li class="nav-item">
                            <button
                              type="button"
                              class="nav-link w-100 text-start pairTypeItem"
                              onclick="updatePairTypeFilter(this)"
                              data-value="OtherStableCoinPair"
                              data-description="Others / Stablecoin"
                            >
                              Others / Stablecoin
                            </button>
                            <hr class="mt-2 mb-1" />
                          </li>
                          <li class="nav-item">
                            <button
                              type="button"
                              class="nav-link w-100 text-start pairTypeItem"
                              onclick="updatePairTypeFilter(this)"
                              data-value="Token2Token"
                              data-description="Others / Others"
                            >
                              Others / Others
                            </button>
                            <hr class="mt-2 mb-1" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="d-flex gap-2">
                  <div
                    class="badge bg-light text-dark border d-flex gap-1 align-items-baseline text-nowrap rounded-pill order-md-1 d-none"
                    id="tradingpairs_divDataTableFiltered"
                  >
                    <span class="text-muted">Filtered by</span>
                    <span
                      class="hash-tag text-truncate"
                      id="tradingpairs_txtDataTableFiltered"
                    ></span>
                    <button
                      onclick="clearTokenAddressFilter();"
                      type="button"
                      class="btn btn-sm btn-secondary rounded-circle d-flex content-center ms-1 me-n1"
                      style={{ width: "1.35rem", height: "1.35rem" }}
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-title="Click to clear the filter"
                    >
                      <i class="far fa-times fa-fw"></i>
                    </button>
                  </div>
                  <div class="dropdown order-md-2">
                    <button
                      type="button"
                      class="btn btn-sm btn-secondary"
                      id="tradingpairs_searchFilterInvoker"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="far fa-search">
                        <FiSearch />
                      </i>
                    </button>
                    <div
                      class="dropdown-menu dropdown-menu-sm-end"
                      aria-labelledby="tradingpairs_searchFilterInvoker"
                      style={{ minWidth: "10rem" }}
                    >
                      <div class="position-relative">
                        <form
                          id="tradingPairSearchForm"
                          action="javascript:void(0);"
                          onsubmit="updateTokenAddressFilter();"
                          class="js-validate js-form-message js-focus-state input-group"
                          novalidate="novalidate"
                        >
                          <div
                            class="input-group"
                            style={{ minWidth: "20rem" }}
                          >
                            <input
                              id="tradingpairs_q"
                              name="q"
                              type="search"
                              value=""
                              class="form-control py-2"
                              placeholder="Search by Token Address"
                              autocomplete="off"
                              regex="[0-9a-fA-F]{40}"
                              required="required"
                              minlength="42"
                              maxlength="42"
                              data-msg="Please enter a valid Token Address (such as 0xc2132d05d31c914a87c6611c10748aeb04b58e8f)"
                              data-error-class="u-has-error"
                              data-success-class="u-has-success"
                            />
                            <button class="btn btn-primary" type="submit">
                              Find
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="table-responsive">
                <div class="top d-flex flex-column flex-sm-row justify-content-between gap-3 p-3">
                  <div class="text-dark">
                    <span>
                      More than &gt; 10,000 records found (Showing last 10k
                      records)
                    </span>
                  </div>

                  <nav aria-label="page navigation">
                    <ul class="pagination pagination-sm mb-0">
                      <li class="page-item disabled">
                        <span class="page-link">First</span>
                      </li>
                      <li class="page-item disabled">
                        <span class="page-link px-3">
                          <i class="fa fa-chevron-left small"></i>
                        </span>
                        <span class="sr-only">Previous</span>
                      </li>
                      <li class="page-item disabled">
                        <span class="page-link text-nowrap">Page 1 of 400</span>
                      </li>
                      <li class="page-item" data-bs-toggle="tooltip">
                        <a
                          class="page-link px-3"
                          href="dextracker_txns?p=2"
                          aria-label="Next"
                        >
                          <span aria-hidden="True">
                            <i class="fa fa-chevron-right small"></i>
                          </span>
                          <span class="sr-only">Next</span>
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="dextracker_txns?p=400">
                          <span aria-hidden="True">Last</span>
                          <span class="sr-only">Last</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <table
                  id="tblTradingPairs"
                  class="table table-hover table-align-middle"
                >
                  <thead class="align-middle text-nowrap">
                    <tr>
                      <th scope="col" data-highlight="">
                        Token
                      </th>
                      <th scope="col">Liquidity Pair</th>
                      <th scope="col">
                        Token Price (
                        <a
                          href="javascript:void(0);"
                          onclick="switchTokenPriceCurrency(this);"
                          id="token-price-header"
                          data-current-price-code="USD"
                        >
                          USD
                        </a>
                        )
                      </th>
                      <th scope="col">
                        Liquidity (
                        <a
                          href="javascript:void(0);"
                          onclick="switchLiquidityCurrency(this);"
                          id="liquidity-header"
                          data-current-liquidity-code="USD"
                        >
                          USD
                        </a>
                        )
                      </th>
                      <th scope="col">Volume (24H)</th>
                      <th scope="col">
                        Amount (
                        <a
                          href="javascript:void(0);"
                          onclick="switchTokenAmount(this);"
                          id="token-amount-header"
                          data-current-token-amount="Token0"
                        >
                          Token 0
                        </a>
                        )
                      </th>
                      <th scope="col">
                        Pair Created -{" "}
                        <a
                          href="javascript:void(0);"
                          onclick="switchAgeToDateTimeNew(this, true)"
                          class="age-datetime-with-tooltip"
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                        >
                          Age
                        </a>
                      </th>
                      <th scope="col">Token Contract</th>
                      <th scope="col">Details</th>
                    </tr>
                  </thead>
                  <tbody class="align-middle text-nowrap"></tbody>
                </table>

                {/* <tbody class="align-middle text-nowrap"> */}
                {/* <tr>
                    <td>
                      <button
                        type="button"
                        class="js-tnx-preview btn btn-sm btn-white fs-70x content-center mx-auto myFnExpandBox"
                        style={{ width: "1.75rem", height: "1.75rem" }}
                        data-bs-content-id="js-tnx-preview"
                        data-bs-container="body"
                        data-bs-toggle="popover"
                        data-bs-placement="right"
                        data-bs-trigger="manual"
                        data-bs-html="true"
                        data-initialized="false"
                        data-bs-content="<i class='fas fa-circle-notch fa-spin text-primary fa-2x'></i>"
                        data-bs-custom-class="popover-preview"
                      >
                        <i class="far fa-eye"></i>
                      </button>
                    </td>
                    <td>
                      <span
                        class="hash-tag text-truncate"
                        style={{ maxWidth: "7rem" }}
                      >
                        <a
                          target="_parent"
                          href="/tx/0x599a521b48604ff68573701ebe220915998fbed03c60f4618b9d768968afaf79"
                          class="myFnExpandBox_searchVal"
                        >
                          0x599a521b48604ff68573701ebe220915998fbed03c60f4618b9d768968afaf79
                        </a>
                      </span>
                    </td>
                    <td>
                      <a href="/block/53737217" target="_parent">
                        53737217
                      </a>
                    </td>
                    <td
                      class="showDate "
                      style={{ display: "none !important " }}
                    >
                      <span
                        rel="tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-title="21 days ago"
                      >
                        2024-02-20 7:31:12
                      </span>
                    </td>
                    <td class="showAge ">
                      <span
                        rel="tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-title="2024-02-20 7:31:12"
                      >
                        21 days ago
                      </span>
                    </td>
                    <td
                      class="showLocalDate"
                      style={{ display: "none !important" }}
                    >
                      <span
                        rel="tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-title="21 days ago"
                      >
                        1708414272
                      </span>
                    </td>
                    <td>Swap</td>
                    <td>
                      0.00326629804896941{" "}
                      <a
                        target="_parent"
                        href="/token/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-title="WETH"
                      >
                        WETH
                      </a>
                    </td>
                    <td>
                      2.98182885029411{" "}
                      <a
                        target="_parent"
                        href="/token/0xbc91347e80886453f3f8bbd6d7ac07c122d87735"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-title="BANANA"
                      >
                        BANANA
                      </a>
                    </td>
                    <td>0.00109540 WETH </td>
                    <td>N/A</td>
                    <td class="text-center">
                      <img
                        src="/images/dex/quickswap.png"
                        class="rounded-circle"
                        width="18"
                        height="18"
                        data-bs-toggle="tooltip"
                        data-bs-title="Quickswap"
                      />
                    </td>
                  </tr> */}
                {/* </tbody> */}
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <p class="d-flex align-items-baseline fs-sm text-muted gap-1 mb-3">
            <i class="far fa-lightbulb-on"></i>
            <span>
              DEX (Decentralized Exchanges) allow for trades to be settled on
              the blockchain. The DEX Tracker page tracks all transactions and
              trading pairs from a list of supported DEX. Learn more about this
              page in our{" "}
              <a target="_blank" href="https://info.polygonscan.com//dex/">
                Knowledge Base
              </a>
              .
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Dex;
