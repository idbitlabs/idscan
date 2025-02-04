import React from "react";

const PrioritySupport = () => {
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
      <div class="container-xxl pt-12 pb-16">
        <div class="row align-items-center mb-12">
          <div class="col-lg-6">
            <div class="text-cap fw-medium text-primary mb-2">
              A Paid Service
            </div>
            <h1 class="h2 fw-bold">Priority Support</h1>
            <p class="fs-base">
              At PolygonScan, we handle a substantial volume of support requests
              daily. While we strive our best to respond to each one in a timely
              manner, we recognize that certain projects may want to submit
              their token information quicker than our standard turnaround time.
            </p>
            <p class="fs-base">
              In addition to expediting token updates, we also provide priority
              support for other urgent or technical matters, such as contract
              verification.
            </p>
            <p class="fs-base">
              Kindly follow the simple steps below to get your support
              prioritized.
            </p>
            <div class="d-flex align-items-center gap-4">
              <a
                href="#get-started"
                class="btn btn-primary py-2 px-4"
                type="button"
              >
                Get Started
              </a>
              <a href="#contact-us" class="link-primary">
                Contact Us
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="d-none d-lg-flex justify-content-end">
              <img
                class="img-fluid"
                width="80%"
                data-img-theme="light"
                src="/assets/poly/images/svg/priority-support/ps-main.svg?v=24.3.1.0"
                alt="priority-support-main"
                style={{ marginTop: "-150px", marginBottom: "-150px" }}
              />
            </div>
          </div>
        </div>

        <section id="get-started" class="mb-12 offset-scroll">
          <div class="row justify-content-center text-center mb-4">
            <div class="col-sm-10 col-lg-8 col-xl-6">
              <h2 class="h4">How to Start</h2>
              <p class="fs-base">Simple steps for getting Priority Support.</p>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-5">
            <div class="col">
              <div class="card h-100">
                <div class="my-5">
                  <img
                    class="img-fluid w-100 mx-auto"
                    data-img-theme="light"
                    src="/assets/poly/images/svg/priority-support/ps-first-step.svg?v=24.3.1.0"
                    alt="ps-step-one"
                  />
                </div>
                <div class="p-5 d-flex flex-column justify-content-between">
                  <div class="text-cap fw-medium text-primary mb-2">Step 1</div>
                  <h3 class="fs-base">Check Token Information</h3>
                  <p class="mb-0">
                    Ensure that token information is submitted. Check our token
                    update guidelines
                    <a
                      href="https://info.polygonscan.com//how-to-update-token-info/"
                      target="_blank"
                    >
                      here
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <div class="my-5">
                  <img
                    class="img-fluid w-100 mx-auto"
                    data-img-theme="light"
                    src="/assets/poly/images/svg/priority-support/ps-second-step.svg?v=24.3.1.0"
                    alt="ps-step-two"
                  />
                </div>
                <div class="p-5 d-flex flex-column justify-content-between">
                  <div class="text-cap fw-medium text-primary mb-2">Step 2</div>
                  <h3 class="fs-base">Provide Token Update Request</h3>
                  <p class="mb-0">
                    Provide us with the token update request information in the
                    contact form below.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <div class="my-5">
                  <img
                    class="img-fluid w-100 mx-auto"
                    data-img-theme="light"
                    src="/assets/poly/images/svg/priority-support/ps-third-step.svg?v=24.3.1.0"
                    alt="ps-step-three"
                  />
                </div>
                <div class="p-5 d-flex flex-column justify-content-between">
                  <div class="text-cap fw-medium text-primary mb-2">Step 3</div>
                  <h3 class="fs-base">We'll Review Your Request</h3>
                  <p class="mb-0">
                    Our team will review your request and contact you using an
                    official polygonscan.com email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-us" class="offset-scroll">
          <div class="row justify-content-center text-center mb-4">
            <div class="col-sm-10 col-lg-8 col-xl-6">
              <h2 class="h4">Contact Us</h2>
              <p class="fs-base">
                Please use this form to get in touch for priority support or
                featured listing with our team.
              </p>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="card bg-light shadow-none p-6">
                <form
                  method="post"
                  action="./priority-support"
                  id="form1"
                  class="row g-5 js-validate"
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
                      value="10A451B1"
                    />
                    <input
                      type="hidden"
                      name="__EVENTVALIDATION"
                      id="__EVENTVALIDATION"
                      value="9sprPSXRZidvd0xujyWPZVuky9KyfJdzRInnUc9pokXi5zxhxoIgzOrXYIT/5R4Krau2u5w4tM32L/Sv45TxE0oA8vyvwHkOAdPmztfDHfG4u7tvVVwFR8Tboo8vsiQS6VqYTjdOKQWkDtJrskiUneP88HUn0qM7i16VpqByd/yHHh5CuLFIjpLV9AScFzOihZT8c9lm+0vEnlKZ0osra5rTRJXD00Rw8E/BZwfen/rCPCa/LfWcuZ79H+MeUQVlkgze1fCmCjKH4NfAhkug/pNEL0x2b9efO3zNqIooZ36rTl8kalqiaFwixcwfvnMlwDUGOCRAuvLgsQAd6Plr2w=="
                    />
                  </div>
                  <div class="mt-0 mb-2">
                    <span id="ContentPlaceHolder1_lblResult"></span>
                  </div>
                  <div class="col-md-6 js-form-message">
                    <label for="name" class="form-label">
                      Requester Name <span class="text-danger">*</span>
                    </label>
                    <input
                      name="ctl00$ContentPlaceHolder1$txtName"
                      type="text"
                      maxlength="150"
                      id="ContentPlaceHolder1_txtName"
                      class="form-control py-2"
                      data-msg="Please enter your name"
                      data-error-class="u-has-error"
                      data-success-class="u-has-success"
                      required
                      placeholder="Ex. John Doe"
                    />
                  </div>
                  <div class="col-md-6 js-form-message">
                    <label for="email" class="form-label">
                      Requester Email <span class="text-danger">*</span>
                    </label>
                    <input
                      name="ctl00$ContentPlaceHolder1$txtEmail"
                      maxlength="150"
                      id="ContentPlaceHolder1_txtEmail"
                      class="form-control py-2"
                      type="email"
                      data-msg="Please enter a valid email address"
                      data-error-class="u-has-error"
                      data-success-class="u-has-success"
                      required
                      placeholder="Ex. johndoes@example.com"
                    />
                  </div>
                  <div class="col-md-12 js-form-message">
                    <label for="tokenAddress" class="form-label">
                      Token Contract Address
                      <span class="text-danger">*</span>
                    </label>
                    <input
                      name="ctl00$ContentPlaceHolder1$txtTokenContractAddress"
                      type="text"
                      id="ContentPlaceHolder1_txtTokenContractAddress"
                      class="form-control py-2"
                      data-msg="Please enter correct token contract address."
                      data-error-class="u-has-error"
                      data-success-class="u-has-success"
                      required
                      placeholder="0x.."
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">
                      Choose Priority Service
                      <span class="text-danger">*</span>
                    </label>
                    <select
                      name="ctl00$ContentPlaceHolder1$ddlPriorityService"
                      id="ContentPlaceHolder1_ddlPriorityService"
                      class="form-select py-2"
                      aria-label="Default select example"
                    >
                      <option value="Token Update">Token Update</option>
                      <option value="Featured Listing">Featured Listing</option>
                      <option value="Token Update &amp; Featured Listing">
                        Token Update &amp; Featured Listing
                      </option>
                      <option value="Contract Verification">
                        Contract Verification
                      </option>
                      <option value="Others">Others</option>
                    </select>
                    <div class="form-text mt-1">
                      Learn more about
                      <a href="https://info.polygonscan.com//featured-listing/">
                        Featured Listing
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6 js-form-message">
                    <label for="ticketNo" class="form-label">
                      Helpdesk Ticket Number
                    </label>
                    <input
                      name="ctl00$ContentPlaceHolder1$txtHelpdeskTicketNumber"
                      type="text"
                      id="ContentPlaceHolder1_txtHelpdeskTicketNumber"
                      class="form-control py-2"
                      data-msg="Please enter the correct ticket number"
                      data-error-class="u-has-error"
                      data-success-class="u-has-success"
                      placeholder="e.g. 123456"
                    />
                  </div>
                  <div class="col-12 js-form-message">
                    <label for="additionalNotes" class="form-label">
                      Additional Notes
                    </label>
                    <textarea
                      name="ctl00$ContentPlaceHolder1$txtOptionalNote"
                      id="ContentPlaceHolder1_txtOptionalNote"
                      class="form-control mb-2"
                      rows="5"
                      placeholder="If you have any additional notes, please leave them here"
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <div class="alert alert-dark" role="alert">
                      <h6 class="font-weight-bold mb-3">Note:</h6>
                      <p class="alert-text mb-0">
                        - We will <strong class="fw-medium">NOT</strong> request
                        payment via direct deposit. All payments will be
                        directed through our official payment channel.
                      </p>
                      <p class="alert-text mb-0">
                        - We will <strong class="fw-medium">NEVER</strong> ask
                        for your private key or seed words. Please
                        <strong class="fw-medium">DO NOT SHARE</strong> your
                        private keys with anyone.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center">
                    <div
                      class="g-recaptcha"
                      data-sitekey="6Lf8Z8waAAAAACfwLnKX5lyIGR6BvLDA9DelCrws"
                    ></div>
                  </div>
                  <div class="text-center">
                    <input
                      type="submit"
                      name="ctl00$ContentPlaceHolder1$btnSubmit"
                      value="Send Message"
                      id="ContentPlaceHolder1_btnSubmit"
                      class="btn btn-primary py-2 px-4"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PrioritySupport;
