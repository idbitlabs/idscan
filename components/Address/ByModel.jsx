import React from "react";

const ByModel = () => {
  return (
    <div class="dropdown-menu p-4 new_disply_Block_buy_adddess buy_model">
      <div class="text-end text-muted fs-80x mt-n2 mb-1">Sponsored</div>
      <span class="text-muted">
        <a
          class="text-dark"
          href="https://idbit.io"
          target="_blank"
          rel="nofollow"
          title="Links to an External Advertiser site"
        >
          <div class="d-inline-flex align-items-center gap-2 mb-2">
            <img width="24" src="/images/gen/moonpay_20.png" alt="ads" />
            <span class="fs-6 fw-medium">Idbit Excange</span>
          </div>
          <div class="text-primary fw-medium d-inline-block mb-2">
            {" "}
            Buy crypto with our non-custodial and fully decentralised platform.{" "}
            <span class="badge bg-primary bg-opacity-10 border border-primary border-opacity-25 text-primary fw-medium rounded-pill">
              Buy Now!
            </span>
          </div>
          <p class="mb-0">
            15M+ users trust MoonPay. Checkout with your preferred payment
            method.
          </p>
        </a>
      </span>
      <hr class="hr-space" />
      <span class="text-muted">
        <a
          class="text-dark"
          href="https://goto.etherscan.com/rd/RXWFU2VVKRP6V3REWMIQH4HAU"
          target="_blank"
          rel="nofollow"
          title="Links to an External Advertiser site"
        >
          <div class="d-inline-flex align-items-center gap-2 mb-2">
            <img width="24" src="/images/gen/cons_20.png" alt="ads" />
            <span class="fs-6 fw-medium">MetaMask</span>
          </div>
          <div class="text-primary fw-medium d-inline-block mb-2">
            Get Started With Crypto &amp; Manage Your Web3 Everything.{" "}
            <span class="badge bg-primary bg-opacity-10 border border-primary border-opacity-25 text-primary fw-medium rounded-pill">
              {" "}
              Try Now!
            </span>
          </div>
          <p class="mb-0">
            Ready to onboard to crypto on Polygon? With MetaMask Portfolio,
            you're in control.
          </p>
        </a>
      </span>
    </div>
  );
};

export default ByModel;
