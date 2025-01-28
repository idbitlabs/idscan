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
import { FaEyeSlash, FaPlus } from "react-icons/fa6";
import { FiFilter, FiEdit2, FiSearch } from "react-icons/fi";
import { IoKeyOutline, IoTimerOutline } from "react-icons/io5";
import { RiVerifiedBadgeLine, RiMenuFoldFill } from "react-icons/ri";
import {
  MdFormatListBulleted,
  MdOutlineEmail,
  MdLogin,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { CiHardDrive } from "react-icons/ci";

const MynotesAddress = () => {
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
              <h1 class="h5 text-white my-1">Address Private Name Tags</h1>
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
                  <div class="fw-medium fs-5">daulathussain</div>
                  <div class="text-muted">
                    <a
                      href="/cdn-cgi/l/email-protection"
                      class="__cf_email__"
                      data-cfemail="5e3a3f2b323f2a6e6e676c1e39333f3732703d3133"
                    >
                      theblockchaincoders@gmail.com
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
                        class="nav-link py-2 px-3 active"
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
            <div class="card mb-4" id="spanResult">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h3 class="card-header-title">Address Private Name Tags</h3>
                <a class="btn btn-primary text-nowrap">
                  <i class="far fa-plus me-1">
                    <FaPlus />
                  </i>{" "}
                  Add
                </a>
              </div>
              <div class="card-body">
                <p>
                  A private name tag (up to 35 chars) and memo (up to 500 chars)
                  for individual addresses can be saved and is useful for
                  labelling addresses of interest.
                </p>
                <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                  <div class="d-flex flex-wrap align-items-center gap-1">
                    <ul
                      class="nav nav-pills text-nowrap snap-x-mandatory overflow-x-auto flex-nowrap py-1 mb-2 gap-1 scrollbar-custom"
                      id="myTab"
                      role="tablist"
                    >
                      <li class="nav-item snap-align-start">
                        {" "}
                        <a class="nav-link active">All</a>
                      </li>
                    </ul>

                    <div id="ContentPlaceHolder1_btnCreateGroup" class="mb-2">
                      <a class="btn btn-sm btn-ghost-white text-dark rounded fw-medium">
                        <i class="far fa-plus me-0.5"></i> Add Group
                      </a>
                    </div>
                  </div>

                  <div class="d-flex gap-2">
                    <div class="dropdown order-md-2">
                      <button
                        class="btn btn-sm btn-secondary"
                        type="button"
                        id="dropdownSearchFilter"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="far fa-search fa-fw">
                          <FiSearch />
                        </i>
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownSearchFilter"
                        style={{ minWidth: "10rem" }}
                      >
                        <div class="input-group" style={{ minWidth: "22rem" }}>
                          <form
                            class="js-focus-state input-group input-group-sm w-100"
                            autocomplete="off"
                          >
                            <input
                              class="form-control py-2"
                              id="q"
                              name="q"
                              type="search"
                              value
                              placeholder="Search Address or Tag"
                              maxlength="50"
                            />
                            <button
                              type="submit"
                              class="btn btn-primary"
                              data-bs-toggle="tooltip"
                              title="Search Address or Tag"
                            >
                              Find
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table">
                  <thead
                    id="ContentPlaceHolder1_theadMyAddressNotes"
                    class="text-nowrap pointer-events-none"
                  >
                    <tr>
                      <th scope="col" width="10" class="pr-0">
                        <span
                          data-bs-container="body"
                          data-bs-toggle="popover"
                          data-bs-placement="right"
                          data-bs-trigger="hover"
                          data-bs-content="Click the star icon to mark your favorite address to the top of the list."
                        >
                          <i class="far fa-question-circle text-secondary"></i>
                        </span>
                      </th>
                      <th scope="col">Address</th>
                      <th scope="col" class="text-nowrap">
                        Private Name Tag
                      </th>
                      <th scope="col">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-bottom-0">
                      <td colspan="4">
                        <div class="text-center py-24">
                          <div class="mb-4">
                            <span
                              class="bg-warning bg-opacity-10 border border-warning border-opacity-25 text-yellow-600 fs-70x content-center rounded-pill mx-auto"
                              style={{ width: "4rem", height: "4rem" }}
                            >
                              <i class="fal fa-inboxes fs-4"></i>
                            </span>
                          </div>
                          <h3 class="h5">
                            There are no private name tag found
                          </h3>
                          <p class="text-muted mb-0">Please try again later</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="card-footer d-flex flex-wrap justify-content-between align-items-center gap-3">
                <div class="d-flex align-items-center gap-2"></div>
                <nav aria-label="Table navigation">
                  <div id="ContentPlaceHolder1_PagingPanel">
                    <ul class="pagination pagination-sm mb-0">
                      <li class="page-item disabled">
                        <span class="page-link">First</span>
                      </li>
                      <li class="page-item disabled">
                        <span class="page-link px-3">
                          <i class="fa fa-chevron-left small">
                            <MdKeyboardArrowLeft />
                          </i>
                        </span>
                      </li>
                      <li class="page-item disabled">
                        <span class="page-link text-nowrap">Page 1 of 1</span>
                      </li>
                      <li class="page-item disabled">
                        <span class="page-link px-3">
                          <i class="fa fa-chevron-right small">
                            <MdKeyboardArrowRight />
                          </i>
                        </span>
                      </li>
                      <li class="page-item disabled">
                        <span class="page-link">Last</span>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <form id="mymodalform" class="js-validate mx-md-auto">
        <div class="aspNetHidden">
          <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value />
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
            value="46CC145B"
          />
          <input
            type="hidden"
            name="__EVENTVALIDATION"
            id="__EVENTVALIDATION"
          />
        </div>
        <div
          class="modal fade"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
          id="responsive"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="myresponsiveLabel"></h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="mb-4">
                  <div class="form-group">
                    <label class="form-label" for="Address">
                      &nbsp;Polygon PoS Chain Address
                    </label>
                    <div class="js-form-message">
                      <input
                        name="ctl00$ContentPlaceHolder1$txtAddress"
                        type="text"
                        maxlength="44"
                        id="ContentPlaceHolder1_txtAddress"
                        class="form-control py-2"
                        required
                        data-bs-msg="Please enter a valid address"
                        data-bs-error-class="u-has-error"
                        data-bs-success-class="u-has-success"
                        placeholder="Enter a address"
                      />
                      <span
                        id="ContentPlaceHolder1_rfvAddress"
                        style={{
                          color: "Red",
                          fontSize: "Smaller",
                          display: "none",
                        }}
                      >
                        <br /> *Invalid address
                      </span>
                    </div>
                    <p></p>
                  </div>
                </div>
                <div class="mb-4">
                  <div class="form-group">
                    <label class="form-label" for="nameTag">
                      &nbsp;Private Name Tag
                    </label>
                    <textarea
                      name="ctl00$ContentPlaceHolder1$txtPrivateNameTag"
                      id="ContentPlaceHolder1_txtPrivateNameTag"
                      class="js-count-characters form-control py-2"
                      rows="2"
                      placeholder="e.g. Donate Address"
                      maxlength="35"
                      data-hs-count-characters-options='{ "output": "#maxLengthCountCharactersEdit1" }'
                    ></textarea>
                    <div class="form-text mt-2">
                      Character limit:{" "}
                      <span
                        id="maxLengthCountCharactersEdit1"
                        class="text-muted"
                      ></span>
                      .
                    </div>
                    <span id="privatetagtip" class="form-text small text-muted">
                      Private Name Tags (up to 35 characters) can be used for
                      easy identification of addresses
                    </span>
                  </div>
                </div>
                <div class="mb-4">
                  <div class="form-group">
                    <label class="form-label" for="nameTag">
                      &nbsp;Private Note
                    </label>
                    <textarea
                      name="ctl00$ContentPlaceHolder1$txtPrivateNoteArea"
                      id="ContentPlaceHolder1_txtPrivateNoteArea"
                      class="js-count-characters form-control py-2"
                      rows="2"
                      placeholder="Short description.."
                      maxlength="500"
                      data-hs-count-characters-options='{ "output": "#maxLengthCountCharactersEdit" }'
                    ></textarea>
                    <div class="form-text mt-2">
                      Character limit:{" "}
                      <span
                        id="maxLengthCountCharactersEdit"
                        class="text-muted"
                      ></span>
                      .
                    </div>
                    <span
                      id="privatenotetip"
                      class="form-text small text-muted"
                    >
                      A private note (up to 500 characters) can be attached to
                      this address. Please{" "}
                      <strong class="text-dark">DO NOT</strong> store any
                      passwords or private keys here.
                    </span>
                  </div>
                </div>
              </div>
              <div class="modal-footer bg-light">
                <a
                  data-bs-dismiss="modal"
                  class="btn btn-ghost-white"
                  href="javascript:;"
                  id="closenote"
                >
                  Cancel
                </a>
                <button
                  class="btn btn-primary"
                  type="button"
                  id="savenote"
                  onclick="javascript:updateNote();"
                >
                  Save Changes
                </button>
                <input
                  type="submit"
                  name="ctl00$ContentPlaceHolder1$btnaddnote"
                  value="Create Tag"
                  onclick='javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$ContentPlaceHolder1$btnaddnote", "", true, "", "", false, false))'
                  id="ContentPlaceHolder1_btnaddnote"
                  class="btn btn-primary"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalDeleteLabel"
          aria-hidden="true"
          id="myModaldelete"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="myModalDeleteLabel">
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
                  Are you sure you wish to remove the address tag?
                  <br />
                  <span class="text-muted fw-normal" id="removeaddress"></span>
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
                <button
                  class="btn btn-primary"
                  type="button"
                  id="btnContinueRemove"
                  onclick="javascript:removenote();"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
          id="myModalconfirmPublish"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="myModalLabel">
                  &nbsp;Confirmation Required
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
                  By changing the setting to <b>PUBLIC</b>, this particular
                  NameTag entry will be published and can be viewed by other
                  users on your . Do you wish to continue ?
                  <span id="txtid" style={{ display: "none" }}></span>
                  <div class="text-muted mt-1 ">
                    <i>
                      Tip: Please do not publish your confidential information
                      such as passwords or private keys here
                    </i>
                  </div>
                </p>
              </div>
              <div class="modal-footer bg-light">
                <a
                  data-bs-dismiss="modal"
                  class="btn btn-ghost-white"
                  href="javascript:;"
                  onclick="cancelpublish()"
                >
                  Cancel
                </a>
                <button
                  id="btnupdatepicture"
                  data-bs-dismiss="modal"
                  class="btn btn-primary"
                  type="button"
                  onclick="publishentry()"
                  causesvalidation="False"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalFavLabel"
          aria-hidden="true"
          id="myModalFavourite"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="myModalFavLabel">
                  <span id="LitFavTitle"></span>
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
                  <span
                    class="text-secondary fw-normal"
                    id="LitFavDescription"
                  ></span>
                </p>
              </div>
              <div class="modal-footer bg-light">
                <button
                  data-bs-dismiss="modal"
                  class="btn btn-ghost-white"
                  type="button"
                  causesvalidation="False"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </form> */}
    </main>
  );
};

export default MynotesAddress;
