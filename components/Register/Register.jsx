import React from "react";

const Register = () => {
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
      <section class="container-xxl py-12 pt-sm-20 pb-sm-32">
        <div class="col-sm-10 col-md-7 col-lg-5 col-xl-4 card mx-auto p-6">
          <div id="ContentPlaceHolder1_divHeaderMain" class="text-center mb-5">
            <h1 class="h4">Sign Up</h1>
            <p class="text-muted mb-0">
              Already have an account? <a href="/login">Sign In here</a>
            </p>
          </div>
          <form
            method="post"
            action="./register"
            id="ctl00"
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
                value="799CC77D"
              />
              <input
                type="hidden"
                name="__EVENTVALIDATION"
                id="__EVENTVALIDATION"
                value="ytDbFTfXyb5qcvEIZCQmzM8tPTJDXgHNHd8EccXU4kj0ftoCyAtzmOYpsI8Elbh8yWpTJDe0O7VR71/AgHHkC0UcW0HMPfbgfxriFJhxX/YdRHLgDwGagwGbcg2IlYkD1h6kB+ZYyn/MvgnCcMfWCzK/ODBgu/UKNhVXeBEc9aCtc0FO/jbGaB9gCWzbFmD80iJ8Uc2Pbf+rh4zN3jZFNUItNslYo/HIaUgC8W75dKYb0/tNz8s5gtkAt1dnGh3PsKyvuKl0yIUNvzFiF6wxpA=="
              />
            </div>
            <div id="ContentPlaceHolder1_maindiv">
              <div class="js-form-message form-group mb-4">
                <label for="txtUserName" class="form-label">
                  Username
                  <i
                    class="far fa-question-circle text-muted"
                    data-bs-toggle="tooltip"
                    title="Username has to be from 5 to 30 characters in length, only alphanumeric characters allowed."
                  ></i>
                </label>
                <input
                  name="ctl00$ContentPlaceHolder1$txtUserName"
                  type="text"
                  maxlength="30"
                  id="ContentPlaceHolder1_txtUserName"
                  class="form-control form-control-lg py-3"
                  required
                  placeholder="Username"
                  aria-label="Username"
                  data-success-class="u-has-success"
                  data-error-class="u-has-error"
                  name="username"
                  data-rule-minlength="5"
                  data-msg-minlength="Please enter at least 5 characters."
                  data-msg-required="Please enter Username."
                  data-rule-maxlength="30"
                />
              </div>
              <div class="js-form-message form-group mb-4">
                <label for="txtEmail" class="form-label">
                  Email Address
                </label>
                <input
                  name="ctl00$ContentPlaceHolder1$txtEmail"
                  maxlength="100"
                  id="ContentPlaceHolder1_txtEmail"
                  class="form-control form-control-lg py-3"
                  type="email"
                  name="email"
                  placeholder="A confirmation code will be sent to this address"
                  required
                  aria-label="Email address"
                  data-msg="Please enter a valid email address."
                  data-error-class="u-has-error"
                  data-success-class="u-has-success"
                />
              </div>
              <div class="js-form-message form-group mb-4">
                <label for="txtConfirmEmail" class="form-label">
                  Confirm Email Address
                </label>
                <input
                  name="ctl00$ContentPlaceHolder1$txtConfirmEmail"
                  maxlength="100"
                  id="ContentPlaceHolder1_txtConfirmEmail"
                  class="form-control form-control-lg py-3"
                  required
                  placeholder="Re-enter your email address"
                  aria-label="Confirm email address"
                  onpaste="return false"
                  data-success-class="u-has-success"
                  data-error-class="u-has-error"
                  name="confirmemail"
                  type="email"
                  data-msg="Please re-enter your email address."
                  data-msg-equalto="Email address does not match."
                  oncopy="return false"
                />
              </div>
              <div class="js-form-message form-group mb-4">
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <label for="txtPassword" class="form-label">
                    Password
                  </label>
                  <div class="progress-container d-flex align-items-center d-none">
                    <span class="progress-label fs-sm"></span>
                    <div
                      class="progress ms-2"
                      style={{ height: "5px", width: "100px" }}
                    >
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "0%" }}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="position-relative">
                  <input
                    name="ctl00$ContentPlaceHolder1$txtPassword"
                    type="password"
                    maxlength="75"
                    id="ContentPlaceHolder1_txtPassword"
                    class="js-toggle-password form-control form-control-lg py-3"
                    required
                    data-hs-toggle-password-options='{ "target": [".js-change-password-multi-1", ".js-change-password-multi-2"], "defaultClass": "fa-eye-slash", "showClass": "fa-eye", "classChangeTarget": "#showMultiPassIcon1" }'
                    placeholder="*************"
                    aria-label="********"
                    minlength="8"
                    data-success-class="u-has-success"
                    data-error-class="u-has-error"
                    name="password"
                    data-rule-minlength="8"
                    data-msg-minlength="Your password must be at least 8 characters long."
                    data-msg-required="Please enter Password."
                    style={{ paddingRight: "3rem" }}
                  />
                  <span
                    class="content-center position-absolute top-0 py-1.5"
                    title="Password Toggle"
                    style={{ right: "0.5rem" }}
                  >
                    <button
                      type="button"
                      class="js-change-password-multi-1 btn btn-sm btn-ghost-white"
                      tabindex="-1"
                      style={{ width: "2.375rem", height: "2.375rem" }}
                    >
                      <i id="showMultiPassIcon1" class="far fa-eye"></i>
                    </button>
                  </span>
                </div>
              </div>
              <div class="js-form-message form-group mb-4">
                <label for="txtPassword2" class="form-label">
                  Confirm Password
                </label>
                <div class="position-relative">
                  <input
                    name="ctl00$ContentPlaceHolder1$txtPassword2"
                    type="password"
                    maxlength="75"
                    id="ContentPlaceHolder1_txtPassword2"
                    class="js-toggle-password form-control form-control-lg py-3"
                    required
                    data-hs-toggle-password-options='{ "target": [".js-change-password-multi-1", ".js-change-password-multi-2"], "defaultClass": "fa-eye-slash", "showClass": "fa-eye", "classChangeTarget": "#showMultiPassIcon2" }'
                    placeholder="*************"
                    data-error-class="u-has-error"
                    minlength="8"
                    data-success-class="u-has-success"
                    data-rule-equalto="#txtPassword"
                    data-msg-equalto="Password does not match, please check again."
                    name="confirmPassword"
                    data-rule-minlength="8"
                    data-msg="Your password must be at least 8 characters long."
                    oncopy="return false"
                    style={{ paddingRight: "3rem" }}
                  />
                  <span
                    class="content-center position-absolute top-0 py-1.5"
                    title="Password Toggle"
                    style={{ right: "0.5rem" }}
                  >
                    <button
                      type="button"
                      class="js-change-password-multi-2 btn btn-sm btn-ghost-white"
                      tabindex="-1"
                      style={{ width: "2.375rem", height: "2.375rem" }}
                    >
                      <i id="showMultiPassIcon2" class="far fa-eye"></i>
                    </button>
                  </span>
                </div>
              </div>
              <div class="js-form-message form-group form-check mb-3">
                <input
                  name="ctl00$ContentPlaceHolder1$MyCheckBox"
                  type="checkbox"
                  id="ContentPlaceHolder1_MyCheckBox"
                  class="form-check-input"
                  required
                  data-msg="Please accept our Terms and Conditions."
                  data-error-class="u-has-error"
                  data-success-class="u-has-success"
                />
                <label
                  class="form-check-label text-muted"
                  for="ContentPlaceHolder1_MyCheckBox"
                >
                  I agree to the
                  <a href="/terms" target="_blank">
                    Terms and Conditions
                  </a>
                  .
                </label>
              </div>
              <div class="form-check">
                <input
                  name="ctl00$ContentPlaceHolder1$SubscribeNewsletter"
                  type="checkbox"
                  id="ContentPlaceHolder1_SubscribeNewsletter"
                  class="form-check-input"
                />
                <label
                  class="form-check-label"
                  for="ContentPlaceHolder1_SubscribeNewsletter"
                >
                  I would like to receive the PolygonScan newsletter and
                  understand that I can
                  <a
                    href="https://info.polygonscan.com//how-to-subscribe-unsubscribe-newsletter/"
                    target="_blank"
                  >
                    unsubscribe
                  </a>
                  at any time.
                </label>
              </div>
              <div class="d-flex justify-content-center my-5">
                <div
                  class="g-recaptcha"
                  data-sitekey="6Lf8Z8waAAAAACfwLnKX5lyIGR6BvLDA9DelCrws"
                ></div>
              </div>
              <input
                type="submit"
                name="ctl00$ContentPlaceHolder1$btnRegister"
                value="Create an Account"
                id="ContentPlaceHolder1_btnRegister"
                class="btn btn-primary btn-lg w-100 py-3"
              />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Register;
