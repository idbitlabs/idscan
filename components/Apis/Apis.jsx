import React from "react";
import { FaCode } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiArrowRightUpLine } from "react-icons/ri";

const Apis = () => {
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
        value="(Gas Price * Gas Used by Txns) in IDT"
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

      <div id="content" class="position-relative">
        <div class="container-xxl position-relative pt-12 pb-16">
          <form method="post" action="./apis" id="form1" class="js-validate">
            <div class="aspNetHidden">
              <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" />
            </div>
            <div class="aspNetHidden">
              <input
                type="hidden"
                name="__VIEWSTATEGENERATOR"
                id="__VIEWSTATEGENERATOR"
                value="DC1E7C53"
              />
              <input
                type="hidden"
                name="__EVENTVALIDATION"
                id="__EVENTVALIDATION"
              />
            </div>
            <div id="ContentPlaceHolder1_checkoutDiv">
              <div
                class="position-absolute top-0"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(70% 50% at 50% 0%, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0) 100%)",
                  WebkitMaskImage: "auto 100%",
                  WebkitMaskRepeat: "no-repeat",
                  maskImage:
                    "radial-gradient(70% 50% at 50% 0%, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0) 100%)",
                  maskSize: "auto 90%",
                  maskRepeat: "no-repeat",
                  zIndex: "-1",
                }}
              >
                <img
                  class="img-fluid d-block mx-auto"
                  src="./images/svg/components/waves-lg.svg"
                  alt
                />
              </div>

              <div class="row justify-content-between align-items-center mb-12">
                <div class="col-12"></div>
                <div class="col-lg-5 text-center text-lg-start">
                  <div class="text-cap fw-medium text-primary mb-2">
                    PolygonScan API
                  </div>
                  <h1 class="h2 fw-bold">
                    Build Precise &amp; Reliable Apps with
                    <span class="new_primary_color"> PolygonScan APIs</span>
                  </h1>
                  <p class="fs-base">
                    Data from the leading Polygon PoS Chain Block Explorer
                    catered to your needs.
                  </p>
                  <div class="d-flex justify-content-center justify-content-lg-start align-items-center gap-4">
                    <a class="btn btn-primary py-2 px-4" href="#pricing-plan">
                      API Pricing Plans
                    </a>
                    <a
                      class="group"
                      target="_blank"
                      href="https://www.theblockchaincoders.com/SourceCode"
                    >
                      API Documentation
                      <i class="far fa-arrow-up-right text-secondary group-hover transition-all ms-1">
                        <RiArrowRightUpLine />
                      </i>
                    </a>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="d-none d-lg-flex justify-content-end">
                    <img
                      width="520"
                      data-img-theme="light"
                      src="./assets/poly/images/svg/api-hero-light.svg?v=24.2.2.0"
                      class="img-fluid"
                      alt="api-main"
                    />
                  </div>
                </div>
              </div>

              <section id="pricing-plan" class="mb-12 offset-scroll">
                <div class="row justify-content-center text-center mb-6">
                  <div class="col-sm-10 col-lg-8 col-xl-6">
                    <h2 class="h4">Ready to get started?</h2>
                    <p class="fs-base">
                      Select the plan that best suits you or contact us for a
                      custom option.
                    </p>
                    <div class="d-flex justify-content-center">
                      <ul
                        class="nav nav-pills nav-pills-alt bg-light border rounded-pill flex-fill flex-grow-0 gap-2 p-1"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li class="nav-item" role="presentation">
                          <button
                            class="nav-link active rounded-5 w-100"
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                          >
                            Monthly
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button
                            class="nav-link rounded-5 w-100"
                            id="pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="false"
                          >
                            Quarterly
                            <span class="small opacity-75 ms-1">(10% Off)</span>
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button
                            class="nav-link rounded-5 w-100"
                            id="pills-contact-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-contact"
                            type="button"
                            role="tab"
                            aria-controls="pills-contact"
                            aria-selected="false"
                          >
                            Yearly
                            <span class="small opacity-75 ms-1">(20% Off)</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabindex="0"
                  >
                    <div class="row g-4">
                      <div class="col-sm-6 col-md-4 col-xl">
                        <div class="card h-100">
                          <div class="p-4">
                            <div class="text-cap fw-medium text-primary mb-1">
                              Free
                            </div>
                            <h4 class="mb-0">$0</h4>
                            <span class="small text-muted mb-1">
                              *Attribution required
                            </span>
                          </div>
                          <hr class="my-0" />
                          <div class="card-body d-flex flex-column justify-content-between">
                            <ul class="list-unstyled d-flex flex-column gap-2">
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>5 call/second limit</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Up to 100,000 API calls/day</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>All existing community endpoints</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Community support</span>
                              </li>
                            </ul>
                            <a
                              href="/myapikey"
                              class="btn btn-primary py-2 px-8 w-100"
                              type="button"
                            >
                              Get Started Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl">
                        <div class="card h-100">
                          <div
                            class="pt-4 px-4"
                            style={{ paddingBottom: "2.4rem" }}
                          >
                            <div class="text-cap fw-medium text-primary mb-1">
                              Standard
                            </div>
                            <h4 class="mb-0">
                              $199
                              <span class="fs-6 text-muted fw-normal">/mo</span>
                            </h4>
                          </div>
                          <hr class="my-0" />
                          <div class="card-body d-flex flex-column justify-content-between">
                            <ul class="list-unstyled d-flex flex-column gap-2">
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>10 calls/second limit</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Up to 200,000 API calls/day</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>All existing community endpoints</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>
                                  Access to
                                  <a
                                    href="https://www.theblockchaincoders.com/SourceCode"
                                    target="_blank"
                                  >
                                    API Pro endpoints
                                  </a>
                                </span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Escalated support</span>
                              </li>
                            </ul>
                            <a
                              id="btnPrd1"
                              class="btn btn-primary py-2 px-8 w-100"
                              type="button"
                            >
                              Get Started Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl">
                        <div class="card h-100">
                          <div
                            class="pt-4 px-4"
                            style={{ paddingBottom: "2.4rem" }}
                          >
                            <div class="text-cap fw-medium text-primary mb-1">
                              Advanced
                            </div>
                            <h4 class="mb-0">
                              $299
                              <span class="fs-6 text-muted fw-normal">/mo</span>
                            </h4>
                          </div>
                          <hr class="my-0" />
                          <div class="card-body d-flex flex-column justify-content-between">
                            <ul class="list-unstyled d-flex flex-column gap-2">
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>20 calls/second limit</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Up to 500,000 API calls/day</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>All existing community endpoints</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>
                                  Access to
                                  <a
                                    href="https://www.theblockchaincoders.com/SourceCode"
                                    target="_blank"
                                  >
                                    API Pro endpoints
                                  </a>
                                </span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Escalated support</span>
                              </li>
                            </ul>
                            <a
                              id="btnPrd2"
                              class="btn btn-primary py-2 px-8 w-100"
                              type="button"
                            >
                              Get Started Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl">
                        <div class="card h-100">
                          <div
                            class="pt-4 px-4"
                            style={{ paddingBottom: "2.4rem" }}
                          >
                            <div class="text-cap fw-medium text-primary mb-1">
                              PROFESSIONAL
                            </div>
                            <h4 class="mb-0">
                              $399
                              <span class="fs-6 text-muted fw-normal">/mo</span>
                            </h4>
                          </div>
                          <hr class="my-0" />
                          <div class="card-body d-flex flex-column justify-content-between">
                            <ul class="list-unstyled d-flex flex-column gap-2">
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>30 calls/second limit</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Up to 1,000,000 API calls/day</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>All existing community endpoints</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>
                                  Access to
                                  <a
                                    href="https://www.theblockchaincoders.com/SourceCode"
                                    target="_blank"
                                  >
                                    API Pro endpoints
                                  </a>
                                </span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Escalated support</span>
                              </li>
                            </ul>
                            <a
                              id="btnPrd3"
                              class="btn btn-primary py-2 px-8 w-100"
                              type="button"
                            >
                              Get Started Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabindex="0"
                  >
                    <div class="row g-4">
                      <div class="col-sm-6 col-md-4 col-xl">
                        <div class="card h-100">
                          <div class="p-4" style={{ paddingBottom: "2.4rem" }}>
                            <div class="text-cap fw-medium text-primary mb-1">
                              Free
                            </div>
                            <h4 class="mb-0">$0</h4>
                            <span class="small text-muted mb-1">
                              *Attribution required
                            </span>
                          </div>
                          <hr class="my-0" />
                          <div class="card-body d-flex flex-column justify-content-between">
                            <ul class="list-unstyled d-flex flex-column gap-2">
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>5 call/second limit</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Up to 100,000 API calls/day</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>All existing community endpoints</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Community support</span>
                              </li>
                            </ul>
                            <a
                              href="/myapikey"
                              class="btn btn-primary py-2 px-8 w-100"
                              type="button"
                            >
                              Get Started Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl">
                        <div class="card h-100">
                          <div class="p-4">
                            <div class="text-cap fw-medium text-primary mb-1">
                              Standard
                            </div>
                            <h4 class="mb-0">
                              $179.10
                              <span class="fs-6 text-muted fw-normal">/mo</span>
                            </h4>
                            <div class="small mb-1">
                              <span class="text-danger text-decoration-line-through">
                                $597
                              </span>
                              <span class="text-muted">$537.30/qtr</span>
                            </div>
                          </div>
                          <hr class="my-0" />
                          <div class="card-body d-flex flex-column justify-content-between">
                            <ul class="list-unstyled d-flex flex-column gap-2">
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>10 calls/second limit</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Up to 200,000 API calls/day</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>All existing community endpoints</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>
                                  Access to
                                  <a
                                    href="https://www.theblockchaincoders.com/SourceCode"
                                    target="_blank"
                                  >
                                    API Pro endpoints
                                  </a>
                                </span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Escalated support</span>
                              </li>
                            </ul>
                            <a
                              id="btnPrd4"
                              class="btn btn-primary py-2 px-8 w-100"
                              type="button"
                            >
                              Get Started Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl">
                        <div class="card h-100">
                          <div class="p-4" style={{ paddingBottom: "2.4rem" }}>
                            <div class="text-cap fw-medium text-primary mb-1">
                              Advanced
                            </div>
                            <h4 class="mb-0">
                              $269.10
                              <span class="fs-6 text-muted fw-normal">/mo</span>
                            </h4>
                            <div class="small mb-1">
                              <span class="text-danger text-decoration-line-through">
                                $897
                              </span>
                              <span class="text-muted">$807.30/qtr</span>
                            </div>
                          </div>
                          <hr class="my-0" />
                          <div class="card-body d-flex flex-column justify-content-between">
                            <ul class="list-unstyled d-flex flex-column gap-2">
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>20 calls/second limit</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Up to 500,000 API calls/day</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>All existing community endpoints</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>
                                  Access to
                                  <a
                                    href="https://www.theblockchaincoders.com/SourceCode"
                                    target="_blank"
                                  >
                                    API Pro endpoints
                                  </a>
                                </span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Escalated support</span>
                              </li>
                            </ul>
                            <a
                              id="btnPrd5"
                              class="btn btn-primary py-2 px-8 w-100"
                              type="button"
                            >
                              Get Started Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl">
                        <div class="card h-100">
                          <div class="p-4" style={{ paddingBottom: "2.4rem" }}>
                            <div class="text-cap fw-medium text-primary mb-1">
                              PROFESSIONAL
                            </div>
                            <h4 class="mb-0">
                              $359.10
                              <span class="fs-6 text-muted fw-normal">/mo</span>
                            </h4>
                            <div class="small mb-1">
                              <span class="text-danger text-decoration-line-through">
                                $1,197
                              </span>
                              <span class="text-muted">$1,077.30/qtr</span>
                            </div>
                          </div>
                          <hr class="my-0" />
                          <div class="card-body d-flex flex-column justify-content-between">
                            <ul class="list-unstyled d-flex flex-column gap-2">
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>30 calls/second limit</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Up to 1,000,000 API calls/day</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>All existing community endpoints</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>
                                  Access to
                                  <a
                                    href="https://www.theblockchaincoders.com/SourceCode"
                                    target="_blank"
                                  >
                                    API Pro endpoints
                                  </a>
                                </span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Escalated support</span>
                              </li>
                            </ul>
                            <a
                              id="btnPrd6"
                              class="btn btn-primary py-2 px-8 w-100"
                              type="button"
                            >
                              Get Started Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                    tabindex="0"
                  >
                    <div class="row g-4">
                      <div class="col-sm-6 col-md-4 col-xl">
                        <div class="card h-100">
                          <div class="p-4" style={{ paddingBottom: "2.4rem" }}>
                            <div class="text-cap fw-medium text-primary mb-1">
                              Free
                            </div>
                            <h4 class="mb-0">$0</h4>
                            <span class="small text-muted mb-1">
                              *Attribution required
                            </span>
                          </div>
                          <hr class="my-0" />
                          <div class="card-body d-flex flex-column justify-content-between">
                            <ul class="list-unstyled d-flex flex-column gap-2">
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>5 call/second limit</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Up to 100,000 API calls/day</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>All existing community endpoints</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Community support</span>
                              </li>
                            </ul>
                            <a
                              href="/myapikey"
                              class="btn btn-primary py-2 px-8 w-100"
                              type="button"
                            >
                              Get Started Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl">
                        <div class="card h-100">
                          <div class="p-4" style={{ paddingBottom: "2.4rem" }}>
                            <div class="text-cap fw-medium text-primary mb-1">
                              Standard
                            </div>
                            <h4 class="mb-0">
                              $179.10
                              <span class="fs-6 text-muted fw-normal">/mo</span>
                            </h4>
                            <div class="small mb-1">
                              <span class="text-danger text-decoration-line-through">
                                $2,388
                              </span>
                              <span class="text-muted">$1,910.40/yr</span>
                            </div>
                          </div>
                          <hr class="my-0" />
                          <div class="card-body d-flex flex-column justify-content-between">
                            <ul class="list-unstyled d-flex flex-column gap-2">
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>10 calls/second limit</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Up to 200,000 API calls/day</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>All existing community endpoints</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>
                                  Access to
                                  <a
                                    href="https://www.theblockchaincoders.com/SourceCode"
                                    target="_blank"
                                  >
                                    API Pro endpoints
                                  </a>
                                </span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Escalated support</span>
                              </li>
                            </ul>
                            <a
                              id="btnPrd7"
                              class="btn btn-primary py-2 px-8 w-100"
                              href="#"
                              type="button"
                            >
                              Get Started Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl">
                        <div class="card h-100">
                          <div class="p-4" style={{ paddingBottom: "2.4rem" }}>
                            <div class="text-cap fw-medium text-primary mb-1">
                              Advanced
                            </div>
                            <h4 class="mb-0">
                              $239.20
                              <span class="fs-6 text-muted fw-normal">/mo</span>
                            </h4>
                            <div class="small mb-1">
                              <span class="text-danger text-decoration-line-through">
                                $3,588
                              </span>
                              <span class="text-muted">$2,870.40/yr</span>
                            </div>
                          </div>
                          <hr class="my-0" />
                          <div class="card-body d-flex flex-column justify-content-between">
                            <ul class="list-unstyled d-flex flex-column gap-2">
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>20 calls/second limit</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Up to 500,000 API calls/day</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>All existing community endpoints</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>
                                  Access to
                                  <a
                                    href="https://www.theblockchaincoders.com/SourceCode"
                                    target="_blank"
                                  >
                                    API Pro endpoints
                                  </a>
                                </span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Escalated support</span>
                              </li>
                            </ul>
                            <a
                              id="btnPrd8"
                              href="#"
                              class="btn btn-primary py-2 px-8 w-100"
                              type="button"
                            >
                              Get Started Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl">
                        <div class="card h-100">
                          <div class="p-4" style={{ paddingBottom: "2.4rem" }}>
                            <div class="text-cap fw-medium text-primary mb-1">
                              PROFESSIONAL
                            </div>
                            <h4 class="mb-0">
                              $319.20
                              <span class="fs-6 text-muted fw-normal">/mo</span>
                            </h4>
                            <div class="small mb-1">
                              <span class="text-danger text-decoration-line-through">
                                $4,788
                              </span>
                              <span class="text-muted">$3,830.40/yr</span>
                            </div>
                          </div>
                          <hr class="my-0" />
                          <div class="card-body d-flex flex-column justify-content-between">
                            <ul class="list-unstyled d-flex flex-column gap-2">
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>30 calls/second limit</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Up to 1,000,000 API calls/day</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>All existing community endpoints</span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>
                                  Access to
                                  <a
                                    href="https://www.theblockchaincoders.com/SourceCode"
                                    target="_blank"
                                  >
                                    API Pro endpoints
                                  </a>
                                </span>
                              </li>
                              <li class="fs-6 d-flex align-items-baseline">
                                <i class="fa-regular fa-check me-2"></i>
                                <span>Escalated support</span>
                              </li>
                            </ul>
                            <a
                              id="btnPrd9"
                              href="#"
                              class="btn btn-primary py-2 px-8 w-100"
                              type="button"
                            >
                              Get Started Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div class="col mx-auto mt-n8 mb-12">
                <div
                  class="card bg-dark p-sm-5 h-100"
                  style={{
                    background:
                      "url(./assets/poly/images/svg/gradient.svg?v=24.2.2.0) no-repeat right 50%",
                  }}
                >
                  <div class="card-body d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-4">
                    <div class="flex-grow-1">
                      <div class="text-cap fw-medium text-primary mb-1">
                        Enterprise
                      </div>
                      <h4 class="text-white">Dedicated Plan</h4>
                      <div class="text-white text-opacity-75">
                        Greater rate limit with SLA support. Suitable for
                        Enterprise user that uses large scale of Polygon PoS
                        Chain data.
                      </div>
                    </div>
                    <div>
                      <a
                        href="#contactSection"
                        class="btn btn-light text-nowrap d-block py-2 px-6"
                        type="button"
                      >
                        Contact Us{" "}
                        <i class="far fa-arrow-right ms-1">
                          <FaArrowRightLong />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <section class="mb-12">
                <div class="row justify-content-center text-center mb-4">
                  <div class="col-sm-10 col-lg-8 col-xl-6">
                    <h2 class="h4">Frequently Asked Questions</h2>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <div class="accordion accordion-flush mb-4" id="faq-main">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="faq-one">
                          <button
                            class="accordion-button collapsed fw-medium"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-collapse-one"
                            aria-expanded="false"
                            aria-controls="faq-collapse-one"
                          >
                            How do I subscribe to PolygonScan API services?
                          </button>
                        </h2>
                        <div
                          id="faq-collapse-one"
                          class="accordion-collapse collapse"
                          aria-labelledby="faq-one"
                          data-bs-parent="#faq-main"
                        >
                          <div class="accordion-body">
                            Kindly visit the API self-checkout section
                            <a href="#pricing-plan">above</a>, select the plan
                            that fits you best and follow the steps accordingly.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="faq-two">
                          <button
                            class="accordion-button collapsed fw-medium"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-collapse-two"
                            aria-expanded="false"
                            aria-controls="faq-collapse-two"
                          >
                            How do I Upgrade or Cancel an account?
                          </button>
                        </h2>
                        <div
                          id="faq-collapse-two"
                          class="accordion-collapse collapse"
                          aria-labelledby="faq-two"
                          data-bs-parent="#faq-main"
                        >
                          <div class="accordion-body">
                            Please
                            <a href="/contactus?id=11">contact us</a> should you
                            wish to upgrade or cancel your account. We will
                            assist you accordingly.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="faq-three">
                          <button
                            class="accordion-button collapsed fw-medium"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-collapse-three"
                            aria-expanded="false"
                            aria-controls="faq-collapse-three"
                          >
                            What are the Payment Options available?
                          </button>
                        </h2>
                        <div
                          id="faq-collapse-three"
                          class="accordion-collapse collapse"
                          aria-labelledby="faq-three"
                          data-bs-parent="#faq-main"
                        >
                          <div class="accordion-body">
                            We accept major credit cards that are supported by
                            Stripe.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="faq-four">
                          <button
                            class="accordion-button collapsed fw-medium"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-collapse-four"
                            aria-expanded="false"
                            aria-controls="faq-collapse-four"
                          >
                            What is your refund policy?
                          </button>
                        </h2>
                        <div
                          id="faq-collapse-four"
                          class="accordion-collapse collapse"
                          aria-labelledby="faq-four"
                          data-bs-parent="#faq-main"
                        >
                          <div class="accordion-body">
                            Payments made are non-refundable and we do not
                            provide refunds or credits for any services already
                            paid for.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="faq-five">
                          <button
                            class="accordion-button collapsed fw-medium"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-collapse-five"
                            aria-expanded="false"
                            aria-controls="faq-collapse-five"
                          >
                            When will Account Activation occur?
                          </button>
                        </h2>
                        <div
                          id="faq-collapse-five"
                          class="accordion-collapse collapse"
                          aria-labelledby="faq-five"
                          data-bs-parent="#faq-main"
                        >
                          <div class="accordion-body text-pre-line">
                            API Pro accounts will be activated within 24 hours
                            after username and email has been received.
                            <i>
                              *Please make sure not to close the browser after
                              payment. The system will prompt a form for you to
                              provide a registered username and email after
                              payment is successful.
                            </i>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="faq-six">
                          <button
                            class="accordion-button collapsed fw-medium"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-collapse-six"
                            aria-expanded="false"
                            aria-controls="faq-collapse-six"
                          >
                            How does Renewal work for API Pro accounts?
                          </button>
                        </h2>
                        <div
                          id="faq-collapse-six"
                          class="accordion-collapse collapse"
                          aria-labelledby="faq-six"
                          data-bs-parent="#faq-main"
                        >
                          <div class="accordion-body">
                            <p>
                              Stripe billing is auto-renewed by default. Unless
                              you cancel your subscription plan before your
                              billing date, you authorise us to automatically
                              charge the subscription fee for the next billing
                              cycle to your account.
                            </p>
                            <p>
                              The billing portal will provide an auto-billing
                              date where information such as a renewal
                              subscription term that will begin automatically
                              after the initial subscription term or another
                              renewal term will be reflected in your account
                              unless you cancel or terminate prior to the
                              commencement of new term.
                            </p>
                            <p>
                              Kindly contact us should you wish to turn the
                              auto-renewal option off.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p class="small mb-8">
                      Please note that this FAQ forms part of PolygonScan's
                      Terms of Service and it constitutes legally binding terms
                      on the services provided by PolygonScan. For more
                      information, please refer to PolygonScan
                      <a href="/apiterms">API Terms of Service</a>.
                    </p>
                    <a
                      class="card hover:bg-secondary transition-all"
                      target="_blank"
                      href="https://docs.polygonscan.com"
                    >
                      <div class="card-body d-flex gap-3 p-5">
                        <div>
                          <span
                            class="bg-primary border-opacity-25 text-white fs-70x content-center rounded-pill mx-auto"
                            style={{ width: "3.25rem", height: "3.25rem" }}
                          >
                            <i class="fal fa-code fs-4">
                              <FaCode />
                            </i>
                          </span>
                        </div>
                        <div class="d-flex flex-column flex-md-row align-items-md-center gap-2 w-100">
                          <div class="text-dark flex-grow-1">
                            <h3 class="h5 mb-1">API Documentation</h3>
                            <span>
                              Get started with PolygonScan documentation.
                            </span>
                          </div>
                          <div class="text-nowrap">
                            View Documentation
                            <i class="far fa-arrow-up-right ms-1">
                              <RiArrowRightUpLine />
                            </i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </section>

              <section id="contactSection" class="offset-scroll">
                <div class="row justify-content-center text-center mb-4">
                  <div class="col-sm-10 col-lg-8 col-xl-6">
                    <h2 class="h4">Contact Us</h2>
                    <p class="fs-base">
                      If you have any questions on the PolygonScan APIs, ask
                      them here!
                    </p>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <div class="card bg-light shadow-none p-6">
                      <p class="mt-0 mb-2">
                        <span id="ContentPlaceHolder1_lblResult"></span>
                      </p>
                      <div action="#" class="row g-5">
                        <div class="col-md-6 js-form-message">
                          <label for="name" class="form-label">
                            Contact Name
                            <span class="text-danger">*</span>
                          </label>
                          <input
                            name="ctl00$ContentPlaceHolder1$txtName"
                            type="text"
                            maxlength="150"
                            id="ContentPlaceHolder1_txtName"
                            class="form-control py-2"
                            data-msg="Please enter your name"
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                            required
                            placeholder="Ex. John Doe"
                          />
                        </div>
                        <div class="col-md-6 js-form-message">
                          <label for="companyEmail" class="form-label">
                            Company Email Address
                            <span class="text-danger">*</span>
                          </label>
                          <input
                            name="ctl00$ContentPlaceHolder1$txtEmail"
                            maxlength="150"
                            id="ContentPlaceHolder1_txtEmail"
                            class="form-control py-2"
                            type="email"
                            data-msg="Please enter a valid email address"
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                            required
                            placeholder="Ex. johndoes@example.com"
                          />
                        </div>
                        <div class="col-12 js-form-message">
                          <label for="message" class="form-label">
                            Message <span class="text-danger">*</span>
                          </label>
                          <textarea
                            name="ctl00$ContentPlaceHolder1$txtComments"
                            rows="5"
                            cols="20"
                            id="ContentPlaceHolder1_txtComments"
                            class="form-control py-2"
                            placeholder="Please provide as much information as possible."
                            required
                            data-msg="Please enter a message."
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                          ></textarea>
                        </div>
                        <div class="d-flex dsnpyelw5zm">
                          <div
                            class="g-recaptcha"
                            data-sitekey="6Lf8Z8waAAAAACfwLnKX5lyIGR6BvLDA9DelCrws"
                          ></div>
                        </div>
                        <div class="text-center">
                          <input
                            type="submit"
                            name="ctl00$ContentPlaceHolder1$btnSubmit"
                            value="Send Message"
                            id="ContentPlaceHolder1_btnSubmit"
                            class="btn btn-lg btn-primary py-2 px-4"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Apis;
