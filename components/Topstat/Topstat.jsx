import React from "react";

const Topstat = () => {
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
        value="(Gas Price * Gas Used by Txns) in POL"
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
          <div class="d-flex flex-column gap-1">
            <h1 class="h5 mb-0">Top Statistics</h1>
          </div>
        </div>
      </section>

      <div id="overlayMain" class="bg-white bg-opacity-40"></div>

      <section class="container-xxl pt-5 pb-12">
        <form method="post" action="./topstat" id="ctl00" class="js-validate">
          <div class="aspNetHidden">
            <input
              type="hidden"
              name="__VIEWSTATE"
              id="__VIEWSTATE"
              value="dhYJrdBrQgOHdHXjrjNqwRW3Sb6yA1iRFoxY/N2hhSslwImm4uPVXqvrJXqLplpKizdHs5TpYD/edAH5C0UPs3ms+fNkkn/2Y/SG3sDhVG8="
            />
          </div>
          <div class="aspNetHidden">
            <input
              type="hidden"
              name="__VIEWSTATEGENERATOR"
              id="__VIEWSTATEGENERATOR"
              value="19386328"
            />
          </div>

          <ul
            class="nav nav-pills gap-2 pb-3 nav_tabs1"
            id="nav_tabs"
            role="tablist"
          >
            <li class="nav-item snap-align-start" role="presentation">
              <a
                type="button"
                role="tab"
                class="nav-link active"
                id="li_Overview"
                tabindex="0"
                href="javascript:;"
                data-bs-toggle="pill"
                data-bs-target="#Overview"
                aria-controls="Overview"
                aria-selected="true"
                onclick="javascript:activaTab('Overview');"
              >
                Overview
              </a>
            </li>
            <li class="nav-item snap-align-start" role="presentation">
              <a
                type="button"
                role="tab"
                class="nav-link"
                id="li_Transaction"
                tabindex="0"
                href="javascript:;"
                data-bs-toggle="pill"
                data-bs-target="#Transaction"
                aria-controls="Transaction"
                aria-selected="false"
                onclick="javascript:showLoader(window.transactionFrame_loaded);activaTab('Transaction');"
              >
                Transactions
              </a>
            </li>
            <li class="nav-item snap-align-start" role="presentation">
              <a
                type="button"
                role="tab"
                class="nav-link"
                id="li_Token"
                tabindex="0"
                href="javascript:;"
                data-bs-toggle="pill"
                data-bs-target="#Token"
                aria-controls="Token"
                aria-selected="false"
                onclick="javascript:showLoader(window.tokenFrame_loaded);activaTab('Token');"
              >
                Tokens
              </a>
            </li>
            <li class="nav-item snap-align-start" role="presentation">
              <a
                type="button"
                role="tab"
                class="nav-link"
                id="li_Network"
                tabindex="0"
                href="javascript:;"
                data-bs-toggle="pill"
                data-bs-target="#Network"
                aria-controls="Network"
                aria-selected="false"
                onclick="javascript:showLoader(window.networkFrame_loaded);activaTab('Network');"
              >
                Network
              </a>
            </li>
            <li class="nav-item snap-align-start" role="presentation">
              <a
                type="button"
                role="tab"
                class="nav-link"
                id="li_HotContracts"
                tabindex="0"
                href="javascript:;"
                data-bs-toggle="pill"
                data-bs-target="#HotContracts"
                aria-controls="HotContracts"
                aria-selected="false"
                onclick="javascript:showLoader(window.hotContractsFrame_loaded);activaTab('HotContracts');"
              >
                Hot Contracts
              </a>
            </li>
          </ul>

          <div class="card">
            <div class="card-body">
              <div class="tab-content">
                <div
                  class="tab-pane fade show active"
                  id="Overview"
                  role="tabpanel"
                >
                  <div class="d-md-flex justify-content-between align-items-center">
                    <ul
                      class="nav nav-pills nav-pills-secondary gap-2 pb-3"
                      id="nav_subtab_0"
                      role="tablist"
                    >
                      <li
                        id="ContentPlaceHolder1_li_Overview_Hour24"
                        class="nav-item"
                      >
                        <a
                          class="nav-link active"
                          href="#OverviewHour24"
                          data-bs-toggle="tab"
                          onclick="javascript:activaTab('OverviewHour24');"
                        >
                          1 Day
                        </a>
                      </li>
                      <li
                        id="ContentPlaceHolder1_li_Overview_Day3"
                        class="nav-item"
                      >
                        <a
                          class="nav-link"
                          href="#OverviewDay3"
                          data-bs-toggle="tab"
                          onclick="javascript:activaTab('OverviewDay3');"
                        >
                          3 Days
                        </a>
                      </li>
                      <li
                        id="ContentPlaceHolder1_li_Overview_Day7"
                        class="nav-item"
                      >
                        <a
                          class="nav-link"
                          href="#OverviewDay7"
                          data-bs-toggle="tab"
                          onclick="javascript:activaTab('OverviewDay7');"
                        >
                          7 Days
                        </a>
                      </li>
                    </ul>
                    <div>
                      <p class="text-muted mb-3" id="daterange"></p>
                    </div>
                  </div>
                  <div class="tab-pane fade show active" id="OverviewHour24">
                    <div class="row">
                      <div class="col-md-12 col-lg-6 mb-3">
                        <div class="card h-100 w-100 shadow-none">
                          <div class="card-header bg-light d-flex justify-content-between align-items-center">
                            Transactions
                            <span class="hash-tag">
                              <a href="#Transaction" id="a_TransactionHour24">
                                View Top 20
                              </a>
                            </span>
                          </div>
                          <div
                            id="ContentPlaceHolder1_Div1a_body"
                            class="card-body"
                          >
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top POL Sender</div>
                              <div class="text-end">Total POL</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <span class="d-flex align-items-center gap-2">
                                  <a
                                    href="/address/0x0000000000000000000000000000000000001010"
                                    data-bs-trigger="hover"
                                    data-bs-toggle="tooltip"
                                    title="0x0000000000000000000000000000000000001010"
                                    target="_parent"
                                  >
                                    <span class="d-flex align-items-center">
                                      <i
                                        class="far fa-file-alt text-secondary me-1"
                                        data-bs-trigger="hover"
                                        data-bs-toggle="tooltip"
                                        title="Contract"
                                      ></i>
                                      Polygon: POL Token
                                    </span>
                                  </a>
                                </span>
                              </div>
                              <div class="d-flex text-muted text-end">
                                <img
                                  class="me-1"
                                  width="15"
                                  data-img-theme="light"
                                  src="icon.png"
                                  alt="Polygon PoS Chain Logo"
                                />
                                8,355,266.26715398
                              </div>
                            </div>
                            <hr class="pb-1" />
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top POL Receiver</div>
                              <div class="text-end">Total POL</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <span class="d-flex align-items-center gap-2">
                                  <a
                                    href="/address/0xd1bfee745dbb43b4bf79a90078227a640ad5cac0"
                                    data-bs-trigger="hover"
                                    data-bs-toggle="tooltip"
                                    title="0xd1bfee745dbb43b4bf79a90078227a640ad5cac0"
                                    target="_parent"
                                  >
                                    <span class="d-flex align-items-center">
                                      <span data-highlight-target="0xd1BFeE745DbB43B4Bf79a90078227a640AD5CAC0">
                                        0xd1BFeE...0AD5CAC0
                                      </span>
                                    </span>
                                  </a>
                                </span>
                              </div>
                              <div class="d-flex text-muted text-end">
                                <img
                                  class="me-1"
                                  width="15"
                                  data-img-theme="light"
                                  src="icon.png"
                                  alt="Polygon PoS Chain Logo"
                                />
                                5,000,000
                              </div>
                            </div>
                            <hr class="pb-1" />
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top Txn Count Sent</div>
                              <div class="text-end">Total Txn</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <span class="d-flex align-items-center gap-2">
                                  <a
                                    href="/address/0xe93685f3bba03016f02bd1828badd6195988d950"
                                    data-bs-trigger="hover"
                                    data-bs-toggle="tooltip"
                                    title="0xe93685f3bba03016f02bd1828badd6195988d950"
                                    target="_parent"
                                  >
                                    <span class="d-flex align-items-center">
                                      Layer Zero: Executor
                                    </span>
                                  </a>
                                </span>
                              </div>
                              <div class="d-flex text-muted text-end">
                                29,000
                              </div>
                            </div>
                            <hr class="pb-1" />
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                Top Txn Count Received
                              </div>
                              <div class="text-end">Total Txn</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <span class="d-flex align-items-center gap-2">
                                  <a
                                    href="/address/0xf6d1b85af155229acd7b523601148585a1ff67c6"
                                    data-bs-trigger="hover"
                                    data-bs-toggle="tooltip"
                                    title="0xf6d1b85af155229acd7b523601148585a1ff67c6"
                                    target="_parent"
                                  >
                                    <span class="d-flex align-items-center">
                                      <i
                                        class="far fa-file-alt text-secondary me-1"
                                        data-bs-trigger="hover"
                                        data-bs-toggle="tooltip"
                                        title="Contract"
                                      ></i>
                                      Galxe: Space Station 3
                                    </span>
                                  </a>
                                </span>
                              </div>
                              <div class="d-flex text-muted text-end">
                                179,164
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12 col-lg-6 mb-3">
                        <div class="card h-100 w-100 shadow-none">
                          <div class="card-header bg-light d-flex justify-content-between align-items-center">
                            Tokens
                            <span class="hash-tag">
                              <a
                                href="#Token"
                                id="a_TokenHour24"
                                onclick="javascript:showLoader(window.tokenFrame_loaded);activaTab('TokenHour24');"
                              >
                                View Top 20
                              </a>
                            </span>
                          </div>
                          <div
                            id="ContentPlaceHolder1_Div1b_body"
                            class="card-body"
                          >
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top Unique Sender</div>
                              <div class="text-end">Total</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <a
                                  href="/address/0x2ab0e9e4ee70fff1fb9d67031e44f6410170d00e"
                                  data-bs-trigger="hover"
                                  data-bs-toggle="tooltip"
                                  title="0x2ab0e9e4ee70fff1fb9d67031e44f6410170d00e"
                                >
                                  <img
                                    data-cfsrc="/token/images/xencrypto_32.jpg"
                                    width="20"
                                    style={{
                                      display: "none",
                                      visibility: "hidden",
                                    }}
                                  />
                                  <noscript>
                                    <img
                                      src="/token/images/xencrypto_32.jpg"
                                      width="20"
                                    />
                                  </noscript>
                                  XEN Crypto (mXEN)
                                </a>
                              </div>
                              <div class="d-flex text-muted text-end">
                                519,957
                              </div>
                            </div>
                            <hr class="pb-1" />
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top Unique Receiver</div>
                              <div class="text-end">Total</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <a
                                  href="/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f"
                                  data-bs-trigger="hover"
                                  data-bs-toggle="tooltip"
                                  title="0xc2132d05d31c914a87c6611c10748aeb04b58e8f"
                                >
                                  <img
                                    data-cfsrc="/token/images/tether_32.png"
                                    width="20"
                                    style={{
                                      display: "none",
                                      visibility: "hidden",
                                    }}
                                  />
                                  <noscript>
                                    <img
                                      src="/token/images/tether_32.png"
                                      width="20"
                                    />
                                  </noscript>
                                  (PoS) Tether USD (USDT)
                                </a>
                              </div>
                              <div class="d-flex text-muted text-end">
                                134,648
                              </div>
                            </div>
                            <hr class="pb-1" />
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top Total Uniques</div>
                              <div class="text-end">Total</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <a
                                  href="/address/0x2ab0e9e4ee70fff1fb9d67031e44f6410170d00e"
                                  data-bs-trigger="hover"
                                  data-bs-toggle="tooltip"
                                  title="0x2ab0e9e4ee70fff1fb9d67031e44f6410170d00e"
                                >
                                  <img
                                    data-cfsrc="/token/images/xencrypto_32.jpg"
                                    width="20"
                                    style={{
                                      display: "none",
                                      visibility: "hidden",
                                    }}
                                  />
                                  <noscript>
                                    <img
                                      src="/token/images/xencrypto_32.jpg"
                                      width="20"
                                    />
                                  </noscript>
                                  XEN Crypto (mXEN)
                                </a>
                              </div>
                              <div class="d-flex text-muted text-end">
                                520,118
                              </div>
                            </div>
                            <hr class="pb-1" />
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top Txn Count</div>
                              <div class="text-end">Txn Count</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <a
                                  href="/address/0x2ab0e9e4ee70fff1fb9d67031e44f6410170d00e"
                                  data-bs-trigger="hover"
                                  data-bs-toggle="tooltip"
                                  title="0x2ab0e9e4ee70fff1fb9d67031e44f6410170d00e"
                                >
                                  <img
                                    data-cfsrc="/token/images/xencrypto_32.jpg"
                                    width="20"
                                    style={{
                                      display: "none",
                                      visibility: "hidden",
                                    }}
                                  />
                                  <noscript>
                                    <img
                                      src="/token/images/xencrypto_32.jpg"
                                      width="20"
                                    />
                                  </noscript>
                                  XEN Crypto (mXEN)
                                </a>
                              </div>
                              <div class="d-flex text-muted text-end">
                                1,039,522
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 col-lg-6 mb-3">
                        <div class="card h-100 w-100 shadow-none">
                          <div class="card-header bg-light d-flex justify-content-between align-items-center">
                            Network
                            <span class="hash-tag">
                              <a
                                href="#Network"
                                id="a_NetworkHour24"
                                onclick="javascript:showLoader(window.networkFrame_loaded);activaTab('NetworkHour24');"
                              >
                                View Top 20
                              </a>
                            </span>
                          </div>
                          <div
                            id="ContentPlaceHolder1_Div1c_body"
                            class="card-body"
                          >
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top Gas Used</div>
                              <div class="text-end">Gas Used</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <span class="d-flex align-items-center gap-2">
                                  <a
                                    href="/address/0x0b1c8f78f0d8ce21e284b5acd521f8d13dc0ac94"
                                    data-bs-trigger="hover"
                                    data-bs-toggle="tooltip"
                                    title="0x0b1c8f78f0d8ce21e284b5acd521f8d13dc0ac94"
                                  >
                                    <span class="d-flex align-items-center">
                                      <span data-highlight-target="0x0b1c8f78F0d8CE21e284b5Acd521f8d13DC0AC94">
                                        0x0b1c8f...3DC0AC94
                                      </span>
                                    </span>
                                  </a>
                                </span>
                              </div>
                              <div class="d-flex text-muted text-end">
                                6,433,360,364
                              </div>
                            </div>
                            <hr class="pb-1" />
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top Txn Count</div>
                              <div class="text-end">Txn Count</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <span class="d-flex align-items-center gap-2">
                                  <a
                                    href="/address/0xe93685f3bba03016f02bd1828badd6195988d950"
                                    data-bs-trigger="hover"
                                    data-bs-toggle="tooltip"
                                    title="0xe93685f3bba03016f02bd1828badd6195988d950"
                                  >
                                    <span class="d-flex align-items-center">
                                      Layer Zero: Executor
                                    </span>
                                  </a>
                                </span>
                              </div>
                              <div class="d-flex text-muted text-end">
                                29,000
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12 col-lg-6 mb-3">
                        <div class="card h-100 w-100 shadow-none">
                          <div class="card-header bg-light d-flex justify-content-between align-items-center">
                            Validators
                          </div>
                          <div
                            id="ContentPlaceHolder1_Div1d_body"
                            class="card-body"
                          >
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                Top Blocks Validator
                              </div>
                              <div class="text-end">Blocks Validated</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <span class="d-flex align-items-center gap-1">
                                  <a
                                    href="/address/0x67b94473d81d0cd00849d563c94d0432ac988b49"
                                    data-bs-trigger="hover"
                                    data-bs-toggle="tooltip"
                                    title="0x67b94473d81d0cd00849d563c94d0432ac988b49"
                                    target="_parent"
                                  >
                                    <span class="d-flex align-items-center">
                                      <span data-highlight-target="0x67B94473D81D0cd00849D563C94d0432Ac988B49">
                                        0x67B944...Ac988B49
                                      </span>
                                    </span>
                                  </a>
                                </span>
                              </div>
                              <div class="d-flex text-muted text-end">
                                7,803
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="OverviewDay3"
                    style={{ display: "none" }}
                  >
                    <div class="row">
                      <div class="col-md-12 col-lg-6 mb-3">
                        <div class="card h-100 w-100 shadow-none">
                          <div class="card-header bg-light d-flex justify-content-between align-items-center">
                            Transactions
                            <span class="hash-tag">
                              <a
                                href="#Transaction"
                                id="a_TransactionDay3"
                                onclick="javascript:showLoader(window.transactionFrame_loaded);activaTab('TransactionDay3');"
                              >
                                View Top 20
                              </a>
                            </span>
                          </div>
                          <div
                            id="ContentPlaceHolder1_Div16a_body"
                            class="card-body"
                          >
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top POL Sender</div>
                              <div class="text-end">Total POL</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <span class="d-flex align-items-center gap-2">
                                  <a
                                    href="/address/0x0000000000000000000000000000000000001010"
                                    data-bs-trigger="hover"
                                    data-bs-toggle="tooltip"
                                    title="0x0000000000000000000000000000000000001010"
                                    target="_parent"
                                  >
                                    <span class="d-flex align-items-center">
                                      <i
                                        class="far fa-file-alt text-secondary me-1"
                                        data-bs-trigger="hover"
                                        data-bs-toggle="tooltip"
                                        title="Contract"
                                      ></i>
                                      Polygon: POL Token
                                    </span>
                                  </a>
                                </span>
                              </div>
                              <div class="d-flex text-muted text-end">
                                <img
                                  class="me-1"
                                  width="15"
                                  data-img-theme="light"
                                  src="./assets/poly/images/svg/logos/token-light.svg?v=24.2.2.0"
                                  alt="Polygon PoS Chain Logo"
                                />
                                <img
                                  class="me-1"
                                  width="15"
                                  data-img-theme="dim"
                                  src="./assets/poly/images/svg/logos/token-dim.svg?v=24.2.2.0"
                                  alt="Polygon PoS Chain Logo"
                                />
                                <img
                                  class="me-1"
                                  width="15"
                                  data-img-theme="dark"
                                  src="./assets/poly/images/svg/logos/token-dark.svg?v=24.2.2.0"
                                  alt="Polygon PoS Chain Logo"
                                />
                                9,078,377.01047076
                              </div>
                            </div>
                            <hr class="pb-1" />
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top POL Receiver</div>
                              <div class="text-end">Total POL</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <span class="d-flex align-items-center gap-2">
                                  <a
                                    href="/address/0xd1bfee745dbb43b4bf79a90078227a640ad5cac0"
                                    data-bs-trigger="hover"
                                    data-bs-toggle="tooltip"
                                    title="0xd1bfee745dbb43b4bf79a90078227a640ad5cac0"
                                    target="_parent"
                                  >
                                    <span class="d-flex align-items-center">
                                      <span data-highlight-target="0xd1BFeE745DbB43B4Bf79a90078227a640AD5CAC0">
                                        0xd1BFeE...0AD5CAC0
                                      </span>
                                    </span>
                                  </a>
                                </span>
                              </div>
                              <div class="d-flex text-muted text-end">
                                <img
                                  class="me-1"
                                  width="15"
                                  data-img-theme="light"
                                  src="./assets/poly/images/svg/logos/token-light.svg?v=24.2.2.0"
                                  alt="Polygon PoS Chain Logo"
                                />
                                <img
                                  class="me-1"
                                  width="15"
                                  data-img-theme="dim"
                                  src="./assets/poly/images/svg/logos/token-dim.svg?v=24.2.2.0"
                                  alt="Polygon PoS Chain Logo"
                                />
                                <img
                                  class="me-1"
                                  width="15"
                                  data-img-theme="dark"
                                  src="./assets/poly/images/svg/logos/token-dark.svg?v=24.2.2.0"
                                  alt="Polygon PoS Chain Logo"
                                />
                                5,000,000
                              </div>
                            </div>
                            <hr class="pb-1" />
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top Txn Count Sent</div>
                              <div class="text-end">Total Txn</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <span class="d-flex align-items-center gap-2">
                                  <a
                                    href="/address/0xe93685f3bba03016f02bd1828badd6195988d950"
                                    data-bs-trigger="hover"
                                    data-bs-toggle="tooltip"
                                    title="0xe93685f3bba03016f02bd1828badd6195988d950"
                                    target="_parent"
                                  >
                                    <span class="d-flex align-items-center">
                                      Layer Zero: Executor
                                    </span>
                                  </a>
                                </span>
                              </div>
                              <div class="d-flex text-muted text-end">
                                44,935
                              </div>
                            </div>
                            <hr class="pb-1" />
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                Top Txn Count Received
                              </div>
                              <div class="text-end">Total Txn</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <span class="d-flex align-items-center gap-2">
                                  <a
                                    href="/address/0xf6d1b85af155229acd7b523601148585a1ff67c6"
                                    data-bs-trigger="hover"
                                    data-bs-toggle="tooltip"
                                    title="0xf6d1b85af155229acd7b523601148585a1ff67c6"
                                    target="_parent"
                                  >
                                    <span class="d-flex align-items-center">
                                      <i
                                        class="far fa-file-alt text-secondary me-1"
                                        data-bs-trigger="hover"
                                        data-bs-toggle="tooltip"
                                        title="Contract"
                                      ></i>
                                      Galxe: Space Station 3
                                    </span>
                                  </a>
                                </span>
                              </div>
                              <div class="d-flex text-muted text-end">
                                276,335
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12 col-lg-6 mb-3">
                        <div class="card h-100 w-100 shadow-none">
                          <div class="card-header bg-light d-flex justify-content-between align-items-center">
                            Tokens
                            <span class="hash-tag">
                              <a
                                href="#Token"
                                id="a_TokenDay3"
                                onclick="javascript:showLoader(window.tokenFrame_loaded);activaTab('TokenDay3');"
                              >
                                View Top 20
                              </a>
                            </span>
                          </div>
                          <div
                            id="ContentPlaceHolder1_Div16b_body"
                            class="card-body"
                          >
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top Unique Sender</div>
                              <div class="text-end">Total</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <a
                                  href="/address/0xb641281bf0c587635a3606de5932cd4545c17ada"
                                  data-bs-trigger="hover"
                                  data-bs-toggle="tooltip"
                                  title="0xb641281bf0c587635a3606de5932cd4545c17ada"
                                >
                                  <img
                                    src="./assets/poly/images/svg/empty-token.svg?v=24.2.2.0"
                                    width="20"
                                  />
                                  ! USDT.. (Visit telh.org to claim rewards!)
                                </a>
                              </div>
                              <div class="d-flex text-muted text-end">
                                1,226,551
                              </div>
                            </div>
                            <hr class="pb-1" />
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top Unique Receiver</div>
                              <div class="text-end">Total</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <a
                                  href="/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f"
                                  data-bs-trigger="hover"
                                  data-bs-toggle="tooltip"
                                  title="0xc2132d05d31c914a87c6611c10748aeb04b58e8f"
                                >
                                  <img
                                    data-cfsrc="/token/images/tether_32.png"
                                    width="20"
                                    style={{
                                      display: "none",
                                      visibility: "hidden",
                                    }}
                                  />
                                  <noscript>
                                    <img
                                      src="/token/images/tether_32.png"
                                      width="20"
                                    />
                                  </noscript>
                                  (PoS) Tether USD (USDT)
                                </a>
                              </div>
                              <div class="d-flex text-muted text-end">
                                197,682
                              </div>
                            </div>
                            <hr class="pb-1" />
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top Total Uniques</div>
                              <div class="text-end">Total</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <a
                                  href="/address/0xb641281bf0c587635a3606de5932cd4545c17ada"
                                  data-bs-trigger="hover"
                                  data-bs-toggle="tooltip"
                                  title="0xb641281bf0c587635a3606de5932cd4545c17ada"
                                >
                                  <img
                                    src="./assets/poly/images/svg/empty-token.svg?v=24.2.2.0"
                                    width="20"
                                  />
                                  ! USDT.. (Visit telh.org to claim rewards!)
                                </a>
                              </div>
                              <div class="d-flex text-muted text-end">
                                1,226,552
                              </div>
                            </div>
                            <hr class="pb-1" />
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top Txn Count</div>
                              <div class="text-end">Txn Count</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <a
                                  href="/address/0x2ab0e9e4ee70fff1fb9d67031e44f6410170d00e"
                                  data-bs-trigger="hover"
                                  data-bs-toggle="tooltip"
                                  title="0x2ab0e9e4ee70fff1fb9d67031e44f6410170d00e"
                                >
                                  <img
                                    data-cfsrc="/token/images/xencrypto_32.jpg"
                                    width="20"
                                    style={{
                                      display: "none",
                                      visibility: "hidden",
                                    }}
                                  />
                                  <noscript>
                                    <img
                                      src="/token/images/xencrypto_32.jpg"
                                      width="20"
                                    />
                                  </noscript>
                                  XEN Crypto (mXEN)
                                </a>
                              </div>
                              <div class="d-flex text-muted text-end">
                                1,617,228
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 col-lg-6 mb-3">
                        <div class="card h-100 w-100 shadow-none">
                          <div class="card-header bg-light d-flex justify-content-between align-items-center">
                            Network
                            <span class="hash-tag">
                              <a
                                href="#Network"
                                id="a_NetworkDay3"
                                onclick="javascript:showLoader(window.networkFrame_loaded);activaTab('NetworkDay3');"
                              >
                                View Top 20
                              </a>
                            </span>
                          </div>
                          <div
                            id="ContentPlaceHolder1_Div16c_body"
                            class="card-body"
                          >
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top Gas Used</div>
                              <div class="text-end">Gas Used</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <span class="d-flex align-items-center gap-2">
                                  <a
                                    href="/address/0xe93685f3bba03016f02bd1828badd6195988d950"
                                    data-bs-trigger="hover"
                                    data-bs-toggle="tooltip"
                                    title="0xe93685f3bba03016f02bd1828badd6195988d950"
                                  >
                                    <span class="d-flex align-items-center">
                                      Layer Zero: Executor
                                    </span>
                                  </a>
                                </span>
                              </div>
                              <div class="d-flex text-muted text-end">
                                9,693,146,054
                              </div>
                            </div>
                            <hr class="pb-1" />
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top Txn Count</div>
                              <div class="text-end">Txn Count</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <span class="d-flex align-items-center gap-2">
                                  <a
                                    href="/address/0xe93685f3bba03016f02bd1828badd6195988d950"
                                    data-bs-trigger="hover"
                                    data-bs-toggle="tooltip"
                                    title="0xe93685f3bba03016f02bd1828badd6195988d950"
                                  >
                                    <span class="d-flex align-items-center">
                                      Layer Zero: Executor
                                    </span>
                                  </a>
                                </span>
                              </div>
                              <div class="d-flex text-muted text-end">
                                44,935
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12 col-lg-6 mb-3">
                        <div class="card h-100 w-100 shadow-none">
                          <div class="card-header bg-light d-flex justify-content-between align-items-center">
                            Validators
                            <span class="hash-tag d-none">
                              <a
                                href="#Mining"
                                id="a_MiningDay3"
                                onclick="javascript:showLoader(window.minerFrame_loaded);activaTab('MiningDay3');"
                              >
                                View Top 20
                              </a>
                            </span>
                          </div>
                          <div
                            id="ContentPlaceHolder1_Div16d_body"
                            class="card-body"
                          >
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                Top Blocks Validator
                              </div>
                              <div class="text-end">Blocks Validated</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <span class="d-flex align-items-center gap-1">
                                  <a
                                    href="/address/0x9ead03f7136fc6b4bdb0780b00a1c14ae5a8b6d0"
                                    data-bs-trigger="hover"
                                    data-bs-toggle="tooltip"
                                    title="0x9ead03f7136fc6b4bdb0780b00a1c14ae5a8b6d0"
                                    target="_parent"
                                  >
                                    <span class="d-flex align-items-center">
                                      <span data-highlight-target="0x9eaD03F7136Fc6b4bDb0780B00a1c14aE5A8B6d0">
                                        0x9eaD03...E5A8B6d0
                                      </span>
                                    </span>
                                  </a>
                                </span>
                              </div>
                              <div class="d-flex text-muted text-end">
                                12,783
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="OverviewDay7"
                    style={{ display: "none" }}
                  >
                    <div class="row">
                      <div class="col-md-12 col-lg-6 mb-3">
                        <div class="card h-100 w-100 shadow-none">
                          <div class="card-header bg-light d-flex justify-content-between align-items-center">
                            Transactions
                            <span class="hash-tag">
                              <a
                                href="#Transaction"
                                id="a_TransactionDay7"
                                onclick="javascript:showLoader(window.transactionFrame_loaded);activaTab('TransactionDay7');"
                              >
                                View Top 20
                              </a>
                            </span>
                          </div>
                          <div id="ContentPlaceHolder1_Div4" class="card-body">
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top POL Sender</div>
                              <div class="text-end">Total POL</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <span class="d-flex align-items-center gap-2">
                                  <a
                                    href="/address/0x0000000000000000000000000000000000001010"
                                    data-bs-trigger="hover"
                                    data-bs-toggle="tooltip"
                                    title="0x0000000000000000000000000000000000001010"
                                    target="_parent"
                                  >
                                    <span class="d-flex align-items-center">
                                      <i
                                        class="far fa-file-alt text-secondary me-1"
                                        data-bs-trigger="hover"
                                        data-bs-toggle="tooltip"
                                        title="Contract"
                                      ></i>
                                      Polygon: POL Token
                                    </span>
                                  </a>
                                </span>
                              </div>
                              <div class="d-flex text-muted text-end">
                                <img
                                  class="me-1"
                                  width="15"
                                  data-img-theme="light"
                                  src="./assets/poly/images/svg/logos/token-light.svg?v=24.2.2.0"
                                  alt="Polygon PoS Chain Logo"
                                />
                                <img
                                  class="me-1"
                                  width="15"
                                  data-img-theme="dim"
                                  src="./assets/poly/images/svg/logos/token-dim.svg?v=24.2.2.0"
                                  alt="Polygon PoS Chain Logo"
                                />
                                <img
                                  class="me-1"
                                  width="15"
                                  data-img-theme="dark"
                                  src="./assets/poly/images/svg/logos/token-dark.svg?v=24.2.2.0"
                                  alt="Polygon PoS Chain Logo"
                                />
                                20,603,503.824549
                              </div>
                            </div>
                            <hr class="pb-1" />
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top POL Receiver</div>
                              <div class="text-end">Total POL</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <span class="d-flex align-items-center gap-2">
                                  <a
                                    href="/address/0xd1bfee745dbb43b4bf79a90078227a640ad5cac0"
                                    data-bs-trigger="hover"
                                    data-bs-toggle="tooltip"
                                    title="0xd1bfee745dbb43b4bf79a90078227a640ad5cac0"
                                    target="_parent"
                                  >
                                    <span class="d-flex align-items-center">
                                      <span data-highlight-target="0xd1BFeE745DbB43B4Bf79a90078227a640AD5CAC0">
                                        0xd1BFeE...0AD5CAC0
                                      </span>
                                    </span>
                                  </a>
                                </span>
                              </div>
                              <div class="d-flex text-muted text-end">
                                <img
                                  class="me-1"
                                  width="15"
                                  data-img-theme="light"
                                  src="./assets/poly/images/svg/logos/token-light.svg?v=24.2.2.0"
                                  alt="Polygon PoS Chain Logo"
                                />
                                <img
                                  class="me-1"
                                  width="15"
                                  data-img-theme="dim"
                                  src="./assets/poly/images/svg/logos/token-dim.svg?v=24.2.2.0"
                                  alt="Polygon PoS Chain Logo"
                                />
                                <img
                                  class="me-1"
                                  width="15"
                                  data-img-theme="dark"
                                  src="./assets/poly/images/svg/logos/token-dark.svg?v=24.2.2.0"
                                  alt="Polygon PoS Chain Logo"
                                />
                                15,000,000
                              </div>
                            </div>
                            <hr class="pb-1" />
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top Txn Count Sent</div>
                              <div class="text-end">Total Txn</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <span class="d-flex align-items-center gap-2">
                                  <a
                                    href="/address/0xe93685f3bba03016f02bd1828badd6195988d950"
                                    data-bs-trigger="hover"
                                    data-bs-toggle="tooltip"
                                    title="0xe93685f3bba03016f02bd1828badd6195988d950"
                                    target="_parent"
                                  >
                                    <span class="d-flex align-items-center">
                                      Layer Zero: Executor
                                    </span>
                                  </a>
                                </span>
                              </div>
                              <div class="d-flex text-muted text-end">
                                109,534
                              </div>
                            </div>
                            <hr class="pb-1" />
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                Top Txn Count Received
                              </div>
                              <div class="text-end">Total Txn</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <span class="d-flex align-items-center gap-2">
                                  <a
                                    href="/address/0xf6d1b85af155229acd7b523601148585a1ff67c6"
                                    data-bs-trigger="hover"
                                    data-bs-toggle="tooltip"
                                    title="0xf6d1b85af155229acd7b523601148585a1ff67c6"
                                    target="_parent"
                                  >
                                    <span class="d-flex align-items-center">
                                      <i
                                        class="far fa-file-alt text-secondary me-1"
                                        data-bs-trigger="hover"
                                        data-bs-toggle="tooltip"
                                        title="Contract"
                                      ></i>
                                      Galxe: Space Station 3
                                    </span>
                                  </a>
                                </span>
                              </div>
                              <div class="d-flex text-muted text-end">
                                710,077
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12 col-lg-6 mb-3">
                        <div class="card h-100 w-100 shadow-none">
                          <div class="card-header bg-light d-flex justify-content-between align-items-center">
                            Tokens
                            <span class="hash-tag">
                              <a
                                href="#Token"
                                id="a_TokenDay7"
                                onclick="javascript:showLoader(window.tokenFrame_loaded);activaTab('TokenDay7');"
                              >
                                View Top 20
                              </a>
                            </span>
                          </div>
                          <div id="ContentPlaceHolder1_Div6" class="card-body">
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top Unique Sender</div>
                              <div class="text-end">Total</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <a
                                  href="/address/0x2ab0e9e4ee70fff1fb9d67031e44f6410170d00e"
                                  data-bs-trigger="hover"
                                  data-bs-toggle="tooltip"
                                  title="0x2ab0e9e4ee70fff1fb9d67031e44f6410170d00e"
                                >
                                  <img
                                    data-cfsrc="/token/images/xencrypto_32.jpg"
                                    width="20"
                                    style={{
                                      display: "none",
                                      visibility: "hidden",
                                    }}
                                  />
                                  <noscript>
                                    <img
                                      src="/token/images/xencrypto_32.jpg"
                                      width="20"
                                    />
                                  </noscript>
                                  XEN Crypto (mXEN)
                                </a>
                              </div>
                              <div class="d-flex text-muted text-end">
                                1,922,549
                              </div>
                            </div>
                            <hr class="pb-1" />
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top Unique Receiver</div>
                              <div class="text-end">Total</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <a
                                  href="/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f"
                                  data-bs-trigger="hover"
                                  data-bs-toggle="tooltip"
                                  title="0xc2132d05d31c914a87c6611c10748aeb04b58e8f"
                                >
                                  <img
                                    data-cfsrc="/token/images/tether_32.png"
                                    width="20"
                                    style={{
                                      display: "none",
                                      visibility: "hidden",
                                    }}
                                  />
                                  <noscript>
                                    <img
                                      src="/token/images/tether_32.png"
                                      width="20"
                                    />
                                  </noscript>
                                  (PoS) Tether USD (USDT)
                                </a>
                              </div>
                              <div class="d-flex text-muted text-end">
                                408,385
                              </div>
                            </div>
                            <hr class="pb-1" />
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top Total Uniques</div>
                              <div class="text-end">Total</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <a
                                  href="/address/0x2ab0e9e4ee70fff1fb9d67031e44f6410170d00e"
                                  data-bs-trigger="hover"
                                  data-bs-toggle="tooltip"
                                  title="0x2ab0e9e4ee70fff1fb9d67031e44f6410170d00e"
                                >
                                  <img
                                    data-cfsrc="/token/images/xencrypto_32.jpg"
                                    width="20"
                                    style={{
                                      display: "none",
                                      visibility: "hidden",
                                    }}
                                  />
                                  <noscript>
                                    <img
                                      src="/token/images/xencrypto_32.jpg"
                                      width="20"
                                    />
                                  </noscript>
                                  XEN Crypto (mXEN)
                                </a>
                              </div>
                              <div class="d-flex text-muted text-end">
                                1,922,999
                              </div>
                            </div>
                            <hr class="pb-1" />
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top Txn Count</div>
                              <div class="text-end">Txn Count</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <a
                                  href="/address/0x2ab0e9e4ee70fff1fb9d67031e44f6410170d00e"
                                  data-bs-trigger="hover"
                                  data-bs-toggle="tooltip"
                                  title="0x2ab0e9e4ee70fff1fb9d67031e44f6410170d00e"
                                >
                                  <img
                                    data-cfsrc="/token/images/xencrypto_32.jpg"
                                    width="20"
                                    style={{
                                      display: "none",
                                      visibility: "hidden",
                                    }}
                                  />
                                  <noscript>
                                    <img
                                      src="/token/images/xencrypto_32.jpg"
                                      width="20"
                                    />
                                  </noscript>
                                  XEN Crypto (mXEN)
                                </a>
                              </div>
                              <div class="d-flex text-muted text-end">
                                3,842,999
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 col-lg-6 mb-3">
                        <div class="card h-100 w-100 shadow-none">
                          <div class="card-header bg-light d-flex justify-content-between align-items-center">
                            Network
                            <span class="hash-tag">
                              <a
                                href="#Network"
                                id="a_NetworkDay7"
                                onclick="javascript:showLoader(window.networkFrame_loaded);activaTab('NetworkDay7');"
                              >
                                View Top 20
                              </a>
                            </span>
                          </div>
                          <div id="ContentPlaceHolder1_Div9" class="card-body">
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top Gas Used</div>
                              <div class="text-end">Gas Used</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <span class="d-flex align-items-center gap-2">
                                  <a
                                    href="/address/0xe93685f3bba03016f02bd1828badd6195988d950"
                                    data-bs-trigger="hover"
                                    data-bs-toggle="tooltip"
                                    title="0xe93685f3bba03016f02bd1828badd6195988d950"
                                  >
                                    <span class="d-flex align-items-center">
                                      Layer Zero: Executor
                                    </span>
                                  </a>
                                </span>
                              </div>
                              <div class="d-flex text-muted text-end">
                                23,688,489,204
                              </div>
                            </div>
                            <hr class="pb-1" />
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">Top Txn Count</div>
                              <div class="text-end">Txn Count</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <span class="d-flex align-items-center gap-2">
                                  <a
                                    href="/address/0xe93685f3bba03016f02bd1828badd6195988d950"
                                    data-bs-trigger="hover"
                                    data-bs-toggle="tooltip"
                                    title="0xe93685f3bba03016f02bd1828badd6195988d950"
                                  >
                                    <span class="d-flex align-items-center">
                                      Layer Zero: Executor
                                    </span>
                                  </a>
                                </span>
                              </div>
                              <div class="d-flex text-muted text-end">
                                109,534
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12 col-lg-6 mb-3">
                        <div class="card h-100 w-100 shadow-none">
                          <div class="card-header bg-light d-flex justify-content-between align-items-center">
                            Validators
                            <span class="hash-tag d-none">
                              <a
                                href="#Mining"
                                id="a_MiningDay7"
                                onclick="javascript:showLoader(window.minerFrame_loaded);activaTab('MiningDay7');"
                              >
                                View Top 20
                              </a>
                            </span>
                          </div>
                          <div id="ContentPlaceHolder1_Div11" class="card-body">
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                Top Blocks Validator
                              </div>
                              <div class="text-end">Blocks Validated</div>
                            </div>
                            <div class="d-flex align-items-center mb-1">
                              <div class="flex-grow-1">
                                <span class="d-flex align-items-center gap-1">
                                  <a
                                    href="/address/0x9ead03f7136fc6b4bdb0780b00a1c14ae5a8b6d0"
                                    data-bs-trigger="hover"
                                    data-bs-toggle="tooltip"
                                    title="0x9ead03f7136fc6b4bdb0780b00a1c14ae5a8b6d0"
                                    target="_parent"
                                  >
                                    <span class="d-flex align-items-center">
                                      <span data-highlight-target="0x9eaD03F7136Fc6b4bDb0780B00a1c14aE5A8B6d0">
                                        0x9eaD03...E5A8B6d0
                                      </span>
                                    </span>
                                  </a>
                                </span>
                              </div>
                              <div class="d-flex text-muted text-end">
                                31,796
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="Transaction" role="tabpanel">
                  <div
                    id="loadingTransactioniframe"
                    style={{
                      position: "absolute",
                      left: "50%",
                      marginLeft: "-31px",
                    }}
                  >
                    <div id="overlay" class="text-center py-10">
                      <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      <div class="small text-muted mt-1">Loading</div>
                    </div>
                  </div>
                  <div
                    style={{
                      overflow: "auto",
                      visibility: "hidden",
                    }}
                  >
                    <iframe
                      width="100%"
                      id="TransactionIframe"
                      src
                      scrolling="no"
                      frameborder="0"
                      style={{ height: "200px" }}
                    ></iframe>
                  </div>
                </div>
                <div class="tab-pane fade" id="Token" role="tabpanel">
                  <div
                    id="loadingTokeniframe"
                    style={{
                      position: "absolute",
                      left: "50%",
                      marginLeft: "-31px",
                    }}
                  >
                    <div id="overlayToken" class="text-center py-10">
                      <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      <div class="small text-muted mt-1">Loading</div>
                    </div>
                  </div>
                  <div
                    style={{
                      overflow: "auto",
                      visibility: "hidden",
                    }}
                  >
                    <iframe
                      width="100%"
                      id="TokenIframe"
                      src
                      scrolling="no"
                      frameborder="0"
                      style={{ height: "200px" }}
                    ></iframe>
                  </div>
                </div>
                <div class="tab-pane fade" id="Network" role="tabpanel">
                  <div
                    id="loadingNetworkiframe"
                    style={{
                      position: "absolute",
                      left: "50%",
                      marginLeft: "-31px",
                    }}
                  >
                    <div id="overlayNetwork" class="text-center py-10">
                      <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      <div class="small text-muted mt-1">Loading</div>
                    </div>
                  </div>
                  <div
                    style={{
                      overflow: "auto",
                      visibility: "hidden",
                    }}
                  >
                    <iframe
                      width="100%"
                      id="NetworkIframe"
                      src
                      scrolling="no"
                      frameborder="0"
                      style={{ height: "200px" }}
                    ></iframe>
                  </div>
                </div>
                <div class="tab-pane fade" id="HotContracts" role="tabpanel">
                  <div
                    id="loadingHotContractsiframe"
                    style={{
                      position: "absolute",
                      left: "50%",
                      marginLeft: "-31px",
                    }}
                  >
                    <div id="overlayHotContracts" class="text-center py-10">
                      <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      <div class="small text-muted mt-1">Loading</div>
                    </div>
                  </div>
                  <div
                    style={{
                      overflow: "auto",
                      visibility: "hidden",
                    }}
                  >
                    <iframe
                      width="100%"
                      id="HotContractsIframe"
                      src
                      scrolling="no"
                      frameborder="0"
                      style={{ height: "200px" }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Topstat;
