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
import { IoKeyOutline, IoTimerOutline } from "react-icons/io5";
import { RiVerifiedBadgeLine, RiMenuFoldFill } from "react-icons/ri";
import { MdFormatListBulleted, MdOutlineEmail, MdLogin } from "react-icons/md";

const Myaccount = () => {
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
                <div class="collapse navbar-collapse flex-column" id="asideNav">
                  <hr class="w-100 mt-6 mb-2" />
                  <ul class="nav nav-pills nav-pills-flush flex-column w-100 gap-1 1px-n4">
                    <li class="nav-item fw-medium text-uppercase small px-3 mt-4 mb-1">
                      Account
                    </li>
                    <li class="nav-item">
                      <a
                        href="/myaccount"
                        id="ContentPlaceHolder1_account_sidebar_overview"
                        class="nav-link py-2 px-3 active"
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
                        class="nav-link py-2 px-3"
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
                <h3 class="card-header-title">Personal Info</h3>
              </div>
              <div class="card-body">
                <p>
                  Below are the username, email and overview information for
                  your account.
                </p>
                <div class="row align-items-center">
                  <div class="col-md-4 text-muted mb-1 mb-md-0">
                    <i class="far fa-user-circle fa-fw">
                      <FaRegUserCircle />
                    </i>{" "}
                    Your username:
                  </div>
                  <div class="col-md-8">
                    <strong>mrtiobit</strong>
                  </div>
                </div>
                <hr />
                <div class="row align-items-center">
                  <div class="col-md-4 text-muted mb-1 mb-md-0">
                    <i class="far fa-envelope fa-fw">
                      <MdOutlineEmail />
                    </i>{" "}
                    Your Email Address:
                  </div>
                  <div class="col-md-8">
                    <div class="d-flex justify-content-between align-items-center my-n1">
                      <strong>
                        <a
                          href="/cdn-cgi/l/email-protection"
                          class="__cf_email__"
                          data-cfemail="513530243d30256161686311363c30383d7f323e3c"
                        >
                          idt@idbit.org
                        </a>
                      </strong>
                      <a
                        class="btn btn-sm btn-white"
                        style={{ minWidth: "6rem" }}
                        href="/mysettings"
                      >
                        <i class="far fa-pen me-1">
                          <FiEdit2 />
                        </i>{" "}
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="row align-items-center">
                  <div class="col-md-4 text-muted mb-1 mb-md-0">
                    <i class="far fa-sign-in fa-fw">
                      <MdLogin />
                    </i>{" "}
                    Last Login:
                  </div>
                  <div class="col-md-8">
                    <div class="d-flex justify-content-between align-items-center my-n1">
                      <span>
                        <i class="far fa-clock me-1">
                          <IoTimerOutline />
                        </i>
                        <span id="showUtcLocalDate">
                          2024-02-17 07:28:40 (UTC)
                        </span>
                      </span>
                      <a
                        class="btn btn-sm btn-white"
                        style={{ minWidth: "6rem" }}
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#showLoginHistory"
                      >
                        <i class="far fa-eye me-1">
                          <FaEye />
                        </i>{" "}
                        History
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h3 class="card-header-title">Overview Usage</h3>
              </div>
              <div class="card-body">
                <p>
                  Usage of account features such as address watch list, address
                  name tags, and API keys.
                </p>
                <div class="row align-items-center">
                  <div class="col-md-4 text-muted mb-1 mb-md-0">
                    <i class="far fa-wallet fa-fw">
                      <FaRegFolderOpen />
                    </i>{" "}
                    Total POL Balance (Watch List):
                  </div>
                  <div class="col-md-8">
                    0 POL <span class="fs-sm text-muted">($0.00)</span>
                  </div>
                </div>
                <hr />
                <div class="row align-items-center">
                  <div class="col-md-4 text-muted mb-1 mb-md-0">
                    <i class="far fa-envelope fa-fw">
                      <MdOutlineEmail />
                    </i>{" "}
                    Email Notification Limit:
                  </div>
                  <div class="col-md-8">
                    <div class="d-flex justify-content-between align-items-center gap-2">
                      0 emails sent out
                      <span class="badge bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-dark fw-medium rounded-pill">
                        100 daily limit
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="row align-items-center">
                  <div class="col-md-4 text-muted mb-1 mb-md-0">
                    <i class="far fa-heart fa-fw">
                      <FaRegHeart />
                    </i>{" "}
                    Address Watch List:
                  </div>
                  <div class="col-md-8">
                    <div class="d-flex justify-content-between align-items-center gap-2">
                      <a href="/myaddress">0 address alert(s)</a>
                      <span class="badge bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-dark fw-medium rounded-pill">
                        50 limit
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="row align-items-center">
                  <div class="col-md-4 text-muted mb-1 mb-md-0">
                    <i class="far fa-file fa-fw">
                      <FaRegFileAlt />
                    </i>{" "}
                    Txn Private Notes
                  </div>
                  <div class="col-md-8">
                    <div class="d-flex justify-content-between align-items-center gap-2">
                      <a href="/mynotes_tx">0 transaction private note(s)</a>
                      <span class="badge bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-dark fw-medium rounded-pill">
                        10,000 limit
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="row align-items-center">
                  <div class="col-md-4 text-muted mb-1 mb-md-0">
                    <i class="far fa-sticky-note fa-fw">
                      <RiFilePaperLine />
                    </i>{" "}
                    Address Tags:
                  </div>
                  <div class="col-md-8">
                    <div class="d-flex justify-content-between align-items-center gap-2">
                      <a href="/mynotes_address">0 address tag(s)</a>
                      <span class="badge bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-dark fw-medium rounded-pill">
                        5,000 limit
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="row align-items-center">
                  <div class="col-md-4 text-muted mb-1 mb-md-0">
                    <i class="far fa-database fa-fw">
                      {" "}
                      <IoKeyOutline />
                    </i>{" "}
                    API Key Usage:
                  </div>
                  <div class="col-md-8">
                    <div class="d-flex justify-content-between align-items-center gap-2">
                      <a href="/myapikey">1 active API(s)</a>
                      <span class="badge bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-dark fw-medium rounded-pill">
                        3 limit
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="row align-items-center">
                  <div class="col-md-4 text-muted mb-1 mb-md-0">
                    <i class="far fa-badge-check fa-fw">
                      <RiVerifiedBadgeLine />
                    </i>{" "}
                    Verified Addresses
                  </div>
                  <div class="col-md-8">
                    <div class="d-flex justify-content-between align-items-center gap-2">
                      <a href="/myverify_address">0 verified addresses</a>
                      <span class="badge bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-dark fw-medium rounded-pill">
                        Unlimited
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="showLoginHistory"
        tabindex="-1"
        role="dialog"
        aria-labelledby="showLoginHistoryLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header border-0 pb-0">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="text-center mb-5">
                <h6 class="modal-title fs-5">Login History</h6>
                <p class="text-muted">Showing last 5 login history</p>
              </div>
              <ul class="list-group">
                <li class="list-group-item d-flex align-items-baseline gap-2 p-3">
                  <i class="far fa-clock"></i>
                  <div>
                    <div>2024-02-17 07:28:40 (UTC)</div>
                    <span class="small text-muted">19 secs ago</span>
                  </div>
                </li>
                <li class="list-group-item d-flex align-items-baseline gap-2 p-3">
                  <i class="far fa-clock"></i>
                  <div>
                    <div>2023-11-24 09:42:00 (UTC)</div>
                    <span class="small text-muted">84 days ago</span>
                  </div>
                </li>
                <li class="list-group-item d-flex align-items-baseline gap-2 p-3">
                  <i class="far fa-clock"></i>
                  <div>
                    <div>2023-10-12 15:06:58 (UTC)</div>
                    <span class="small text-muted">127 days ago</span>
                  </div>
                </li>
                <li class="list-group-item d-flex align-items-baseline gap-2 p-3">
                  <i class="far fa-clock"></i>
                  <div>
                    <div>2023-08-23 04:12:53 (UTC)</div>
                    <span class="small text-muted">178 days ago</span>
                  </div>
                </li>
                <li class="list-group-item d-flex align-items-baseline gap-2 p-3">
                  <i class="far fa-clock"></i>
                  <div>
                    <div>2023-08-14 06:05:45 (UTC)</div>
                    <span class="small text-muted">187 days ago</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Myaccount;
