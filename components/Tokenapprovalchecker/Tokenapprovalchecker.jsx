import React from "react";
import { FiSearch } from "react-icons/fi";

const Tokenapprovalchecker = () => {
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
      <section
        class="bg-light py-12"
        style={{ backgroundImage: "var(--bg-img-wave)" }}
      >
        <div class="container-xxl">
          <div class="row justify-content-between align-items-center">
            <div class="col-md-9 col-lg-6">
              <h1 class="fs-lg mb-3">Polygon PoS Chain Token Approval</h1>
              <p>
                Review and revoke your token approvals for any dApp. For more
                information, check out our Knowledge Base
                <a
                  target="_blank"
                  href="https://www.theblockchaincoders.com/SourceCode"
                  class="link-primary"
                >
                  article
                </a>
                .
              </p>
              <form class="js-validate col-xl-10">
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
                  <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" />
                </div>

                <div class="aspNetHidden">
                  <input
                    type="hidden"
                    name="__VIEWSTATEGENERATOR"
                    id="__VIEWSTATEGENERATOR"
                    value="DA69BD55"
                  />
                  <input type="hidden" name="__EVENTVALIDATION" />
                </div>
                <input
                  type="hidden"
                  name="ctl00$ContentPlaceHolder1$hdnAddress"
                  id="hdnAddress"
                />
                <input
                  type="hidden"
                  name="ctl00$ContentPlaceHolder1$hdnFilteredContractName"
                  id="hdnFilteredContractName"
                />
                <div class="input-group input-group-lg mb-3">
                  <input
                    name="ctl00$ContentPlaceHolder1$txtSearchAddressOrEns"
                    maxlength="255"
                    id="txtSearchAddressOrEns"
                    class="form-control py-3"
                    type="text"
                    aria-describedby="button-header-search"
                    required="true"
                    data-error-class="u-has-error"
                    data-success-class="u-has-success"
                    autocomplete="off"
                    data-msg="Search for your address or ENS name"
                    placeholder="Search by Address or Domain Name"
                  />
                  <button
                    onclick="__doPostBack('ctl00$ContentPlaceHolder1$btnSubmitSearch','')"
                    id="ContentPlaceHolder1_btnSubmitSearch"
                    class="btn btn-primary px-4"
                    type="submit"
                  >
                    <i class="far fa-magnifying-glass">
                      <FiSearch />
                    </i>
                  </button>
                </div>
              </form>
            </div>

            <div class="col-auto mx-auto">
              <div class="d-none d-lg-flex justify-content-center bumnjc3mjqn">
                <a
                  class="position-relative d-inline-block d-sm-none"
                  href="https://www.theblockchaincoders.com/SourceCode"
                  target="_blank"
                >
                  <span
                    class="position-absolute bg-white text-dark shadow-sm rounded-1 small px-1"
                    style={{ right: "0.75rem", top: "-0.5rem" }}
                  >
                    @theblockchaincoders
                  </span>

                  <img
                    class="img-fluid rounded"
                    width="321"
                    height="101"
                    src="/logo.png"
                    alt
                    style={{ display: "none", visibility: "hidden" }}
                  />
                  <noscript>
                    <img
                      class="img-fluid rounded"
                      width="321"
                      height="101"
                      src="/logo.png"
                      alt
                    />
                  </noscript>
                </a>
                <a
                  class="position-relative d-none d-sm-block d-lg-none"
                  target="_blank"
                >
                  <span
                    class="position-absolute bg-white text-dark shadow-sm rounded-1 small px-1"
                    style={{ right: "0.75rem", top: "-0.5rem" }}
                  >
                    @theblockchaincoders
                  </span>
                  <img
                    class="img-fluid rounded"
                    width="728"
                    height="90"
                    src="/logo.png"
                    alt
                    style={{ display: "none", visibility: "hidden" }}
                  />
                  <noscript>
                    <img
                      class="img-fluid rounded"
                      width="728"
                      height="90"
                      src="/logo.png"
                      alt
                    />
                  </noscript>
                </a>
                <a class="position-relative d-none d-lg-block" target="_blank">
                  <span
                    class="position-absolute bg-white text-dark shadow-sm rounded-1 small px-1"
                    style={{ right: "0.75rem", top: "-0.5rem" }}
                  >
                    Ad
                  </span>
                  <img
                    class="img-fluid rounded"
                    width="321"
                    height="101"
                    src="/logo.png"
                    alt
                    style={{ display: "none", visibility: "hidden" }}
                  />
                  <noscript>
                    <img
                      class="img-fluid rounded"
                      width="321"
                      height="101"
                      src="/logo.png"
                      alt
                    />
                  </noscript>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container-xxl pt-8 pb-12">
        <div class="d-flex flex-wrap justify-content-start align-items-center gap-2 mb-3">
          <button
            type="button"
            class="btn btn-white d-inline-flex align-items-center gap-1.5"
            id="btnConnectWallet"
          >
            <i id="connector" class="fa fa-circle text-danger fs-70x"></i>
            Connect to Web3
          </button>
          <button
            type="button"
            id="btnReset"
            class="btn btn-secondary"
            style={{ display: "none" }}
          >
            Reset
          </button>
          <p id="exposureRisks" class="text-info mb-0"></p>
        </div>
        <div id="noSearch" class="card">
          <div class="table-responsive">
            <table class="table table-align-middle mb-0">
              <thead class="align-middle text-nowrap pointer-events-none">
                <tr>
                  <th scope="col">Transaction Hash</th>
                  <th scope="col">
                    <a href="#">Last Updated (UTC)</a>
                  </th>
                  <th scope="col">Assets</th>
                  <th scope="col" width="100">
                    Approved Spender
                  </th>
                  <th scope="col">Allowance</th>
                  <th scope="col">&nbsp;</th>
                </tr>
              </thead>
              <tbody class="align-middle text-nowrap">
                <tr class="border-bottom-0">
                  <td colspan="6">
                    <div class="text-md-center py-24">
                      <div class="mb-4">
                        <span
                          class="bg-warning bg-opacity-10 border border-warning border-opacity-25 text-yellow-600 fs-70x content-center rounded-pill mx-md-auto"
                          style={{ width: "4rem", height: "4rem" }}
                        >
                          <i class="fal fa-coins fs-4"></i>
                        </span>
                      </div>
                      <h2 class="h5">Revoke Token Approvals</h2>
                      <p class="text-muted">
                        Review and revoke your token approvals for any dApp.
                      </p>
                      <button
                        type="button"
                        class="btn btn-white d-inline-flex align-items-center gap-1.5"
                        onclick="openModal()"
                      >
                        <i class="fa fa-circle text-danger fs-70x"></i>Connect
                        to Web3
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="resultContainer" class="card" style={{ display: "none" }}>
          <div class="card-header">
            <ul
              class="nav nav-pills text-nowrap snap-x-mandatory overflow-x-auto flex-nowrap gap-2"
              id="myTab"
              role="tablist"
            >
              <li class="nav-item snap-align-start" role="presentation">
                <button
                  id="erc20TabNav"
                  type="button"
                  role="tab"
                  class="nav-link active"
                  tabindex="0"
                  data-bs-toggle="pill"
                  data-bs-target="#erc20TabContent"
                  aria-controls="erc20TabContent"
                  aria-selected="true"
                >
                  ERC-20
                </button>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <div class="tab-content" id="tabContent">
              <div
                id="erc20TabContent"
                class="tab-pane fade show active"
                role="tabpanel"
                aria-labelledby="erc20TabNav"
                tabindex="0"
              >
                <div class="table-responsive">
                  <table id="tblErc20TokenApprovals" class="table table-hover">
                    <thead class="align-middle text-nowrap">
                      <tr>
                        <th scope="col">Txn Hash</th>
                        <th scope="col">
                          <a
                            href="javascript:void(0);"
                            class="ageDateColumnHeader"
                            onclick="switchAgeToDateTime(this);"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-title="Click to show Age Format"
                          >
                            Last Updated (UTC)
                          </a>
                        </th>
                        <th data-highlight scope="col">
                          Assets
                        </th>
                        <th data-highlight scope="col">
                          Approved Spender
                        </th>
                        <th scope="col">
                          <i
                            class="far fa-question-circle me-1"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-title="The original token amount that the spender is allowed to spend on behalf of the owner."
                          ></i>
                          Original Allowance
                        </th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody class="align-middle text-nowrap"></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <p class="fs-sm text-muted">
            <i class="far fa-lightbulb-on text-secondary me-1"></i> The Token
            Approvals page lists contracts that have been approved to spend an
            address’s tokens. The at risk amount shows what is vulnerable if the
            contracts were hacked. Learn more about this page in our
            <a
              target="_blank"
              href="https://info.polygonscan.com//tokenapprovalchecker/"
            >
              Knowledge Base
            </a>
            .
          </p>
        </div>
      </section>
      <div class="modal fade" id="unApproveModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title">
                <h5>Revoke Approval</h5>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="d-grid gap-2">
                <input type="hidden" id="approvalType" />
                <div class="form-group">
                  <label class="form-label" for="txtToken">
                    Token:
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-lg py-3"
                    id="txtToken"
                    disabled
                  />
                  <span
                    id="errorTxtToken"
                    class="invalid-feedback"
                    style={{ display: "none" }}
                  >
                    Please enter a valid Polygon PoS Chain Address
                  </span>
                </div>
                <div
                  class="form-group"
                  id="divTokenSymbol"
                  style={{ display: "none" }}
                >
                  <label class="form-label" for="txtToken">
                    Token Symbol:
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-lg py-3"
                    id="txtTokenSymbol"
                    disabled
                  />
                </div>
                <div class="form-group">
                  <label class="form-label" for="txtSpender">
                    Spender:
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-lg py-3"
                    id="txtSpender"
                    disabled
                  />
                  <span
                    id="errorTxtSpender"
                    class="invalid-feedback"
                    style={{ display: "none" }}
                  >
                    Please enter a valid Polygon PoS Chain Address
                  </span>
                </div>
                <div
                  class="form-group"
                  id="divOriginalAllowance"
                  style={{ display: "none" }}
                >
                  <label class="form-label" for="txtSpender">
                    <i
                      class="far fa-question-circle"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-title="The original token amount that the spender is allowed to spend on behalf of the owner."
                    ></i>
                    Original Allowance:
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-lg py-3"
                    id="txtOriginalAllowance"
                    disabled
                  />
                </div>
                <div
                  class="form-group"
                  id="divCurrentAllowance"
                  style={{ display: "none" }}
                >
                  <label class="form-label" for="txtSpender">
                    <i
                      class="far fa-question-circle"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-title="The remaining token amount that the spender is allowed to spend on behalf of the owner."
                    ></i>
                    Current Allowance:
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-lg py-3"
                    id="txtCurrentAllowance"
                    disabled
                  />
                </div>
                <div class="d-flex align-items-center justify-content-center gap-2">
                  <button
                    type="button"
                    class="btn btn-primary w-25 py-3"
                    id="btnUnapprove"
                  >
                    Revoke
                  </button>
                  <span
                    id="errorTxtApprove"
                    class="invalid-feedback"
                    style={{ display: "none" }}
                  >
                    Invalid error, please contact us.
                  </span>
                  <a
                    class="btn btn-sm btn-primary"
                    id="btnViewTx"
                    style={{ display: "none" }}
                    href="#"
                    target="_blank"
                  >
                    View your transaction
                  </a>
                </div>
                <div
                  class="alert alert-danger"
                  role="alert"
                  id="errorDiv"
                  style={{ display: "none" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="connectWalletModal"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Connect a Wallet</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-4">
                <button
                  type="button"
                  value="metamask"
                  class="btn-custom-wallet btn btn-lg btn-white d-flex justify-content-between align-items-center w-100 p-3 mb-2"
                  data-bs-dismiss="modal"
                >
                  <span class="text-dark d-flex align-items-center">
                    MetaMask
                    <span class="badge border bg-light text-dark ms-2">
                      Popular
                    </span>
                  </span>
                  <img width="25" src="../images/svg/brands/metamask.svg" alt />
                </button>
                <button
                  type="button"
                  value="walletconnect_v2"
                  class="btn-custom-wallet btn btn-lg btn-white d-flex justify-content-between align-items-center w-100 p-3 mb-2"
                  data-bs-dismiss="modal"
                >
                  <span class="text-dark">WalletConnect</span>
                  <img
                    width="25"
                    src="../images/svg/brands/walletconnect.svg"
                    alt
                  />
                </button>
                <button
                  type="button"
                  value="walletlink"
                  class="btn-custom-wallet btn btn-lg btn-white d-flex justify-content-between align-items-center w-100 p-3 mb-2"
                  data-bs-dismiss="modal"
                >
                  <span class="text-dark">Coinbase Wallet</span>
                  <img width="25" src="../images/svg/brands/coinbase.svg" alt />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Tokenapprovalchecker;
