import React from "react";

const HeaderTwo = () => {
  return (
    <header id="masterHeader" class="header border-bottom d-print-none">
      <nav class="navbar navbar-expand-lg navbar-light py-3 py-lg-0">
        <div class="container-xxl position-relative">
          <a
            class="navbar-brand"
            href="/"
            target="_parent"
            aria-label="PolygonScan"
          >
            <img
              width="160"
              data-img-theme="light"
              src="./assets/poly/images/svg/logos/logo-light.svg?v=24.2.2.0"
              alt="PolygonScan Logo"
            />
            <img
              width="160"
              data-img-theme="dim"
              src="./assets/poly/images/svg/logos/logo-dim.svg?v=24.2.2.0"
              alt="PolygonScan Logo"
            />
            <img
              width="160"
              data-img-theme="dark"
              src="./assets/poly/images/svg/logos/logo-dark.svg?v=24.2.2.0"
              alt="PolygonScan Logo"
            />
          </a>
          <div class="d-flex align-items-center gap-4">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav gap-1 gap-lg-0 pt-4 pt-lg-0">
              <li class="nav-item">
                <a
                  href="/"
                  id="LI_default"
                  class="nav-link"
                  aria-current="page"
                >
                  Home
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  href="javascript:;"
                  id="LI_blockchain"
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blockchain
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-border"
                  style={{ minWidth: "14rem" }}
                >
                  <li>
                    <a href="/txs" id="LI12" class="dropdown-item">
                      Transactions
                    </a>
                  </li>
                  <li>
                    <a href="/txsPending" id="LI16" class="dropdown-item">
                      Pending Transactions
                    </a>
                  </li>
                  <li>
                    <a href="/txsInternal" id="LI14" class="dropdown-item">
                      Contract Internal Transactions
                    </a>
                  </li>
                  <li>
                    <a href="/txnbridge" id="LI77" class="dropdown-item">
                      Plasma Deposit Transactions
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a href="/blocks" id="LI_blocks" class="dropdown-item">
                      View Blocks
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blocks_forked"
                      id="LI_blocks2"
                      class="dropdown-item"
                    >
                      Forked Blocks (Reorgs)
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      href="/accounts"
                      id="LI_accountall"
                      class="dropdown-item"
                    >
                      Top Accounts
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contractsVerified"
                      id="LI_contract_verified"
                      class="dropdown-item"
                    >
                      Verified Contracts
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  href="javascript:;"
                  id="LI_tokens"
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tokens
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-border"
                  style={{ minWidth: "14rem" }}
                >
                  <li>
                    <a href="/tokens" id="LI21" class="dropdown-item">
                      Top Tokens <span class="small text-muted">(ERC-20)</span>
                    </a>
                  </li>
                  <li>
                    <a href="/tokentxns" id="LI1" class="dropdown-item">
                      Token Transfers
                      <span class="small text-muted">(ERC-20)</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  href="javascript:;"
                  id="LI_Nfts"
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  NFTs
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-border"
                  style={{ minWidth: "14rem" }}
                >
                  <li>
                    <a
                      href="/nft-top-contracts"
                      id="LI63"
                      class="dropdown-item"
                    >
                      Top NFTs
                    </a>
                  </li>
                  <li>
                    <a href="/nft-top-mints" id="LI67" class="dropdown-item">
                      Top Mints
                    </a>
                  </li>
                  <li>
                    <a href="/nft-trades" id="LI64" class="dropdown-item">
                      Latest Trades
                    </a>
                  </li>
                  <li>
                    <a href="/nft-transfers" id="LI65" class="dropdown-item">
                      Latest Transfers
                    </a>
                  </li>
                  <li>
                    <a href="/nft-latest-mints" id="LI66" class="dropdown-item">
                      Latest Mints
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  href="javascript:;"
                  id="LI_resources"
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-border"
                  style={{ minWidth: "14rem" }}
                >
                  <li>
                    <a href="/charts" id="LI_charts2" class="dropdown-item">
                      Charts &amp; Stats
                    </a>
                  </li>
                  <li>
                    <a href="/topstat" id="LI_topstat" class="dropdown-item">
                      Top Statistics
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  href="#"
                  id="li_developers"
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Developers
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-border"
                  style={{ minWidth: "14rem" }}
                >
                  <li>
                    <a href="/apis" id="LI5" class="dropdown-item">
                      API Plans
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.polygonscan.com"
                      id="LI6"
                      class="dropdown-item"
                      target="_blank"
                    >
                      API Documentation
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a href="/code-reader" id="A1" class="dropdown-item">
                      Code Reader
                      <span class="badge border bg-light text-muted">Beta</span>
                    </a>
                  </li>
                  <li>
                    <a href="/verifyContract" id="LI17" class="dropdown-item">
                      Verify Contract
                    </a>
                  </li>
                  <li>
                    <a
                      href="/find-similar-contracts"
                      id="LI55"
                      class="dropdown-item"
                    >
                      Similar Contract Search
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contractdiffchecker"
                      id="LI54"
                      class="dropdown-item"
                    >
                      Contract Diff Checker
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a href="/vyper" id="LI27" class="dropdown-item">
                      Vyper Online Compiler
                    </a>
                  </li>
                  <li>
                    <a href="/opcode-tool" id="LI24" class="dropdown-item">
                      Bytecode to Opcode
                    </a>
                  </li>
                  <li>
                    <a href="/pushTx" id="LI10" class="dropdown-item">
                      Broadcast Transaction
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown position-initial">
                <a
                  href="javascript:;"
                  id="LI_services2"
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <div class="dropdown-menu dropdown-menu-border dropdown-menu-mega">
                  <div class="row">
                    <div class="col-lg order-last order-lg-first">
                      <div class="d-flex flex-column bg-light h-100 rounded-3 p-5">
                        <div>
                          <h6>Tools &amp; Services</h6>
                          <p>
                            Discover more of PolygonScan's tools and services in
                            one place.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm py-5">
                      <h6 class="px-3 mb-3">Tools</h6>
                      <ul class="list-unstyled">
                        <li>
                          <a
                            href="/unitconverter"
                            id="LI50"
                            class="dropdown-item"
                          >
                            <i class="far fa-arrows-rotate dropdown-item-icon fa-fw me-1"></i>
                            Unit Converter
                          </a>
                        </li>
                        <li>
                          <a href="/exportData" id="LI51" class="dropdown-item">
                            <i class="far fa-download fa-fw me-1"></i>CSV Export
                          </a>
                        </li>
                        <li>
                          <a
                            href="/balancecheck-tool"
                            id="LI52"
                            class="dropdown-item"
                          >
                            <i class="far fa-file-invoice-dollar fa-fw me-1"></i>
                            Account Balance Checker
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-sm py-5">
                      <h6 class="px-3 mb-3">Explore</h6>
                      <ul class="list-unstyled">
                        <li>
                          <a href="/gastracker" id="LI19" class="dropdown-item">
                            <i class="far fa-gas-pump dropdown-item-icon fa-fw me-1"></i>
                            Gas Tracker
                          </a>
                        </li>
                        <li>
                          <a href="/dex" id="LI4" class="dropdown-item">
                            <i class="far fa-arrow-right-arrow-left dropdown-item-icon fa-fw me-1"></i>
                            DEX Tracker
                          </a>
                        </li>
                        <li>
                          <a
                            href="/nodetracker"
                            id="LI46"
                            class="dropdown-item"
                          >
                            <i class="far fa-server dropdown-item-icon fa-fw me-1"></i>
                            Node Tracker
                          </a>
                        </li>
                        <li>
                          <a href="/labelcloud" id="LI41" class="dropdown-item">
                            <i class="far fa-signs-post dropdown-item-icon fa-fw me-1"></i>
                            Label Cloud
                          </a>
                        </li>
                        <li>
                          <a
                            href="/name-lookup"
                            id="LI26"
                            class="dropdown-item"
                          >
                            <i class="far fa-magnifying-glass-chart dropdown-item-icon fa-fw me-1"></i>
                            Domain Name Lookup
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-sm py-5">
                      <h6 class="px-3 mb-3">Services</h6>
                      <ul class="list-unstyled">
                        <li>
                          <a
                            href="/tokenapprovalchecker"
                            id="LI49"
                            class="dropdown-item"
                          >
                            <i class="far fa-shield-keyhole dropdown-item-icon fa-fw me-1"></i>
                            Token Approvals
                            <span class="badge border bg-light text-muted">
                              Beta
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/verifiedSignatures"
                            id="LI29"
                            class="dropdown-item"
                          >
                            <i class="far fa-signature-lock dropdown-item-icon fa-fw me-1"></i>
                            Verified Signature
                          </a>
                        </li>
                        <li>
                          <a
                            href="/advanced-filter"
                            id="LI31"
                            class="dropdown-item"
                          >
                            <i class="far fa-filters dropdown-item-icon fa-fw me-1"></i>
                            Advanced Filter
                            <span class="badge border bg-light text-muted">
                              Beta
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li class="nav-item dropdown d-block d-lg-none">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Explorers
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-border"
                  style={{ minWidth: "14rem" }}
                >
                  <li>
                    <a
                      class="dropdown-item active"
                      href="https://polygonscan.com"
                    >
                      Polygon Mainnet
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://zkevm.polygonscan.com"
                    >
                      zkEVM Mainnet
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://mumbai.polygonscan.com"
                    >
                      Mumbai Testnet
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://testnet-zkevm.polygonscan.com"
                    >
                      zkEVM Testnet
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://cardona-zkevm.polygonscan.com"
                    >
                      Cardona Testnet
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown d-block d-lg-none">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Appearance &amp; Settings
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-border"
                  style={{ minWidth: "14rem" }}
                >
                  <li>
                    <button
                      type="button"
                      class="dropdown-item theme-btn active"
                      data-bs-theme-value="light"
                      onclick="setThemeMode('light');"
                    >
                      <i
                        class="far fa-sun-bright fa-fw dropdown-item-icon theme-icon me-1"
                        data-href="#fa-sun-bright"
                      ></i>
                      Light
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="dropdown-item theme-btn"
                      data-bs-theme-value="dim"
                      onclick="setThemeMode('dim');"
                    >
                      <i
                        class="far fa-moon-stars fa-fw dropdown-item-icon theme-icon me-1"
                        data-href="#fa-moon-stars"
                      ></i>
                      Dim
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="dropdown-item theme-btn"
                      data-bs-theme-value="dark"
                      onclick="setThemeMode('dark');"
                    >
                      <i
                        class="far fa-moon-stars fa-fw dropdown-item-icon theme-icon me-1"
                        data-href="#fa-moon"
                      ></i>
                      Dark
                    </button>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="/settings">
                      <i class="far fa-gear fa-fw dropdown-item-icon me-1"></i>
                      Site Settings <i class="far fa-arrow-right ms-1"></i>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item align-self-center d-none d-lg-block">
                <span class="text-secondary">|</span>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="javascript:;"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="far fa-user-circle me-1"></i>DAULATHUSSAIN
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-border"
                  style={{ minWidth: "14rem", right: "0", left: "auto" }}
                >
                  <li>
                    <a class="dropdown-item" href="/myaccount">
                      {" "}
                      My Profile{" "}
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="/myaddress">
                      {" "}
                      Watch List{" "}
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/mynotes_tx">
                      Txn Private Notes
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/mynotes_address">
                      Private Name Tags
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/mytokenignore">
                      Token Ignore List
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="/myapikey">
                      {" "}
                      API Keys{" "}
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/myverify_address">
                      Verified Address
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/mycustomabi">
                      Custom ABI
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/myadvancedfilters">
                      Advanced Filter
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      class="btn btn-sm btn-soft-primary d-lg-block py-2 px-4"
                      href="/login?cmd=logout"
                    >
                      <i class="far fa-sign-out me-1"></i> Sign Out
                    </a>
                  </li>
                </ul>
              </li>

              {/* ?? */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderTwo;
