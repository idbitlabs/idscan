import React from "react";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineVerified } from "react-icons/ai";
import { RiMenuFoldFill } from "react-icons/ri";

const Filter = () => {
  return (
    <div class="card-header d-flex flex-column flex-sm-row justify-content-between gap-3">
      <ul
        class="nav nav-pills text-nowrap align-items-center pb-3 gap-2"
        role="Filters"
      >
        <li class="nav-item snap-align-start">
          <form>
            <button
              class="btn btn-sm btn-white dropdown-toggle"
              type="button"
              id="dropdownCategories"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter by |
              <div
                class="content-center"
                style={{ width: "16px", height: "16px" }}
              >
                <i class="far fa-grid-2 text-dark">
                  <RiMenuFoldFill />
                </i>
              </div>
              Latest 500 Verified Contracts
            </button>
            <div
              id="selectTypeButton"
              class="dropdown-menu"
              aria-labelledby="dropdownCategories"
              style={{ minWidth: "200px" }}
            >
              <div class="overflow-y-auto" style={{ maxHeight: "22rem" }}>
                <a class="dropdown-item d-flex align-items-center">
                  <div
                    class="content-center me-1.5"
                    style={{ width: "16px", height: "16px" }}
                  >
                    <i class="far fa-grid-2 text-dark">
                      <RiMenuFoldFill />
                    </i>
                  </div>
                  Latest 500 Verified Contracts
                </a>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <img
                    class="rounded-circle me-1.5"
                    width="16"
                    src="/icon.png"
                    data-img-theme="light"
                    alt
                  />
                  Solidity Compiler
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <img
                    class="rounded-circle me-1.5"
                    width="16"
                    src="/icon.png"
                    alt
                  />
                  Vyper Compiler
                </a>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <img
                    class="filter-grayscale rounded-circle me-1.5"
                    width="16"
                    src="/icon.png"
                    alt
                    tyle={{ display: "none", visibility: "hidden" }}
                  />
                  Open Source License
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div
                    class="content-center me-1.5"
                    tyle={{ width: "16px", height: "16px" }}
                  >
                    <i class="far fa-shield-check text-dark">
                      <AiOutlineVerified />
                    </i>
                  </div>
                  Contract Security Audit
                </a>
              </div>
            </div>
          </form>
        </li>
      </ul>

      <div class="d-flex flex-wrap align-items-center gap-2">
        <div class="dropdown order-md-2">
          <button
            id="ContentPlaceHolder1_dropdownSearchFilter"
            class="btn btn-sm btn-secondary js-dropdowns-input-focus"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="far fa-search">
              <IoIosSearch />
            </i>
          </button>
          <div
            class="dropdown-menu"
            aria-labelledby="dropdownSearchFilter"
            tyle={{ minWidth: "10rem" }}
          >
            <div class="input-group" tyle={{ minWidth: "20rem" }}>
              <form
                class="js-focus-state input-group input-group-sm w-100"
                autocomplete="off"
              >
                <input
                  class="js-input-focus form-control py-2"
                  placeholder="Search Contract Name"
                />
                <input
                  name="a"
                  type="hidden"
                  placeholder="Search Contract Name"
                />
                <button
                  type="submit"
                  class="btn btn-primary"
                  data-bs-toggle="tooltip"
                  title="Search Contract Name"
                >
                  Find
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
