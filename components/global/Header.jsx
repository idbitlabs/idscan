import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
//ICON
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowsRotate, FaRegHardDrive } from "react-icons/fa6";
import { RiDownload2Fill } from "react-icons/ri";
import {
  MdAttachMoney,
  MdLocalGasStation,
  MdSavedSearch,
} from "react-icons/md";
import { LuArrowRightLeft } from "react-icons/lu";
import { GrNetworkDrive } from "react-icons/gr";
import { TiInfoOutline } from "react-icons/ti";
import { AiOutlineVerified } from "react-icons/ai";

//INTERNAL IMPORT
import { CONTEXT } from "../../context/ContextProvider";

const Header = () => {
  const { connectWallet } = useContext(CONTEXT);
  const [auth, setAuth] = useState(true);
  return (
    <header id="masterHeader" class="header border-bottom d-print-none">
      <nav class="navbar navbar-expand-lg navbar-light py-3 py-lg-0">
        <div class="container-xxl position-relative">
          <a
            href="/"
            class="navbar-brand"
            target="_parent"
            aria-label="PolygonScan"
          >
            <img
              width="160"
              data-img-theme="light"
              src="/logo.png"
              alt="PolygonScan Logo"
            />
          </a>

          <div class="d-flex align-items-center gap-4">
            <a href="/login" class="link-dark d-block d-lg-none">
              {auth && (
                <>
                  {" "}
                  <i class="far fa-user-circle me-1"></i> Sign In
                </>
              )}
            </a>

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
                  class="nav-link active"
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
                      href="/blocksForked"
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
                    <a href="/nftTopContracts" id="LI63" class="dropdown-item">
                      Top NFTs
                    </a>
                  </li>
                  <li>
                    <a href="/nftTopMints" id="LI67" class="dropdown-item">
                      Top Mints
                    </a>
                  </li>
                  <li>
                    <a href="/nftTrades" id="LI64" class="dropdown-item">
                      Latest Trades
                    </a>
                  </li>
                  <li>
                    <a href="/nftTransfers" id="LI65" class="dropdown-item">
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
                            <i class="far fa-arrows-rotate dropdown-item-icon fa-fw me-1">
                              <FaArrowsRotate />
                            </i>
                            Unit Converter
                          </a>
                        </li>
                        <li>
                          <a href="/exportData" id="LI51" class="dropdown-item">
                            <i class="far fa-download fa-fw me-1">
                              <RiDownload2Fill />
                            </i>
                            CSV Export
                          </a>
                        </li>
                        <li>
                          <a
                            href="/balancecheck-tool"
                            id="LI52"
                            class="dropdown-item"
                          >
                            <i class="far fa-file-invoice-dollar fa-fw me-1">
                              <MdAttachMoney />
                            </i>
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
                            <i class="far fa-gas-pump dropdown-item-icon fa-fw me-1">
                              <MdLocalGasStation />
                            </i>
                            Gas Tracker
                          </a>
                        </li>
                        <li>
                          <a href="/dex" id="LI4" class="dropdown-item">
                            <i class="far fa-arrow-right-arrow-left dropdown-item-icon fa-fw me-1">
                              <LuArrowRightLeft />
                            </i>
                            DEX Tracker
                          </a>
                        </li>
                        <li>
                          <a
                            href="/nodetracker"
                            id="LI46"
                            class="dropdown-item"
                          >
                            <i class="far fa-server dropdown-item-icon fa-fw me-1">
                              <FaRegHardDrive />
                            </i>
                            Node Tracker
                          </a>
                        </li>
                        <li>
                          <a href="/labelcloud" id="LI41" class="dropdown-item">
                            <i class="far fa-signs-post dropdown-item-icon fa-fw me-1">
                              <GrNetworkDrive />
                            </i>
                            Label Cloud
                          </a>
                        </li>
                        <li>
                          <a
                            href="/name-lookup"
                            id="LI26"
                            class="dropdown-item"
                          >
                            <i class="far fa-magnifying-glass-chart dropdown-item-icon fa-fw me-1">
                              <MdSavedSearch />
                            </i>
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
                            <i class="far fa-shield-keyhole dropdown-item-icon fa-fw me-1">
                              <TiInfoOutline />
                            </i>
                            Token Approvals
                            <span class="badge border bg-light text-muted">
                              Beta
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/tokenapprovalchecker"
                            id="LI29"
                            class="dropdown-item"
                          >
                            <i class="far fa-signature-lock dropdown-item-icon fa-fw me-1">
                              <AiOutlineVerified />
                            </i>
                            Verified Signature
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
                    <a href="#" class="dropdown-item active">
                      Infinity Mainnet
                    </a>
                  </li>
                  <li>
                    <a href="#" class="dropdown-item">
                      zkEVM Mainnet
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a href="#" class="dropdown-item">
                      Infinity Testnet
                    </a>
                  </li>
                  <li>
                    <a href="#" class="dropdown-item">
                      zkEVM Testnet
                    </a>
                  </li>
                  <li>
                    <a href="#" class="dropdown-item">
                      Cardona Testnet
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item align-self-center d-none d-lg-block">
                <span class="text-secondary">|</span>
              </li>
              {auth ? (
                <li class="nav-item d-none d-lg-block">
                  <a href="/login" class="nav-link">
                    {/* <a onClick={() => connectWallet()} class="nav-link"> */}
                    <i class="far fa-user-circle me-1"></i> Sign In
                  </a>
                </li>
              ) : (
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="javascript:;"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="far fa-user-circle me-1"></i>mrtiobit
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-border"
                    style={{ minWidth: "14rem", right: "0", left: "auto" }}
                  >
                    <li>
                      <a href="/myaccount" class="dropdown-item">
                        {" "}
                        My Profile{" "}
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a href="/myaddress" class="dropdown-item">
                        {" "}
                        Watch List{" "}
                      </a>
                    </li>
                    <li>
                      <a href="/mynotes_tx" class="dropdown-item">
                        Txn Private Notes
                      </a>
                    </li>
                    <li>
                      <a href="/mynotes_address" class="dropdown-item">
                        Private Name Tags
                      </a>
                    </li>
                    <li>
                      <a href="/mytokenignore" class="dropdown-item">
                        Token Ignore List
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a href="/myapikey" class="dropdown-item">
                        API Keys{" "}
                      </a>
                    </li>
                    <li>
                      <a href="/myverify_address" class="dropdown-item">
                        Verified Address
                      </a>
                    </li>
                    <li>
                      <a href="/mycustomabi" class="dropdown-item">
                        Custom ABI
                      </a>
                    </li>
                    <li>
                      <a href="/myadvancedfilters" class="dropdown-item">
                        Advanced Filter
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        class="btn btn-sm btn-soft-primary d-lg-block py-2 px-4"
                        href="#"
                      >
                        <i class="far fa-sign-out me-1"></i> Sign Out
                      </a>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
