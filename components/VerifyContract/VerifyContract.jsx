import React from "react";

const VerifyContract = () => {
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
        value="/assets/poly/images/svg/empty-token.svg?v=24.3.1.0"
      />
      <input
        type="hidden"
        name="hdnSiteShortUrl"
        id="hdnSiteShortUrl"
        value="polygonscan.com"
      />
      <section class="container-xxl pt-8 pb-12">
        <form
          method="post"
          action="./verifyContract"
          id="ctl00"
          class="js-validate"
        >
          <div class="aspNetHidden">
            <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" />
            <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" />
            <input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" />
            <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" />
          </div>

          <div class="aspNetHidden">
            <input
              type="hidden"
              name="__VIEWSTATEGENERATOR"
              id="__VIEWSTATEGENERATOR"
              value="CBB2B409"
            />
            <input
              type="hidden"
              name="__EVENTVALIDATION"
              id="__EVENTVALIDATION"
            />
          </div>
          <div class="text-center mb-3">
            <div class="w-md-75 w-lg-75 mx-md-auto ">
              <h1 class="h4">Verify &amp; Publish Contract Source Code </h1>
              <small class="d-block text-muted color-strong">
                COMPILER TYPE AND VERSION SELECTION
              </small>
            </div>
          </div>
          <hr />
          <div class="pt-2 pb-4">
            <div class="row">
              <div class="col-md-1 offset-md-1 mt-3 mb-2">
                <img
                  src="/images/undraw/undraw_Security_on_s9ym.svg"
                  width="115"
                  align="left"
                  style={{
                    marginTop: "-15px",
                    marginBottom: "10px",
                    marginRight: "10px",
                  }}
                />
              </div>
              <div class="col-md-9 mt-3 mb-2 ms-2">
                Source code verification provides <b>transparency</b> for users
                interacting with smart contracts. By uploading the source code,
                PolygonScan will match the compiled code with that on the
                blockchain. Just like contracts, a "smart contract" should
                provide end users with more information on what they are
                "digitally signing" for and give users an opportunity to audit
                the code to independently verify that it actually does what it
                is supposed to do.
                <p>
                  <br /> Please be informed that advanced settings (e.g.
                  bytecodeHash: "none" or viaIR: "true") can be accessed via
                  Solidity (Standard-Json-Input) verification method. More
                  information can be found under Solidity's "Compiler Input and
                  Output JSON Description" documentation section.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6">
                <div class="text-start w-md-75 w-lg-50 mx-md-auto mt-2">
                  <div class="js-form-message form-group mb-4">
                    <label class="d-block mb-1" for="txtContractAddress">
                      Please enter the Contract Address you would like to verify
                    </label>
                    <input
                      name="ctl00$ContentPlaceHolder1$txtContractAddress"
                      maxlength="42"
                      id="ContentPlaceHolder1_txtContractAddress"
                      class="form-control form-control-lg py-2"
                      required
                      placeholder="0x..."
                      value
                      data-success-class="u-has-success"
                      data-error-class="u-has-error"
                      data-rule-minlength="42"
                      type="search"
                      data-msg-minlength="Invalid Length"
                      data-msg="Required"
                      data-name="txtContractAddress"
                      data-rule-maxlength="42"
                    />
                  </div>
                  <div class="js-form-message form-group mb-4">
                    <label class="d-block mt-4 mb-1">
                      Please select Compiler Type
                    </label>
                    <select
                      name="ctl00$ContentPlaceHolder1$ddlCompilerType"
                      onchange="javascript:setTimeout(&#39;__doPostBack(\&#39;ctl00$ContentPlaceHolder1$ddlCompilerType\&#39;,\&#39;\&#39;)&#39;, 0)"
                      id="ContentPlaceHolder1_ddlCompilerType"
                      class="form-select form-select-lg py-2"
                      class="dropdown-menu"
                      aria-labelledby="ddlCompilerType"
                      required
                    >
                      <option selected="selected" value>
                        [Please Select]
                      </option>
                      <option
                        value="1"
                        title="A simple interface for solidity code that fits or concatenated into a single file"
                      >
                        Solidity (Single file)
                      </option>
                      <option
                        value="2"
                        title="Support for multi-part/file solidity code with imports"
                      >
                        Solidity (Multi-Part files)
                      </option>
                      <option
                        value="3"
                        title="The recommended way to interface with the Solidity compiler especially for more complex and automated setups"
                      >
                        Solidity (Standard-Json-Input)
                      </option>
                      <option
                        value="4"
                        title="Experimental support for the Vyper smart contract development language"
                      >
                        Vyper (Experimental)
                      </option>
                    </select>
                    <div id="tooltip_container"></div>
                  </div>
                  <span id="ContentPlaceHolder1_licenseType">
                    <div
                      class="js-form-message form-group mb-4"
                      style={{ display: "block" }}
                    >
                      <label class="d-block mt-4 mb-1">
                        Please select Open Source License Type{" "}
                        <a
                          href="/contract-license-types"
                          target="_blank"
                          data-bs-toggle="tooltip"
                          title="Contract Source Code License Type, click for more info"
                        >
                          <i class="far fa-info-circle"></i>
                        </a>
                      </label>
                      <select
                        name="ctl00$ContentPlaceHolder1$ddlLicenseType"
                        id="ContentPlaceHolder1_ddlLicenseType"
                        title="Select a suitable license type"
                        class="form-select form-select-lg py-2"
                        class="dropdown-menu"
                        aria-labelledby="ddlLicenseType"
                        required
                        data-msg="Required"
                        data-error-class="u-has-error"
                        data-success-class="u-has-success"
                      >
                        <option value>[Please Select]</option>
                        <option value="1">1) No License (None)</option>
                        <option value="2">2) The Unlicense (Unlicense)</option>
                        <option value="3">3) MIT License (MIT)</option>
                        <option value="4">
                          4) GNU General Public License v2.0 (GNU GPLv2)
                        </option>
                        <option value="5">
                          5) GNU General Public License v3.0 (GNU GPLv3)
                        </option>
                        <option value="6">
                          6) GNU Lesser General Public License v2.1 (GNU
                          LGPLv2.1)
                        </option>
                        <option value="7">
                          7) GNU Lesser General Public License v3.0 (GNU LGPLv3)
                        </option>
                        <option value="8">
                          8) BSD 2-clause &quot;Simplified&quot; license
                          (BSD-2-Clause)
                        </option>
                        <option value="9">
                          9) BSD 3-clause &quot;New&quot; Or &quot;Revised&quot;
                          license (BSD-3-Clause)
                        </option>
                        <option value="10">
                          10) Mozilla Public License 2.0 (MPL-2.0)
                        </option>
                        <option value="11">
                          11) Open Software License 3.0 (OSL-3.0)
                        </option>
                        <option value="12">12) Apache 2.0 (Apache-2.0)</option>
                        <option value="13">
                          13) GNU Affero General Public License (GNU AGPLv3)
                        </option>
                        <option value="14">
                          14) Business Source License (BSL 1.1)
                        </option>
                      </select>
                    </div>
                  </span>

                  <p align="center">
                    <span>
                      <input
                        type="submit"
                        name="ctl00$ContentPlaceHolder1$btnSubmit"
                        value="Continue"
                        onclick="var isValid = validatecheck(); if (isValid) {buttonclicked = true;};"
                        id="ContentPlaceHolder1_btnSubmit"
                        class="btn btn-primary py-2 px-4"
                      />
                      <input
                        type="submit"
                        name="ctl00$ContentPlaceHolder1$btnReset"
                        value="Reset"
                        id="ContentPlaceHolder1_btnReset"
                        formnovalidate="formnovalidate"
                        class="btn btn-secondary py-2 px-4"
                      />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <input
              type="hidden"
              name="ctl00$ContentPlaceHolder1$libcounter"
              id="ContentPlaceHolder1_libcounter"
              value="1"
            />
          </div>
        </form>
      </section>
    </main>
  );
};

export default VerifyContract;
