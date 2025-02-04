import React, { useState, useEffect } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { LuListMinus } from "react-icons/lu";
import { useRouter } from "next/router";
import { ethers } from "ethers";

//INETRNAL IMPORT
import { CONTEXT } from "../../context/ContextProvider";
import { convertIntoPOL, shortenAddress } from "../../utils/index";

//INTERNAL IMPORT
import ByModel from "../Address/ByModel";
import GameModel from "../Address/GameModel";
import List from "./List";

const tx = () => {
  const [openByModel, setOpenByModel] = useState(false);
  const [openGameModel, setOpenGameModel] = useState(false);
  const [openList, setOpenList] = useState(false);

  const router = useRouter();
  const { query } = router;
  const hash = query.tx;

  const [transaction, setTransaction] = useState();
  const [gasPrice, setGasPrice] = useState("");
  const [gasLimit, setGasLimit] = useState("");
  const [value, setValue] = useState("");

  const getTransactionData = async (hash) => {
    try {
      const apiKey = "dc23ef4a274446728c89f941fe1a7636";
      const PROVIDER = new ethers.providers.JsonRpcProvider(
        `https://mainnet.infura.io/v3/${apiKey}`
      );

      const transactionDetails = await PROVIDER.getTransaction(hash);
      setTransaction(transactionDetails);
      console.log(transactionDetails);

      //CONVERTING TO ETHER
      const gasLimitePrice = ethers.utils.formatUnits(
        transactionDetails.gasLimit
      );
      setGasLimit(gasLimitePrice);

      const gasPriceCon = ethers.utils.formatUnits(transactionDetails.gasPrice);
      setGasPrice(gasPriceCon);

      const etherValue = ethers.utils.formatUnits(transactionDetails.value);
      setValue(etherValue);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransactionData(hash);
  }, [hash]);
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
        value="/assets/poly/images/svg/empty-token.svg?v=24.3.1.0"
      />
      <input
        type="hidden"
        name="hdnSiteShortUrl"
        id="hdnSiteShortUrl"
        value="polygonscan.com"
      />
      <section class="container-xxl">
        <div class="d-flex flex-wrap justify-content-between align-items-center gap-3 border-bottom py-4">
          <div class="">
            <div class="d-flex align-items-center gap-2">
              <h1 class="h5 mb-0">Transaction Details </h1>
            </div>
          </div>

          <div class="d-flex gap-2">
            <div class="dropdown">
              <button
                class="btn btn-sm btn-primary dropdown-toggle"
                type="button"
                onClick={() =>
                  openByModel ? setOpenByModel(false) : setOpenByModel(true)
                }
              >
                Buy
              </button>
              {openByModel && <ByModel />}
            </div>
            <div class="dropdown">
              <button
                class="btn btn-sm btn-primary dropdown-toggle"
                type="button"
                onClick={() =>
                  openGameModel
                    ? setOpenGameModel(false)
                    : setOpenGameModel(true)
                }
              >
                Gaming
              </button>
              {openGameModel && <GameModel />}
            </div>
          </div>
        </div>
      </section>
      <section class="container-xxl">
        <div class="text-muted py-3">
          <span id="c_widget_es" style={{ visibility: "visible" }}>
            <div>
              Sponsored:{" "}
              <img src="/icon.png" style={{ width: "20px", height: "20px" }} />{" "}
              <strong>bc.game</strong> - Free Bonus Up To 5 BTC Everyday! Earn
              While Playing!{" "}
              <a href="#" rel="nofollow" target="_blank">
                {" "}
                <strong>Play Now</strong>
              </a>
            </div>
          </span>
        </div>
      </section>
      <div class="container-xxl pt-1 pb-12">
        <ul
          id="ContentPlaceHolder1_myTab"
          class="nav nav-pills text-nowrap snap-x-mandatory overflow-x-auto flex-nowrap scrollbar-custom py-3 gap-2"
        >
          <li class="nav-item snap-align-start">
            <a class="nav-link active">Overview</a>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active">
            <div id="ContentPlaceHolder1_maintable">
              <div class="card p-5 mb-3">
                <div class="row mb-4">
                  <div class="col-md-3 text-dt mb-2 mb-md-0">
                    <i class="far fa-question-circle me-1"></i>
                    Transaction Hash:
                  </div>
                  <div class="col-md-9">
                    <span id="referralLink-1" class="text-break">
                      <span id="spanTxHash" class="me-1">
                        {transaction?.hash}
                      </span>
                    </span>
                    <a class="js-clipboard link-secondary">
                      <i id="linkIcon-1" class="far fa-copy fa-fw"></i>
                    </a>
                  </div>
                </div>
                <div class="row align-items-center mb-4">
                  <div class="col-auto col-md-3 text-dt">
                    <i class="far fa-question-circle me-1"></i>
                    Status:
                  </div>
                  <div class="col col-md-9">
                    <span class="badge bg-success bg-opacity-10 border border-success border-opacity-25 text-green-600 fw-medium text-start text-wrap py-1.5 px-2">
                      <i class="fa fa-check-circle me-1"></i>Success
                    </span>
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col-md-3 text-dt mb-2 mb-md-0">
                    <i class="far fa-question-circle me-1"></i>
                    Block:
                  </div>
                  <div class="col-md-9">
                    <div class="d-flex align-items-center gap-2">
                      <span class="d-flex align-items-center gap-1">
                        <a href="/block/54681245">{transaction?.blockNumber}</a>
                      </span>
                      <span class="badge bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-dark fw-medium text-start text-wrap py-1.5 px-2">
                        7 Block Confirmations
                      </span>
                    </div>
                  </div>
                </div>
                <div id="ContentPlaceHolder1_divTimeStamp">
                  <div class="row mb-4">
                    <div class="col-md-3 text-dt mb-2 mb-md-0">
                      <i class="far fa-question-circle me-1"></i>
                      Timestamp:
                    </div>
                    <div class="col-md-9">
                      <span id="clock"></span>
                      <i class="far fa-clock small me-1"></i>27 secs ago (
                      <span id="showUtcLocalDate" data-timestamp="1710492445">
                        Mar-15-2024 08:47:25 AM +UTC
                      </span>
                      )
                    </div>
                  </div>
                </div>
                <hr class="opacity-75 mt-0 mb-5" />
                <div class="row align-items-center mb-4">
                  <div class="col-md-3 text-dt mb-2 mb-md-0">
                    <i class="far fa-bolt text-primary ms-0.5 me-1.5 me-1"></i>
                    Transaction Action:
                  </div>
                  <div class="col col-md-9">
                    <div class="d-flex align-items-baseline">
                      <i class="text-secondary small fa fa-caret-right me-1"></i>
                      <div class="d-flex gap-1 align-items-center flex-wrap">
                        Call{" "}
                        <span class="badge bg-light border border-dark dark:border-white border-opacity-10 text-dark fw-medium py-1.5 align-bottom">
                          Claim Key{" "}
                        </span>
                        Function by
                        <a
                          href={`/address/${transaction?.from}`}
                          class="border border-white px-1 mx-n1"
                        >
                          <span class="d-block">
                            <span>{shortenAddress(transaction?.from)}</span>
                          </span>
                        </a>
                        on
                        <span class="d-flex gap-1 align-items-baseline border border-white px-1 mx-n1">
                          <i class="far fa-file-alt text-secondary "></i>{" "}
                          <a href={`/address/${transaction?.to}`}>
                            <span class="d-block">
                              <span>{shortenAddress(transaction?.to)}</span>
                            </span>
                          </a>
                        </span>
                        <a
                          class="ms-2"
                          href="/contactus?id=12&amp;a=0x6f130410dfd25ad46824ef42a0e92b1ee9692ce3ab663d29fd5b8eb158645010"
                        >
                          <i class="far fa-pen me-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="opacity-75 mt-0 mb-5" />
                <div class="row mb-4">
                  <div class="col-md-3 text-dt mb-2 mb-md-0">
                    <i class="far fa-question-circle me-1"></i>
                    Sponsored:
                  </div>
                  <div class="col-md-9">
                    <div class="overflow-x-auto scrollbar-custom">
                      <script
                        async=""
                        src="https://coinzillatag.com/lib/display.js"
                      ></script>
                      <div
                        class="coinzilla"
                        data-zone="C-8060e593b646c9593"
                        style={{
                          maxWidth: "728px",
                          width: "728px",
                          height: "90px",
                          display: "inline-block",
                        }}
                        data-rendered="true"
                      ></div>
                    </div>
                  </div>
                </div>
                <hr class="opacity-75 mt-0 mb-5" />
                <div class="row mb-4">
                  <div class="col-md-3 text-dt mb-2 mb-md-0">
                    <i class="far fa-question-circle me-1"></i>
                    From:
                  </div>
                  <div class="col-md-9">
                    <div>
                      <span class="me-1">
                        <a
                          href={`/address/${transaction?.from}`}
                          class="text-break border border-white px-1 mx-n1"
                        >
                          {transaction?.from}
                        </a>
                      </span>
                      <a class="js-clipboard link-secondary">
                        <i id="linkIcon-2" class="far fa-copy fa-fw"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col-md-3 text-dt mb-2 mb-md-0">
                    <i class="far fa-question-circle me-1"></i>
                    To:
                  </div>
                  <div class="col-md-9">
                    <div>
                      <i
                        class="far fa-file-alt text-secondary "
                        data-bs-toggle="tooltip"
                        aria-label="Contract"
                      ></i>{" "}
                      <span class="me-1">
                        <a
                          href={`/address/${transaction?.to}`}
                          class="text-break border border-white px-1 mx-n1"
                        >
                          {transaction?.to}
                        </a>
                      </span>
                      <a class="js-clipboard link-secondary me-1">
                        <i id="linkIcon-3" class="far fa-copy fa-fw"></i>
                      </a>
                      <i
                        class="fa fa-check-circle text-success mx-1"
                        data-bs-toggle="tooltip"
                        aria-label="Contract Execution Completed"
                      ></i>
                    </div>
                  </div>
                </div>
                <hr class="opacity-75 mt-0 mb-5" />
                <div class="row mb-4">
                  <div class="col-md-3 text-dt mb-2 mb-md-0">
                    <i class="far fa-question-circle me-1"></i>
                    Value:
                  </div>
                  <div class="col-md-9">
                    <span id="ContentPlaceHolder1_spanValue">
                      <div class="d-flex align-items-center gap-1">
                        <img
                          class="me-0.5"
                          width="15"
                          data-img-theme="light"
                          src="/icon.png"
                          alt="Polygon PoS Chain Logo"
                        />
                        <span>
                          {value}
                          POL
                        </span>{" "}
                        <span class="text-muted"></span>
                      </div>
                    </span>
                  </div>
                </div>
                <div id="ContentPlaceHolder1_divTxFee">
                  <div class="row mb-4">
                    <div class="col-md-3 text-dt mb-2 mb-md-0">
                      <i class="far fa-question-circle me-1"></i>
                      Transaction Fee:
                    </div>
                    <div class="col-md-9">
                      <span id="ContentPlaceHolder1_spanTxFee">
                        <div class="d-flex align-items-center gap-1">
                          <span
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                          >
                            {gasLimit}
                          </span>{" "}
                          <span class="text-muted">(POL)</span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3 text-dt mb-2 mb-md-0">
                    <i class="far fa-question-circle me-1"></i>
                    Gas Price:
                  </div>
                  <div class="col-md-9">
                    <span
                      id="ContentPlaceHolder1_spanGasPrice"
                      data-bs-toggle="tooltip"
                    >
                      {gasPrice}
                      <span class="text-muted">( POL)</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div id="ContentPlaceHolder1_collapseContent" class="collapse">
                  <div class="p-5 pb-0">
                    <div class="row mb-4">
                      <div class="col-md-3 text-dt mb-2 mb-md-0">
                        <i class="far fa-question-circle me-1"></i>
                        Gas Limit & Usage by Txn:
                      </div>
                      <div class="col-md-9">
                        <span data-bs-toggle="tooltip">33,881</span>
                        <span class="mx-2 text-secondary">|</span>
                        <span
                          id="ContentPlaceHolder1_spanGasUsedByTxn"
                          data-bs-toggle="tooltip"
                        >
                          33,800 (99.76%)
                        </span>
                      </div>
                    </div>
                    <div id="ContentPlaceHolder1_divGasFees" class="row mb-4">
                      <div class="col-md-3 text-dt mb-2 mb-md-0">
                        <i
                          class="far fa-question-circle me-1"
                          data-bs-container="body"
                          data-bs-toggle="popover"
                          data-bs-trigger="hover"
                          data-bs-placement="top"
                          data-bs-original-title=""
                          title=""
                          data-bs-content="Base Fee refers to the network Base Fee at the time of the block, while Max Fee &amp; Max Priority Fee refer to the max amount a user is willing to pay for their tx &amp; to give to the miner respectively."
                        ></i>
                        Gas Fees:
                      </div>
                      <div class="col-md-9">
                        <span
                          class="mb-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                        >
                          <span class="text-muted">Base:</span> 260<b>.</b>
                          521721662 Gwei
                        </span>{" "}
                        <span class="mx-2 text-secondary">|</span>
                        <span
                          class="mb-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                        >
                          <span class="text-muted">Max:</span> 401<b>.</b>493
                          Gwei
                        </span>{" "}
                        <span class="mx-2 text-secondary">|</span>
                        <span
                          class="mb-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                        >
                          <span class="text-muted">Max Priority:</span> 30 Gwei
                        </span>
                      </div>
                    </div>
                    <div
                      id="ContentPlaceHolder1_divBurntAndTxSaving"
                      class="row mb-4"
                    >
                      <div class="col-md-3 text-dt mb-2 mb-md-0">
                        <i class="far fa-question-circle me-1"></i>
                        Burnt &amp; Txn Savings Fees:
                      </div>
                      <div class="col-md-9">
                        <div class="d-flex flex-wrap gap-2">
                          <span class="badge bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-dark fw-medium text-start text-wrap py-1.5 px-2">
                            🔥 <span class="text-muted">Burnt:</span> 0<b>.</b>
                            0088056341921756 POL ($0.01)
                          </span>
                          <span class="badge bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-dark fw-medium text-start text-wrap py-1.5 px-2">
                            💸 <span class="text-muted">Txn Savings:</span> 0
                            <b>.</b>0037508292078244 POL ($0.00)
                          </span>
                        </div>
                      </div>
                    </div>
                    <hr class="opacity-75 my-5" />
                    <div class="row mb-4">
                      <div class="col-md-3 text-dt mb-2 mb-md-0">
                        <i
                          class="far fa-question-circle me-1"
                          data-bs-container="body"
                          data-bs-toggle="popover"
                          data-bs-trigger="hover"
                          data-bs-placement="top"
                          data-bs-original-title=""
                          title=""
                          data-bs-content="Other data related to this transaction."
                        ></i>
                        Other Attributes:
                      </div>
                      <div class="col-md-9">
                        <div class="d-flex flex-wrap gap-2">
                          <span id="ContentPlaceHolder1_spanTxnType">
                            <span class="badge bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-dark fw-medium text-start text-wrap py-1.5 px-2">
                              <span class="text-muted">Txn Type:</span> 2
                              (EIP-1559)
                            </span>
                          </span>
                          <span class="badge bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-dark fw-medium text-start text-wrap py-1.5 px-2">
                            <span class="text-muted">Nonce:</span> 106
                          </span>
                          <span class="badge bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-dark fw-medium text-start text-wrap py-1.5 px-2">
                            <span class="text-muted">Position In Block:</span>{" "}
                            124
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="../#ContentPlaceHolder1_collapseContent"
                  id="ContentPlaceHolder1_collapsedLink"
                  class="link-collapse p-5"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-controls="ContentPlaceHolder1_collapseContent"
                  aria-expanded="false"
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
              <div id="ContentPlaceHolder1_privatenotediv">
                <div class="card p-5">
                  <div class="row">
                    <div class="col-md-3 text-dt mb-2 mb-md-0">
                      <i
                        class="far fa-question-circle me-1"
                        data-bs-container="body"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="top"
                        data-bs-original-title=""
                        title=""
                        data-bs-content="Private note to keep track of the transaction. Only viewable to PolygonScan's user who assign them."
                      ></i>
                      Private Note:{" "}
                      <i
                        id="ContentPlaceHolder1_infoPrivateNote"
                        class="fa fa-info-circle fw-bold fw-sm-normal"
                        style={{ display: "none" }}
                        data-bs-toggle="tooltip"
                        aria-label="You can attach a private note to this transaction which you can view when logged in"
                      ></i>
                    </div>
                    <div class="col-md-9">
                      <span id="ContentPlaceHolder1_privatenotedivcontent">
                        <textarea
                          rows="1"
                          cols="50"
                          spellcheck="false"
                          class="inputbox scrollbar-custom form-control form-control-sm mb-2"
                          id="txtPrivateNoteArea"
                          onkeyup="javascript:Count(this);"
                          onchange="javascript:Count(this);"
                        ></textarea>
                        <span id="privatenotetip" class="form-text">
                          Tip: A private note (up to 100 characters) can be
                          saved and is useful for transaction tracking. Please{" "}
                          <strong>DO NOT</strong> store any passwords or private
                          keys here.{" "}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default tx;
