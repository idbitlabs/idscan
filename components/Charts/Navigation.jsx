import React from "react";

const Navigation = () => {
  return (
    <div class="col-lg-3 col-xl-2 border-end d-none d-lg-block">
      <nav class="navbar-expand-lg position-sticky" style={{ top: "4.5rem" }}>
        <div class="collapse navbar-collapse flex-column" id="asideNav">
          <ul
            id="section-chart"
            class="nav nav-pills nav-pills-flush flex-column w-100 gap-1"
          >
            <li class="nav-item">
              <a
                class="nav-link fw-medium py-2 px-3"
                href="#section-market-data"
              >
                Market Data
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link fw-medium py-2 px-3"
                href="#section-blockchain-data"
              >
                Blockchain Data
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link fw-medium py-2 px-3"
                href="#section-network-data"
              >
                Network Data
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link fw-medium py-2 px-3"
                href="#section-top-statistics"
              >
                Top Statistics
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link fw-medium py-2 px-3"
                href="#section-contracts-data"
              >
                Contracts
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
