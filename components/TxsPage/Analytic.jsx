import React from "react";

const Analytic = () => {
  return (
    <div id="ContentPlaceHolder1_divTxnStats" class="row g-4 mb-4">
      <div id="ContentPlaceHolder1_divTxStat" class="col-sm-6 col-lg-3">
        <a class="card group link-dark h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-1">
              <h6 class="text-cap mb-0">Transactions (24H)</h6>
              <i class="far fa-arrow-up-right text-secondary group-hover"></i>
            </div>
            <div>
              <span class="fs-5">4,242,914</span>
              <span class="text-nowrap text-success small">(7.52%)</span>
            </div>
          </div>
        </a>
      </div>

      <div id="ContentPlaceHolder1_divPendingTxStat" class="col-sm-6 col-lg-3">
        <a class="card group link-dark h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-1">
              <h6 class="text-cap mb-0">Pending Transactions (Last 1H)</h6>
              <i class="far fa-arrow-up-right text-secondary group-hover"></i>
            </div>
            <div>
              <span class="fs-5">258</span>
              <span class="text-nowrap small">(Average)</span>
            </div>
          </div>
        </a>
      </div>

      <div id="ContentPlaceHolder1_divTxFeeStat" class="col-sm-6 col-lg-3">
        <a class="card group link-dark h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-1">
              <h6 class="text-cap mb-0">Network Transactions Fee (24H)</h6>
              <i class="far fa-arrow-up-right text-secondary group-hover"></i>
            </div>
            <div>
              <span
                class="fs-5"
                data-bs-toggle="tooltip"
                data-bs-title="45,944.002691760476117863 MATIC"
              >
                45,944.00 MATIC
              </span>
              <span class="text-nowrap text-success small">(10.68%)</span>
            </div>
          </div>
        </a>
      </div>

      <div id="ContentPlaceHolder1_divAvgTxFeeStat" class="col-sm-6 col-lg-3">
        <a
          id="ContentPlaceHolder1_txsFeeChart"
          class="card group link-dark h-100"
        >
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-1">
              <h6 class="text-cap mb-0">Avg. Transaction Fee (24h)</h6>
              <i class="far fa-arrow-up-right text-secondary group-hover"></i>
            </div>
            <div>
              <span
                class="fs-5"
                data-bs-toggle="tooltip"
                data-bs-title="0.0108284077150186112935268073 USD"
              >
                0.0108 USD
              </span>
              <span class="text-nowrap text-success small">(2.95%)</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Analytic;
