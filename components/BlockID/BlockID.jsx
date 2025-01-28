import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { ethers } from "ethers";

//INETRNAL IMPORT
import { CONTEXT } from "../../context/ContextProvider";
import { convertIntoMatic } from "../../utils/index";

const BlockID = () => {
  const router = useRouter();
  const { query } = router;
  const blockNumber = Number(query.block);

  const [blockData, setBlockData] = useState();
  const [gasPrice, setGasPrice] = useState("");
  const [gasLimit, setGasLimit] = useState("");
  const [value, setValue] = useState("");

  const getBlockDetails = async (blockNumber) => {
    try {
      const apiKey = "3ea9889a46db415ca513f7ffe4b7bdfa";
      const PROVIDER = new ethers.providers.JsonRpcProvider(
        `https://polygon-mainnet.infura.io/v3/${apiKey}`
      );
      const getBlock = await PROVIDER.getBlock(blockNumber);
      setBlockData(getBlock);
      console.log(getBlock);

      //CONVERTING TO ETHER
      const gasLimitePrice = ethers.utils.formatUnits(getBlock.gasLimit);
      setGasLimit(gasLimitePrice);

      const gasPriceCon = ethers.utils.formatUnits(getBlock.gasUsed);
      setGasPrice(gasPriceCon);

      const baseFeePerGas = ethers.utils.formatUnits(getBlock.baseFeePerGas);
      setValue(baseFeePerGas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlockDetails(blockNumber);
  }, [query.block]);

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
        value="(Gas Price * Gas Used by Txns) in MATIC"
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
        value="../assets/poly/images/svg/empty-token.svg?v=24.2.2.0"
      />
      <input
        type="hidden"
        name="hdnSiteShortUrl"
        id="hdnSiteShortUrl"
        value="polygonscan.com"
      />

      <section class="container-xxl">
        <div class="d-flex flex-wrap justify-content-between align-items-center border-bottom gap-3 py-5">
          <div class="d-flex flex-column gap-1">
            <div class="d-flex flex-wrap align-items-center gap-1">
              <h1 class="h5 me-1 mb-0">Block</h1>
              <div class="text-muted text-break">#{blockData?.number}</div>
            </div>
            <div class="d-flex flex-wrap gap-1 text-break"></div>
          </div>
        </div>
      </section>

      <section class="container-xxl pt-2 pb-12">
        <ul
          class="nav nav-pills text-nowrap snap-x-mandatory overflow-x-auto flex-nowrap py-3 gap-2 nav_tabs1"
          id="myTab"
          role="tablist"
        >
          <li class="nav-item snap-align-start">
            <a class="nav-link active">Overview</a>
          </li>
        </ul>

        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="overview">
            <div id="ContentPlaceHolder1_maintable">
              <div class="card p-5 mb-3">
                <div class="row gy-2 mb-4">
                  <div class="col-auto col-md-3 text-dt">
                    <i class="far fa-question-circle me-1"></i>
                    Block Height:
                  </div>
                  <div class="col col-md-9">
                    <div class="d-flex align-items-center gap-2">
                      <div>{blockData?.number}</div>
                    </div>
                  </div>
                </div>

                <div class="row mb-4">
                  <div class="col-md-3 text-dt mb-2 mb-md-0">
                    <i class="far fa-question-circle me-1"></i>
                    Timestamp:
                  </div>
                  <div class="col-md-9">
                    <i class="far fa-clock small"></i>{" "}
                    {new Date(blockData?.timestamp * 1000).toDateString()}
                  </div>
                </div>

                <div id="ContentPlaceHolder1_div_tx_fieldname">
                  <div class="row">
                    <div class="col-md-3 text-dt mb-2 mb-md-0">
                      <i class="far fa-question-circle me-1"></i>
                      Transactions:
                    </div>
                    <div
                      id="ContentPlaceHolder1_div_tx_fieldvalue"
                      class="col-md-9"
                    >
                      <a>{blockData?.transactions.length} transactions</a>
                      <span></span> and
                      <a> internal transactions</a>
                      in this block
                    </div>
                  </div>
                </div>
                <hr class="opacity-75 my-5" />
                <div id="ContentPlaceHolder1_div_tx_fieldname">
                  <div class="row">
                    <div class="col-md-3 text-dt mb-2 mb-md-0">
                      <i class="far fa-question-circle me-1"></i>
                      Transactions Hash:
                    </div>
                    <div
                      id="ContentPlaceHolder1_div_tx_fieldvalue"
                      class="col-md-9"
                    >
                      <a>{blockData?.hash} </a>
                    </div>
                  </div>
                </div>

                <hr class="opacity-75 my-5" />

                <div id="ContentPlaceHolder1_minerDiv" class="row mb-4">
                  <div class="col-md-3 text-dt mb-2 mb-md-0">
                    <i class="far fa-question-circle me-1"></i>
                    Validated By:
                  </div>
                  <div class="col-md-9">
                    <a href={`/address/${blockData?.miner}`}>
                      {blockData?.miner}
                    </a>
                    <a class="js-clipboard link-secondary">
                      <i id="linkIcon_1" class="far fa-copy fa-fw"></i>{" "}
                    </a>
                    in 2 secs
                  </div>
                </div>

                <div class="row mb-4">
                  <div class="col-md-3 text-dt mb-2 mb-md-0">
                    <i class="far fa-question-circle me-1"></i>
                    Block Reward:
                  </div>
                  <div class="col-md-9">
                    0<b>.</b>(No Data) MATIC
                  </div>
                </div>

                <div id="ContentPlaceHolder1_divDifficulty" class="row mb-4">
                  <div class="col-md-3 text-dt mb-2 mb-md-0">
                    <i class="far fa-question-circle me-1"></i>
                    Difficulty:
                  </div>
                  <div class="col-md-9">{blockData?.difficulty}</div>
                </div>

                <div class="row mb-4">
                  <div class="col-md-3 text-dt mb-2 mb-md-0">
                    <i class="far fa-question-circle me-1"></i>
                    Total Difficulty:
                  </div>
                  <div class="col-md-9">NO Data</div>
                </div>

                <div class="row">
                  <div class="col-md-3 text-dt mb-2 mb-md-0">
                    <i class="far fa-question-circle me-1"></i>
                    Size:
                  </div>
                  <div class="col-md-9">(No Data) bytes</div>
                </div>

                <hr class="opacity-75 my-5" />

                <div class="row align-items-center mb-4">
                  <div class="col-md-3 text-dt mb-2 mb-md-0">
                    <i class="far fa-question-circle me-1"></i>
                    Gas Used:
                  </div>
                  <div class="col-md-9 d-flex align-items-center">
                    <span class="me-1">{gasPrice}</span>
                    <span class="text-muted">(39.53%)</span>
                    <div class="d-flex align-items-center">
                      <span id="gasTargetChart"></span>
                      <span id="gasTargetText"></span>
                    </div>
                  </div>
                </div>

                <div class="row mb-4">
                  <div class="col-md-3 text-dt mb-2 mb-md-0">
                    <i class="far fa-question-circle me-1"></i>
                    Gas Limit:
                  </div>
                  <div class="col-md-9">{gasLimit}</div>
                </div>

                <div class="row mb-4">
                  <div class="col-md-3 text-dt mb-2 mb-md-0">
                    <i class="far fa-question-circle me-1"></i>
                    Base Fee Per Gas:
                  </div>
                  <div class="col-md-9">{value} MATIC</div>
                </div>
                <div class="row mb-4">
                  <div class="col-md-3 text-dt mb-2 mb-md-0">
                    <i class="far fa-question-circle me-1"></i>
                    Burnt Fees:
                  </div>
                  <div class="col-md-9">
                    🔥 0<b>.</b>(No Data) MATIC
                  </div>
                </div>

                <div id="ContentPlaceHolder1_divExtraData" class="row">
                  <div class="col-md-3 text-dt mb-2 mb-md-0">
                    <i class="far fa-question-circle me-1"></i>
                    Extra Data:
                  </div>
                  <div class="col-md-9">
                    <textarea
                      readonly
                      spellcheck="false"
                      class="form-control bg-light text-muted text-monospace p-3"
                      rows="6"
                      id="extraData"
                    >
                      {blockData?.extraData}
                    </textarea>
                  </div>
                </div>
              </div>

              <div class="card p-5 mb-3">
                <div class="collapse" id="collapseContent">
                  <div class="row mb-4">
                    <div class="col-md-3 text-dt mb-2 mb-md-0">
                      <i class="far fa-question-circle me-1"></i>
                      Hash:
                    </div>
                    <div class="col-md-9">{blockData?.hash}</div>
                  </div>

                  <div class="row mb-4">
                    <div class="col-md-3 text-dt mb-2 mb-md-0">
                      <i
                        class="far fa-question-circle me-1"
                        data-bs-container="body"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="top"
                        data-original-title
                        title
                        data-bs-content="The hash of the block from which this block was generated, also known as its parent block."
                      ></i>
                      Parent Hash:
                    </div>
                    <div class="col-md-9">
                      <a href="/block/0xc237bc3ca684a0aad53169d3c5ef1ecd9aecbb97e363d33ffd3b588c03b8e4e6">
                        0xc237bc3ca684a0aad53169d3c5ef1ecd9aecbb97e363d33ffd3b588c03b8e4e6
                      </a>
                    </div>
                  </div>

                  <div id="ContentPlaceHolder1_divSha3Uncles" class="row mb-4">
                    <div class="col-md-3 text-dt mb-2 mb-md-0">
                      <i
                        class="far fa-question-circle me-1"
                        data-bs-container="body"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="top"
                        data-original-title
                        title
                        data-bs-content="The mechanism which Polygon Javascript RLP encodes an empty string."
                      ></i>
                      Sha3Uncles:
                    </div>
                    <div class="col-md-9">
                      0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-3 text-dt mb-2 mb-md-0">
                      <i
                        class="far fa-question-circle me-1"
                        data-bs-container="body"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="top"
                        data-original-title
                        title
                        data-bs-content="Block nonce is a value used during mining to demonstrate proof of work for a block."
                      ></i>
                      Nonce:
                    </div>
                    <div class="col-md-9">0x0000000000000000</div>
                  </div>

                  <hr class="opacity-75 my-5" />
                </div>

                <div id="ContentPlaceHolder1_collapsedLink_span">
                  <a
                    class="link-collapse collapsed"
                    id="collapsedLink"
                    href="#collapseContent"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseContent"
                  >
                    <div class="row">
                      <div class="col col-md-3 text-dt">More Details:</div>
                      <div class="col-auto text-end text-md-start">
                        <span class="link-collapse-default">
                          <i class="far fa-plus"></i> Click to show more
                        </span>
                        <span class="link-collapse-active">
                          <i class="far fa-minus"></i> Click to show less
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <p class="d-flex align-items-baseline fs-sm text-muted gap-1 mb-3">
            <i class="far fa-lightbulb-on"></i>
            <span>
              Blocks are batches of transactions linked via cryptographic
              hashes. Any tampering of a block would invalidate all following
              blocks as all subsequent hashes would change. Learn more about
              this page in our
              <a target="_blank" href="https://info.polygonscan.com//block/">
                Knowledge Base
              </a>
              .
            </span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default BlockID;
