import React from "react";

const Anylitic = () => {
  return (
    <div id="ContentPlaceHolder1_divStats" class="row g-4 mb-4">
      <div class="col-sm-6 col-lg-3">
        <a class="card group link-dark h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-1">
              <h6 class="text-cap mb-0">Network Utilization (24H)</h6>
              <i class="far fa-arrow-up-right text-secondary group-hover"></i>
            </div>
            <div>
              <span class="fs-5">50.3%</span>
            </div>
          </div>
        </a>
      </div>

      <div class="col-sm-6 col-lg-3">
        <a class="card group link-dark h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-1">
              <h6 class="text-cap mb-0">BLOCK SIZE (24H)</h6>
              <i class="far fa-arrow-up-right text-secondary group-hover"></i>
            </div>
            <div>
              <span class="fs-5">
                56,918 <span>Bytes</span>
              </span>
            </div>
          </div>
        </a>
      </div>

      <div class="col-sm-6 col-lg-3">
        <a
          id="ContentPlaceHolder1_mev_BlockRewards"
          class="card group link-dark h-100"
        >
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-1">
              <h6 class="text-cap mb-0">BLOCK REWARDS (24H)</h6>
              <i class="far fa-arrow-up-right text-secondary group-hover"></i>
            </div>
            <div>
              <span class="fs-5">
                46,076<b>.</b>69 POL
              </span>
            </div>
          </div>
        </a>
      </div>

      <div class="col-sm-6 col-lg-3">
        <a class="card group link-dark h-100" target="_blank">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-1">
              <h6
                class="text-cap mb-0"
                data-bs-toggle="tooltip"
                title="Total Sum of Fees Burnt since the introduction of EIP-1559"
              >
                Burnt Fees 🔥
              </h6>
              <i class="far fa-arrow-up-right text-secondary group-hover"></i>
            </div>
            <div>
              <span class="fs-5">19,308.00 POL</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Anylitic;
