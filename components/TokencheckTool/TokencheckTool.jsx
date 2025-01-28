import React from "react";

const TokencheckTool = () => {
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
        value="/assets/poly/images/svg/empty-token.svg?v=24.3.1.0"
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
                      class="nav-link fw-medium py-2 px-3"
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
                      class="nav-link fw-medium py-2 px-3 active"
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
              <h2 class="fs-default">Token Supply Checker</h2>
              <p>
                You can look up the historical supply of a token (ERC-20) at a
                specific block number or date.
              </p>
              {/* // */}
              <div class="d-lg-none mb-2">
                <span id="ContentPlaceHolder1_litBanner"></span>
              </div>
            </div>

            <form
              method="post"
              action="./tokencheck-tool"
              id="ctl00"
              class="js-validate"
            >
              <div class="aspNetHidden">
                <input
                  type="hidden"
                  name="__EVENTTARGET"
                  id="__EVENTTARGET"
                  value
                />
                <input
                  type="hidden"
                  name="__EVENTARGUMENT"
                  id="__EVENTARGUMENT"
                  value
                />
                <input
                  type="hidden"
                  name="__LASTFOCUS"
                  id="__LASTFOCUS"
                  value
                />
                <input
                  type="hidden"
                  name="__VIEWSTATE"
                  id="__VIEWSTATE"
                  value="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"
                />
              </div>

              <div class="aspNetHidden">
                <input
                  type="hidden"
                  name="__VIEWSTATEGENERATOR"
                  id="__VIEWSTATEGENERATOR"
                  value="00D48835"
                />
                <input
                  type="hidden"
                  name="__EVENTVALIDATION"
                  id="__EVENTVALIDATION"
                  value="O0n73FyktrSWY0Ik3Sd/VlvtwC6l+bzVkN/iqHZBNZdM/ZZVmkkIWDijoWyQwR9A3NFdIsoUqMi0kHANliYze7PZSzcbdmqmWkDx2wRIrv3n0QF1Jl84Tv4G/hXntrF15sf0Y8k8p0H3P1LI1dwi1Jqtrey2C2zTmgwWHC2pUy/aDSC3WaPjO0/exTwslmFc"
                />
              </div>
              <div class="card">
                <div class="card-body p-4">
                  <div class="row gy-4 mb-4">
                    <div class="col-xl-6">
                      <label
                        id="ContentPlaceHolder1_lblAccountAddress"
                        class="form-label"
                      >
                        Token Contract Address<span class="text-danger">*</span>
                      </label>
                      <div class="js-form-message">
                        <input
                          name="ctl00$ContentPlaceHolder1$txtAddress"
                          id="ContentPlaceHolder1_txtAddress"
                          class="form-control"
                          type="text"
                          placeholder="0x..."
                          required
                          data-msg="Please enter contract address"
                          data-error-class="u-has-error"
                          data-success-class="u-has-success"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row gy-4 mb-4">
                    <div class="col-xl-4">
                      <label class="form-label">Filter by:</label>
                      <div class="d-flex gap-4">
                        <div class="form-check">
                          <input
                            id="ContentPlaceHolder1_rbDatetimeOpt"
                            type="radio"
                            name="ctl00$ContentPlaceHolder1$downloadOptions"
                            value="rbDatetimeOpt"
                            checked="checked"
                            class="form-check-input"
                          />
                          <label
                            class="form-check-label"
                            for="ContentPlaceHolder1_rbDatetimeOpt"
                          >
                            Date
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            id="ContentPlaceHolder1_rbBlocknumberOpt"
                            type="radio"
                            name="ctl00$ContentPlaceHolder1$downloadOptions"
                            value="rbBlocknumberOpt"
                            onclick="javascript:setTimeout(&#39;__doPostBack(\&#39;ctl00$ContentPlaceHolder1$rbBlocknumberOpt\&#39;,\&#39;\&#39;)&#39;, 0)"
                            class="form-check-input"
                          />
                          <label
                            class="form-check-label"
                            for="ContentPlaceHolder1_rbBlocknumberOpt"
                          >
                            Block Number
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="ContentPlaceHolder1_contentDate"
                    class="checkbox-content"
                  >
                    <div class="row mb-4">
                      <div class="col-xl-6">
                        <label class="form-label">Date for the snapshot</label>
                        <input
                          class="js-range-datepicker form-control flatpickr-input w-100"
                          type="text"
                          placeholder="mm/dd/yyyy"
                          data-rp-wrapper="#datepickerWrapperFrom"
                          data-rp-date-format="m/d/Y"
                          name="date"
                          id="date"
                          data-bs-toggle="tooltip"
                          title="Select a date for the Balance Snapshot that you want to lookup"
                          value="03/13/2024"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer d-flex align-items-center gap-2 bg-light">
                  <input
                    type="submit"
                    name="ctl00$ContentPlaceHolder1$Button1"
                    value="Lookup"
                    onclick='javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$ContentPlaceHolder1$Button1", "", true, "first", "", false, false))'
                    id="ContentPlaceHolder1_Button1"
                    class="btn btn-primary px-4"
                    type="submit"
                  />
                  <a href="/tokencheck-tool" class="btn btn-ghost-white px-4">
                    Reset
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TokencheckTool;
