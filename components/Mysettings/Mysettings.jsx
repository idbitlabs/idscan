import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { PiSignOutFill } from "react-icons/pi";

import { GoHomeFill } from "react-icons/go";
import {
  FaUserCog,
  FaRegFileAlt,
  FaRegHeart,
  FaRegUserCircle,
  FaRegFolderOpen,
  FaEye,
} from "react-icons/fa";
import { RiFilePaperLine } from "react-icons/ri";

import { FaEyeSlash } from "react-icons/fa6";
import { FiFilter, FiEdit2 } from "react-icons/fi";
import {
  IoKeyOutline,
  IoTimerOutline,
  IoMailOpenOutline,
} from "react-icons/io5";
import { RiVerifiedBadgeLine, RiMenuFoldFill } from "react-icons/ri";

import { MdFormatListBulleted, MdOutlineEmail, MdLogin } from "react-icons/md";
import { CiLock } from "react-icons/ci";

const Mysettings = () => {
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
        class="bg-dark pt-8 pb-20"
        style={{
          backgroundImage: "url(../images/svg/waves-light.svg?v=0.2.0)",
        }}
      >
        <div class="container-xxl">
          <div class="d-flex flex-wrap justify-content-between align-items-center gap-4">
            <div>
              <a class="small text-white opacity-75" href="/">
                <i class="far fa-arrow-left">
                  <HiArrowNarrowLeft />
                </i>{" "}
                Back Home
              </a>
              <h1 class="h5 text-white my-1">Account Overview</h1>
            </div>
            <div class="d-flex gap-3">
              <a class="btn btn-light" href="/login?cmd=logout">
                <i class="far fa-sign-out me-1">
                  <PiSignOutFill />
                </i>{" "}
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </section>

      <form id="ctl00" class="js-validate" autocomplete="off">
        <div class="aspNetHidden">
          <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" />
        </div>
        <div class="aspNetHidden">
          <input
            type="hidden"
            name="__VIEWSTATEGENERATOR"
            id="__VIEWSTATEGENERATOR"
            value="199B7E7D"
          />
          <input
            type="hidden"
            name="__EVENTVALIDATION"
            id="__EVENTVALIDATION"
          />
        </div>
        <div class="container-xxl pb-16 mt-n14">
          <div class="row">
            <div class="col-lg-4 col-xl-3 mb-4 mb-lg-0">
              <div class="card p-4">
                <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
                  <div class="text-break">
                    <div class="fw-medium fs-5">mrtiobit</div>
                    <div class="text-muted">
                      <a
                        href="/cdn-cgi/l/email-protection"
                        class="__cf_email__"
                        data-cfemail="f39792869f9287c3c3cac1b3949e929a9fdd909c9e"
                      >
                        idt@idbit.org
                      </a>
                    </div>
                  </div>
                  <div class="d-block d-lg-none">
                    <button
                      class="btn btn-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#asideNav"
                      aria-controls="asideNav"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <i class="far fa-bars me-sm-1">
                        <RiMenuFoldFill />
                      </i>
                      <span class="d-none d-sm-inline-block">Sidebar Menu</span>
                    </button>
                  </div>
                </div>
                <nav class="navbar-expand-lg">
                  <div
                    class="collapse navbar-collapse flex-column"
                    id="asideNav"
                  >
                    <hr class="w-100 mt-6 mb-2" />
                    <ul class="nav nav-pills nav-pills-flush flex-column w-100 gap-1 1px-n4">
                      <li class="nav-item fw-medium text-uppercase small px-3 mt-4 mb-1">
                        Account
                      </li>
                      <li class="nav-item">
                        <a
                          href="/myaccount"
                          id="ContentPlaceHolder1_account_sidebar_overview"
                          class="nav-link py-2 px-3"
                        >
                          <i class="far fa-house-user fa-fw me-1">
                            <GoHomeFill />
                          </i>{" "}
                          Account Overview
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="/mysettings"
                          id="ContentPlaceHolder1_account_sidebar_settings"
                          class="nav-link py-2 px-3 active"
                        >
                          <i class="far fa-user-shield fa-fw me-1">
                            <FaUserCog />
                          </i>{" "}
                          Account Settings
                        </a>
                      </li>
                      <li class="nav-item fw-medium text-uppercase small px-3 mt-4 mb-1">
                        Lists
                      </li>
                      <li class="nav-item">
                        <a
                          href="/myaddress"
                          id="ContentPlaceHolder1_account_sidebar_watchList"
                          class="nav-link py-2 px-3"
                        >
                          <i class="far fa-heart fa-fw me-1">
                            <FaRegHeart />
                          </i>{" "}
                          Watch List
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="/mynotes_address"
                          id="ContentPlaceHolder1_account_sidebar_privateTag"
                          class="nav-link py-2 px-3"
                        >
                          <i class="far fa-sticky-note fa-fw me-1">
                            <FaRegFileAlt />
                          </i>{" "}
                          Private Name Tags
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="/mynotes_tx"
                          id="ContentPlaceHolder1_account_sidebar_txnPrivateNote"
                          class="nav-link py-2 px-3"
                        >
                          <i class="far fa-file fa-fw me-1">
                            <RiFilePaperLine />
                          </i>{" "}
                          Txn Private Notes
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="/mytokenignore"
                          id="ContentPlaceHolder1_account_sidebar_tokenIgnoreList"
                          class="nav-link py-2 px-3"
                        >
                          <i class="far fa-eye-slash fa-fw me-1">
                            <FaEyeSlash />
                          </i>{" "}
                          Token Ignore List
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="/myadvancedfilters"
                          id="ContentPlaceHolder1_account_sidebar_advancedfilterList"
                          class="nav-link py-2 px-3"
                        >
                          <i class="far fa-filters fa-fw me-1">
                            <FiFilter />
                          </i>{" "}
                          Advanced Filter
                        </a>
                      </li>
                      <li class="nav-item fw-medium text-uppercase small px-3 mt-4 mb-1">
                        Others
                      </li>
                      <li class="nav-item">
                        <a
                          href="/myapikey"
                          id="ContentPlaceHolder1_account_sidebar_apiKeys"
                          class="nav-link py-2 px-3"
                        >
                          <i class="far fa-key fa-fw me-1">
                            <IoKeyOutline />
                          </i>{" "}
                          API Keys
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="/myverify_address"
                          id="ContentPlaceHolder1_account_sidebar_verifiedAddress"
                          class="nav-link py-2 px-3"
                        >
                          <i class="far fa-badge-check fa-fw me-1">
                            <RiVerifiedBadgeLine />
                          </i>{" "}
                          Verified Addresses
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="/mycustomabi"
                          id="ContentPlaceHolder1_account_sidebar_customAbi"
                          class="nav-link py-2 px-3"
                        >
                          <i class="far fa-tasks fa-fw me-1">
                            <MdFormatListBulleted />
                          </i>{" "}
                          Custom ABIs
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>

            <div class="col-lg-8 col-xl-9">
              <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                  <h3 class="card-header-title">User Settings</h3>
                </div>
                <div class="card-body">
                  <p>
                    Below are the username, email and overview information for
                    your account.
                  </p>
                  <div class="row align-items-baseline">
                    <div class="col-md-4 text-muted mb-1 mb-md-0">
                      <i class="far fa-user-circle fa-fw">
                        <FaRegUserCircle />
                      </i>{" "}
                      Your Username
                    </div>
                    <div class="col-md-8">
                      <strong class="fw-medium"> mrtiobit </strong>
                    </div>
                  </div>
                  <hr />
                  <div class="row align-items-baseline">
                    <div class="col-md-4 text-muted mb-1 mb-md-0">
                      <i class="far fa-envelope fa-fw">
                        <MdOutlineEmail />
                      </i>{" "}
                      Your Email Address
                    </div>
                    <div class="col-md-8">
                      <input
                        name="ctl00$ContentPlaceHolder1$txtEmail"
                        value="daulat0092@gmail.com"
                        id="ContentPlaceHolder1_txtEmail"
                        placeholder="Email address"
                        class="form-control py-2"
                        type="email"
                        onchange="validateEmailCard();"
                      />
                      <div
                        id="divEmail_Error"
                        class="invalid-feedback"
                        style={{ display: "none" }}
                      >
                        Please enter your valid email address
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-md-4 text-muted mb-1 mb-md-0">
                      <i class="far fa-mailbox fa-fw">
                        <IoMailOpenOutline />
                      </i>{" "}
                      Newsletter
                    </div>
                    <div class="col-md-8">
                      <div class="form-check">
                        <input
                          name="ctl00$ContentPlaceHolder1$chkNewsletter"
                          type="checkbox"
                          id="ContentPlaceHolder1_chkNewsletter"
                          class="form-check-input"
                          onclick="showUnsubscribe(this);"
                        />
                        <label
                          class="form-check-label"
                          for="ContentPlaceHolder1_chkNewsletter"
                        >
                          <div class="text-dark fw-medium mb-1">
                            Subscribe to Newsletter
                          </div>
                          <div class="text-muted small">
                            PolygonScan's monthly newsletter brings you the
                            latest features, analyses, trending stories,
                            community contributions, job listings and giveaways!
                          </div>
                        </label>
                      </div>

                      <div
                        id="divUnsubscribeReason"
                        class="ms-6 mt-4"
                        style={{ display: "none" }}
                      >
                        <p class="mb-2">
                          Please let us know why you unsubscribed:
                        </p>
                        <div class="card shadow-none p-3">
                          <div class="form-check mb-2">
                            <input
                              value="RadioButton0"
                              name="ctl00$ContentPlaceHolder1$radio1"
                              type="radio"
                              id="ContentPlaceHolder1_RadioButton0"
                              class="form-check-input"
                              checked="checked"
                            />
                            <label
                              class="form-check-label"
                              for="ContentPlaceHolder1_RadioButton0"
                            >
                              I no longer want to receive these emails
                            </label>
                          </div>
                          <div class="form-check mb-2">
                            <input
                              value="RadioButton1"
                              name="ctl00$ContentPlaceHolder1$radio1"
                              type="radio"
                              id="ContentPlaceHolder1_RadioButton1"
                              class="form-check-input"
                            />
                            <label
                              class="form-check-label"
                              for="ContentPlaceHolder1_RadioButton1"
                            >
                              I never signed up for this mailing list
                            </label>
                          </div>
                          <div class="form-check mb-2">
                            <input
                              value="RadioButton2"
                              name="ctl00$ContentPlaceHolder1$radio1"
                              type="radio"
                              id="ContentPlaceHolder1_RadioButton2"
                              class="form-check-input"
                            />
                            <label
                              class="form-check-label"
                              for="ContentPlaceHolder1_RadioButton2"
                            >
                              The emails are inappropriate
                            </label>
                          </div>
                          <div class="form-check mb-2">
                            <input
                              value="RadioButton3"
                              name="ctl00$ContentPlaceHolder1$radio1"
                              type="radio"
                              id="ContentPlaceHolder1_RadioButton3"
                              class="form-check-input"
                            />
                            <label
                              class="form-check-label"
                              for="ContentPlaceHolder1_RadioButton3"
                            >
                              The emails are spam and should be reported
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              value="RadioButton4"
                              name="ctl00$ContentPlaceHolder1$radio1"
                              type="radio"
                              id="ContentPlaceHolder1_RadioButton4"
                              class="form-check-input"
                            />
                            <label
                              class="form-check-label"
                              for="ContentPlaceHolder1_RadioButton4"
                            >
                              Other
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer bg-light d-md-flex justify-content-end gap-2">
                  <a class="btn btn-ghost-white" href="/mysettings">
                    Cancel
                  </a>
                  <input
                    type="submit"
                    name="ctl00$ContentPlaceHolder1$btnSave"
                    value="Save Changes"
                    id="ContentPlaceHolder1_btnSave"
                    class="btn btn-primary"
                    style={{ display: "none" }}
                  />
                  <input
                    type="button"
                    class="btn btn-primary"
                    value="Save Changes"
                    onclick="onEmailSave();"
                  />
                </div>
              </div>

              <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                  <h3 class="card-header-title">Password</h3>
                </div>
                <div class="card-body">
                  <p class="text-dark mb-4">
                    Edit the fields below to update your password.
                  </p>
                  <div class="row align-items-baseline">
                    <div class="col-md-4 text-muted mb-1 mb-md-0">
                      <i class="far fa-lock-alt fa-fw">
                        <CiLock />
                      </i>{" "}
                      Enter OLD password
                    </div>
                    <div class="col-md-8">
                      <div class="position-relative">
                        <input
                          name="ctl00$ContentPlaceHolder1$txtOldPassword"
                          id="ContentPlaceHolder1_txtOldPassword"
                          type="password"
                          placeholder="*************"
                          class="js-toggle-password form-control py-2"
                          onchange="checkOldPass();"
                          data-hs-toggle-password-options='{ "target": [".js-change-password-multi-1", ".js-change-password-multi-2", ".js-change-password-multi-3"], "defaultClass": "fa-eye-slash", "showClass": "fa-eye", "classChangeTarget": "#showMultiPassIcon1" }'
                          minlength="8"
                          style={{ paddingRight: "3rem" }}
                        />
                        <span
                          class="content-center position-absolute top-0 py-1"
                          title="Password Toggle"
                          style={{ right: "0.3rem" }}
                        >
                          <button
                            type="button"
                            class="js-change-password-multi-1 btn btn-sm btn-ghost-white fs-70x"
                            tabindex="-1"
                            style={{ width: "2rem", height: "2rem" }}
                          >
                            <i id="showMultiPassIcon1" class="far fa-eye fa-fw">
                              <FaEyeSlash />
                            </i>
                          </button>
                        </span>
                      </div>
                      <div
                        id="divOldPass_Error"
                        class="invalid-feedback"
                        style={{ display: "none" }}
                      >
                        Please enter your old password
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="row align-items-baseline">
                    <div class="col-md-4 text-muted mb-1 mb-md-0">
                      <i class="far fa-lock-alt fa-fw">
                        {" "}
                        <CiLock />
                      </i>{" "}
                      Enter NEW password
                    </div>
                    <div class="col-md-8">
                      <div class="position-relative mb-2">
                        <input
                          name="ctl00$ContentPlaceHolder1$txtPassword"
                          id="ContentPlaceHolder1_txtPassword"
                          type="password"
                          placeholder="*************"
                          class="js-toggle-password form-control py-2"
                          onchange="checkNewPass();"
                          data-hs-toggle-password-options='{ "target": [".js-change-password-multi-1", ".js-change-password-multi-2", ".js-change-password-multi-3"], "defaultClass": "fa-eye-slash", "showClass": "fa-eye", "classChangeTarget": "#showMultiPassIcon2" }'
                          minlength="8"
                          style={{ paddingRight: "3rem" }}
                        />
                        <span
                          class="content-center position-absolute top-0 py-1"
                          title="Password Toggle"
                          style={{ right: "0.3rem" }}
                        >
                          <button
                            type="button"
                            class="js-change-password-multi-2 btn btn-sm btn-ghost-white fs-70x"
                            tabindex="-1"
                            style={{ width: "2rem", height: "2rem" }}
                          >
                            <i id="showMultiPassIcon2" class="far fa-eye fa-fw">
                              <FaEyeSlash />
                            </i>
                          </button>
                        </span>
                      </div>
                      <div
                        id="divNewPass_Error"
                        class="invalid-feedback"
                        style={{ display: "none" }}
                      >
                        Please enter your new password
                      </div>
                      <div class="progress-container d-flex align-items-center d-none">
                        <span class="progress-label fs-sm"></span>
                        <div
                          class="progress ms-2"
                          style={{ height: "5px", width: "100px" }}
                        >
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="row align-items-baseline">
                    <div class="col-md-4 text-muted mb-1 mb-md-0">
                      <i class="far fa-lock-alt fa-fw">
                        {" "}
                        <CiLock />
                      </i>{" "}
                      Re-Confirm password
                    </div>
                    <div class="col-md-8">
                      <div class="position-relative">
                        <input
                          name="ctl00$ContentPlaceHolder1$txtPassword2"
                          id="ContentPlaceHolder1_txtPassword2"
                          type="password"
                          placeholder="*************"
                          class="js-toggle-password form-control py-2"
                          onchange="checkNewPass2();comparePass();"
                          data-hs-toggle-password-options='{ "target": [".js-change-password-multi-1", ".js-change-password-multi-2", ".js-change-password-multi-3"], "defaultClass": "fa-eye-slash", "showClass": "fa-eye", "classChangeTarget": "#showMultiPassIcon3" }'
                          style={{ paddingRight: "3rem" }}
                        />
                        <span
                          class="content-center position-absolute top-0 py-1"
                          title="Password Toggle"
                          style={{ right: "0.3rem" }}
                        >
                          <button
                            type="button"
                            class="js-change-password-multi-3 btn btn-sm btn-ghost-white fs-70x"
                            tabindex="-1"
                            style={{ width: "2rem", height: "2rem" }}
                          >
                            <i id="showMultiPassIcon3" class="far fa-eye fa-fw">
                              <FaEyeSlash />
                            </i>
                          </button>
                        </span>
                      </div>
                      <div
                        id="divReTypeNewPass_Error"
                        class="invalid-feedback"
                        style={{ display: "none" }}
                      >
                        Please re-enter your new password
                      </div>
                      <div
                        id="divCompareNewPass_Error"
                        class="invalid-feedback"
                        style={{ display: "none" }}
                      >
                        Passwords do not match
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer bg-light d-md-flex justify-content-end gap-2">
                  <a class="btn btn-ghost-white" href="/mysettings">
                    Cancel
                  </a>
                  <input
                    type="submit"
                    name="ctl00$ContentPlaceHolder1$btnSavePass"
                    value="Save Changes"
                    id="ContentPlaceHolder1_btnSavePass"
                    class="btn btn-primary"
                    style={{ display: "none" }}
                  />
                  <input
                    type="button"
                    class="btn btn-primary"
                    value="Save Changes"
                    onclick="onPassSave();"
                  />
                </div>
              </div>

              <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                  <h3 class="card-header-title">Delete Account</h3>
                </div>
                <div class="card-body">
                  <p class="fw-medium">
                    Are you sure you want to permanently delete your user
                    account?
                  </p>
                  <p>
                    Deleting your user account will also delete all the
                    watchlists, transaction notes, private tags and verified
                    addresses ownership. Recovery of the above is not possible
                    upon delete confirmation.
                  </p>
                </div>
                <div class="card-footer bg-light d-flex flex-wrap align-items-center justify-content-between gap-3">
                  <div class="form-check">
                    <input
                      name="ctl00$ContentPlaceHolder1$deleteAccountCheckbox"
                      type="checkbox"
                      id="ContentPlaceHolder1_deleteAccountCheckbox"
                      class="form-check-input"
                      onchange="enableDelete(this);"
                    />
                    <label
                      class="form-check-label"
                      for="ContentPlaceHolder1_deleteAccountCheckbox"
                    >
                      Confirm that I want to delete my account.
                    </label>
                  </div>
                  <div class="text-nowrap">
                    <input
                      type="submit"
                      name="ctl00$ContentPlaceHolder1$btnDelete"
                      value="Delete Account"
                      id="ContentPlaceHolder1_btnDelete"
                      class="btn btn-danger"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="myModalprompt"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabelPrompt"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header border-0 pb-0">
                <h5 class="modal-title" id="myModalLabelPrompt">
                  Password Required
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="mb-4">
                  <p>
                    <b>Please enter your password to confirm the request.</b>
                  </p>
                  <input
                    type="hidden"
                    name="ctl00$ContentPlaceHolder1$txtUserName"
                    id="ContentPlaceHolder1_txtUserName"
                  />
                  <div class="js-form-message position-relative mb-2">
                    <input
                      name="ctl00$ContentPlaceHolder1$txtPromptPassword"
                      maxlength="75"
                      id="ContentPlaceHolder1_txtPromptPassword"
                      required
                      data-hs-toggle-password-options='{ "target": [".js-change-password-multi-4"], "defaultClass": "fa-eye-slash", "showClass": "fa-eye", "classChangeTarget": "#showMultiPassIcon4" }'
                      placeholder="*************"
                      minlength="8"
                      class="js-toggle-password form-control py-2"
                      data-error-class="u-has-error"
                      data-success-class="u-has-success"
                      type="password"
                      data-msg="Your password is invalid. Please try again."
                      style={{ paddingRight: "3rem" }}
                    />
                    <span
                      class="content-center position-absolute top-0 py-1"
                      title="Password Toggle"
                      style={{ right: "0.3rem" }}
                    >
                      <button
                        type="button"
                        class="js-change-password-multi-4 btn btn-sm btn-ghost-white fs-70x"
                        tabindex="-1"
                        style={{ width: "2rem", height: "2rem" }}
                      >
                        <i id="showMultiPassIcon4" class="far fa-eye fa-fw"></i>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div class="modal-footer bg-light">
                <a
                  data-bs-dismiss="modal"
                  class="btn btn-ghost-white"
                  href="javascript:;"
                >
                  Cancel
                </a>
                <input
                  type="submit"
                  name="ctl00$ContentPlaceHolder1$btnPromptContinue"
                  value="Submit"
                  id="ContentPlaceHolder1_btnPromptContinue"
                  class="btn btn-primary"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="myModaldelete"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header border-0 pb-0">
                <h5 class="modal-title" id="myModalLabel">
                  Confirmation Required
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="mb-4">
                  <p></p>
                  <div
                    id="ContentPlaceHolder1_divCaptcha"
                    class="d-flex dszehq5nhht my-5"
                  >
                    <div
                      class="g-recaptcha mb-0 mt-4"
                      data-sitekey="6Lf8Z8waAAAAACfwLnKX5lyIGR6BvLDA9DelCrws"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="modal-footer bg-light">
                <a
                  data-bs-dismiss="modal"
                  class="btn btn-ghost-white"
                  href="javascript:;"
                ></a>
                <input
                  type="submit"
                  name="ctl00$ContentPlaceHolder1$btnContinueRemove"
                  value="Confirm Delete"
                  id="ContentPlaceHolder1_btnContinueRemove"
                  class="btn btn-sm btn-danger fs-base"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Mysettings;
