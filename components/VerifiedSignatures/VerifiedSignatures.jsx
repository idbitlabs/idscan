import React from "react";
import { MdEditDocument } from "react-icons/md";
import { FaFileSignature } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const VerifiedSignatures = () => {
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
        id="wave-bg"
        class="bg-dark"
        style={{
          backgroundImage:
            "url(../images/svg/components/abstract-shapes-20.svg?v=0.2.0)",
        }}
      >
        <div class="container-xxl pt-8  pb-13">
          <div class="row mb-8">
            <div class="col-md-12 col-lg-5">
              <h1 class="h5 d-flex text-white mb-1 dx1jezahsxa justify-content-lg-start align-items-center">
                <span class="me-2">Verified Signatures</span>
                <span class="d-none d-lg-inline-block small me-2">✍️</span>
              </h1>
              <p class="text-white-70 text-center text-lg-left  mb-3 mb-lg-0">
                View, sign and verify message signatures using a Polygon PoS
                Chain address.
              </p>
            </div>
            <div class="col-12 col-lg-7 text-center text-lg-end pe-2">
              <a
                id="btnAddSignature"
                class="btn btn-light fs-base me-1 py-2 px-4"
                href="#"
                title="Generate a new message signature."
              >
                <i class="fas fa-file-signature me-1">
                  <MdEditDocument />
                </i>
                Sign Message
              </a>
              <a
                id="btnVerifySignature"
                class="btn btn-light fs-base me-1 py-2 px-4"
                href="#"
                title="Verify a new message signature."
              >
                <i class="fas fa-file-check me-1">
                  <FaFileSignature />
                </i>
                Verify Signature
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="container-xxl pb-12 mt-n13">
        <div class="card">
          <div class="card-header d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div class="mb-1 mb-md-0">
              <h2 class="card-header-title">Published Verified Signatures</h2>
            </div>
            <div class="d-flex">
              <div class="dropdown order-md-2">
                <button
                  class="btn btn-sm btn-secondary"
                  type="button"
                  id="erc20TokenSearchButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="far fa-search">
                    <FiSearch />
                  </i>
                </button>
                <div
                  class="search-panel-container auto-search-max-height dropdown-menu dropdown-menu-sm-end"
                  aria-labelledby="erc20TokenSearchButton"
                  style={{ minWidth: "10rem" }}
                >
                  <form
                    action="/verifiedSignatures"
                    method="get"
                    autocomplete="off"
                    spellcheck="false"
                  >
                    <div class="input-group" style={{ minWidth: "20rem" }}>
                      <input
                        id="erc20TokenSearchInput"
                        name="q"
                        type="search"
                        value
                        class="form-control py-2"
                        placeholder="Search by Address or ID"
                      />
                      <button class="btn btn-primary" type="submit">
                        Find
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="tab-content" id="tabContent">
              <div
                id="verifiedSignatures"
                class="tab-pane active"
                role="tabpanel"
                aria-labelledby="verifiedSignaturesTab"
              >
                <div
                  id="ContentPlaceHolder1_divTopPagination"
                  class="d-md-flex justify-content-between align-items-center mb-3"
                >
                  <p class="mb-md-0">
                    <i
                      id="spinwheel"
                      class="fa fa-spin fa-spinner fa-1x fa-pulse me-1"
                      style={{ display: "none" }}
                    ></i>{" "}
                    A total of 3,561 Verified Signatures found
                  </p>
                  <nav class="mb-4 mb-md-0" aria-label="page navigation">
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
                        <span class="page-link text-nowrap">Page 1 of 72</span>
                      </li>
                      <li
                        class="page-item"
                        data-bs-toggle="tooltip"
                        title="Go to Next"
                      >
                        <a
                          class="page-link px-3"
                          href="verifiedSignatures?p=2"
                          aria-label="Next"
                        >
                          <span aria-hidden="True">
                            <i class="fa fa-chevron-right small">
                              <MdKeyboardArrowRight />
                            </i>
                          </span>
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="verifiedSignatures?p=72">
                          <span aria-hidden="True">Last</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div
                  id="ContentPlaceHolder1_divTableResult"
                  class="table-responsive mb-3"
                >
                  <table
                    id="mytable"
                    class="table table-align-middle table-hover"
                  >
                    <thead class="thead-light text-nowrap">
                      <tr>
                        <th scope="col" width="20">
                          ID
                        </th>
                        <th scope="col">
                          <a
                            href="javascript:;"
                            onclick="switchAgeToDateTime(this)"
                            id="lnkAgeDateTime"
                          >
                            Age
                          </a>
                        </th>
                        <th data-highlight scope="col" width="350">
                          Address
                        </th>
                        <th scope="col">Message</th>
                        <th scope="col" width="140">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody class="align-middle text-nowrap">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                        <tr key={index}>
                          <td>#{index + 1}563</td>

                          <td class="showAge ">
                            <span
                              rel="tooltip"
                              data-bs-toggle="tooltip"
                              data-bs-title="2024-02-16 19:57:42"
                            >
                              11 hrs 27 mins ago
                            </span>
                          </td>

                          <td>
                            <a
                              style={{ display: "inline-block" }}
                              href="/address/0xc382c89cfb1e349b37bca93cedd8b13225987c2f"
                              data-bs-toggle="tooltip"
                              data-bs-boundary="viewport"
                              data-bs-html="true"
                              title="0xc382c89cfb1e349b37bca93cedd8b13225987c2f"
                            >
                              <span class="hash-tag text-truncate">
                                <span data-highlight-target="0xc382c89CFb1e349b37bca93cEDd8B13225987c2f">
                                  0xc382c8...25987c2f
                                </span>
                              </span>
                            </a>
                          </td>
                          <td>
                            <span
                              class="hash-tag hash-tag--xl text-truncate"
                              data-bs-toggle="tooltip"
                              data-bs-boundary="viewport"
                              data-bs-html="false"
                              data-bs-placement="top"
                              title="[polygonscan.com 16/02/2024 19:57:25] I, hereby verify that I am the owner/creator of the address [0x000000000022D473030F116dDEE9F6B43aC78BA3]"
                            >
                              [polygonscan.com 16/02/2024 19:57:25] I, hereby
                              verify that I am the owner/ ...
                            </span>
                          </td>
                          <td>
                            <a
                              class="btn btn-sm btn-secondary text-nowrap"
                              href="/verifySig/3563"
                            >
                              View Signature{" "}
                              <i class="far fa-chevron-right small ms-1">
                                <MdKeyboardArrowRight />
                              </i>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div id="ContentPlaceHolder1_pageRecords">
                  <form method="post" action="./verifiedSignatures" id="ctl00">
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
                      <input
                        type="hidden"
                        name="__LASTFOCUS"
                        id="__LASTFOCUS"
                        value
                      />
                      <input
                        type="hidden"
                        name="__VIEWSTATE"
                        id="__VIEWSTATE"
                      />
                    </div>

                    <div class="aspNetHidden">
                      <input
                        type="hidden"
                        name="__VIEWSTATEGENERATOR"
                        id="__VIEWSTATEGENERATOR"
                        value="EEB59793"
                      />
                      <input
                        type="hidden"
                        name="__EVENTVALIDATION"
                        id="__EVENTVALIDATION"
                        value="P8ofyflpcsASDDPP7E3HWPh/01ukI6oh7sWRXnKSPsQpS/yHryKweQ+En5WezyR6/azf0Z7bJV+acvqMAWUP8qFGFrU5ybG6DyAe1aySPKL2GsJWz/jtUhK2jVMlSXfAR+SrlxLDd5uf8xBEYnLDikdeeN3U6jGyAyU9nJf1pzmTzU1oOA4kHWAHgpjUFkc7F1/0/+zp1QiqMt4Lcym1EA=="
                      />
                    </div>
                    <div class="card-footer d-flex flex-wrap justify-content-between align-items-center gap-3 pb-0">
                      <div class="d-flex align-items-center gap-2">
                        <span class="text-nowrap text-muted">Show rows:</span>
                        <select
                          name="ctl00$ContentPlaceHolder1$ddlRecordsPerPage"
                          onchange="javascript:setTimeout(&#39;__doPostBack(\&#39;ctl00$ContentPlaceHolder1$ddlRecordsPerPage\&#39;,\&#39;\&#39;)&#39;, 0)"
                          id="ContentPlaceHolder1_ddlRecordsPerPage"
                          class="form-select form-select-sm w-auto"
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option selected="selected" value="50">
                            50
                          </option>
                          <option value="100">100</option>
                        </select>
                      </div>
                      <nav class="mb-4 mb-md-0" aria-label="page navigation">
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
                            <span class="page-link text-nowrap">
                              Page 1 of 72
                            </span>
                          </li>
                          <li
                            class="page-item"
                            data-bs-toggle="tooltip"
                            title="Go to Next"
                          >
                            <a
                              class="page-link px-3"
                              href="verifiedSignatures?p=2"
                              aria-label="Next"
                            >
                              <span aria-hidden="True">
                                <i class="fa fa-chevron-right small">
                                  <MdKeyboardArrowRight />
                                </i>
                              </span>
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="verifiedSignatures?p=72">
                              <span aria-hidden="True">Last</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <p class="fs-sm text-muted">
            <i class="far fa-lightbulb-on me-1"></i> Signing a message with a
            wallet address results in a signature hash: a string of characters
            unique to a specific message. It is often used to verify ownership
            of an address. Learn more about this page in our{" "}
            <a
              target="_blank"
              href="https://info.polygonscan.com//verifiedSignatures/"
            >
              Knowledge Base
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
};

export default VerifiedSignatures;
