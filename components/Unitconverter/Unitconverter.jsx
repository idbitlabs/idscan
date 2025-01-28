import React from "react";
import { FaRegCopy } from "react-icons/fa6";

const Unitconverter = () => {
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
          <h1 class="h5 mb-0">Tools</h1>

          <div class="d-flex gap-2"></div>
        </div>
      </section>

      <div class="container-xxl pt-5 pb-20">
        <div class="row gx-lg-8 gx-xl-16">
          <aside class="col-lg-3 col-xxl-2 border-lg-end mb-4">
            <div class="d-block d-lg-none mb-2">
              <button
                class="btn btn-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#asideNav"
                aria-controls="asideNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="far fa-bars me-1"></i>Tools Menu
              </button>
            </div>

            <nav
              class="navbar-expand-lg position-sticky"
              style={{ top: "4.5rem" }}
            >
              <div class="collapse navbar-collapse flex-column" id="asideNav">
                <ul
                  id="section-chart"
                  class="nav nav-pills nav-pills-flush flex-column w-100 gap-1"
                >
                  <li class="nav-item">
                    <a
                      href="/exportData"
                      id="ContentPlaceHolder1_ToolPagesNavigation_Control1_hpDownloadData"
                      class="nav-link fw-medium py-2 px-3"
                    >
                      CSV Export
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="/unitconverter"
                      id="ContentPlaceHolder1_ToolPagesNavigation_Control1_hpUnitCovnertor"
                      class="nav-link fw-medium py-2 px-3 active"
                    >
                      Unit Converter
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="/balancecheck-tool"
                      id="ContentPlaceHolder1_ToolPagesNavigation_Control1_hpBalanceChecker"
                      class="nav-link fw-medium py-2 px-3"
                    >
                      Account Balance Checker
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="/tokencheck-tool"
                      id="ContentPlaceHolder1_ToolPagesNavigation_Control1_hpTokenSupplyChecker"
                      class="nav-link fw-medium py-2 px-3"
                    >
                      Token Supply Checker
                    </a>
                  </li>
                  <li class="nav-item">
                    <hr class="my-3" />
                  </li>
                  <li class="nav-item">
                    <a
                      href="/find-similar-contracts"
                      id="ContentPlaceHolder1_ToolPagesNavigation_Control1_hpSimilarContract"
                      class="nav-link fw-medium py-2 px-3"
                    >
                      Similar Contract Search
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="/vyper"
                      id="ContentPlaceHolder1_ToolPagesNavigation_Control1_hpVyperOnline"
                      class="nav-link fw-medium py-2 px-3"
                    >
                      Vyper Online Compiler
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="/opcode-tool"
                      id="ContentPlaceHolder1_ToolPagesNavigation_Control1_hpBytecodeOpcode"
                      class="nav-link fw-medium py-2 px-3"
                    >
                      Bytecode to Opcode
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="/pushTx"
                      id="ContentPlaceHolder1_ToolPagesNavigation_Control1_hpBroadcast"
                      class="nav-link fw-medium py-2 px-3"
                    >
                      Broadcast Transaction
                    </a>
                  </li>
                  <li class="nav-item">
                    <hr class="my-3" />
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link fw-medium d-flex justify-content-between align-items-center group py-2 px-3"
                      href="/code-reader"
                    >
                      Code Reader
                      <i class="far fa-arrow-up-right text-muted group-hover ms-1"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link fw-medium d-flex justify-content-between align-items-center group py-2 px-3"
                      href="/tokenapprovalchecker"
                    >
                      Token Approvals
                      <i class="far fa-arrow-up-right text-muted group-hover ms-1"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link fw-medium d-flex justify-content-between align-items-center group py-2 px-3"
                      href="/verifiedSignatures"
                    >
                      Verify Signatures
                      <i class="far fa-arrow-up-right text-muted group-hover ms-1"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link fw-medium d-flex justify-content-between align-items-center group py-2 px-3"
                      href="/contractdiffchecker"
                    >
                      Contract Diff Checker
                      <i class="far fa-arrow-up-right text-muted group-hover ms-1"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>

          <div class="col-lg-9 col-xxl-10">
            <div class="mb-5">
              <h2 class="fs-default">Unit Converter</h2>
              <p>
                MATIC is often used in different denominations of its currency,
                such as Wei for interacting with smart contracts and Gwei for
                calculating gas prices. Use our Unit Converter to easily convert
                between them!
              </p>

              <div class="d-lg-none mb-2">
                <span id="ContentPlaceHolder1_litBanner"></span>
              </div>
            </div>
            <div class="card shadow-none">
              <div class="card-body">
                <div class="row gy-4">
                  <div class="col-xl-6">
                    <label class="form-label">Enter any value</label>
                    <div class="input-group mb-2">
                      <input
                        name="ctl00$ContentPlaceHolder1$wei"
                        type="text"
                        id="wei"
                        class="form-control convertedValue"
                        placeholder="Wei"
                        aria-label="Wei"
                        value="1000000000000000000"
                      />
                      <span
                        class="input-group-text"
                        style={{ minWidth: "7.2rem" }}
                      >
                        Wei (10<sup>-18</sup>)
                      </span>
                    </div>
                    <div class="input-group mb-2">
                      <input
                        type="text"
                        class="form-control convertedValue"
                        placeholder="KWei"
                        aria-label="KWei"
                        id="kwei"
                      />
                      <span
                        class="input-group-text"
                        style={{ minWidth: "7.2rem" }}
                      >
                        KWei (10<sup>-15</sup>)
                      </span>
                    </div>
                    <div class="input-group mb-2">
                      <input
                        type="text"
                        class="form-control convertedValue"
                        placeholder="MWei"
                        aria-label="MWei"
                        id="mwei"
                      />
                      <span
                        class="input-group-text"
                        style={{ minWidth: "7.2rem" }}
                      >
                        MWei (10<sup>-12</sup>)
                      </span>
                    </div>
                    <div class="input-group mb-2">
                      <input
                        type="text"
                        class="form-control convertedValue"
                        placeholder="GWei"
                        aria-label="GWei"
                        id="gwei"
                      />
                      <span
                        class="input-group-text"
                        style={{ minWidth: "7.2rem" }}
                      >
                        GWei (10<sup>-9</sup>)
                      </span>
                    </div>
                    <div class="input-group mb-2">
                      <input
                        type="text"
                        class="form-control convertedValue"
                        placeholder="Szabo"
                        aria-label="Szabo"
                        id="szabo"
                      />
                      <span
                        class="input-group-text"
                        style={{ minWidth: "7.2rem" }}
                      >
                        Szabo (10<sup>-6</sup>)
                      </span>
                    </div>
                    <div class="input-group mb-2">
                      <input
                        type="text"
                        class="form-control convertedValue"
                        placeholder="Finney"
                        aria-label="Finney"
                        id="finney"
                      />
                      <span
                        class="input-group-text"
                        style={{ minWidth: "7.2rem" }}
                      >
                        Finney (10<sup>-3</sup>)
                      </span>
                    </div>
                    <div class="input-group mb-2">
                      <input
                        type="text"
                        class="form-control convertedValue"
                        placeholder="MATIC"
                        aria-label="MATIC"
                        id="ether"
                      />
                      <span
                        class="input-group-text"
                        style={{ minWidth: "7.2rem" }}
                      >
                        MATIC (1)
                      </span>
                    </div>
                    <div class="input-group mb-2">
                      <input
                        type="text"
                        class="form-control convertedValue"
                        placeholder="KMATIC"
                        aria-label="KMATIC"
                        id="kether"
                      />
                      <span
                        class="input-group-text"
                        style={{ minWidth: "7.2rem" }}
                      >
                        KMATIC (10<sup>3</sup>)
                      </span>
                    </div>
                    <div class="input-group mb-2">
                      <input
                        type="text"
                        class="form-control convertedValue"
                        placeholder="MMATIC"
                        aria-label="MMATIC"
                        id="mether"
                      />
                      <span
                        class="input-group-text"
                        style={{ minWidth: "7.2rem" }}
                      >
                        MMATIC (10<sup>6</sup>)
                      </span>
                    </div>
                    <div class="input-group mb-2">
                      <input
                        type="text"
                        class="form-control convertedValue"
                        placeholder="GMATIC"
                        aria-label="GMATIC"
                        id="gether"
                      />
                      <span
                        class="input-group-text"
                        style={{ minWidth: "7.2rem" }}
                      >
                        GMATIC (10<sup>9</sup>)
                      </span>
                    </div>
                    <div class="input-group mb-2">
                      <input
                        type="text"
                        class="form-control convertedValue"
                        placeholder="TMATIC"
                        aria-label="TMATIC"
                        id="tether"
                      />
                      <span
                        class="input-group-text"
                        style={{ minWidth: "7.2rem" }}
                      >
                        TMATIC (10<sup>12</sup>)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Unitconverter;
