import React, { useState, useEffect, useContext } from "react";

import { CONTEXT } from "../../context/ContextProvider";
import Input from "./Input";
import Banner from "./Banner";
import { shortenAddress, convertIntoMatic } from "../../utils/index";

const BalancecheckTool = () => {
  const { USER_BALANCE, TOKEN_BALANCE, TOKEN_SUPPLY_ERC20 } =
    useContext(CONTEXT);

  const [balance, setBalance] = useState();
  const [active, setActive] = useState("1");

  const [token, setToken] = useState({
    address: "",
    user: "",
  });

  const handleFormFieldChange = (fileName, e) => {
    setToken({ ...token, [fileName]: e.target.value });
  };

  const checkBalance = async (address) => {
    try {
      const balance = await USER_BALANCE(address);
      setBalance(balance?.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const checkERC20Balance = async (token) => {
    try {
      const balance = await TOKEN_BALANCE(token.address, token.user);
      setBalance(balance?.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const checkSupply = async (address) => {
    try {
      const balance = await TOKEN_SUPPLY_ERC20(address);
      setBalance(balance?.data.result);
      console.log(balance);
    } catch (error) {
      console.log(error);
    }
  };

  const callFunction = (token) => {
    if (active == "1") {
      checkBalance(token.user);
    } else if (active == "2") {
      checkERC20Balance(token);
    } else {
      checkSupply(token.address);
    }
  };
  return (
    <main id="content" class="main-content" role="main">
      <Input />
      <Banner />
      <div class="container-xxl pt-5 pb-20">
        <div class="row gx-lg-8 gx-xl-16">
          <aside class="col-lg-3 col-xxl-2 border-lg-end mb-4">
            <div class="d-block d-lg-none mb-2">
              <button
                class="btn btn-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#asideNav"
                aria-controls="asideNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="far fa-bars me-1"></i>Tools Menu
              </button>
            </div>

            <nav
              class="navbar-expand-lg position-sticky"
              style={{ top: "4.5rem" }}
            >
              <div class="collapse navbar-collapse flex-column" id="asideNav">
                <ul
                  id="section-chart"
                  class="nav nav-pills nav-pills-flush flex-column w-100 gap-1"
                >
                  <li class="nav-item">
                    <a
                      href="/exportData"
                      id="ContentPlaceHolder1_ToolPagesNavigation_Control1_hpDownloadData"
                      class="nav-link fw-medium py-2 px-3"
                    >
                      CSV Export
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="/unitconverter"
                      id="ContentPlaceHolder1_ToolPagesNavigation_Control1_hpUnitCovnertor"
                      class="nav-link fw-medium py-2 px-3"
                    >
                      Unit Converter
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="/balancecheck-tool"
                      id="ContentPlaceHolder1_ToolPagesNavigation_Control1_hpBalanceChecker"
                      class="nav-link fw-medium py-2 px-3 active"
                    >
                      Account Balance Checker
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="/tokencheck-tool"
                      id="ContentPlaceHolder1_ToolPagesNavigation_Control1_hpTokenSupplyChecker"
                      class="nav-link fw-medium py-2 px-3"
                    >
                      Token Supply Checker
                    </a>
                  </li>
                  <li class="nav-item">
                    <hr class="my-3" />
                  </li>
                  <li class="nav-item">
                    <a
                      href="/find-similar-contracts"
                      id="ContentPlaceHolder1_ToolPagesNavigation_Control1_hpSimilarContract"
                      class="nav-link fw-medium py-2 px-3"
                    >
                      Similar Contract Search
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="/vyper"
                      id="ContentPlaceHolder1_ToolPagesNavigation_Control1_hpVyperOnline"
                      class="nav-link fw-medium py-2 px-3"
                    >
                      Vyper Online Compiler
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="/opcode-tool"
                      id="ContentPlaceHolder1_ToolPagesNavigation_Control1_hpBytecodeOpcode"
                      class="nav-link fw-medium py-2 px-3"
                    >
                      Bytecode to Opcode
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="/pushTx"
                      id="ContentPlaceHolder1_ToolPagesNavigation_Control1_hpBroadcast"
                      class="nav-link fw-medium py-2 px-3"
                    >
                      Broadcast Transaction
                    </a>
                  </li>
                  <li class="nav-item">
                    <hr class="my-3" />
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link fw-medium d-flex justify-content-between align-items-center group py-2 px-3"
                      href="/code-reader"
                    >
                      Code Reader
                      <i class="far fa-arrow-up-right text-muted group-hover ms-1"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link fw-medium d-flex justify-content-between align-items-center group py-2 px-3"
                      href="/tokenapprovalchecker"
                    >
                      Token Approvals
                      <i class="far fa-arrow-up-right text-muted group-hover ms-1"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link fw-medium d-flex justify-content-between align-items-center group py-2 px-3"
                      href="/verifiedSignatures"
                    >
                      Verify Signatures
                      <i class="far fa-arrow-up-right text-muted group-hover ms-1"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link fw-medium d-flex justify-content-between align-items-center group py-2 px-3"
                      href="/contractdiffchecker"
                    >
                      Contract Diff Checker
                      <i class="far fa-arrow-up-right text-muted group-hover ms-1"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>

          <div class="col-lg-9 col-xxl-10">
            <div class="mb-5">
              <h2 class="fs-default">Account Balance Checker (MATIC)</h2>
              <p>
                You can Lookup the Account (MATIC) Historical Balance at a
                specific Block No or Date
              </p>

              <div class="d-lg-none mb-2">
                <span id="ContentPlaceHolder1_litBanner"></span>
              </div>
            </div>

            <div id="ctl00" class="js-validate">
              <div class="card shadow-none">
                <div class="card-body">
                  <div class="row gy-4 mb-4">
                    <div class="col-xl-6">
                      <label for="select-content" class="form-label">
                        Choose an option
                      </label>
                      <select
                        onChange={(e) => setActive(e.target.value)}
                        class="form-select"
                        required
                      >
                        <option selected="selected" value="1">
                          MATIC
                        </option>
                        <option value="2">Token (ERC-20)</option>
                        <option value="3">Token Supply</option>
                      </select>
                    </div>
                  </div>
                  <div class="row gy-4 mb-4">
                    {active == "1" ? (
                      <div class="col-xl-6">
                        <label class="form-label">
                          Your Token Balance
                          <span class="text-danger">*</span>
                        </label>
                        <div class="js-form-message">
                          <input
                            class="form-control"
                            type="text"
                            placeholder="0x..."
                            required
                            onChange={(e) => handleFormFieldChange("user", e)}
                          />
                        </div>
                      </div>
                    ) : active == "2" ? (
                      <>
                        <div class="col-xl-6">
                          <label class="form-label">
                            Token Address
                            <span class="text-danger">*</span>
                          </label>
                          <div class="js-form-message">
                            <input
                              class="form-control"
                              type="text"
                              placeholder="0x..."
                              required
                              onChange={(e) =>
                                handleFormFieldChange("address", e)
                              }
                            />
                          </div>
                        </div>
                        <div class="col-xl-6">
                          <label class="form-label">
                            User Address
                            <span class="text-danger">*</span>
                          </label>
                          <div class="js-form-message">
                            <input
                              class="form-control"
                              type="text"
                              placeholder="0x..."
                              required
                              onChange={(e) => handleFormFieldChange("user", e)}
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <div class="col-xl-6">
                        <label class="form-label">
                          Total Token Sypply
                          <span class="text-danger">*</span>
                        </label>
                        <div class="js-form-message">
                          <input
                            class="form-control"
                            type="text"
                            placeholder="0x..."
                            required
                            onChange={(e) =>
                              handleFormFieldChange("address", e)
                            }
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  {balance ? (
                    <div class="checkbox-content">
                      <div class="row mb-4">
                        <div class="col-xl-6">
                          <label class="form-label">
                            Supply / Token Balance / Matic
                          </label>
                          <input
                            class="js-range-datepicker form-control flatpickr-input w-100"
                            value={convertIntoMatic(balance)}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div class="card-footer d-flex align-items-center gap-2 bg-light">
                  <a
                    onClick={() => callFunction(token)}
                    class="btn btn-primary px-4"
                  >
                    Lookup
                  </a>
                  <a
                    onClick={() => window.location.reload()}
                    class="btn btn-ghost-white px-4"
                  >
                    Reset
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BalancecheckTool;
