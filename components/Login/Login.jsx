import React from "react";

const Login = () => {
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
      <form
        method="post"
        action="./login?ref=verifyContract"
        id="form1"
        class="js-validate w-md-75 w-lg-50 mx-md-auto"
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
            value="C2EE9ABB"
          />
          <input
            type="hidden"
            name="__EVENTVALIDATION"
            id="__EVENTVALIDATION"
            value="YLEtfNGU7L6OmG06HGZZD0bNSzm+6mfdKPF541KYHcfSJKmFL52oToExQYt/3yZA2TlErVBYZFu5hCtI/ItiVI8eDwPD2EAXj2QTvjWyahd/ebySx1z1ir0AewU0gEfukLjKL5zOx82xuP8Fe5emNmhS4AeB1WKU3nugWZ5uT4jKmqANbVi9Sg1eBCPrYL8C"
          />
        </div>
        <section class="container-xxl py-12 pt-sm-20 pb-sm-32">
          <div
            id="ContentPlaceHolder1_divLogin"
            class="col-sm-10 col-md-7 col-lg-5 col-xl-4 card mx-auto p-6"
          >
            <div class="text-center mb-5">
              <h1 class="h4">Sign In</h1>
              <p class="text-muted mb-0">
                Don't have an account? <a href="/register">Sign Up</a>
              </p>
            </div>
            <div class="js-form-message form-group mb-4">
              <label class="form-label" for="txtUserName">
                Username
              </label>
              <input
                name="ctl00$ContentPlaceHolder1$txtUserName"
                type="text"
                maxlength="50"
                id="ContentPlaceHolder1_txtUserName"
                tabindex="1"
                class="form-control form-control-lg py-3"
                placeholder="e.g. johndoe"
                required
                data-msg-required="Please enter your Username."
                data-error-class="u-has-error"
                data-success-class="u-has-success"
              />
            </div>
            <div class="js-form-message form-group mb-4">
              <div class="d-flex justify-content-between">
                <label class="form-label" for="txtPassword">
                  {" "}
                  Password{" "}
                </label>
                <a class="link-muted" href="/lostpassword" tabindex="0">
                  Forgot your password?
                </a>
              </div>
              <div class="form-group position-relative">
                <input
                  name="ctl00$ContentPlaceHolder1$txtPassword"
                  type="password"
                  maxlength="75"
                  id="ContentPlaceHolder1_txtPassword"
                  tabindex="2"
                  required
                  data-hs-toggle-password-options='{ "target": "#changePassTarget", "defaultClass": "far fa-eye-slash", "showClass": "far fa-eye", "classChangeTarget": "#changePassIcon" }'
                  placeholder="*************"
                  class="js-toggle-password form-control form-control-lg py-3"
                  data-success-class="u-has-success"
                  data-error-class="u-has-error"
                  data-msg="Your password is invalid. Please try again."
                  data-msg-required="Please enter your Password."
                  style={{ paddingRight: "3rem" }}
                />
                <span
                  class="content-center position-absolute top-0 py-1.5"
                  title="Password Toggle"
                  style={{ right: "0.5rem" }}
                >
                  <button
                    type="button"
                    class="btn btn-sm btn-ghost-white"
                    id="changePassTarget"
                    tabindex="-1"
                    style={{ width: "2.375rem", height: "2.375rem" }}
                  >
                    <i id="changePassIcon" class="far fa-eye"></i>
                  </button>
                </span>
              </div>
            </div>
            <div class="js-form-message form-check mb-4">
              <input
                name="ctl00$ContentPlaceHolder1$chkRemember"
                type="checkbox"
                id="ContentPlaceHolder1_chkRemember"
                class="form-check-input"
              />
              <label
                class="form-check-label"
                for="ContentPlaceHolder1_chkRemember"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Please do not check this box if you are using a public or shared PC"
              >
                <span>Remember & Auto Login </span>
              </label>
            </div>
            <div class="d-flex justify-content-center my-5">
              <div id="ContentPlaceHolder1_captchaDiv">
                <div
                  class="g-recaptcha"
                  data-sitekey="6Lf8Z8waAAAAACfwLnKX5lyIGR6BvLDA9DelCrws"
                ></div>
              </div>
            </div>
            <input
              type="submit"
              name="ctl00$ContentPlaceHolder1$btnLogin"
              value="LOGIN"
              id="ContentPlaceHolder1_btnLogin"
              type="submit"
              class="btn btn-lg btn-primary w-100 py-3"
            />
          </div>
        </section>
      </form>
    </main>
  );
};

export default Login;
