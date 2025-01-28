import React, { useState, useEffect, useContext } from "react";
import Input from "./Input";
import Banner from "./Banner";

import { CONTEXT } from "../../context/ContextProvider";

const OpcodeTool = () => {
  const { GET_CONTRACT_ABI, GET_CONTRACT_SOURCE_CODE, GET_CONTRACT_CREATOR } =
    useContext(CONTEXT);

  const [contractAddress, setContractAddress] = useState();
  const [codeAddress, setCodeAddress] = useState();
  const [contractAbi, setContractAbi] = useState();
  const [contractSourceCode, setContractSourceCode] = useState();
  const [creator, setCreator] = useState();
  const [creatorDetails, setCreatorDetails] = useState();

  const getABI = async (address) => {
    try {
      console.log(address);
      const abi = await GET_CONTRACT_ABI(address);
      setContractAbi(abi?.data.result);
      console.log(abi?.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const getSourceCode = async (address) => {
    try {
      console.log(address);
      const code = await GET_CONTRACT_SOURCE_CODE(address);
      setContractSourceCode(code?.data.result[0].SourceCode);
      console.log(code?.data.result[0].SourceCode);
    } catch (error) {
      console.log(error);
    }
  };

  const getCreator = async (address) => {
    try {
      console.log(address);
      const code = await GET_CONTRACT_CREATOR(address);
      setCreatorDetails(code?.data.result);
      console.log(code?.data.result);
    } catch (error) {
      console.log(error);
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
                      class="nav-link fw-medium py-2 px-3"
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
                      class="nav-link fw-medium py-2 px-3 active"
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
            {/* //ABI */}
            <div class="mb-5">
              <h2 class="fs-default">
                Get ABI of varified contract on the chain
              </h2>
              <p>
                Attempts to decode the low level Contract Bytecodes to Opcodes.
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
                      <label class="form-label">
                        Token Contract Address<span class="text-danger">*</span>
                      </label>
                      <div class="js-form-message">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="0x..."
                          required
                          onChange={(e) => setContractAddress(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <label class="form-label" for="contractBytecode">
                    Get Verified Contract ABI
                  </label>
                  <textarea
                    value={contractAbi}
                    rows="10"
                    cols="20"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="card-footer bg-light">
                  <a
                    onClick={() => getABI(contractAddress)}
                    class="btn btn-primary"
                  >
                    Get Contract ABI
                  </a>
                </div>
              </div>
            </div>
            {/* //CONTRACT */}

            <div class="mt-10 mb-5">
              <h2 class="fs-default">Get Source Code Of Deploy Contract</h2>
              <p>
                Attempts to decode the low level Contract Source Code Of Deploy.
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
                      <label class="form-label">
                        Token Contract Address<span class="text-danger">*</span>
                      </label>
                      <div class="js-form-message">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="0x..."
                          required
                          onChange={(e) => setCodeAddress(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <label class="form-label" for="contractBytecode">
                    Get Verified Contract Source Code
                  </label>
                  <textarea
                    value={contractSourceCode}
                    rows="10"
                    cols="20"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="card-footer bg-light">
                  <a
                    onClick={() => getSourceCode(codeAddress)}
                    class="btn btn-primary"
                  >
                    Get Contract Source Code
                  </a>
                </div>
              </div>
            </div>
            {/* //CREATOR */}
            <div class="mt-10 mb-5">
              <h2 class="fs-default">Get Contract Creator Details</h2>
              <p>
                Attempts to decode the low level Contract Source Code Of Deploy.
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
                      <label class="form-label">
                        Contract Address<span class="text-danger">*</span>
                      </label>
                      <div class="js-form-message">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="0x..."
                          required
                          onChange={(e) => setCreator(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  {creatorDetails && (
                    <>
                      <p>Creator: {creatorDetails[0]?.contractCreator}</p>
                      <p>Hash: {creatorDetails[0]?.txHash}</p>
                      <p>Contract: {creatorDetails[0]?.contractAddress}</p>
                    </>
                  )}
                </div>

                <div class="card-footer bg-light">
                  <a
                    onClick={() => getCreator(creator)}
                    class="btn btn-primary"
                  >
                    Get Contract Creator
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

export default OpcodeTool;
