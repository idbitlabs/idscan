import React from "react";

const Nodetracker = () => {
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
      <section class="container-xxl">
        <div class="d-flex flex-wrap justify-content-between align-items-center border-bottom gap-3 py-5">
          <div class="d-flex flex-wrap align-items-center gap-1">
            <h1 class="h5 mb-0">Polygon PoS Chain Node Tracker</h1>
          </div>
        </div>
      </section>

      <section class="container-xxl pt-5 pb-12">
        <div class="card p-4 mb-2">
          <div class="d-flex align-items-basline gap-3">
            <i class="far fa-lightbulb-on text-secondary"></i>
            <div class="mt-n1">
              Node Tracker shows statistics of detected nodes running on the
              network. Statistics include the top 10 countries with the highest
              number of nodes, daily total nodes and node type by clients and
              OS. Learn more in our
              <a
                target="_blank"
                href="https://info.polygonscan.com//nodetracker/"
              >
                Knowledge Base
              </a>
              .
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-md-6">
            <div class="card h-100">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h2 class="card-header-title">Top 10 Countries</h2>
                <a
                  class="btn btn-sm btn-soft-primary"
                  href="/nodetracker/nodes"
                >
                  View All Nodes
                </a>
              </div>

              <div class="card-body">
                <p class="text-muted mb-0">
                  Total <strong>224</strong> nodes found
                </p>
                <div class="table-responsive">
                  <table class="table table-sm table-hover mb-0">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Countries</th>
                        <th scope="col">
                          <div class="dropdown-center">
                            <a
                              id="sortingCountriesInvoker"
                              class="text-dark"
                              href="javascript:void(0);"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Last 24 Hours
                              <i class="fas fa-caret-down ms-1"></i>
                            </a>
                            <ul
                              id="sortingCountries"
                              class="dropdown-menu"
                              aria-labelledby="sortingCountriesInvoker"
                            >
                              <li>
                                <a class="dropdown-item active" href="#">
                                  Last 24 Hours
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="/nodetracker?range=7"
                                >
                                  Last 7 Days
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="/nodetracker?range=30"
                                >
                                  Last 30 Days
                                </a>
                              </li>
                            </ul>
                          </div>
                        </th>
                        <th scope="col" class="text-center">
                          Last 24 Hours
                        </th>
                        <th scope="col" class="text-center">
                          Last 7 Days
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <img
                            class="me-1"
                            width="15"
                            src="icon.png"
                            alt="United States"
                          />
                          <a
                            href="#countries"
                            class="loadmap"
                            data-key="countries/us/us-all"
                          >
                            United States
                          </a>
                        </td>
                        <td>163 (72.77%)</td>
                        <td class="text-center">
                          <span class="text-danger">
                            <i class="fas fa-caret-down small me-1"></i>23.93%
                          </span>
                        </td>
                        <td class="text-center">
                          <span class="text-danger">
                            <i class="fas fa-caret-down small me-1"></i>25.59%
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <img
                            class="me-1"
                            width="15"
                            src="icon.png"
                            alt="Germany"
                          />
                          <a
                            href="#countries"
                            class="loadmap"
                            data-key="countries/de/de-all"
                          >
                            Germany
                          </a>
                        </td>
                        <td>37 (16.52%)</td>
                        <td class="text-center">
                          <span class="text-success">
                            <i class="fas fa-caret-up small me-1"></i>24.32%
                          </span>
                        </td>
                        <td class="text-center">
                          <span class="text-danger">
                            <i class="fas fa-caret-down small me-1"></i>32.34%
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <img
                            class="me-1"
                            width="15"
                            src="icon.png"
                            alt="France"
                          />
                          <a
                            href="#countries"
                            class="loadmap"
                            data-key="countries/fr/fr-all"
                          >
                            France
                          </a>
                        </td>
                        <td>11 (4.91%)</td>
                        <td class="text-center">
                          <span class="text-success">
                            <i class="fas fa-caret-up small me-1"></i>145.45%
                          </span>
                        </td>
                        <td class="text-center">
                          <span class="text-danger">
                            <i class="fas fa-caret-down small me-1"></i>44.06%
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <img
                            class="me-1"
                            width="15"
                            src="icon.png"
                            alt="Canada"
                          />
                          <a
                            href="#countries"
                            class="loadmap"
                            data-key="countries/ca/ca-all"
                          >
                            Canada
                          </a>
                        </td>
                        <td>3 (1.34%)</td>
                        <td class="text-center">
                          <span class="text-success">
                            <i class="fas fa-caret-up small me-1"></i>600.00%
                          </span>
                        </td>
                        <td class="text-center">
                          <span class="text-danger">
                            <i class="fas fa-caret-down small me-1"></i>48.33%
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <img
                            class="me-1"
                            width="15"
                            src="icon.png"
                            alt="Netherlands"
                          />
                          <a
                            href="#countries"
                            class="loadmap"
                            data-key="countries/nl/nl-all"
                          >
                            Netherlands
                          </a>
                        </td>
                        <td>2 (0.89%)</td>
                        <td class="text-center">
                          <span class="text-success">
                            <i class="fas fa-caret-up small me-1"></i>300.00%
                          </span>
                        </td>
                        <td class="text-center">
                          <span class="text-danger">
                            <i class="fas fa-caret-down small me-1"></i>48.16%
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>
                          <img
                            class="me-1"
                            width="15"
                            src="icon.png"
                            alt="Japan"
                          />
                          <a
                            href="#countries"
                            class="loadmap"
                            data-key="countries/jp/jp-all"
                          >
                            Japan
                          </a>
                        </td>
                        <td>2 (0.89%)</td>
                        <td class="text-center">
                          <span class="text-danger">
                            <i class="fas fa-caret-down small me-1"></i>50.00%
                          </span>
                        </td>
                        <td class="text-center">
                          <span class="text-danger">
                            <i class="fas fa-caret-down small me-1"></i>14.39%
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>
                          <img
                            class="me-1"
                            width="15"
                            src="icon.png"
                            alt="Czech Republic"
                          />
                          <a
                            href="#countries"
                            class="loadmap"
                            data-key="countries/cz/cz-all"
                          >
                            Czech Republic
                          </a>
                        </td>
                        <td>2 (0.89%)</td>
                        <td class="text-center">
                          <span>0.00%</span>
                        </td>
                        <td class="text-center">
                          <span class="text-success">
                            <i class="fas fa-caret-up small me-1"></i>
                            <span class="fw-bold">10.73%</span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>
                          <img
                            class="me-1"
                            width="15"
                            src="icon.png"
                            alt="Australia"
                          />
                          <a
                            href="#countries"
                            class="loadmap"
                            data-key="countries/au/au-all"
                          >
                            Australia
                          </a>
                        </td>
                        <td>1 (0.45%)</td>
                        <td class="text-center">
                          <span class="text-success">
                            <i class="fas fa-caret-up small me-1"></i>500.00%
                          </span>
                        </td>
                        <td class="text-center">
                          <span class="text-danger">
                            <i class="fas fa-caret-down small me-1"></i>46.67%
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>
                          <img
                            class="me-1"
                            width="15"
                            src="icon.png"
                            alt="Finland"
                          />
                          <a
                            href="#countries"
                            class="loadmap"
                            data-key="countries/fi/fi-all"
                          >
                            Finland
                          </a>
                        </td>
                        <td>1 (0.45%)</td>
                        <td class="text-center">
                          <span class="text-success">
                            <i class="fas fa-caret-up small me-1"></i>300.00%
                          </span>
                        </td>
                        <td class="text-center">
                          <span class="text-danger">
                            <i class="fas fa-caret-down small me-1"></i>2.52%
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>
                          <img
                            class="me-1"
                            width="15"
                            src="icon.png"
                            alt="Ireland"
                          />
                          <a
                            href="#countries"
                            class="loadmap"
                            data-key="countries/ie/ie-all"
                          >
                            Ireland
                          </a>
                        </td>
                        <td>1 (0.45%)</td>
                        <td class="text-center">
                          <span class="text-success">
                            <i class="fas fa-caret-up small me-1"></i>100.00%
                          </span>
                        </td>
                        <td class="text-center">
                          <span class="text-success">
                            <i class="fas fa-caret-up small me-1"></i>
                            <span class="fw-bold">18.61%</span>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card h-100">
              <div class="card-header">
                <h2 class="card-header-title">Node Stats</h2>
              </div>

              <div class="card-body">
                <div class="row text-center mb-3">
                  <div class="col-md-4 mb-1 mb-md-0">
                    <div class="card h-100 p-3">
                      <div class="fs-4 text-danger">
                        <i class="fas fa-caret-down small me-1"></i>8.94%
                      </div>
                      <div class="text-muted small">Last 24 Hours</div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-1 mb-md-0">
                    <div class="card h-100 p-3">
                      <div class="fs-4 text-danger">
                        <i class="fas fa-caret-down small me-1"></i>59.06%
                      </div>
                      <div class="text-muted small">Last 7 Days</div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card h-100 p-3">
                      <div class="fs-4 text-success">
                        <i class="fas fa-caret-up small me-1"></i>50.35%
                      </div>
                      <div class="text-muted small">Last 30 Days</div>
                    </div>
                  </div>
                </div>

                <div style={{ position: "relative" }}>
                  <div
                    id="statcontainer"
                    style={{ width: "100%", height: "264px", padding: "5px" }}
                  ></div>
                  <div
                    id="watermark"
                    style={{
                      position: "absolute",
                      left: "0px",
                      top: "0px",
                      opacity: " 0.5",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="countries">
          <div class="card mb-4">
            <div class="card-body" style={{ minHeight: "500px" }}>
              <div id="mapBox">
                <div id="up" style={{ minHeight: "20px" }}>
                  &nbsp;
                </div>
                <div class="selector" style={{ display: "none" }}>
                  <select id="mapDropdown" class="ui-widget combobox"></select>
                </div>
                <div id="container">
                  <div id="overlay">
                    <i class="fa fa-spinner fa-spin fa-2x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-4">
                <h2 class="card-header-title">Client</h2>
                <div id="typecontainer"></div>
              </div>
              <div class="col-md-4">
                <h2 class="card-header-title">Client Type</h2>
                <div id="clientcontainer"></div>
              </div>
              <div class="col-md-4">
                <h2 class="card-header-title">OS</h2>
                <div id="oscontainer"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Nodetracker;
