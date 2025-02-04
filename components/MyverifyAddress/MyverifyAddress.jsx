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
import { RiFilePaperLine, RiArrowRightUpFill } from "react-icons/ri";
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
} from "react-icons/md";
import { CiHardDrive } from "react-icons/ci";

const MyverifyAddress = () => {
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
              <h1 class="h5 text-white my-1">Verified Addresses</h1>
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
                      data-cfemail="92f6f3e7fef3e6a2a2aba0d2f5fff3fbfebcf1fdff"
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
                        class="nav-link py-2 px-3"
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
                        class="nav-link py-2 px-3 active"
                      >
                        <i class="far fa-badge-check fa-fw me-1">
                          {" "}
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
                <h3 class="card-header-title">My Verified Addresses</h3>
                <a
                  href="/verifyaddress"
                  id="ContentPlaceHolder1_verifyaddress"
                  data-bs-toggle="tooltip"
                  title="Verify Address"
                  class="btn btn-primary text-nowrap"
                  onclick="addNewAddress();"
                >
                  Add Address
                  <i class="far fa-external-link">
                    <RiArrowRightUpFill />
                  </i>
                </a>
              </div>
              <div class="card-body">
                <p>
                  The Verify Address Ownership process involves verifying the
                  ownership of a Polygon PoS Chain address used to create a
                  Polygon PoS Chain smart contract. This verification will be
                  linked to a PolygonScan account. Once a user has claimed
                  ownership of an address, the user will be able to update token
                  information and address name tags without needing to sign a
                  new message each time. Find out more about{" "}
                  <a
                    href="https://info.polygonscan.com//what-is-verify-address-ownership/"
                    target="_blank"
                  >
                    verify address ownership
                  </a>
                  .
                </p>
                <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                  <span class="text-muted">
                    &nbsp;0 address verified (out of 1000 max limit)
                  </span>
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
                            action="/myverify_address"
                            method="get"
                            class="js-focus-state input-group input-group-sm w-100"
                            autocomplete="off"
                          >
                            <input
                              class="form-control py-2"
                              id="q"
                              name="q"
                              type="search"
                              value
                              placeholder="Search Address"
                              maxlength="50"
                            />
                            <button
                              type="submit"
                              class="btn btn-primary"
                              data-bs-toggle="tooltip"
                              title="Search Address"
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
                  <thead class="text-nowrap pointer-events-none">
                    <tr>
                      <th scope="col">Address</th>
                      <th scope="col">Quick Links</th>
                      <th scope="col">Verified Date</th>
                    </tr>
                  </thead>
                  <tbody class="text-nowrap">
                    <tr class="border-bottom-0">
                      <td colspan="3">
                        <div class="text-center py-24">
                          <div class="mb-4">
                            <span
                              class="bg-warning bg-opacity-10 border border-warning border-opacity-25 text-yellow-600 fs-70x content-center rounded-pill mx-auto"
                              style={{ width: "4rem", height: "4rem" }}
                            >
                              <i class="fal fa-inboxes fs-4">
                                <CiHardDrive />
                              </i>
                            </span>
                          </div>
                          <h3 class="h5">
                            You have yet to verify any address.
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
                            {" "}
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
                            {" "}
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
      <div
        class="modal fade"
        id="connectWalletModal"
        tabindex="-1"
        aria-labelledby="walletModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="connectWalletModalClose">
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
                  MetaMask{" "}
                  <span class="badge border bg-light text-dark ms-2">
                    Popular
                  </span>
                </span>
                <img width="25" src="../images/svg/brands/metamask.svg" alt />
              </button>
              <button
                type="button"
                value="walletconnect_v2"
                class="btn btn-custom-wallet btn-lg btn-white d-flex justify-content-between align-items-center w-100 p-3 mb-2"
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
                class="btn btn-custom-wallet btn-lg btn-white d-flex justify-content-between align-items-center w-100 p-3 mb-2"
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
      <div class="modal fade" id="signMessageModal" tabindex="-1">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="signMessageModalTitle">
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
              <div class="mb-3">
                <label for="verifiedAddressOwner" class="form-label">
                  Contract Owner/Creator
                </label>
                <input
                  type="text"
                  class="form-control py-2"
                  id="verifiedAddressOwner"
                  readonly
                />
              </div>
              <div class="mb-3">
                <label for="addressInput" class="form-label">
                  Signing Address
                </label>
                <input
                  type="text"
                  class="form-control py-2"
                  id="addressInput"
                  readonly
                />
                <div class="fs-sm text-muted mt-1 small">
                  The above address is connected to your Web3 wallet.
                </div>
              </div>
              <div class="js-form-message form-group">
                <label class="form-label" for="txtRawMessage">
                  Message To Sign
                </label>
                <textarea
                  id="txtRawMessage"
                  class="form-control"
                  name="txtRawMessage"
                  rows="5"
                  cols="20"
                  autocomplete="off"
                  autocorrect="off"
                  autocapitalize="off"
                  spellcheck="false"
                  readonly="readonly"
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
      <div class="modal fade" id="signMessageExtendedModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="signMessageExtendedModalTitle">
                Release Address Ownership Confirmation
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div
                id="divErrorMessage"
                class="alert alert-danger d-flex align-items-baseline d-none"
                role="alert"
              >
                <span id="spanErrorMessaage"></span>
              </div>
              <div class="mb-4">
                <label
                  class="form-label d-flex align-items-center"
                  for="txtSignedAddress"
                >
                  Address
                  <a
                    class="js-clipboard ms-auto btn btn-sm btn-white"
                    href="javascript:;"
                    title="Copy address to clipboard."
                    data-bs-toggle="tooltip"
                    data-type="tooltip"
                    data-clipboard-target="#txtSignedAddress"
                    data-class-change-target="#spanCopySignedAddressIcon"
                    data-success-text="Copied"
                    data-default-class="far fa-copy"
                    data-success-class="far fa-check-circle"
                  >
                    <i
                      id="spanCopySignedAddressIcon"
                      class="far fa-copy me-1"
                    ></i>
                    Copy
                  </a>
                </label>
                <input
                  type="text"
                  class="form-control py-2"
                  id="txtSignedAddress"
                  name="txtSignedAddress"
                  readonly="readonly"
                />
              </div>
              <div class="mb-4">
                <label
                  class="form-label d-flex align-items-center"
                  for="txtSignedMessage"
                >
                  Message
                  <a
                    class="js-clipboard ms-auto btn btn-sm btn-white"
                    href="javascript:;"
                    title="Copy message to clipboard."
                    data-bs-toggle="tooltip"
                    data-type="tooltip"
                    data-clipboard-target="#txtSignedMessage"
                    data-class-change-target="#spanCopySignedMessageIcon"
                    data-success-text="Copied"
                    data-default-class="far fa-copy"
                    data-success-class="far fa-check-circle"
                  >
                    <i
                      id="spanCopySignedMessageIcon"
                      class="far fa-copy me-1"
                    ></i>
                    Copy
                  </a>
                </label>
                <textarea
                  class="form-control"
                  id="txtSignedMessage"
                  name="txtSignedMessage"
                  rows="5"
                  readonly="readonly"
                ></textarea>
              </div>
              <div class="mb-4">
                <label
                  class="form-label d-flex align-items-center"
                  for="txtSignedMessageHash"
                >
                  Signature Hash
                  <a
                    class="js-clipboard btn ms-auto btn-sm btn-white"
                    href="javascript:;"
                    title="Copy message hash to clipboard."
                    data-bs-toggle="tooltip"
                    data-type="tooltip"
                    data-clipboard-target="#txtSignedMessageHash"
                    data-class-change-target="#spanCopySignedMessageHashIcon"
                    data-success-text="Copied"
                    data-default-class="far fa-copy"
                    data-success-class="far fa-check-circle"
                  >
                    <i
                      id="spanCopySignedMessageHashIcon"
                      class="far fa-copy me-1"
                    ></i>
                    Copy
                  </a>
                </label>
                <textarea
                  class="form-control"
                  id="txtSignedMessageHash"
                  name="txtSignedMessageHash"
                  rows="3"
                  readonly="readonly"
                ></textarea>
              </div>
            </div>
            <div class="modal-footer bg-light">
              <a
                class="btn btn-ghost-white"
                data-bs-dismiss="modal"
                href="javascript:;"
              >
                Close
              </a>
              <button
                type="button"
                id="btnSubmitReleaseOwnership"
                class="btn btn-primary"
              >
                Release Ownership
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyverifyAddress;
