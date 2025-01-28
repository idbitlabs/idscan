import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaTruckLoading } from "react-icons/fa";

const Search = () => {
  return (
    <div
      id="ContentPlaceHolder1_divSearch"
      class="card-header d-flex flex-column flex-sm-row justify-content-between gap-3"
    >
      <div>
        <a class="btn btn-sm btn-white">
          <i class="far fa-chart-area text-muted me-1">
            <FaTruckLoading />
          </i>
          Pending Transaction Pool
        </a>
      </div>
      <div class="d-flex flex-wrap align-items-center gap-2">
        <div id="ContentPlaceHolder1_searchdiv" class="dropdown order-md-2">
          <button
            class="btn btn-sm btn-secondary js-dropdowns-input-focus"
            type="button"
            id="dropdownSearchFilter"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="far ">
              <IoIosSearch />
            </i>
          </button>
          <div
            class="dropdown-menu dropdown-menu-sm-end"
            aria-labelledby="dropdownSearchFilter"
            style={{ minWidth: "10rem" }}
          >
            <div class="input-group" style={{ minWidth: "20rem" }}>
              <form
                class="js-focus-state input-group input-group-sm w-100"
                autocomplete="off"
              >
                <input
                  class="js-input-focus form-control py-2"
                  id="q"
                  type="search"
                  placeholder="Filter by Address"
                />
                <button class="btn btn-primary">Find</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
