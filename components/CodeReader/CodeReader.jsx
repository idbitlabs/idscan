import React from "react";
import { IoEyeOffSharp } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import { HiOutlineSparkles } from "react-icons/hi";

const CodeReader = () => {
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
        value="(Gas Price * Gas Used by Txns) in POL"
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

      <main class="main-content" role="main" style={{ minHeight: "40rem" }}>
        <div class="container-xxl pt-5 pb-20 h-100">
          <div class="row gx-lg-8 gx-xl-12">
            <aside class="col-lg-4 mb-md-2">
              <h1 class="h5">
                Code Reader
                <span class="badge border bg-white fw-medium fs-sm text-dark ms-1">
                  Beta
                </span>
              </h1>
              <p>
                Generate instant answers for your smart contract questions using
                OpenAI.
                <a
                  href="https://info.polygonscan.com//code-reader/"
                  rel="noopener"
                  target="blank"
                >
                  Read more
                </a>
                .
              </p>
              <form onsubmit="return false">
                <div class="js-form-message form-group mb-4">
                  <label for="inputOpenAIApiKey" class="form-label">
                    OpenAI API Key <span class="text-danger me-2">*</span>
                    <a
                      rel="nofollow noopener"
                      target="blank"
                      href="https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key"
                    >
                      Learn more
                    </a>
                  </label>
                  <div class="position-relative">
                    <input
                      type="password"
                      class="js-toggle-password form-control py-2"
                      name="password"
                      id="inputOpenAIApiKey"
                      placeholder="********"
                      data-hs-toggle-password-options='{
                                    "target": "#changePassTarget",
                                    "defaultClass": "far fa-eye-slash",
                                    "showClass": "far fa-eye",
                                    "classChangeTarget": "#changePassIcon"
                                }'
                    />
                    <span
                      class="content-center position-absolute top-0 py-1"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-title="Show/Hide OpenAI API Key"
                      style={{ right: "0.3rem" }}
                    >
                      <button
                        type="button"
                        class="btn btn-sm btn-ghost-white fs-70x"
                        id="changePassTarget"
                        tabindex="-1"
                        style={{ width: "2rem", height: "2rem" }}
                      >
                        <i id="changePassIcon" class="far fa-eye">
                          <IoEyeOffSharp />
                        </i>
                      </button>
                    </span>
                  </div>
                  <div class="small mt-2">
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="saveKeySwitcher"
                      />
                      <label class="form-check-label" for="saveKeySwitcher">
                        Save API Key for future use
                        <i
                          class="far fa-question-circle text-muted"
                          data-bs-toggle="popover"
                          data-bs-placement="top"
                          data-bs-trigger="hover"
                          data-bs-content="Your API key is stored in the browser only."
                        ></i>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="mb-5">
                  <label for="gptMode" class="form-label">
                    Choose GPT Model
                  </label>
                  <select
                    class="form-select py-2"
                    id="gptMode"
                    aria-label="GPT Mode"
                  >
                    <option value="0" selected>
                      GPT-3.5
                    </option>
                    <option value="1">GPT-4</option>
                  </select>
                  <div
                    class="mt-2 small text-yellow-600"
                    id="gptModeExtra"
                    style={{ display: "none" }}
                  >
                    Please ensure this API Key has access to GPT-4 Model.
                  </div>
                </div>

                <div class="mb-5">
                  <label class="form-label"> Examples </label>
                  <div class="d-flex flex-wrap gap-2">
                    <a
                      class="badge bg-white hover:bg-secondary border border-dark dark:border-white border-opacity-15 text-dark text-wrap fw-medium transition-all rounded-pill py-1.5 px-2"
                      href="javascript:;"
                      onclick="code_reader.exampleAction(this, '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', 'What does this contract do? What is its purpose in the context of the overall smart contract?')"
                    >
                      What does this contract do?
                    </a>
                    <a
                      class="badge bg-white hover:bg-secondary border border-dark dark:border-white border-opacity-15 text-dark text-wrap fw-medium transition-all rounded-pill py-1.5 px-2"
                      href="javascript:;"
                      onclick="code_reader.exampleAction(this, '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', 'What are the functions available in this contract?')"
                    >
                      What are the functions available in this contract?
                    </a>
                    <a
                      class="badge bg-white hover:bg-secondary border border-dark dark:border-white border-opacity-15 text-dark text-wrap fw-medium transition-all rounded-pill py-1.5 px-2"
                      href="javascript:;"
                      onclick="code_reader.exampleAction(this, '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', 'How can I mint this token?')"
                    >
                      How can I mint this token?
                    </a>
                    <a
                      class="badge bg-white hover:bg-secondary border border-dark dark:border-white border-opacity-15 text-dark text-wrap fw-medium transition-all rounded-pill py-1.5 px-2"
                      href="javascript:;"
                      onclick="code_reader.exampleAction(this, '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', 'How does SafeMath change the state of the contract? Does it modify any state variables or emit any events?')"
                    >
                      How does SafeMath change the contract's state
                    </a>
                  </div>
                </div>

                <div class="mb-5">
                  <label class="form-label" for="loadContractAddress">
                    Contract Address
                  </label>
                  <div class="input-group mb-2">
                    <input
                      type="text"
                      class="form-control py-2"
                      id="loadContractAddress"
                      placeholder="0x.."
                      aria-label="0x.."
                      aria-describedby="Load Contract Address"
                    />
                    <button
                      class="btn btn-primary py-2 px-4"
                      type="submit"
                      id="btnLoadContractAddress"
                      onclick="code_reader.loadContractSourceCode(this)"
                    >
                      Load
                    </button>
                  </div>
                  <div class="d-flex flex-wrap align-items-center gap-1">
                    <span class="small text-muted">Popular:</span>
                    <a
                      class="badge bg-white hover:bg-secondary border border-dark dark:border-white border-opacity-15 text-dark text-nowrap fw-medium transition-all rounded-pill py-1.5 px-2"
                      href="javascript:;"
                      data-value="0xc2132d05d31c914a87c6611c10748aeb04b58e8f"
                      onclick="code_reader.choosePreContractAddress(this)"
                    >
                      <span
                        class="hash-tag text-truncate"
                        style={{ maxWidth: "8rem" }}
                      >
                        USDT
                      </span>
                    </a>
                    <a
                      class="badge bg-white hover:bg-secondary border border-dark dark:border-white border-opacity-15 text-dark text-nowrap fw-medium transition-all rounded-pill py-1.5 px-2"
                      href="javascript:;"
                      data-value="0xa5e0829caced8ffdd4de3c43696c57f7d7a678ff"
                      onclick="code_reader.choosePreContractAddress(this)"
                    >
                      <span
                        class="hash-tag text-truncate"
                        style={{ maxWidth: "8rem" }}
                      >
                        Quickswap
                      </span>
                    </a>
                    <a
                      class="badge bg-white hover:bg-secondary border border-dark dark:border-white border-opacity-15 text-dark text-nowrap fw-medium transition-all rounded-pill py-1.5 px-2"
                      href="javascript:;"
                      data-value="0x00000000000000adc04c56bf30ac9d3c0aaf14dc"
                      onclick="code_reader.choosePreContractAddress(this)"
                    >
                      <span
                        class="hash-tag text-truncate"
                        style={{ maxWidth: "8rem" }}
                      >
                        Seaport
                      </span>
                    </a>
                    <a
                      class="badge bg-white hover:bg-secondary border border-dark dark:border-white border-opacity-15 text-dark text-nowrap fw-medium transition-all rounded-pill py-1.5 px-2"
                      href="javascript:;"
                      data-value="0x7ceb23fd6bc0add59e62ac25578270cff1b9f619"
                      onclick="code_reader.choosePreContractAddress(this)"
                    >
                      <span
                        class="hash-tag text-truncate"
                        style={{ maxWidth: "8rem" }}
                      >
                        WETH
                      </span>
                    </a>
                    <a
                      class="badge bg-white hover:bg-secondary border border-dark dark:border-white border-opacity-15 text-dark text-nowrap fw-medium transition-all rounded-pill py-1.5 px-2"
                      href="javascript:;"
                      data-value="0xc37d3c4326ab0e1d2b9d8b916bbdf5715f780fcf"
                      onclick="code_reader.choosePreContractAddress(this)"
                    >
                      <span
                        class="hash-tag text-truncate"
                        style={{ maxWidth: "8rem" }}
                      >
                        UD
                      </span>
                    </a>
                  </div>
                  <div id="divErrorContractSourceCode"></div>
                </div>

                <div
                  class="mb-5"
                  style={{ display: "none" }}
                  id="divContractName"
                >
                  <label class="form-label" for="contractName">
                    Contract Name:
                  </label>
                  <a
                    class="badge bg-secondary bg-opacity-15 border border-dark dark:border-white border-opacity-15 text-dark text-nowrap fw-medium transition-all py-1.5 px-2"
                    href="#"
                  >
                    <span
                      class="hash-tag text-truncate"
                      id="spanContractName"
                    ></span>
                  </a>
                </div>

                <div
                  class="mb-5"
                  style={{ display: "none" }}
                  id="divContractFiles"
                >
                  <label class="form-label">
                    Choose Contract Files
                    <span
                      class="badge border bg-light fw-medium text-dark rounded-pill ms-1"
                      id="spanCountContractFiles"
                    ></span>
                  </label>
                  <div
                    id="divChooseContractFiles"
                    class="list-group scrollbar-custom overflow-y-auto pe-1 me-n1"
                    style={{ maxWidth: "12rem" }}
                  ></div>
                </div>

                <div style={{ display: "none" }} id="divContractSourceCode">
                  <label for="sourceCodeTextarea" class="form-label">
                    Source Code
                    <i
                      class="far fa-question-circle text-muted"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      data-bs-trigger="hover"
                      data-bs-content="The AI will read through these specific lines of code."
                    ></i>
                  </label>
                  <textarea
                    class="form-control scrollbar-custom"
                    id="sourceCodeTextarea"
                    rows="5"
                    placeholder="// Contract Source Code .."
                  ></textarea>
                </div>
              </form>
            </aside>

            <div class="col-lg-8 border-lg-start">
              <div style={{ display: "none" }} id="divHistory">
                <div class="d-flex flex-wrap justify-content-between align-items-start mb-2">
                  <div></div>
                  <div class="d-flex align-items-center gap-2 small">
                    <button
                      id="btnSavedHistory"
                      class="btn btn-sm btn-white"
                      onclick="getCodeReaderPromptHistory(event)"
                    >
                      <i class="far fa-book-open"></i>
                    </button>
                    <div class="form-check form-switch" id="divSaveHistory">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="saveHistorySwitcher"
                        disabled
                      />
                      <label class="form-check-label" for="saveHistorySwitcher">
                        Save history
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="position-relative mb-3">
                <label class="form-label fw-medium" for="promtBox">
                  <i class="far fa-sparkles text-primary me-1.5">
                    <HiOutlineSparkles />
                  </i>
                  Prompt *
                </label>

                <textarea
                  class="js-textarea-type-message form-control p-4"
                  rows="1"
                  aria-label="With textarea"
                  placeholder="e.g. What’s a smart contract?"
                  maxlength="500"
                  id="txtPrompt"
                ></textarea>

                <div
                  class="d-flex align-items-end position-absolute"
                  style={{ right: "0.7rem", bottom: "0.7rem" }}
                >
                  <button
                    type="submit"
                    id="btnSubmitOpenAIApi"
                    class="btn btn-sm btn-primary content-center"
                    title="Send Message"
                    style={{ width: "2rem", height: "2rem" }}
                    onclick="code_reader.callOpenAiApi(this)"
                  >
                    <i class="fa fa-paper-plane-top">
                      <IoSend />
                    </i>
                  </button>
                </div>
              </div>
              <div id="divPormtAnswer" style={{ display: "none" }}>
                <div class="card shadow-none mb-3">
                  <div class="card-body" id="divPormt">
                    &nbsp;
                  </div>
                  <div class="card-footer bg-light" id="divAnswer">
                    &nbsp;
                  </div>
                </div>
                <p
                  id="divGeneratedOpenAI"
                  style={{ display: "none" }}
                  class="text-muted small"
                >
                  Answers are generated by
                  <a
                    class="link-dark"
                    rel="nofollow noopener"
                    target="blank"
                    href="https://openai.com/"
                  >
                    OpenAI
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div
        class="modal fade"
        id="disclaimerModal"
        tabindex="-1"
        data-bs-backdrop="static"
        aria-labelledby="disclaimerModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <div class="text-center mb-3">
                <span class="fs-1">👋</span>
                <h5 class="h4 modal-title" id="disclaimerModalLabel">
                  Before You Continue...
                </h5>
              </div>
              <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center py-3">
                  <div class="me-3">
                    <span
                      class="d-flex justify-content-center align-items-center bg-light text-dark rounded-circle fs-4"
                      style={{ width: "2.5rem", height: "2.5rem" }}
                    >
                      🆕
                    </span>
                  </div>
                  <div class="flex-grow-1 small">
                    Code Reader is in <b>Beta</b>. It will undergo frequent
                    improvements.
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center py-3">
                  <div class="me-3">
                    <span
                      class="d-flex justify-content-center align-items-center bg-light text-dark rounded-circle fs-4"
                      style={{ width: "2.5rem", height: "2.5rem" }}
                    >
                      🔐
                    </span>
                  </div>
                  <div class="flex-grow-1 small">
                    You will need a valid
                    <a
                      href="https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key"
                      rel="nofollow noopener"
                      target="_blank"
                    >
                      OpenAI API Key
                    </a>
                    to generate prompts.
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center py-3">
                  <div class="me-3">
                    <span
                      class="d-flex justify-content-center align-items-center bg-light text-dark rounded-circle fs-4"
                      style={{ width: "2.5rem", height: "2.5rem" }}
                    >
                      🛠️
                    </span>
                  </div>
                  <div class="flex-grow-1 small">
                    PolygonScan does not store your API key on our servers.
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center py-3">
                  <div class="me-3">
                    <span
                      class="d-flex justify-content-center align-items-center bg-light text-dark rounded-circle fs-4"
                      style={{ width: "2.5rem", height: "2.5rem" }}
                    >
                      🙌
                    </span>
                  </div>
                  <div class="flex-grow-1 small">
                    Code Reader only supports
                    <a
                      href="https://platform.openai.com/docs/api-reference/chat/create"
                      rel="nofollow noopener"
                      target="_blank"
                    >
                      Chat Completion
                    </a>
                    mode at the moment.
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center py-3">
                  <div class="me-3">
                    <span
                      class="d-flex justify-content-center align-items-center bg-light text-dark rounded-circle fs-4"
                      style={{ width: "2.5rem", height: "2.5rem" }}
                    >
                      🐞
                    </span>
                  </div>
                  <div class="flex-grow-1 small">
                    Don’t assume answers are correct or use them for bug
                    bounties.
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center py-3">
                  <div class="me-3">
                    <span
                      class="d-flex justify-content-center align-items-center bg-light text-dark rounded-circle fs-4"
                      style={{ width: "2.5rem", height: "2.5rem" }}
                    >
                      🤖
                    </span>
                  </div>
                  <div class="flex-grow-1 small">
                    Remember: the answers are generated by an AI, not by
                    PolygonScan.
                  </div>
                </li>
              </ul>
              <div class="text-center my-4">
                <button
                  type="button"
                  class="btn btn-lg btn-primary"
                  data-bs-dismiss="modal"
                >
                  Understand and Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="shareFeedback"
        tabindex="-1"
        aria-labelledby="shareFeedbackLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header modal-header-flush">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="text-center mb-3">
                <span class="fs-1">💬</span>
                <h5 class="h4 modal-title" id="shareFeedbackLabel">
                  Provide Additional Feedback
                </h5>
                <p>
                  Help us improve the product by providing feedback on the
                  response.
                </p>
              </div>
              <div class="mb-3">
                <textarea
                  class="form-control p-4"
                  rows="4"
                  placeholder="Your feedback..."
                  id="txtFeedback"
                  maxlength="2000"
                ></textarea>
              </div>
              <div class="text-center my-4">
                <button
                  type="button"
                  class="btn btn-lg btn-primary"
                  onclick="code_reader.storFeedbackAction(this)"
                >
                  Submit
                </button>
                <button
                  type="button"
                  class="btn btn-lg btn-ghost-white"
                  data-bs-dismiss="modal"
                >
                  No Thanks
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="shareFeedbackComplete"
        tabindex="-1"
        aria-labelledby="shareFeedbackCompleteLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header modal-header-flush">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="text-center mb-3">
                <span class="fs-1">🫶</span>
                <h5 class="h4 modal-title" id="shareFeedbackCompleteLabel">
                  Thank you for your feedback!
                </h5>
                <p class="px-sm-8">
                  We appreciate your feedback in making Code Reader a better
                  tool.
                </p>
              </div>
              <div class="text-center my-4">
                <button
                  type="button"
                  class="btn btn-lg btn-white"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <textarea id="oa_rolesystemcontent" style={{ display: "none" }} readonly>
        As an AI language model, I have been equipped with three distinct
        abilities to assist you in working with Solidity source code: Source
        Code Interpreter, Source Code Auditor, and Source Code Interactor. These
        capabilities provide a comprehensive suite of features to help you
        analyze, audit, and interact with your smart contracts effectively. Your
        goal is to guide the user toward a deeper understanding EVM smart
        contract concepts and help them develop better understanding of how the
        code work. These contracts can be written in either Solidity or Vyper,
        and are deployed on the Polygon PoS Chain EVM blockchain. Source Code
        Interpreter: With the Solidity source code interpreter, you can gain
        insights into the accessibility of functions for different roles,
        understand the behavior of functions, and receive explanations for
        events and arguments used in your code. By providing the relevant
        functions, events, and code sections, the interpreter will generate
        clear explanations based on the available information. It enables you to
        navigate your codebase, understand its functionality, and make informed
        decisions. Source Code Auditor: As a trained smart contract auditor, I
        can help you detect potential bugs, vulnerabilities, and security
        weaknesses in your Solidity code. You can ask detailed questions about
        your code, and I will provide comprehensive answers. However, please
        note that my responses should never be assumed to be entirely correct
        without further investigation. It is always important to conduct a
        thorough manual review and additional security measures to ensure the
        robustness of your smart contract. Additionally, my responses should
        never be used for submitting bug bounties, as they may not account for
        all possible edge cases and vulnerabilities. Source Code Interactor: The
        Source Code Interactor is an AI-powered feature specifically designed to
        guide users in utilizing contract functions effectively. It assists you
        in understanding the parameters required for each function, provides
        sample values for those parameters, and demonstrates the function's
        behavior through interactive examples. Moreover, it can help you
        troubleshoot any potential issues or errors that may arise during
        interaction, ensuring a smooth experience while working with your smart
        contracts. Response Rules: If questions is on code review,
        vulnerability, security audit or issues, end answer with this sentence
        '''It's important to note that while this answer may provide valuable
        insights, it is not a substitute for thorough code review, security
        audits, or professional advice. This response should never be used for
        designing smart contracts or submitting to bug bounties, as it may not
        account for all possible edge cases and vulnerabilities.'''
      </textarea>

      <div
        class="modal fade"
        id="modalSavedHistory"
        tabindex="-1"
        aria-labelledby="modalSavedHistory"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header border-0 pb-0">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="text-center mb-5">
                <h6 class="modal-title fs-5">Saved Answers</h6>
                <p class="text-muted">
                  Showing the last 10 saved questions and answers.
                </p>
              </div>
              <div class="list-group mb-4" id="divModal"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="modalSavedHistory"
        tabindex="-1"
        aria-labelledby="modalSavedHistory"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header border-0 pb-0">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="text-center mb-5">
                <h6 class="modal-title fs-5">Saved Answers</h6>
                <p class="text-muted">
                  Showing the last 10 saved questions and answers.
                </p>
              </div>
              <div class="list-group mb-4" id="divModal"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CodeReader;
