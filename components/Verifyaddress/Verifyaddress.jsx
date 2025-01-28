import React from "react";

const Verifyaddress = () => {
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
      <div class="container-xxl py-12 pt-sm-20 pb-sm-32">
        <div class="col-sm-10 col-md-7 col-lg-6 col-xl-5 card mx-auto p-6">
          <div class="text-center mb-5">
            <h2 class="h4 mb-2">Verify Address Ownership</h2>
            <p class="text-muted text-nowrap mb-0">
              Find out more about
              <a
                href="https://info.polygonscan.com//what-is-verify-address-ownership/"
                target="_blank"
              >
                Verify Address Ownership
              </a>
            </p>
          </div>
          <form
            method="post"
            action="./verifyaddress"
            onsubmit="javascript:return WebForm_OnSubmit();"
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
              <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" />
            </div>

            <div class="aspNetHidden">
              <input
                type="hidden"
                name="__VIEWSTATEGENERATOR"
                id="__VIEWSTATEGENERATOR"
                value="B0F30D6A"
              />
              <input
                type="hidden"
                name="__EVENTVALIDATION"
                id="__EVENTVALIDATION"
              />
            </div>
            <div id="ContentPlaceHolder1_verifyaddress1div">
              <div class="js-form-message form-group mb-4">
                <label class="form-label" for="ContractAddress">
                  Please enter contract address
                  <span class="text-danger">*</span>
                </label>
                <input
                  name="ctl00$ContentPlaceHolder1$txtContractAddress"
                  type="text"
                  maxlength="42"
                  id="ContentPlaceHolder1_txtContractAddress"
                  class="form-control py-3"
                  placeholder="0x..."
                  aria-label="Contract address"
                  aria-describedby="contractAddressAddon"
                  required
                  data-msg="Contract address is required"
                  data-error-class="u-has-error"
                  data-success-class="u-has-success"
                />
                <span
                  id="ContentPlaceHolder1_revContractAddressLen"
                  class="text-danger small"
                  style={{ display: "none" }}
                >
                  ** Invalid Length
                </span>
              </div>
              <input
                type="submit"
                name="ctl00$ContentPlaceHolder1$btnSubmit1"
                value="Continue"
                onclick='javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$ContentPlaceHolder1$btnSubmit1", "", true, "", "", false, false))'
                id="ContentPlaceHolder1_btnSubmit1"
                class="btn btn-lg btn-primary w-100 py-3"
              />
            </div>
            <div
              class="modal fade"
              id="myModal"
              tabindex="-1"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="verifiedSignatureModalLabel">
                      Contract Created By Contract
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body ms-1">
                    <p class="mt-1 mb-2">
                      We are not able to automatically verify and assign the
                      ownership of this contract address. Please refer to and
                      follow the instructions in our article
                      <a href="https://info.polygonscan.com//what-is-contract-created-by-contract/">
                        here
                      </a>
                      and
                      <a href="/contactus?id=1&parent=verifyAddress&case=1">
                        contact us
                      </a>
                      afterward with the required signed message.
                    </p>
                  </div>
                  <div class="modal-footer bg-light">
                    <button
                      data-bs-dismiss="modal"
                      class="btn btn-ghost-white"
                      type="button"
                      causesvalidation="False"
                    >
                      Cancel
                    </button>
                    <a
                      href="/contactus?id=1&parent=verifyAddress&case=1"
                      class="btn btn-primary"
                    >
                      Proceed To Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Verifyaddress;
