import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { PiSignOutFill } from "react-icons/pi";
import { GiNetworkBars } from "react-icons/gi";
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
import { FaEyeSlash, FaPlus, FaRegCopy } from "react-icons/fa6";
import { FiFilter, FiEdit2, FiSearch } from "react-icons/fi";
import { IoKeyOutline, IoTimerOutline } from "react-icons/io5";
import { RiVerifiedBadgeLine, RiMenuFoldFill } from "react-icons/ri";
import {
  MdFormatListBulleted,
  MdOutlineEmail,
  MdLogin,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdArrowRightAlt,
  MdOutlineDelete,
} from "react-icons/md";
import { CiHardDrive } from "react-icons/ci";

const Myapikey = () => {
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
              <h1 class="h5 text-white my-1">API Keys</h1>
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
        <div class="row mx-gutters-md-small">
          <div class="col-lg-4 col-xl-3 mb-4 mb-lg-0">
            <div class="card p-4">
              <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
                <div class="text-break">
                  <div class="fw-medium fs-5">mrtiobit</div>
                  <div class="text-muted">
                    <a
                      href="/cdn-cgi/l/email-protection"
                      class="__cf_email__"
                      data-cfemail="b1d5d0c4ddd0c581818883f1d6dcd0d8dd9fd2dedc"
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
                      {" "}
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
                          {" "}
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
                        class="nav-link py-2 px-3 active"
                      >
                        <i class="far fa-key fa-fw me-1">
                          {" "}
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
                <h3 class="card-header-title">API Keys</h3>
                <a
                  href="javascript:;"
                  id="ContentPlaceHolder1_addnew"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                  class="btn btn-primary text-nowrap"
                  onclick="addNewApiKey();"
                >
                  <i class="far fa-plus me-1">
                    <FaPlus />
                  </i>{" "}
                  Add
                </a>
              </div>
              <div class="card-body">
                <p>
                  For developers interested in building applications using our
                  <a href="https://docs.polygonscan.com" target="_blank">
                    API Service
                  </a>
                  , please create an API-Key Token which you can then use with
                  all your API requests.
                </p>

                <div class="d-flex flex-column flex-md-row align-items-md-center gap-3"></div>
              </div>

              <div class="table-responsive">
                <table class="table table-hover">
                  <thead
                    id="ContentPlaceHolder1_theadApiKey"
                    class="text-nowrap"
                  >
                    <tr>
                      <th scope="col">App Name</th>
                      <th scope="col">API Key Token</th>
                      <th scope="col">API Statistics</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span id="spanAppName_EXZFSHDF35UJE1XSSWUM8UAU4HZWREJ3VS">
                          polygon
                        </span>
                      </td>
                      <td>
                        <div class="d-flex align-items-center">
                          <span
                            class="me-2"
                            id="a_EXZFSHDF35UJE1XSSWUM8UAU4HZWREJ3VS"
                          >
                            EXZFSHDF35UJE1XSSWUM8UAU4HZWREJ3VS
                          </span>
                          <a class="js-clipboard link-secondary">
                            <i id="linkIcon_1" class="far fa-copy fa-fw">
                              <FaRegCopy />
                            </i>
                          </a>
                        </div>
                        <div class="text-muted small">Added on 2023-07-04</div>
                      </td>
                      <td>
                        <a class="btn btn-sm btn-outline-primary text-nowrap me-1">
                          <i class="far fa-signal me-1">
                            <GiNetworkBars />
                          </i>{" "}
                          Visit Stats
                        </a>
                      </td>
                      <td class="text-end text-nowrap">
                        <a
                          class="btn btn-sm btn-white me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal"
                          onclick="javascript:viewApiKey('EXZFSHDF35UJE1XSSWUM8UAU4HZWREJ3VS', 76625);"
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                          rel="tooltip"
                          title="Modify API Key"
                          href="javascript:;"
                        >
                          <i class="far fa-pen me-1">
                            <FiEdit2 />
                          </i>{" "}
                          Edit
                        </a>
                        <a
                          class="btn btn-sm btn-white text-danger"
                          href="javascript:;"
                          data-bs-trigger="hover"
                          rel="tooltip"
                          title="Remove ApiKey"
                          data-bs-toggle="modal"
                          data-bs-target="#myModaldelete"
                          onclick="javascript:getApiKey('76625', 'EXZFSHDF35UJE1XSSWUM8UAU4HZWREJ3VS');"
                          rel="tooltip"
                        >
                          <i class="far fa-trash">
                            <MdOutlineDelete />
                          </i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="card-footer d-flex flex-wrap justify-content-between align-items-center gap-3">
                <div class="d-flex align-items-center gap-2">
                  <span class="text-muted">
                    &nbsp;1 key added (out of 3 max limit)
                  </span>
                </div>
              </div>
            </div>

            <div class="card mb-4">
              <div class="card-header">
                <h3 class="card-header-title">Current API Plans</h3>
              </div>
              <div class="card-body">
                <p class="text-dark mb-4">
                  All API plan accounts are FREE by default.
                </p>
                <div class="row align-items-center">
                  <div class="col-md-4 mb-1 mb-md-0">My API Plan:</div>
                  <div class="col-md-8">
                    <div class="d-sm-flex justify-content-between align-items-center">
                      <strong class="text-uppercase me-3">FREE API Plan</strong>
                      <div class="mt-2 mt-sm-0">
                        <a class="btn btn-primary" href="/apis">
                          Upgrade Plan
                          <i class="far fa-long-arrow-right ms-1">
                            <MdArrowRightAlt />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="row align-items-center">
                  <div class="col-md-4 mb-1 mb-md-0">API calls per second:</div>
                  <div class="col-md-8">
                    <strong>5 calls</strong>
                  </div>
                </div>
              </div>
            </div>

            <div class="alert alert-dark d-flex align-items-baseline mb-4">
              <i class="far fa-info-circle me-2"></i>
              <span>
                API keys created on polygonscan.com can be used for the Polygon
                POS testnet. Detailed documentation to get started can be found
                at
                <a target="_blank" href="https://docs.polygonscan.com">
                  API Documentation
                </a>
                . If you need any API support, contact us
                <a href="/contactus?id=11">here</a>.
              </span>
            </div>
          </div>
        </div>
      </div>

      <form
        method="post"
        action="./myapikey"
        id="mymodalform"
        class="js-validate mx-md-auto"
      >
        <div class="aspNetHidden">
          <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" />
        </div>
        <div class="aspNetHidden">
          <input
            type="hidden"
            name="__VIEWSTATEGENERATOR"
            id="__VIEWSTATEGENERATOR"
            value="741CAF3E"
          />
          <input
            type="hidden"
            name="__EVENTVALIDATION"
            id="__EVENTVALIDATION"
            value="C+o1UaqYoNUDXqNaelCoPfGItaW6AkPvYf0ZIptDDip74sDQnii4X57PzMEpst8N3Qn2R+NbQ+chkQNvxzFxnZdBUjC6Yp8UeMWQLs+NRlpg7fn7yWNP3iPZ4FLw7hD+eQ+af+G783nw+o5i6ebkvfp7W24tvTHexyTLnXKpyHlliHCkKewxv8WR8FmFID9K17//ZCQS9GFcKyERa1fgyE7Pf+lZTtUgZhDKvKuJ8w76wK1bLmUb1Fuv2ef03YbZ"
          />
        </div>
        <input
          type="hidden"
          name="ctl00$ContentPlaceHolder1$hdnApiKey"
          id="ContentPlaceHolder1_hdnApiKey"
        />
        <input
          type="hidden"
          name="ctl00$ContentPlaceHolder1$hdnId"
          id="ContentPlaceHolder1_hdnId"
        />
        <div
          class="modal fade"
          id="myModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="myModalLabel">
                  Create API Key
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
                  <div class="form-group d-none" id="divApiKey">
                    <label class="form-label" for="ApiKey">
                      Api Key
                    </label>
                    <div>
                      <input
                        name="ctl00$ContentPlaceHolder1$txtApiKey"
                        type="text"
                        id="ContentPlaceHolder1_txtApiKey"
                        class="form-control py-2"
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-4">
                  <div class="form-group">
                    <label class="form-label" for="AppName">
                      App Name
                    </label>
                    <div>
                      <input
                        name="ctl00$ContentPlaceHolder1$txtAppName"
                        type="text"
                        maxlength="30"
                        id="ContentPlaceHolder1_txtAppName"
                        class="form-control py-2"
                        placeholder="e.g. Web3 Project"
                      />
                      <p></p>
                    </div>
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
                  name="ctl00$ContentPlaceHolder1$btnSubmit"
                  value="Create New API Key"
                  id="ContentPlaceHolder1_btnSubmit"
                  class="btn btn-primary"
                  style={{ display: "none" }}
                />
                <input
                  type="submit"
                  name="ctl00$ContentPlaceHolder1$btnEdit"
                  value="Save Changes"
                  id="ContentPlaceHolder1_btnEdit"
                  class="btn btn-primary"
                  style={{ display: "none" }}
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
          aria-labelledby="myModaldeleteLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="myModaldeleteLabel">
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
                <p>
                  Are you sure you wish to remove the APIKey
                  <span id="spanApiKey" class="text-muted"></span> ?
                </p>
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
                  name="ctl00$ContentPlaceHolder1$btnContinueRemove"
                  value="Remove"
                  id="ContentPlaceHolder1_btnContinueRemove"
                  class="btn btn-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Myapikey;
