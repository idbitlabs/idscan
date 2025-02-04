import React from "react";

import { Input, Title, Navigation } from "./index";

const Charts = () => {
  return (
    <main id="content" class="main-content" role="main">
      <Input />
      <Title />

      <div class="container-xxl pt-5 pb-20">
        <div class="row gx-lg-8 gx-xl-16">
          <Navigation />

          <div
            class="col-lg-9 col-xl-10"
            data-bs-spy="scroll"
            data-bs-offset="10"
            data-bs-target="#section-chart"
            data-bs-root-margin="0px 0px -80%"
          >
            <section
              id="section-market-data"
              class="offset-scroll border-bottom pb-10 mb-10"
            >
              <h2 class="fs-base fw-medium mb-5">Market Data</h2>
              <div class="row g-5">
                <div class="col-sm-6 col-xl-4">
                  <a class="card link-dark h-100" href="/chart/POLprice">
                    <div class="card-body">
                      <h3 class="h6 fw-normal mb-6">
                        IDT Daily Price (USD) Chart
                      </h3>
                      <img
                        src="./assets/poly/images/svg/charts/daily-price.svg?v=24.2.2.0"
                        class="img-fluid dark:opacity-50 d-block mx-auto"
                        alt="POL price chart"
                      />
                    </div>
                  </a>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <a class="card link-dark h-100" href="/chart/marketcap">
                    <div class="card-body">
                      <h3 class="h6 fw-normal mb-6">
                        POL Market Capitalization Chart
                      </h3>
                      <img
                        src="./assets/poly/images/svg/charts/market-cap.svg?v=24.2.2.0"
                        class="img-fluid dark:opacity-50 d-block mx-auto"
                        alt="POL Market Capitalization Chart"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </section>
            <section
              id="section-blockchain-data"
              class="offset-scroll border-bottom pb-10 mb-10"
            >
              <h2 class="fs-base fw-medium mb-5">Blockchain Data</h2>
              <div class="row g-5">
                <div class="col-sm-6 col-xl-4">
                  <a class="card link-dark h-100" href="/chart/tx">
                    <div class="card-body">
                      <h3 class="h6 fw-normal mb-6">
                        Daily Transactions Chart
                      </h3>
                      <img
                        src="./assets/poly/images/svg/charts/daily-txn.svg?v=24.2.2.0"
                        class="img-fluid dark:opacity-50 d-block mx-auto"
                        alt="Daily Transactions Chart"
                      />
                    </div>
                  </a>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <a class="card link-dark h-100" href="/chart/tokenerc-20txns">
                    <div class="card-body">
                      <h3 class="h6 fw-normal mb-6">
                        ERC-20 Daily Token Transfer Chart
                      </h3>
                      <img
                        src="./assets/poly/images/svg/charts/erc20-daily-token.svg?v=24.2.2.0"
                        class="img-fluid dark:opacity-50 d-block mx-auto"
                        alt="ERC-20 Daily Token Transfer Chart"
                      />
                    </div>
                  </a>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <a class="card link-dark h-100" href="/chart/address">
                    <div class="card-body">
                      <h3 class="h6 fw-normal mb-6">Unique Addresses Chart</h3>
                      <img
                        src="./assets/poly/images/svg/charts/unique-address.svg?v=24.2.2.0"
                        class="img-fluid dark:opacity-50 d-block mx-auto"
                        alt="Unique Addresses Chart"
                      />
                    </div>
                  </a>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <a class="card link-dark h-100" href="/chart/blocksize">
                    <div class="card-body">
                      <h3 class="h6 fw-normal mb-6">
                        Average Block Size Chart
                      </h3>
                      <img
                        src="./assets/poly/images/svg/charts/avg-block-size.svg?v=24.2.2.0"
                        class="img-fluid dark:opacity-50 d-block mx-auto"
                        alt="Average Block Size Chart"
                      />
                    </div>
                  </a>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <a class="card link-dark h-100" href="/chart/blocktime">
                    <div class="card-body">
                      <h3 class="h6 fw-normal mb-6">
                        Average Block Time Chart
                      </h3>
                      <img
                        src="./assets/poly/images/svg/charts/avg-block-time.svg?v=24.2.2.0"
                        class="img-fluid dark:opacity-50 d-block mx-auto"
                        alt="Average Block Time Chart"
                      />
                    </div>
                  </a>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <a class="card link-dark h-100" href="/chart/gasprice">
                    <div class="card-body">
                      <h3 class="h6 fw-normal mb-6">Average Gas Price Chart</h3>
                      <img
                        src="./assets/poly/images/svg/charts/avg-gas-price.svg?v=24.2.2.0"
                        class="img-fluid dark:opacity-50 d-block mx-auto"
                        alt="Average Gas Price Chart"
                      />
                    </div>
                  </a>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <a class="card link-dark h-100" href="/chart/gaslimit">
                    <div class="card-body">
                      <h3 class="h6 fw-normal mb-6">Average Gas Limit Chart</h3>
                      <img
                        src="./assets/poly/images/svg/charts/avg-gas-limit.svg?v=24.2.2.0"
                        class="img-fluid dark:opacity-50 d-block mx-auto"
                        alt="Average Gas Limit Chart"
                      />
                    </div>
                  </a>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <a class="card link-dark h-100" href="/chart/gasused">
                    <div class="card-body">
                      <h3 class="h6 fw-normal mb-6">Daily Gas Used Chart</h3>
                      <img
                        src="./assets/poly/images/svg/charts/daily-gas-used.svg?v=24.2.2.0"
                        class="img-fluid dark:opacity-50 d-block mx-auto"
                        alt="Daily Gas Used Chart"
                      />
                    </div>
                  </a>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <a class="card link-dark h-100" href="/chart/blocks">
                    <div class="card-body">
                      <h3 class="h6 fw-normal mb-6">
                        Block Count and Rewards Chart
                      </h3>
                      <img
                        src="./assets/poly/images/svg/charts/block-count.svg?v=24.2.2.0"
                        class="img-fluid dark:opacity-50 d-block mx-auto"
                        alt="Block Count and Rewards Chart"
                      />
                    </div>
                  </a>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <a class="card link-dark h-100" href="/chart/active-address">
                    <div class="card-body">
                      <h3 class="h6 fw-normal mb-6">
                        Daily Active Polygon PoS Chain Address
                      </h3>
                      <img
                        src="./assets/poly/images/svg/charts/daily-active-address.svg?v=24.2.2.0"
                        class="img-fluid dark:opacity-50 d-block mx-auto"
                        alt="Daily Active Polygon PoS Chain Address"
                      />
                    </div>
                  </a>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <a
                    class="card link-dark h-100"
                    href="/chart/erc20-active-address"
                  >
                    <div class="card-body">
                      <h3 class="h6 fw-normal mb-6">
                        Daily Active ERC-20 Address
                      </h3>
                      <img
                        src="./assets/poly/images/svg/charts/daily-active-erc20-address.svg?v=24.2.2.0"
                        class="img-fluid dark:opacity-50 d-block mx-auto"
                        alt="Daily Active ERC-20 Address"
                      />
                    </div>
                  </a>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <a class="card link-dark h-100" href="/chart/avg-txfee-usd">
                    <div class="card-body">
                      <h3 class="h6 fw-normal mb-6">
                        Average Transaction Fee Chart
                      </h3>
                      <img
                        src="./assets/poly/images/svg/charts/avg-txn-fee.svg?v=24.2.2.0"
                        class="img-fluid dark:opacity-50 d-block mx-auto"
                        alt="Average Transaction Fee Chart"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </section>
            <section
              id="section-network-data"
              class="offset-scroll border-bottom pb-10 mb-10"
            >
              <h2 class="fs-base fw-medium mb-5">Network Data</h2>
              <div class="row g-5">
                <div class="col-sm-6 col-xl-4">
                  <a class="card link-dark h-100" href="/chart/pendingtx">
                    <div class="card-body">
                      <h3 class="h6 fw-normal mb-6">
                        Network Pending Transactions Chart
                      </h3>
                      <img
                        src="./assets/poly/images/svg/charts/network-pending-txn.svg?v=24.2.2.0"
                        class="img-fluid dark:opacity-50 d-block mx-auto"
                        alt="Network Pending Transactions Chart"
                      />
                    </div>
                  </a>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <a class="card link-dark h-100" href="/chart/transactionfee">
                    <div class="card-body">
                      <h3 class="h6 fw-normal mb-6">
                        Network Transaction Fee Chart
                      </h3>
                      <img
                        src="./assets/poly/images/svg/charts/network-txn-fee.svg?v=24.2.2.0"
                        class="img-fluid dark:opacity-50 d-block mx-auto"
                        alt="Network Transaction Fee Chart"
                      />
                    </div>
                  </a>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <a
                    class="card link-dark h-100"
                    href="/chart/networkutilization"
                  >
                    <div class="card-body">
                      <h3 class="h6 fw-normal mb-6">
                        Network Utilization Chart
                      </h3>
                      <img
                        src="./assets/poly/images/svg/charts/network-utilization.svg?v=24.2.2.0"
                        class="img-fluid dark:opacity-50 d-block mx-auto"
                        alt="Network Utilization Chart"
                      />
                    </div>
                  </a>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <a class="card link-dark h-100" href="/nodetracker">
                    <div class="card-body">
                      <h3 class="h6 fw-normal mb-6">Node Tracker</h3>
                      <img
                        src="./assets/poly/images/svg/charts/world-map.svg?v=24.2.2.0"
                        class="img-fluid dark:opacity-50 d-block mx-auto"
                        alt="Node Tracker"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </section>
            <section
              id="section-top-statistics"
              class="offset-scroll border-bottom pb-10 mb-10"
            >
              <h2 class="fs-base fw-medium mb-5">Top Statistics</h2>
              <div class="row g-5">
                <div class="col-sm-6 col-xl-4">
                  <a class="card link-dark h-100" href="/stat/dextracker">
                    <div class="card-body">
                      <h3 class="h6 fw-normal mb-6">DEX Activity</h3>
                      <img
                        src="./assets/poly/images/svg/charts/dex-tracker.svg?v=24.2.2.0"
                        class="img-fluid dark:opacity-50 d-block mx-auto"
                        alt="Top DEX Tracker Statistics"
                      />
                    </div>
                  </a>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <a
                    class="card link-dark h-100"
                    href="/stat/miner?blocktype=blocks"
                  >
                    <div class="card-body">
                      <h3 class="h6 fw-normal mb-6">
                        Top 25 Validators by Blocks
                      </h3>
                      <img
                        src="./assets/poly/images/svg/charts/validators-top-25.svg?v=24.2.2.0"
                        class="img-fluid dark:opacity-50 d-block mx-auto"
                        alt="Top Validators"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </section>
            <section
              id="section-contracts-data"
              class="offset-scroll border-bottom pb-10 mb-10"
            >
              <h2 class="fs-base fw-medium mb-5">Contracts Data</h2>
              <div class="row g-5">
                <div class="col-sm-6 col-xl-4">
                  <a
                    class="card link-dark h-100"
                    href="/chart/verified-contracts"
                  >
                    <div class="card-body">
                      <h3 class="h6 fw-normal mb-6">
                        Polygon PoS Chain Daily Verified Contracts Chart
                      </h3>
                      <img
                        src="./assets/poly/images/svg/charts/daily-verified-contracts.svg?v=24.2.2.0"
                        class="img-fluid dark:opacity-50 d-block mx-auto"
                        alt="Polygon PoS Chain Daily Verified Contracts Chart"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div
        id="share-bottom"
        class="share-btn socialmediabutton-down"
        style={{ position: "relative", right: "2px", top: "-10px" }}
      ></div>
    </main>
  );
};

export default Charts;
