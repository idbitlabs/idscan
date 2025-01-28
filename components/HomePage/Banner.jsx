import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Banner = () => {
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
    <>
      {" "}
      <div id="mainOverlay" class="bg-white bg-opacity-40"></div>
      <section
        class="bg-dark pt-14 pb-20"
        style={{ backgroundImage: "url(/images/svg/waves-light.svg)" }}
      >
        <div class="container-xxl">
          <div class="row justify-content-between align-items-center">
            <div class="col-md-9 col-lg-7 mb-5">
              <h1 class="fs-lg text-white fw-medium mb-3">
                IDBit IDT Chain Explorer
              </h1>
              <div class="mb-3">
                <div class="search-panel-container bg-white border rounded d-flex gap-2 p-1.5">
                  <div class="d-none d-sm-block">
                    <select
                      name="f"
                      class="form-select fs-base border-0 filterby"
                      aria-label="Default select example"
                    >
                      <option selected value="0">
                        All Filters
                      </option>
                      <option value="1">Addresses</option>
                      <option value="2">Transaction Hash</option>
                      <option value="3">BlockNo</option>
                      <option value="4">Labels</option>
                      <option value="5">Websites</option>
                    </select>
                  </div>

                  <div class="flex-grow-1 position-relative auto-search-max-height">
                    <label for="search-panel" class="visually-hidden">
                      Search
                    </label>
                    <input
                      id="search-panel"
                      type="text"
                      class="form-control fs-base border-0 pe-8"
                      autocomplete="off"
                      spellcheck="false"
                      placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <a
                      class="clear-icon d-none align-items-center position-absolute top-0 bottom-0 my-auto d-flex align-items-center"
                      style={{ right: "0.75rem", cursor: "pointer" }}
                    >
                      <i class="fa-regular fa-xmark fs-5 text-secondary"></i>
                    </a>
                  </div>
                  <div>
                    <button
                      class="btn fs-base btn-primary"
                      onClick={() => getSearch(search)}
                    >
                      <IoIosSearch />
                    </button>
                  </div>
                </div>
              </div>

              <p
                class="text-white text-opacity-75 mb-0"
                style={{ minHeight: "22px" }}
              >
                Sponsored: Stake: 200% Bonus - VIP Experience, $100,000 daily
                race, 75K weekly Raffles. <a href="#">Claim Bonus</a>
              </p>
            </div>

            <div class="col-auto mx-auto">
              <div class="d-none d-lg-flex justify-content-center mt-n4"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
