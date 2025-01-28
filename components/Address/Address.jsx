import React, { useState, useEffect, useContext } from "react";
import { CiStar } from "react-icons/ci";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import { IoMdDownload } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";
import { AiOutlineBarcode } from "react-icons/ai";
import { useRouter } from "next/router";
import { ethers } from "ethers";

///INTERNA COMPONENT
import Transactions from "./Transactions";
import Internal from "./Internal";
import TokenTransfer from "./TokenTransfer";
import NFTTransfer from "./NFTTransfer";
import ProductBlock from "./ProductBlock";
import Multichain from "./Multichain";
import Tab from "./Tab";
import Explorer from "./Explorer";
import TokenLists from "./TokenLists";
import QuickLinks from "./QuickLinks";
import GameModel from "./GameModel";
import ByModel from "./ByModel";
import Input from "./Input";

import { CONTEXT } from "../../context/ContextProvider";
// import Data from "../../data/Address.json";
import { shortenAddress, convertIntoMatic } from "../../utils/index";

const Address = () => {
  const router = useRouter();
  const { query } = router;
  const addressExplor = query.address;

  const [openByModel, setOpenByModel] = useState(false);
  const [openGameModel, setOpenGameModel] = useState(false);
  const [quickLinks, setQuickLinks] = useState(false);
  const [openTokenLists, setOpenTokenLists] = useState(false);
  const [openExplorModel, setOpenExplorModel] = useState(false);
  const [openFilterModel, setOpenFilterModel] = useState(false);

  //DATA

  const [addressBalance, setAddressBalance] = useState();
  const [normalTransaction, setNormalTransaction] = useState();
  const [activeComp, setActiveComp] = useState("Transactions");

  const {
    USER_BALANCE,
    NORMAL_TRANSACTION,
    INTERNAL_TRANSACTION,
    INTERNAL_TRANSACTION_HASH,
    INTERNAL_TRANSACTION_BLOCK,
    ERC20_TOKEN_TRANSFER,
    ERC721_TOKEN_TRANSFER,
    ERC1155_TOKEN_TRANSFER,
    BLOCK_VALIDATED,
    BEACON_CHAIN,
  } = useContext(CONTEXT);

  const loadDetails = async () => {
    ///NORMAL_TRANSACTION
    const apiData = await NORMAL_TRANSACTION(router.query.address);
    setNormalTransaction(apiData?.data.result);
    //USER_BALANCE
    const balance = await USER_BALANCE(router.query.address);
    setAddressBalance(balance?.data.result);

    console.log(apiData);
    console.log(balance);
  };

  useEffect(() => {
    loadDetails();
  }, []);

  return (
    <main id="content" className="main-content" role="main">
      <Input />
      <section class="container-xxl">
        <div class="d-flex flex-wrap justify-content-between align-items-center border-bottom gap-3 py-5">
          <div class="d-flex flex-column gap-2">
            <div class="d-flex flex-wrap text-break align-items-center gap-2">
              <div class="d-flex flex-wrap align-items-center gap-2">
                <div class="d-flex align-items-center gap-2 mt-n0.5">
                  <img
                    id="icon"
                    width="24"
                    class="rounded-circle"
                    src="/icon.png"
                    alt=""
                  />
                  <h1 class="h5 mb-0">Address</h1>
                </div>
              </div>
              <div>
                <span class="me-3 fs-base" style={{ lineHeight: "2" }}>
                  <span id="mainaddress">{addressExplor}</span>
                </span>
                <div class="d-inline-flex align-items-center gap-4">
                  <a
                    onClick={() => navigator.clipboard.writeText(addressExplor)}
                    class="js-clipboard link-secondary"
                  >
                    <i id="linkIcon_main_address" class="far fa-copy fa-fw">
                      <FaRegCopy />
                    </i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex gap-2">
            <div class="dropdown">
              <button
                class="btn btn-sm btn-primary dropdown-toggle"
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
      <div id="overlayMain" class="bg-white bg-opacity-40"></div>
      <section class="container-xxl">
        <div class="py-4">
          <div class="d-flex text-muted">
            <span id="ContentPlaceHolder1_lblAdResult">
              <ins style={{ textDecoration: "none" }}>
                <b>Sponsored:</b> &nbsp;
                <img
                  src="/icon.png"
                  style={{ width: "25px", height: "25px" }}
                />{" "}
                <b>
                  Sponge V2<b>: Sponge V1 Meme Coin Did 100x. </b>
                  <a
                    href="#"
                    target="_blank"
                    rel="nofollow"
                    title="Links to an External Advertiser site"
                  >
                    {" "}
                    <b>Buy SPONGE V2 Before Listing!</b>
                  </a>
                  <div
                    id="beacon_e2e4aae605"
                    style={{
                      position: "absolute",
                      left: "0px",
                      top: "0px",
                      visibility: "hidden",
                    }}
                  >
                    <img
                      src="/icon.png"
                      style={{ width: "15px", height: "15px" }}
                    />
                  </div>
                </b>
              </ins>
            </span>
            &nbsp;
          </div>
        </div>
      </section>
      <section id="ContentPlaceHolder1_divSummary" class="container-xxl  pb-12">
        {/* //1 @*/}
        <div
          class="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-2"
          style={{ marginTop: "-17px" }}
        >
          <div class="d-flex flex-wrap align-items-center gap-1">
            <div id="ContentPlaceHolder1_divLabels" class="d-flex gap-1"></div>
          </div>
          <div
            id="ContentPlaceHolder1_moreoptionsdiv"
            class="d-flex align-items-center gap-1"
          >
            <a class="btn btn-sm btn-white" href="#">
              <i class="far fa-star fa-fw">
                <CiStar />
              </i>
            </a>
            <div class="dropdown">
              <button
                class="btn btn-sm btn-white dropdown-toggle d-block"
                type="button"
                onClick={() =>
                  quickLinks ? setQuickLinks(false) : setQuickLinks(true)
                }
              >
                <i class="far fa-list-check fa-fw">
                  <MdFormatListBulletedAdd />
                </i>
              </button>
              {quickLinks && <QuickLinks />}
            </div>
          </div>
        </div>
        {/* //2? */}
        <div class="row g-3 mb-4">
          <div class="col-md-6 col-lg-4">
            <div class="card h-100">
              <div class="card-body d-flex flex-column gap-5">
                {/* //1? */}
                <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
                  <h3 class="h6 mb-0">Overview</h3>
                </div>
                {/* //2 */}
                <div>
                  <h4 class="text-cap mb-1">IDT Balance</h4>
                  <div>
                    <div class="d-flex">
                      <img
                        class="me-1"
                        width="15"
                        data-img-theme="light"
                        src="/icon.png"
                      />
                      {addressBalance == "Max rate limit reached" ||
                      addressBalance == "Error! Invalid address format" ? (
                        "API ERROR"
                      ) : (
                        <>{convertIntoMatic(addressBalance)} IDT</>
                      )}
                    </div>
                  </div>
                </div>
                {/* //3 */}
                <div>
                  <h4 class="text-cap mb-1">IDT Value</h4>
                  $1,537,799.75{" "}
                  <span
                    class="small"
                    style={{ position: "relative", top: "-1px" }}
                  >
                    (@ $0.00019/USD)
                  </span>
                </div>
                {/* //4 */}
                <div id="ContentPlaceHolder1_divTokenHolding">
                  <h4 class="text-cap mb-1">Token Holdings</h4>
                  <div
                    id="ContentPlaceHolder1_tokenbalance"
                    class="d-flex gap-2 ms-auto overflow-hidden"
                  >
                    <div class="dropdown flex-grow-1 position-static">
                      <button
                        class="js-dropdowns-input-focus btn btn-white text-start w-100 dropdown-toggle py-2 px-3"
                        onClick={() =>
                          openTokenLists
                            ? setOpenTokenLists(false)
                            : setOpenTokenLists(true)
                        }
                      >
                        <>Lists Of Aset Token</>
                      </button>
                      {openTokenLists && (
                        <TokenLists
                          addressExplor={addressExplor}
                          ERC20_TOKEN_TRANSFER={ERC20_TOKEN_TRANSFER}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card h-100">
              <div class="card-body d-flex flex-column gap-5">
                <h3 class="h6 mb-0">More Info</h3>
                <div>
                  <h4 class="text-cap mb-1">Private Name Tags</h4>
                  <div class="d-flex align-items-center gap-2">
                    <span id="Public_Private_Tag">
                      <a class="btn btn-sm btn-white rounded-pill border-dashed border-dark dark:border-white border-opacity-15 text-nowrap px-4 mb-n2">
                        <i class="far fa-plus"></i> Add
                      </a>
                    </span>
                    <span id="Public_Private_Tag_edit_button"></span>
                  </div>
                </div>
                <div>
                  <h4 class="text-cap mb-1 mt-1"> First Txn Sent </h4>
                  <div>
                    {normalTransaction == "Max rate limit reached" ||
                    normalTransaction == "Error! Invalid address format" ||
                    normalTransaction == undefined ? (
                      "API ERROR"
                    ) : (
                      <>
                        {shortenAddress(normalTransaction[0].hash)} ||
                        {new Date(
                          normalTransaction[0].timeStamp * 1000
                        ).toDateString()}
                      </>
                    )}
                  </div>
                </div>
                <div>
                  <h4 class="text-cap mb-1 mt-1">Last Txn Sent</h4>
                  <div>
                    {normalTransaction == "Max rate limit reached" ||
                    normalTransaction == "Error! Invalid address format" ||
                    normalTransaction == undefined ? (
                      "API ERROR"
                    ) : (
                      <>
                        {shortenAddress(normalTransaction[5]?.hash)} ||
                        {new Date(
                          normalTransaction[5]?.timeStamp * 1000
                        ).toDateString()}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card h-100">
              <div class="card-body d-flex flex-column">
                <h3 class="h6">Multichain Info</h3>
                <div class="mb-3">
                  <a id="multichain-button" class="btn btn-sm btn-secondary">
                    <span class="fw-medium">$1,621,290</span> (Multichain
                    Portfolio)
                  </a>
                </div>
                <div id="ContentPlaceHolder1_divMultichainAddress" class="mb-3">
                  <div class="d-flex flex-wrap align-items-center gap-1">
                    <span>1 address found via</span>
                    <div class="dropdown">
                      <button
                        class="btn btn-sm btn-white dropdown-toggle py-0.5 px-1.5"
                        type="button"
                        onClick={() =>
                          openExplorModel
                            ? setOpenExplorModel(false)
                            : setOpenExplorModel(true)
                        }
                      >
                        Blockscan{" "}
                      </button>{" "}
                      {openExplorModel && (
                        <Explorer addressExplor={addressExplor} />
                      )}
                    </div>
                  </div>
                </div>
                <div class="scrollbar-custom overflow-x-auto pt-2 mt-n2">
                  <div class="d-flex">
                    <div class="text-center d-inline-block">
                      <img
                        class="img-fluid rounded"
                        width="321"
                        height="101"
                        src="/logo.png"
                        alt="Ads"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //3 */}
        <Tab activeComp={activeComp} setActiveComp={setActiveComp} />

        {/* //4? */}
        <div class="tab-content" id="pills-tabContent">
          <input
            type="hidden"
            id="hdnErc20"
            value="Age"
            onchange="setGlobalValue(this)"
          />
          {activeComp == "Transactions" ? (
            <Transactions
              transactions={normalTransaction}
              readload={loadDetails}
            />
          ) : activeComp == "Internal Transactions" ? (
            <Internal
              INTERNAL_TRANSACTION={INTERNAL_TRANSACTION}
              addressExplor={addressExplor}
            />
          ) : activeComp == "Token Transfers (ERC-20)" ? (
            <TokenTransfer
              addressExplor={addressExplor}
              ERC20_TOKEN_TRANSFER={ERC20_TOKEN_TRANSFER}
            />
          ) : activeComp == "NFT Transfers" ? (
            <NFTTransfer
              ERC721_TOKEN_TRANSFER={ERC721_TOKEN_TRANSFER}
              addressExplor={addressExplor}
            />
          ) : activeComp == "Produced Blocks" ? (
            <ProductBlock
              BLOCK_VALIDATED={BLOCK_VALIDATED}
              addressExplor={addressExplor}
            />
          ) : activeComp == "Multichain Portfolio" ? (
            <Multichain />
          ) : (
            ""
          )}
        </div>
      </section>
    </main>
  );
};

export default Address;
