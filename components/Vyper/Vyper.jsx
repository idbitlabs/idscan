import React from "react";

const Vyper = () => {
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
                      class="nav-link fw-medium py-2 px-3 active"
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
              <h2 class="fs-default">Vyper Online Compiler (Experimental)</h2>
              <p>
                Compiles Vyper source code and outputs the ABI, Bytecode and
                Runtime Bytecode.
              </p>

              <div class="d-lg-none mb-2">
                <span id="ContentPlaceHolder1_litBanner"></span>
              </div>
            </div>
            <div class="mb-2" id="spinwheel" style={{ display: "none" }}>
              <div class="mb-2 d-flex align-items-center gap-2">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <span>Please wait..</span>
              </div>
            </div>
            <form method="post" action="./vyper" id="ctl00" class="js-validate">
              <div class="aspNetHidden">
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
                  value="AF372940"
                />
                <input
                  type="hidden"
                  name="__EVENTVALIDATION"
                  id="__EVENTVALIDATION"
                  value="qaVg9zjz/Uh3ML14NROH72iW2BnQm0qYRqt//rYCMiVnDeTKl2V7wWMr8lJHZj3eJQePCWSGAdeafc17LbGMpn/2/2m2awwCsv3IKO2ALsyabrkjXxX87EEQTRa3EqH4amEeh6NJcjURPKcqaCOGKyfIRgod4Rtfw8ZZ6Yu1JQUI+8SxJ1I38pAjMDuN/nnV459VUr9TGwyNC8n08cCfHiJSeKGaf6aJyPp+2aKz0InNjIZWDBNJm2KRIqJJj10j25AQZJnPMckM2voef2nuuoPMrCCGMgdAp/NtGowOwTp2sKAWd9J99rZX40w1PSaKPrrU9HlQs9vKWQD/pCWj8EBuS/SMNODwdxvVjtkTxx5/UB9sZDkOArpWYPo4086msQayUzB0eJVdMUowEXZj3a5LlOh/qEl2Rsc3MVJ0JSyQHU3daTqM2ihpfOFNwZ3crkJ9QumJa6ItdnuBtKf0Fnx0lwdLvFs62N3a4IM4PrUjCdPN9VsifBcCxYblmcvj4ieE3kvGrH7a8mOYV4v7vxsS7dKiEOV0sSaoefgRB5L0wq1xffv9kviI8WC+eLgOvs3PyauvkjPfjE08X0Wq4nb8p36/TJxSuY3Aa/xSO6qLYF05+5ihbFibRFbS3MwFdRzUh9Bvxys8rnqfy4LXfj3t6AleRCa1L19zhb+yarDpAWgS6HOz6b82eRi5SpnetJKcPOX4y0TqRzxbG2/rtOHfgmmql+h/BoDjxkoqz4ErL8z/PLgDxOXfRHR0R1FBaOeOi+5/AuuG+rIP5xgD6TtACJmIyFsPTPkLxJV6wMKYXi2j68LIERhjtiqHQGb/7KgcGTQoist8rmc7bs9U4Yvk1wgLedNHjSkgoXdQGkho/cO6CWiRt60kZE+TfYtFuBWBuqghqkGz8ejd6FaFvljGB4PsVwSLjXykUVplAf+fL/rJQJDrHtpm7LnxfwG13KDNaXpcHQyyfJGg9hiojc4aZAWxLX0OGiorymYzUFtk7RmPDTsrX22mFHFHzfYvWUfJbnTrBHWDEJ6aIAxoWj9tyyz2HuKDL2jz1+mV/6GNl/NKmrscswWK8Ru4kIdf"
                />
              </div>
              <div class="card shadow-none">
                <div class="card-body">
                  <div class="row mb-4">
                    <div class="col-xl-4 js-form-message">
                      <label
                        class="form-label"
                        for="ddlCompilerVersions"
                        id="lblCompilerVersion"
                      >
                        Select Compiler Version
                      </label>
                      <select
                        name="ctl00$ContentPlaceHolder1$ddlCompilerVersions"
                        id="ContentPlaceHolder1_ddlCompilerVersions"
                        class="form-select"
                        required
                        data-msg="Compiler Version Required"
                        data-error-class="u-has-error"
                        data-success-class="u-has-success"
                      >
                        <option value>[Please Select]</option>
                        <option value="vyper:0.3.10">vyper:0.3.10</option>
                        <option value="vyper:0.3.10rc4">vyper:0.3.10rc4</option>
                        <option value="vyper:0.3.10rc3">vyper:0.3.10rc3</option>
                        <option value="vyper:0.3.10rc2">vyper:0.3.10rc2</option>
                        <option value="vyper:0.3.9">vyper:0.3.9</option>
                        <option value="vyper:0.3.8">vyper:0.3.8</option>
                        <option value="vyper:0.3.7">vyper:0.3.7</option>
                        <option value="vyper:0.3.6">vyper:0.3.6</option>
                        <option value="vyper:0.3.5">vyper:0.3.5</option>
                        <option value="vyper:0.3.4">vyper:0.3.4</option>
                        <option value="vyper:0.3.3">vyper:0.3.3</option>
                        <option value="vyper:0.3.2">vyper:0.3.2</option>
                        <option value="vyper:0.3.1">vyper:0.3.1</option>
                        <option value="vyper:0.3.0">vyper:0.3.0</option>
                        <option value="vyper:0.2.16">vyper:0.2.16</option>
                        <option value="vyper:0.2.15">vyper:0.2.15</option>
                        <option value="vyper:0.2.13">vyper:0.2.13</option>
                        <option value="vyper:0.2.12">vyper:0.2.12</option>
                        <option value="vyper:0.2.11">vyper:0.2.11</option>
                        <option value="vyper:0.2.8">vyper:0.2.8</option>
                        <option value="vyper:0.2.7">vyper:0.2.7</option>
                        <option value="vyper:0.2.5">vyper:0.2.5</option>
                        <option value="vyper:0.2.4">vyper:0.2.4</option>
                        <option value="vyper:0.2.3">vyper:0.2.3</option>
                        <option value="vyper:0.2.2">vyper:0.2.2</option>
                        <option value="vyper:0.2.1">vyper:0.2.1</option>
                        <option value="vyper:0.2.0">vyper:0.2.0</option>
                        <option value="vyper:0.1.0b17">vyper:0.1.0b17</option>
                        <option value="vyper:0.1.0b16">vyper:0.1.0b16</option>
                        <option value="vyper:0.1.0b15">vyper:0.1.0b15</option>
                        <option value="vyper:0.1.0b14">vyper:0.1.0b14</option>
                        <option value="vyper:0.1.0b13.hotfix">
                          vyper:0.1.0b13.hotfix
                        </option>
                        <option value="vyper:0.1.0b13">vyper:0.1.0b13</option>
                        <option value="vyper:0.1.0b12">vyper:0.1.0b12</option>
                        <option value="vyper:0.1.0b11">vyper:0.1.0b11</option>
                        <option value="vyper:0.1.0b10">vyper:0.1.0b10</option>
                        <option value="vyper:0.1.0b9">vyper:0.1.0b9</option>
                        <option value="vyper:0.1.0b8">vyper:0.1.0b8</option>
                        <option value="vyper:0.1.0b7">vyper:0.1.0b7</option>
                        <option value="vyper:0.1.0b4&lt;/p>">
                          vyper:0.1.0b4&lt;/p&gt;
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="js-form-message">
                    <label
                      class="form-label"
                      for="txtSourceCode"
                      id="lblSourceCode"
                    >
                      Enter Source Code
                    </label>
                    <textarea
                      name="ctl00$ContentPlaceHolder1$txtSourceCode"
                      rows="10"
                      cols="20"
                      id="ContentPlaceHolder1_txtSourceCode"
                      class="form-control"
                      required
                      data-msg="Please enter Source Code"
                      data-error-class="u-has-error"
                      data-success-class="u-has-success"
                      placeholder="Please enter Source Code"
                    ></textarea>
                  </div>
                  <p class="fs-sm text-muted mt-2 mb-0">
                    Tip: Try compiling the sample
                    <a
                      href="https://raw.githubusercontent.com/prysPOLlabs/prysm/62f304e668bc78c4078cd376ba141b58eea777ef/contracts/deposit-contract/depositContract.v.py"
                      target="_blank"
                    >
                      PrysPOLlabs Contract
                    </a>
                    (for vyper version 0.1.0b7)
                  </p>
                </div>
                <div class="card-footer bg-light">
                  <input
                    type="submit"
                    name="ctl00$ContentPlaceHolder1$btnSubmit"
                    value="Compile Vyper"
                    onclick="var isValid = validatecheck(&#39;&#39;); if (isValid) {var $btn = $(&#39;#spinwheel&#39;); $btn.show(); window.location.hash = &#39;#&#39;; buttonclicked = true;};"
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
              <div class="mt-2">
                <input
                  type="hidden"
                  name="ctl00$ContentPlaceHolder1$hidABIcode"
                  id="ContentPlaceHolder1_hidABIcode"
                />
                <input
                  type="hidden"
                  name="ctl00$ContentPlaceHolder1$hidBytecode"
                  id="ContentPlaceHolder1_hidBytecode"
                />
              </div>
              <div
                id="ContentPlaceHolder1_pnlDeploy"
                class="mt-2 text-end"
                style={{ display: "none" }}
              >
                Deploy Contract?
                <a
                  href="#"
                  id="connectWeb3Provider"
                  style={{ display: "none" }}
                  onclick="connectProvider(); return false;"
                >
                  Connect to Web3 Provider
                </a>
                <a
                  href="#"
                  id="submitContract"
                  style={{ display: "none" }}
                  onclick="deployContract();"
                >
                  Broadcast
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Vyper;
