import React from "react";

const Contractdiffchecker = () => {
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
      <form method="post" action="./contractdiffchecker" id="ctl00">
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
            value="74562E0C"
          />
          <input
            type="hidden"
            name="__EVENTVALIDATION"
            id="__EVENTVALIDATION"
            value="srEZLIwJyS3qpU+bTG81zz8/KSaL/UYC4NeZCar1rj7NuuDNtk/UALtIb/i0zeyK2Mnb5IXeFC50sGPJGp0i1AiJs/LisFtmEI2+R4kzBeyVEqBPZlPf1l8h/f4XgE84v0MK+/T7NfN2JzB4+GeKXA=="
          />
        </div>

        <section class="container-xxl">
          <div class="d-flex flex-wrap justify-content-between align-items-center border-bottom gap-3 py-5">
            <div class="d-flex flex-column gap-1">
              <h1 class="h5 mb-0">Contract Diff Checker</h1>
            </div>
          </div>
        </section>

        <div class="container-xxl pt-5 pb-12">
          <div
            id="ContentPlaceHolder1_divSummary"
            class="row mx-gutters-sm-1 mb-3"
          >
            <input
              name="ctl00$ContentPlaceHolder1$hdnContContAddres1"
              type="hidden"
              id="ContentPlaceHolder1_hdnContContAddres1"
            />
            <input
              name="ctl00$ContentPlaceHolder1$hdnContContAddres2"
              type="hidden"
              id="ContentPlaceHolder1_hdnContContAddres2"
            />
            <div class="col-md-12"></div>
            <div class="col-lg-6 mb-4 contAddress">
              <label class="form-label">Contract Address 1</label>
              <div class="js-form-message input-group mb-3">
                <input
                  id="txtContAddres1"
                  type="text"
                  class="form-control p-3"
                  placeholder="0x..."
                  aria-label="Enter Contract Address 1 and Press Enter"
                />
                <button
                  class="btn btn-primary py-3 px-4"
                  type="button"
                  onclick="onLookUpClick1();"
                >
                  Lookup
                </button>
              </div>
              <div id="ContentPlaceHolder1_divBlankConent1" class="card py-24">
                <div class="text-center col-lg-8 col-xl-6 mx-auto">
                  <div class="mb-4">
                    <i class="fal fa-inboxes fs-2"></i>
                  </div>
                  <p class="mb-0 text-muted">
                    Please enter a contract address above to load the contract
                    details and source code.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4 contAddress">
              <label class="form-label">Contract Address 2</label>
              <div class="js-form-message input-group mb-3">
                <input
                  id="txtContAddres2"
                  type="text"
                  class="form-control p-3"
                  placeholder="0x..."
                  aria-label="Contract Address 2"
                />
                <button
                  class="btn btn-primary py-3 px-4"
                  type="button"
                  onclick="onLookUpClick2();"
                >
                  Lookup
                </button>
              </div>
              <div id="ContentPlaceHolder1_divBlankConent2" class="card py-24">
                <div class="text-center col-lg-8 col-xl-6 mx-auto">
                  <div class="mb-4">
                    <i class="fal fa-inboxes fs-2"></i>
                  </div>
                  <p class="mb-0 text-muted">
                    Please enter a contract address above to load the contract
                    details and source code.
                  </p>
                </div>
              </div>
            </div>
            <div class="top d-none">
              <strong>Context size (optional):</strong>
              <input type="text" id="contextSize" value="20" />
            </div>
            <div class="col-12 mt-4">
              <div id="diffoutput" class="table-responsive"></div>
            </div>
            <div class="col-12 text-center mt-4">
              <button
                type="button"
                class="btn btn-secondary py-2 px-4 divDiff"
                onclick="checkContractDiff(0);"
                style={{ display: "none" }}
              >
                Compare Difference
              </button>
              <button
                type="button"
                class="btn btn-secondary py-2 px-4 btnback"
                onclick="backToSummary();"
                style={{ display: "none" }}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Contractdiffchecker;
