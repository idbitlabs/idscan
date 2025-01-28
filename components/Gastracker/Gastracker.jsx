import React from "react";
import { FaChartLine, FaRegCopy } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";

const Gastracker = () => {
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
        class="bg-light py-12 pb-20"
        style={{ backgroundImage: "var(--bg-img-wave)" }}
      >
        <div class="container-xxl pb-2">
          <div class="row justify-content-between align-items-center">
            <div class="col-md-9 col-lg-6">
              <h1 class="fs-lg">
                Polygon PoS Chain Gas Tracker
                <span class="small">⛽</span>
              </h1>
              <div class="text-muted"></div>
            </div>
            <div class="col-12 col-lg-5">
              <div class="bumnjc3mjqn d-none d-lg-flex justify-content-center"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="container-xxl pt-8 pb-12 mt-n20">
        <div class="row g-xl-4 mb-4">
          <div class="col-xl-6 mb-4 mb-xl-0">
            <div class="card">
              <div class="card-body">
                <div class="row justify-content-between mb-3">
                  <div class="col-md-5 text-center text-md-start mb-2 mb-md-0">
                    <span id="countdown" class="text-muted"></span>
                  </div>

                  <div class="col col-md-auto text-center text-md-end">
                    <a
                      href="https://burn.polygon.technology/"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      <div>
                        <span
                          style={{ minWidth: "68px" }}
                          class="u-label u-label--sm u-label--warning rounded text-dark text-center"
                        >
                          <span
                            data-toggle="tooltip"
                            data-boundary="viewport"
                            data-html="true"
                            title
                            data-original-title="Total Sum of Fees Burnt since the introduction of EIP-1559"
                            aria-describedby="tooltip847798"
                          >
                            🔥 Burnt Fees:{" "}
                          </span>
                          <span>19,720.87 MATIC</span>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="row text-center mb-4">
                  <div class="col-md-4 mb-1 mb-md-0">
                    <div class="card h-100 shadow-none p-3" id="divLow">
                      <h4 class="h6 mb-2">Standard</h4>
                      <div class="d-none">
                        <div class="h4 text-success fw-normal mb-2">
                          <span>
                            <span>48</span>
                          </span>{" "}
                          gwei
                        </div>
                        <div class="text-muted">
                          (30-60 secs)
                          <div class="text-muted">
                            <span id="spanDynamicLowPriorityAndBase">
                              Base: 19 | Priority: 29.9
                            </span>
                          </div>
                        </div>
                      </div>
                      <div id="divLowSnapshot" class="d-none">
                        <div class="h4 text-success mb-1">
                          <span id="spanLowPriceSnapshot">
                            <span id="ContentPlaceHolder1_ltGasPriceSnapshot"></span>
                          </span>{" "}
                          gwei
                        </div>
                        <div class="text-muted">
                          <span id="spanLowPriorityAndBaseSnapshot"></span>
                        </div>
                        <div class="text-muted"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-1 mb-md-0">
                    <div class="card h-100 shadow-none p-3" id="divAvg">
                      <h4 class="h6 mb-2">Fast</h4>
                      <div id="divAvgPrice" class="d-none">
                        <div class="h4 text-primary fw-normal mb-2">
                          <span id="spanAvgPrice">54</span> gwei
                        </div>
                        <div class="text-muted">
                          (10-30 secs)
                          <div class="text-muted">
                            <span id="spanDynamicProposePriorityAndBase">
                              Base: 19 | Priority: 35.4
                            </span>
                          </div>
                        </div>
                      </div>
                      <div id="divAvgPriceSnapshot" class="d-none">
                        <span class="h4 text-primary mb-1">
                          <span id="spanAvgPriceSnapshot"></span> gwei
                        </span>
                        <div class="text-muted">
                          <span id="spanProposePriorityAndBaseSnapshot"></span>
                        </div>
                        <div class="text-muted"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card h-100 shadow-none p-3" id="divHigh">
                      <h4 class="h6 mb-2">Rapid</h4>
                      <div id="divHighPrice" class="d-none">
                        <div class="h4 mb-2 fw-normal">
                          <font color="brown">
                            <span id="spanHighPrice">54</span> gwei
                          </font>
                        </div>
                        <div class="text-muted">
                          (5-10 secs)
                          <div class="text-muted">
                            <span id="spanDynamicHighPriorityAndBase">
                              Base: 19 | Priority: 35.9
                            </span>
                          </div>
                        </div>
                      </div>
                      <div id="divHighPriceSnapshot" class="d-none">
                        <div class="h4 mb-0">
                          <font color="brown">
                            <span id="spanHighPriceSnapshot"></span> gwei
                          </font>
                        </div>
                        <div class="text-muted">
                          <span id="spanHighPriorityAndBaseSnapshot"></span>
                        </div>
                        <div class="text-muted"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="d-flex justify-content-between align-items-center mb-2">
                  <h4 class="h6 fw-bold mb-2 mb-md-0">
                    Pending Transaction Pool Info:
                  </h4>
                </div>

                <div
                  class="table-responsive scrollbar-custom"
                  style={{ height: "169px" }}
                >
                  <table class="table table-hover table-align-middle mb-0">
                    <tbody>
                      <tr>
                        <td>Last Block :</td>
                        <td>
                          <span id="lastblock">
                            <b>53619490</b>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span title="Based on tracked transactions">
                            Pending Queue
                          </span>{" "}
                          :
                        </td>
                        <td>
                          <span id="pendingcount"></span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span title="Based on last 5 blocks">
                            Average Block Size{" "}
                          </span>{" "}
                          :
                        </td>
                        <td>
                          <span id="avgtxnsperblock"></span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span title="Based on last 5 blocks">
                            Average Utilization
                          </span>{" "}
                          :
                        </td>
                        <td>
                          <span id="avgnetworkutilization"></span>
                        </td>
                      </tr>
                      <tr>
                        <td>Last Refreshed :</td>
                        <td>
                          <span id="lastupdated"></span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="container-xxl my-4 text-center d-block d-lg-none">
            <div class="text-center pl-lg-4 pl-xll-5"></div>
          </div>
          <div class="col-xl-6">
            <div class="card h-100">
              <div class="card-body">
                <div
                  id="containerchart"
                  style={{ width: "100%", height: "355px", margin: "0 auto" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex flex-wrap justify-content-between align-items-baseline gap-3">
          <ul
            class="nav nav-pills text-nowrap snap-x-mandatory overflow-x-auto flex-nowrap pt-4 pb-3 gap-2 nav_tabs1"
            id="nav_tabs"
            role="tablist"
          >
            <li class="nav-item snap-align-start" role="presentation">
              <a
                type="button"
                role="tab"
                class="nav-link active"
                id="gasguzzler-tab"
                tabindex="0"
                href="javascript:;"
                data-bs-toggle="pill"
                data-bs-target="#gasguzzler"
                aria-controls="historicaldata"
                aria-selected="true"
                onclick="javascript:updatehash('gasguzzler');"
              >
                <i class="far fa-gas-pump me-1"></i>Gas Guzzlers
              </a>
            </li>
            <li class="nav-item snap-align-start" role="presentation">
              <a
                type="button"
                role="tab"
                class="nav-link"
                id="gassender-tab"
                tabindex="0"
                href="javascript:;"
                data-bs-toggle="pill"
                data-bs-target="#gassender"
                aria-controls="historicaldata"
                aria-selected="false"
                onclick="javascript:updatehash('gassender');"
              >
                <i class="fad fa-gas-pump me-1"></i>Gas Spenders
              </a>
            </li>
          </ul>

          <div class="d-flex flex-wrap align-items-center pt-4 pb-3 gap-2">
            <div class="dropdown">
              <button
                class="btn btn-sm btn-white dropdown-toggle"
                type="button"
                id="dropdownMore1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-display="static"
              >
                Filter : 5 mins
              </button>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMore1"
              >
                <li>
                  <a class="dropdown-item" href="/gastracker">
                    5 Mins
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/gastracker?data=30">
                    30 Mins
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/gastracker?data=60">
                    60 Mins
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="ContentPlaceHolder1_mainrow" class="card">
          <div class="tab-content mb-3" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="gasguzzler"
              role="tabpanel"
              aria-labelledby="gasguzzler-tab"
            >
              <div class="card-body">
                <div class="d-md-flex justify-content-between">
                  <p class="mb-2 mb-md-0">
                    <b>Top 25 Gas Guzzlers</b>{" "}
                    <span class="text-muted">
                      (Contracts / Accounts that consume a lot of Gas)
                    </span>
                    <br />
                  </p>
                </div>
              </div>
              <div class="table-responsive mb-2 mb-md-0">
                <table
                  id="mytable"
                  class="table table-hover table-align-middle mb-0"
                >
                  <thead class="text-nowrap">
                    <tr>
                      <th scope="col" width="20">
                        Rank
                      </th>
                      <th scope="col">Address</th>
                      <th scope="col">Fees Last 5 mins</th>
                      <th scope="col">% Used 5 mins</th>
                      <th scope="col">Analytics</th>
                    </tr>
                  </thead>
                  <tbody class="align-middle text-nowrap">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                      <tr key={index}>
                        <td>
                          <span class="text-right">{index + 1} 🥇</span>
                        </td>
                        <td>
                          <span class="d-flex align-items-center gap-1">
                            <i
                              class="far fa-file-alt text-secondary"
                              data-bs-toggle="tooltip"
                              title="Contract"
                            >
                              <FaRegFileAlt />
                            </i>{" "}
                            <a
                              href="/address/0x7573933eb12fa15d5557b74fdaff845b3baf0ba2"
                              data-bs-toggle="tooltip"
                              title="0x7573933eb12fa15d5557b74fdaff845b3baf0ba2"
                            >
                              <span data-highlight-target="0x7573933eB12Fa15D5557b74fDafF845B3BaF0ba2">
                                0x757393...3BaF0ba2
                              </span>
                            </a>
                            <a
                              class="js-clipboard link-secondary  "
                              href="javascript:;"
                              data-clipboard-text="0x7573933eB12Fa15D5557b74fDafF845B3BaF0ba2"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              title="Copy Address"
                              data-hs-clipboard-options='{ "type": "tooltip", "successText": "Copied!", "classChangeTarget": "#linkIcon_gas_guz1", "defaultClass": "fa-copy", "successClass": "fa-check" }'
                            >
                              <i
                                id="linkIcon_gas_guz1"
                                class="far fa-copy fa-fw"
                              >
                                <FaRegCopy />
                              </i>{" "}
                            </a>
                          </span>
                        </td>
                        <td>
                          <span class="text-muted" title="Fees">
                            11.40 MATIC ($9.02)
                          </span>
                        </td>
                        <td>
                          <span
                            data-bs-toggle="tooltip"
                            title="Gas Units Used : 201,464,691"
                          >
                            4.76%
                          </span>
                          <div
                            class="progress mt-1 mr-5"
                            style={{ height: "2px" }}
                          >
                            <div
                              class="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "100%" }}
                              aria-valuenow="4.76"
                              aria-valuemin="0"
                              aria-valuemax="4.76"
                            ></div>
                          </div>
                        </td>
                        <td>
                          <a href="/address/0x7573933eb12fa15d5557b74fdaff845b3baf0ba2#analytics-txfees">
                            <i class="ms-2 fas fa-chart-line fa-lg">
                              <FaChartLine />
                            </i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="gassender"
              role="tabpanel"
              aria-labelledby="gassender-tab"
            >
              <div class="card-body">
                <div class="d-md-flex justify-content-between">
                  <p class="mb-2 mb-md-0">
                    <b>Top 25 Gas Spenders</b>{" "}
                    <span class="text-muted">
                      (Sending Accounts that pay a lot of Gas)
                    </span>
                    <br />
                  </p>
                  <nav aria-label="page navigation"></nav>
                </div>
              </div>
              <div class="table-responsive mb-2 mb-md-0" id="divTblResp2">
                <table
                  id="mytable2"
                  class="table table-hover table-align-middle mb-0"
                >
                  <thead class="text-nowrap">
                    <tr>
                      <th scope="col" width="20">
                        Rank
                      </th>
                      <th scope="col">Address</th>
                      <th scope="col">Fees Last 5 mins</th>
                      <th scope="col">% Used 5 mins</th>
                      <th scope="col">Analytics</th>
                    </tr>
                  </thead>
                  <tbody class="align-middle text-nowrap">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                      <tr key={index}>
                        <td>
                          <span class="text-right">{index + 1} 🥇</span>
                        </td>
                        <td>
                          <span class="d-flex align-items-center gap-1">
                            <a
                              href="/address/0xa2aee85a0122f17c0502525ebfdcbd6907225db5"
                              data-bs-toggle="tooltip"
                              title="0xa2aee85a0122f17c0502525ebfdcbd6907225db5"
                            >
                              <span data-highlight-target="0xA2AEe85a0122f17c0502525EBFDCbd6907225DB5">
                                0xA2AEe8...07225DB5
                              </span>
                            </a>
                            <a
                              class="js-clipboard link-secondary  "
                              href="javascript:;"
                              data-clipboard-text="0xA2AEe85a0122f17c0502525EBFDCbd6907225DB5"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              title="Copy Address"
                              data-hs-clipboard-options='{ "type": "tooltip", "successText": "Copied!", "classChangeTarget": "#linkIcon_gas_spen1", "defaultClass": "fa-copy", "successClass": "fa-check" }'
                            >
                              <i
                                id="linkIcon_gas_spen1"
                                class="far fa-copy fa-fw"
                              >
                                <FaRegCopy />
                              </i>{" "}
                            </a>
                          </span>
                        </td>

                        <td>
                          <span class="text-muted" title="Fees">
                            3.10 MATIC ($2.45)
                          </span>
                        </td>
                        <td>
                          <span
                            data-bs-toggle="tooltip"
                            title="Gas Units Used : 59,501,048"
                          >
                            1.41%
                          </span>
                          <div
                            class="progress mt-1 mr-5"
                            style={{ height: "2px" }}
                          >
                            <div
                              class="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "100%" }}
                              aria-valuenow="1.41"
                              aria-valuemin="0"
                              aria-valuemax="1.41"
                            ></div>
                          </div>
                        </td>
                        <td>
                          <a href="/address/0xa2aee85a0122f17c0502525ebfdcbd6907225db5#analytics-txfees">
                            <i class="ms-2 fas fa-chart-line fa-lg">
                              <FaChartLine />
                            </i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="historicaldata"
              role="tabpanel"
              aria-labelledby="historicaldata-tab"
            >
              <div class="card-body">
                <div class="container content" id="historicalChart"></div>
                <div class="d-md-flex justify-content-between">
                  <p class="mb-2 mb-md-0">
                    <b>Historical Data For Gas Oracle Prices</b>
                  </p>
                </div>
              </div>
              <div class="table-responsive mb-2 mb-md-0" id="divTblResp1">
                <table
                  id="mytable1"
                  class="table table-hover table-align-middle mb-0"
                >
                  <thead class="text-nowrap">
                    <tr>
                      <th scope="col">Block</th>
                      <th scope="col" class="sortable">
                        Age
                      </th>
                      <th scope="col" class="sortable">
                        Low Gas Price
                      </th>
                      <th scope="col" class="sortable">
                        Average Gas Price
                      </th>
                      <th scope="col" class="sortable">
                        High Gas Price
                      </th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <p class="d-flex align-items-baseline fs-sm text-muted gap-1 mb-3">
            <i class="far fa-lightbulb-on"></i>
            <span>
              Gas refers to the fee required to successfully conduct a
              transaction on the Polygon PoS Chain blockchain. Gas fees are paid
              in MATIC and denominated in Gwei. Learn more about Gas in our{" "}
              <a
                target="_blank"
                href="https://info.polygonscan.com//what-is-gas-fee/"
              >
                Knowledge Base
              </a>
              .
            </span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Gastracker;
