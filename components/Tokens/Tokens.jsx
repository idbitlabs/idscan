import React from "react";
import { FiSearch } from "react-icons/fi";
import { GoQuestion } from "react-icons/go";

//INTERNAL IMPORT
import { Input, Title, Pagination, Table } from "./index";

const Tokens = () => {
  return (
    <main id="content" class="main-content" role="main">
      <Input />
      <Title />

      <section class="container-xxl pt-5 pb-12">
        <div id="ContentPlaceHolder1_divERC20Tokens" class="card">
          <div class="card-body d-flex flex-wrap align-items-center justify-content-between gap-3">
            <p class="mb-0">
              <span class="text-dark">
                A total of <strong>764</strong> Token Contracts found
              </span>
              <span class="d-block small"></span>
            </p>
            <div>
              <div class="dropdown order-md-2">
                <button
                  class="btn btn-sm btn-secondary"
                  type="button"
                  id="erc20TokenSearchButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="far fa-search">
                    <FiSearch />
                  </i>
                </button>
                <div
                  class="search-panel-container auto-search-max-height dropdown-menu dropdown-menu-sm-end"
                  aria-labelledby="erc20TokenSearchButton"
                  style={{ minWidth: "10rem" }}
                >
                  <form autocomplete="off" spellcheck="false">
                    <div class="input-group" style={{ minWidth: "20rem" }}>
                      <input
                        id="erc20TokenSearchInput"
                        name="q"
                        class="form-control py-2"
                        placeholder="Search for Token Name or Address"
                      />
                      <button class="btn btn-primary" type="submit">
                        Find
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <Table />
          <Pagination />
        </div>
      </section>
    </main>
  );
};

export default Tokens;
