import React from "react";

const Contactus = () => {
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
      <div id="overlayMain" class="text-center py-10">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="small text-muted mt-1">Loading</div>
      </div>

      <div class="container-xxl">
        <div class="d-flex flex-wrap justify-content-between align-items-center border-bottom gap-3 py-5">
          <div class="d-flex flex-column gap-1">
            <h1 class="h5 mb-0">Contact Us</h1>
          </div>
        </div>
      </div>

      <div class="container-xxl pb-12 mb-1 pt-3">
        <div class="row">
          <div class="col-md-9 mb-4 mb-md-0">
            <div class="card">
              <div class="card-header">
                <h2 class="card-header-title">Feedback Form</h2>
              </div>
              <div class="accordion-body p-4">
                <div class="alert alert-dark mb-4">
                  <p class="alert-text fw-bold">
                    Please understand that we can only assist with issues
                    directly related to the block explorer services. Before
                    writing in, please be informed that:
                  </p>
                  <ol class="alert-text list-xs-space mb-0">
                    <li>
                      <strong>Pending Transaction</strong> ⏳
                      <ul class="list-unstyled">
                        <li>
                          We do not <strong>process transactions</strong> and
                          are therefore unable to expedite, cancel or replace
                          them. If you are having issues with pending
                          transactions, please refer
                          <a
                            href="https://info.polygonscan.com//how-to-cancel-pending-transactions/"
                            target="_blank"
                          >
                            here
                          </a>
                          .
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Polygon PoS Chain Block Explorer</strong> 🔍
                      <ul class="list-unstyled">
                        <li>
                          PolygonScan is an independent
                          <a href target="_blank">
                            <strong>block explorer</strong>
                          </a>
                          unrelated to other service providers (unless stated
                          explicitly otherwise) and is therefore unable to
                          provide a precise response for inquiries that are
                          specific to other service providers.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Knowledge Base</strong> 📚
                      <ul class="list-unstyled">
                        <li>
                          The links on the right might already have the answer
                          to your inquiry. If they don't, perhaps one of the
                          other articles in our
                          <a
                            href="https://info.polygonscan.com/"
                            target="_blank"
                          >
                            Knowledge Base
                          </a>
                          page does.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Community Support</strong> 👋
                      <ul class="list-unstyled">
                        <li>
                          We will never ask for your private keys or passwords.
                          <strong>NEVER send us these.</strong> While we try our
                          best to respond in a timely manner, we often have a
                          backlog of inquiries. Please do not
                          <strong>spam us</strong>.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>
                        Wallet / Exchange / Project related issues
                      </strong>
                      🏦
                      <ul class="list-unstyled">
                        <li>
                          Kindly reach out to your wallet service provider,
                          exchanges or project/contract owner for further
                          support as they are in a better position to assist you
                          on the issues related to and from their platforms.
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>
                <p class="mt-0 mb-2">
                  <span id="ContentPlaceHolder1_lblResult"></span>
                </p>
                <form
                  method="post"
                  action="./contactus"
                  id="form1"
                  class="js-validate"
                >
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
                      value="46798EB0"
                    />
                    <input
                      type="hidden"
                      name="__EVENTVALIDATION"
                      id="__EVENTVALIDATION"
                      value="vAgCSK/cFYXJKHF5WhF2FhLEp8qTmX2N39fkBGVdEFw8csPstJlCUpjVhkaQPTpBi6/Zy/h5nvra9jXizF2o6BI0byZjZCo1Ll7rXLy8Q9bgWlWBLdAuQ5qy14JtoJEthAePWm61YuPrJP4QP6a9QJ7oX8oUTfUNsDoz2opkZDg="
                    />
                  </div>
                  <input
                    type="hidden"
                    name="ctl00$ContentPlaceHolder1$hdnVerifyOwnershipIsRequiredFor"
                    id="ContentPlaceHolder1_hdnVerifyOwnershipIsRequiredFor"
                  />
                  <div class="row mb-2">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label me-2">
                          Subject<span class="text-danger"> * </span>
                        </label>
                        <select class="form-select py-2" id="ddlSubject">
                          <option value="0">
                            Please Select Your Message Subject
                          </option>
                          <optgroup label="1. Inquiries">
                            <option value="1">1.a. General Inquiry</option>
                            <option value="3">1.b. Advertising</option>
                            <option value="13">1.c. EaaS</option>
                          </optgroup>
                          <optgroup label="2. Submissions">
                            <option value="4">2.a. Update Token Info</option>
                            <option value="5">2.b. Add Name Tag/Label</option>
                            <option value="9">
                              2.c. Request Removal of Name Tag
                            </option>
                            <option value="12">
                              2.d. Suggest Transaction Action
                            </option>
                            <option value="7">
                              2.e. Update Proxy Contract's Implementation
                              Address
                            </option>
                          </optgroup>
                          <optgroup label="3. Security">
                            <option value="6">
                              3.a. Report Phishing Address
                            </option>
                            <option value="8">3.b. Security Audit</option>
                          </optgroup>
                          <option value="10">4. Priority Support</option>
                          <option value="11">5. API Support</option>
                        </select>
                        <input
                          type="hidden"
                          name="ctl00$ContentPlaceHolder1$hdSubjectSelectedId"
                          id="ContentPlaceHolder1_hdSubjectSelectedId"
                        />
                        <input
                          type="hidden"
                          name="ctl00$ContentPlaceHolder1$hdHideAdsOpt"
                          id="ContentPlaceHolder1_hdHideAdsOpt"
                          value="0"
                        />
                      </div>
                    </div>
                  </div>
                  <p class="mb-0 text-muted">
                    <strong>Note</strong>: Selecting an incorrect subject could
                    result in a delayed or non response
                  </p>
                  <div
                    class="modal fade"
                    tabindex="-1"
                    aria-labelledby="myModalLabel"
                    aria-hidden="true"
                    id="myModal"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5
                            class="modal-title"
                            id="verifiedSignatureModalLabel"
                          >
                            Update Token Information Page
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <p></p>
                        </div>
                        <div class="modal-footer bg-light">
                          <button
                            data-bs-dismiss="modal"
                            class="btn btn-ghost-white"
                            type="button"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div id="ContentPlaceHolder1_divUsefulLink" class="card">
              <div class="card-header">
                <h2 class="card-header-title">Helpful Links</h2>
              </div>
              <div class="accordion-body p-4">
                <h3 id="ContentPlaceHolder1_h3Wallets" class="h6 mb-0">
                  Wallets
                </h3>
                <ul
                  id="ContentPlaceHolder1_ulWallets"
                  class="list-group list-group-flush mb-4"
                >
                  <li class="list-group-item px-0">
                    <a
                      rel="nofollow noopener"
                      href="https://docs.matic.network/docs/develop/wallets/walletconnect"
                      target="_blank"
                    >
                      WalletConnect
                      <i class="far fa-arrow-up-right-from-square text-secondary ms-1"></i>
                    </a>
                  </li>
                  <li class="list-group-item px-0">
                    <a
                      rel="nofollow noopener"
                      href="https://metamask.io/"
                      target="_blank"
                    >
                      Metamask (Browser Web3)
                      <i class="far fa-arrow-up-right-from-square text-secondary ms-1"></i>
                    </a>
                  </li>
                </ul>
                <h3 id="ContentPlaceHolder1_h3Others" class="h6 mb-0">
                  Others
                </h3>
                <ul
                  id="ContentPlaceHolder1_ulOthers"
                  class="list-group list-group-flush mb-4"
                >
                  <li class="list-group-item px-0">
                    <a
                      rel="nofollow noopener"
                      href="https://polygonscan.com/priority-support"
                      target="_blank"
                    >
                      PolygonScan Priority Support
                      <i class="far fa-arrow-up-right-from-square text-secondary ms-1"></i>
                    </a>
                  </li>
                  <li class="list-group-item px-0">
                    <a
                      rel="nofollow noopener"
                      href="https://blog.matic.network/deposits-and-withdrawals-on-matic-network-walkthrough-guide/"
                      target="_blank"
                    >
                      How to receive and send MATIC on POLYGON
                      <i class="far fa-arrow-up-right-from-square text-secondary ms-1"></i>
                    </a>
                  </li>
                  <li class="list-group-item px-0">
                    <a
                      rel="nofollow noopener"
                      href="https://wiki.polygon.technology/docs/develop/metamask/config-matic"
                      target="_blank"
                    >
                      Connecting MetaMask to POLYGON Mainnet
                      <i class="far fa-arrow-up-right-from-square text-secondary ms-1"></i>
                    </a>
                  </li>
                  <li class="list-group-item px-0">
                    <a
                      rel="nofollow noopener"
                      href="https://wiki.polygon.technology/docs/develop/ethereum-matic/pos/getting-started/"
                      target="_blank"
                    >
                      Polygon PoS Chain Official Site
                      <i class="far fa-arrow-up-right-from-square text-secondary ms-1"></i>
                    </a>
                  </li>
                </ul>
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
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="connectWalletModalLabel">
                Connect a Wallet
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <button
                type="button"
                value="metamask"
                class="btn btn-lg btn-custom-wallet btn-white d-flex justify-content-between align-items-center w-100 p-3 mb-2"
              >
                <span class="text-dark d-flex align-items-center">
                  MetaMask
                  <span class="badge bg-secondary ms-2">Popular</span>
                </span>
                <img width="25" src="../images/svg/brands/metamask.svg" alt />
              </button>
              <button
                type="button"
                value="walletconnect_v2"
                class="btn btn-lg btn-custom-wallet btn-white d-flex justify-content-between align-items-center w-100 p-3 mb-2"
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
                class="btn btn-lg btn-custom-wallet btn-white d-flex justify-content-between align-items-center w-100 p-3 mb-2"
              >
                <span class="text-dark">Coinbase Wallet</span>
                <img
                  width="25"
                  style={{ float: "right" }}
                  src="../images/svg/brands/coinbase.svg"
                  alt
                  align="right"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="signMessageModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="signMessageModalLabel">
                Sign Message
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="form-group mb-4">
                <label for="addressInput">Signing Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="addressInput"
                  readonly
                />
                <div class="fs-6 text-muted mt-2">
                  The above address is connected to your Web3 wallet.
                </div>
              </div>
              <div class="js-form-message form-group">
                <label
                  class="d-flex justify-content-between align-items-center"
                  for="txtRawMessage"
                >
                  Message To Sign
                </label>
                <textarea
                  id="txtRawMessage"
                  class="form-control form-control-sm"
                  name="txtRawMessage"
                  rows="5"
                  autocomplete="off"
                  autocorrect="off"
                  spellcheck="false"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>
            </div>
            <div class="modal-footer bg-light">
              <a
                class="btn btn-ghost-white"
                data-bs-dismiss="modal"
                href="javascript:;"
              >
                Cancel
              </a>
              <button type="button" id="btnSignMessage" class="btn btn-primary">
                Sign Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contactus;
