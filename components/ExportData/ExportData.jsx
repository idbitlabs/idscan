import React from "react";
import { SlCalender } from "react-icons/sl";

const ExportData = () => {
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
                      class="nav-link fw-medium py-2 px-3 active"
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
              <h2 class="fs-default">Download Data (CSV Export)</h2>
              <span
                class="small text-muted text-break"
                style={{ display: "none" }}
              ></span>
              <p>
                The information you requested can be downloaded from this page.
                Before continuing
                <strong>please verify that you are not a robot</strong> by
                completing the captcha below.
              </p>

              <div class="d-lg-none mb-2">
                <span id="ContentPlaceHolder1_litBanner"></span>
              </div>

              <span id="ContentPlaceHolder1_responsetext"></span>
            </div>
            <form
              method="post"
              action="./exportData"
              id="form1"
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
                  value="E6FDCB0F"
                />
                <input
                  type="hidden"
                  name="__EVENTVALIDATION"
                  id="__EVENTVALIDATION"
                  value="811MogwXnUItlTdGv5/stS+jr/mrIa3Bjx1t6BBcN2oU67Fa7DKiAJayLMIlW1+oWy2Hfj57L8MlEVDWMimNbyarJka2hve1BCv72Ky0O55q7AnTtDrtlN64a+RlN9x/UZpEbmYGLfXt3P+EbaFoPrthbvHpm+HRObGJKDCCSvJEakg3lSHyxTeT9EHSUps72MfggyBt4FzuebIilh2FlMlfIwuBZWdwhQoXIZ3PxCfItaQL/6/kJZk8718xtMv9JMcTdhyN4Fmha1pfGT/37HLNkZQoZyZfMyGXH2EI2hGL5aKe8AE2L/BXjhk+w/NR8ZCIVzempm2FUFKBxC741FWmgnsRnS0QW/RPx4v2oANHwUq6uC3/RGi0ycwsdlaFNx6oryWV2apODx8+loUqE6j5Mf5sw+jMHD7L3cNIFkTUNOgkd04kUYgjvAZONH77XFRs7DKFkTwEFrl0mN4boxgpFxp3XuyODiA2PjFOvZdRX33aWJONSi5rZeUj32nwSCc1VsUyOJBe0hMATQ6NhqURs8Zy7dZFivBKn35pX6noBhgw2IEkpQRkOwJMmq4yI9VMH7x5gsHbKkuj/2lxzt262mpLOPje5F839sBQQ5ZYGKZoZosZjCyvq91PfCsztghrE8pF/OADK1XFBVQ0YmvthuKX+sI9+5kKs6YjVn+cBjmpdbkJgJ5RdQG4X2yo"
                />
              </div>
              <div class="card shadow-none">
                <div class="card-body">
                  <div class="row gy-4 mb-4">
                    <div class="col-xl-6">
                      <label for="select-content" class="form-label">
                        Select export type
                      </label>
                      <select
                        name="ctl00$ContentPlaceHolder1$ddlExportType"
                        onchange="javascript:setTimeout(&#39;__doPostBack(\&#39;ctl00$ContentPlaceHolder1$ddlExportType\&#39;,\&#39;\&#39;)&#39;, 0)"
                        id="ContentPlaceHolder1_ddlExportType"
                        class="form-select"
                        required
                        data-bs-toggle="tooltip"
                        title="Select export type"
                        data-error-class="u-has-error"
                        data-success-class="u-has-success"
                        data-msg="Select export type"
                      >
                        <option value="Address:" disabled="true">
                          Address:
                        </option>
                        <option selected="selected" value="1">
                          Transactions
                        </option>
                        <option value="2">Internal Transactions</option>
                        <option value="3">Token Transfers (ERC-20)</option>
                        <option value="4">
                          NFT Transfers (ERC-721 &amp; ERC-1155)
                        </option>
                        <option value="Token Transfers:" disabled="true">
                          Token Transfers:
                        </option>
                        <option value="7">Token Transfers (ERC-20)</option>
                        <option value="10">
                          Token Transfers (ERC-20) By Address
                        </option>
                        <option value="8">
                          NFT Transfers (ERC-721 &amp; ERC-1155)
                        </option>
                        <option value="11">
                          NFT Transfers (ERC-721 &amp; ERC-1155) By Address /
                          Token ID
                        </option>
                        <option value="Token Holders:" disabled="true">
                          Token Holders:
                        </option>
                        <option value="13">Token Holders (ERC-20)</option>
                        <option value="14">
                          NFT Holders (ERC-721 &amp; ERC-1155)
                        </option>
                        <option value="Others:" disabled="true">
                          Others:
                        </option>
                        <option value="17">Produced Blocks</option>
                        <option value="18">Open Source Contract Codes</option>
                        <option value="19">Node Tracker</option>
                        <option value="21">NFT Trades</option>
                      </select>
                    </div>
                  </div>
                  <div
                    id="ContentPlaceHolder1_divAddress"
                    class="row gy-4 mb-4"
                  >
                    <div class="col-xl-6">
                      <label
                        id="ContentPlaceHolder1_lblAddress"
                        for="optionTxnAddress"
                        class="form-label"
                      >
                        Address <span class="text-danger">*</span>
                      </label>
                      <input
                        name="ctl00$ContentPlaceHolder1$txtAddress"
                        id="ContentPlaceHolder1_txtAddress"
                        class="form-control"
                        type="text"
                        placeholder="0x.."
                        required
                        data-error-class="u-has-error"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      id="ContentPlaceHolder1_downloadoptionContainer"
                      class="row gy-4 mb-4"
                    >
                      <div class="col-xl-4">
                        <label class="form-label">
                          Choose download option:
                        </label>
                        <div class="d-flex gap-4">
                          <div class="form-check">
                            <input
                              id="ContentPlaceHolder1_rbDateRange"
                              type="radio"
                              name="ctl00$ContentPlaceHolder1$downloadOptions"
                              value="rbDateRange"
                              checked="checked"
                              class="form-check-input"
                            />
                            <label
                              class="form-check-label"
                              for="ContentPlaceHolder1_rbDateRange"
                            >
                              Date
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              id="ContentPlaceHolder1_rbBlockNumber"
                              type="radio"
                              name="ctl00$ContentPlaceHolder1$downloadOptions"
                              value="rbBlockNumber"
                              onclick="javascript:setTimeout(&#39;__doPostBack(\&#39;ctl00$ContentPlaceHolder1$rbBlockNumber\&#39;,\&#39;\&#39;)&#39;, 0)"
                              class="form-check-input"
                            />
                            <label
                              class="form-check-label"
                              for="ContentPlaceHolder1_rbBlockNumber"
                            >
                              Block Number
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="ContentPlaceHolder1_datespan">
                      <div
                        id="ContentPlaceHolder1_dateRangePanel"
                        class="row gy-4 mb-2"
                      >
                        <div
                          id="ContentPlaceHolder1_divStartDate"
                          class="col-xl-3 js-form-message"
                        >
                          <label
                            id="ContentPlaceHolder1_lblStartDate"
                            for="startDate"
                            class="form-label"
                          >
                            Start Date
                            <span class="text-danger">*</span>
                          </label>
                          <div class="input-group mb-3 input-group">
                            <span class="input-group-text icon-input">
                              <i class="far fa-calendar-alt">
                                <SlCalender />
                              </i>
                            </span>
                            <input
                              name="ctl00$ContentPlaceHolder1$txtstart_time"
                              type="text"
                              id="ContentPlaceHolder1_txtstart_time"
                              data-rp-wrapper="#datepickerWrapperStart"
                              required
                              placeholder="Select Start Date"
                              value="2/01/2024"
                              class="js-range-datepicker form-control flatpickr-input"
                              data-bs-toggle="tooltip"
                              data-error-class="u-has-error"
                              data-rp-date-format="m/d/Y"
                              data-msg
                              title="Select Start Date"
                            />
                          </div>
                        </div>
                        <div
                          id="ContentPlaceHolder1_toRangeContainer"
                          class="col-xl-3 js-form-message"
                        >
                          <label for="endDate" class="form-label">
                            End Date <span class="text-danger">*</span>
                          </label>
                          <div
                            class="input-group mb-3 input-group"
                            id="datepickerWrapperFrom-2"
                          >
                            <span
                              id="ContentPlaceHolder1_divdate2"
                              class="input-group-text icon-input"
                            >
                              <i class="far fa-calendar-alt">
                                <SlCalender />
                              </i>
                            </span>
                            <input
                              name="ctl00$ContentPlaceHolder1$txtstart_time2"
                              type="text"
                              id="ContentPlaceHolder1_txtstart_time2"
                              data-rp-wrapper="#datepickerWrapperStart"
                              required
                              placeholder="Select End Date"
                              value="2/29/2024"
                              class="js-range-datepicker form-control flatpickr-input"
                              data-bs-toggle="tooltip"
                              data-error-class="u-has-error"
                              data-rp-date-format="m/d/Y"
                              data-msg
                              title="Select End Date"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="ContentPlaceHolder1_divExtraAddtional"
                      class="d-inline-flex flex-column gap-2 mb-4"
                    >
                      <div
                        id="ContentPlaceHolder1_divWithTx"
                        class="js-form-message form-check form-switch d-inline-flex gap-2"
                        data-bs-toggle="tooltip"
                        title="Please sign in to enable this option."
                      >
                        <input
                          name="ctl00$ContentPlaceHolder1$chkWithTx"
                          type="checkbox"
                          id="ContentPlaceHolder1_chkWithTx"
                          class="form-check-input"
                          role="switch"
                          disabled="disabled"
                        />
                        <label
                          class="form-check-label text-dark"
                          for="ContentPlaceHolder1_chkWithTx"
                        >
                          <span>&nbsp;Tick to include txn private notes</span>
                        </label>
                      </div>
                      <div
                        id="ContentPlaceHolder1_divPrivateTag"
                        class="js-form-message form-check form-switch d-inline-flex gap-2"
                        data-bs-toggle="tooltip"
                        title="Please sign in to enable this option."
                      >
                        <input
                          name="ctl00$ContentPlaceHolder1$chkPrivateTag"
                          type="checkbox"
                          id="ContentPlaceHolder1_chkPrivateTag"
                          class="form-check-input"
                          role="switch"
                          disabled="disabled"
                        />
                        <label
                          class="form-check-label text-dark"
                          for="ContentPlaceHolder1_chkPrivateTag"
                        >
                          <span>&nbsp;Tick to include private name tags</span>
                        </label>
                      </div>
                    </div>
                    <p>
                      <i class="far fa-question-circle text-secondary me-0.5"></i>
                      The earliest 5,000 records within the selected range will
                      be exported
                    </p>
                    <div class="d-flex my-4">
                      <div class="g-recaptcha" id="rcaptcha"></div>
                    </div>
                  </div>
                </div>
                <div class="card-footer d-flex align-items-center gap-2 bg-light">
                  <input
                    type="submit"
                    name="ctl00$ContentPlaceHolder1$btnSubmit"
                    value="Download"
                    onclick="get_action(event);"
                    id="ContentPlaceHolder1_btnSubmit"
                    class="btn btn-primary px-4"
                  />
                  <input
                    type="submit"
                    name="ctl00$ContentPlaceHolder1$btnReset"
                    value="Reset"
                    id="ContentPlaceHolder1_btnReset"
                    class="btn btn-ghost-white px-4"
                    formnovalidate="formnovalidate"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExportData;
