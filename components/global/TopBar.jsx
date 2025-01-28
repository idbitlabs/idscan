import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const TopBar = () => {
  const mainnet = [
    {
      name: "Infinity Mainnet",
      link: "#",
    },
    {
      name: " zkEVM Infinity Mainnet",
      link: "#",
    },
  ];

  const testnet = [
    {
      name: "Infinity Testnet",
      link: "#",
    },
    {
      name: " zkEVM Infinity Testnet",
      link: "#",
    },
    {
      name: "  Cardona Testnet",
      link: "#",
    },
  ];
  const [search, setSearch] = useState();

  const getSearch = (search) => {
    if (search.length == 42) {
      window.location.href = `/address/${search}`;
    } else if (search.length == 66) {
      window.location.href = `/tx/${search}`;
    } else {
      window.location.href = `/block/${search}`;
    }
  };
  return (
    <section
      id="masterTopBar"
      class="d-none d-lg-block sticky-top bg-white border-bottom py-1"
    >
      <div class="container-xxl d-flex align-items-center justify-content-between">
        <div
          id="ethPrice"
          class="d-flex align-items-sm-center gap-4 w-100 fs-sm"
        >
          <div class="text-muted">
            <span class="text-muted">IDT Price:</span>
            <a href="#">$0.00019</a>
            <span>
              <span class="text-success"> (+1.45%)</span>
            </span>
          </div>
          <div class="text-muted">
            <i class="fad fa-gas-pump me-1"></i> Gas:
            <span>
              <a href="#">
                <span class="gasPricePlaceHolder">45</span> Gwei
              </a>
            </span>
          </div>
        </div>
        <div
          id="frmMaster"
          class="search-panel-container flex-grow-1 position-relative"
          style={{ width: "30rem" }}
        >
          <div
            autocomplete="off"
            spellcheck="false"
            class="auto-search-max-height"
          >
            <span
              class="d-flex align-items-center position-absolute top-0 bottom-0"
              title="Search"
              style={{ left: "0.75rem" }}
            >
              <i class="fa-regular fa-search fs-5 text-secondary">
                <FiSearch />
              </i>
            </span>
            <input
              type="text"
              class="form-control form-control-lg bg-light bg-focus-white pe-20"
              placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
              style={{ paddingLeft: "2.375rem" }}
              onChange={(e) => setSearch(e.target.value)}
            />
            <a
              class="clear-icon d-none align-items-center position-absolute top-0 bottom-0 my-auto d-flex align-items-center"
              style={{ right: "3.375rem", cursor: "pointer" }}
            >
              <i class="fa-regular fa-xmark fs-5 text-secondary"></i>
            </a>
            <a
              class="search-icon d-none btn btn-sm btn-white my-1.5 align-items-center position-absolute top-0 bottom-0 d-flex align-items-center"
              style={{ right: " 0.75rem", cursor: "pointer" }}
            >
              <i class="fa-regular fa-arrow-turn-down-left text-secondary"></i>
            </a>
            {/* <input type="hidden" value id="hdnSearchText" />
            <input type="hidden" value id="hdnSearchLabel" />
            <input id="hdnIsTestNet" value="False" type="hidden" /> */}
            <span
              class="shortcut-slash-icon align-items-center position-absolute top-0 bottom-0 align-items-center d-none d-sm-flex"
              title="Search"
              style={{ right: "0.5rem" }}
            >
              <kbd
                onClick={() => getSearch(search)}
                class="bg-dark bg-opacity-25 fw-semibold px-2 py-0.5 text-white"
              >
                /
              </kbd>
            </span>
          </div>
        </div>
        <div class="d-flex justify-content-end align-items-center gap-2">
          <div id="divThemeSetting" class="dropdown">
            <button
              class="btn btn-lg btn-white new_primary_color content-center"
              type="button"
              style={{ width: "2.375rem", height: "2.375rem" }}
            >
              <span class="theme-btn-main">
                <i class="far ">
                  <AiFillHome />
                </i>
              </span>
            </button>
          </div>
          <div id="divTestNet" class="dropdown">
            <button
              class="btn btn-lg btn-white content-center p-0"
              type="button"
              id="dropdownTopbarNetworks"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ width: "2.375rem", height: "2.375rem" }}
            >
              <img
                width="18"
                data-img-theme="light"
                src="/icon.png"
                alt="Polygon PoS Chain Logo"
              />
            </button>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownTopbarNetworks"
            >
              {mainnet.map((item, index) => (
                <li key={index + 1}>
                  <a
                    class={`dropdown-item ${index == 0 ? "active" : ""}`}
                    href={item.link}
                  >
                    {item.name}
                  </a>
                </li>
              ))}

              <li>
                <hr class="dropdown-divider" />
              </li>
              {testnet.map((item, index) => (
                <li key={index}>
                  <a class="dropdown-item" href={item.link}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
