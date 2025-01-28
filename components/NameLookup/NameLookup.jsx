import React, { useState, useEffect, useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { FaRegCopy } from "react-icons/fa6";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import { CONTEXT } from "../../context/ContextProvider";
import { shortenAddress } from "../../utils/index";
import Input from "./Input";

const NameLookup = () => {
  const { ENS_NAME } = useContext(CONTEXT);
  const [history, setHistory] = useState([]);

  const [address, setAddress] = useState();
  const [name, setName] = useState();

  const getAddressName = async (address) => {
    try {
      const addressName = await ENS_NAME(address);
      setName(addressName);
      console.log(addressName);
      //LOCAL STORAGE
      const currentTime = new Date();
      // Extract individual components of the current time
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();

      const ENS = {
        address: address,
        name: addressName,
        time: `${hours}:${minutes}:${seconds}`,
      };
      let ENSArray = [];
      const poolLists = localStorage.getItem("ENS_NAME");
      if (poolLists) {
        ENSArray = JSON.parse(localStorage.getItem("ENS_NAME"));
        ENSArray.push(ENS);
        localStorage.setItem("ENS_NAME", JSON.stringify(ENSArray));
      } else {
        ENSArray.push(ENS);
        localStorage.setItem("ENS_NAME", JSON.stringify(ENSArray));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const pools = JSON.parse(localStorage.getItem("ENS_NAME"));
    setHistory(pools);
  }, [name]);
  return (
    <main id="content" class="main-content" role="main">
      <Input />
      <section
        class="bg-light py-12"
        style={{ backgroundImage: "var(--bg-img-wave)" }}
      >
        <div class="container-xxl">
          <div class="row justify-content-between align-items-center">
            <div class="col-md-9 col-lg-6">
              <h1 class="fs-lg mb-3">Domain Name Lookup</h1>
              <div id="ctl00" class="js-validate col-xl-10">
                <div class="input-group input-group-lg mb-3">
                  <input
                    class="form-control py-3"
                    type="text"
                    required="true"
                    placeholder="Search by Address or Domain Name"
                    autocomplete="off"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <button
                    onClick={() => getAddressName(address)}
                    class="btn btn-primary px-4"
                  >
                    <i class="far fa-magnifying-glass">
                      <FiSearch />
                    </i>
                  </button>
                </div>
              </div>
              <blockquote class="blockquote mb-1 mb-md-2 mt-3 text-muted">
                <p class="mb-1 fs-sm">
                  Domain names allow users to interact with other addresses
                  on-chain using human-readable names instead of long and
                  complicated address hashes.
                </p>
                <a
                  href="https://www.theblockchaincoders.com/SourceCode"
                  target="_blank"
                  rel="nofollow noopener"
                  class="fs-sm"
                >
                  Learn more
                  <i class="far fa-angle-right align-middle ms-1"></i>
                </a>
              </blockquote>
            </div>

            <div class="col-auto mx-auto">
              <div class="d-none d-lg-flex justify-content-center mt-n4"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="container-xxl">
        <div class="d-flex d-lg-none justify-content-center mt-6"></div>
      </section>

      <section class="container-xxl pt-8 pb-12">
        <ul class="nav nav-pills gap-2 pb-3" id="myTab" role="tablist">
          <li
            id="ContentPlaceHolder1_liUDNameTabNav"
            class="nav-item snap-align-start"
            role="presentation"
          >
            <button type="button" class="nav-link position-relative active">
              Unstoppable Domains Registrations
            </button>
          </li>
        </ul>

        <div class="tab-content" id="myTabContent">
          <div
            id="ContentPlaceHolder1_unstoppableDomainsTabContent"
            class="tab-pane fade active show"
            role="tabpanel"
            aria-labelledby="unstoppableDomainsTabNav"
            tabindex="0"
          >
            <div class="card">
              <div class="table-responsive">
                <div
                  id="unstoppableDomainsTable_wrapper"
                  class="dataTables_wrapper dt-bootstrap4 no-footer"
                >
                  {/* //1?? */}
                  <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 p-4 text-dark">
                    <div
                      class="dataTables_info"
                      id="unstoppableDomainsTable_info"
                      role="status"
                      aria-live="polite"
                    >
                      Latest Domain Name Registrations
                    </div>
                    <div
                      class="dataTables_paginate paging_custompagination"
                      id="unstoppableDomainsTable_paginate"
                    >
                      <ul class="pagination pagination-sm mb-0">
                        <li
                          class="first paginate_button page-item disabled"
                          id="unstoppableDomainsTable_first"
                        >
                          <a
                            href="#"
                            aria-controls="unstoppableDomainsTable_first"
                            class="page-link"
                          >
                            First
                          </a>
                        </li>
                        <li
                          class="previous paginate_button page-item disabled"
                          id="unstoppableDomainsTable_previous"
                        >
                          <a
                            href="#"
                            aria-controls="unstoppableDomainsTable_previous"
                            class="page-link px-3"
                          >
                            <i class="fas fa-chevron-left small">
                              <MdKeyboardArrowLeft />
                            </i>
                          </a>
                        </li>
                        <li class="page-item disabled">
                          <span class="page-link text-nowrap">
                            Page <span class="paginate_page">1</span> of{" "}
                            <span class="paginate_total">400</span>
                          </span>
                        </li>
                        <li
                          class="next paginate_button page-item"
                          id="unstoppableDomainsTable_next"
                        >
                          <a
                            href="#"
                            aria-controls="unstoppableDomainsTable_next"
                            class="page-link px-3"
                          >
                            <i class="fas fa-chevron-right small">
                              <MdKeyboardArrowRight />
                            </i>
                          </a>
                        </li>
                        <li
                          class="last paginate_button page-item"
                          id="unstoppableDomainsTable_last"
                        >
                          <a
                            href="#"
                            aria-controls="unstoppableDomainsTable_last"
                            class="page-link"
                          >
                            Last
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* //2?? */}
                  <div class="custom-datatables-processing">
                    <div
                      id="unstoppableDomainsTable_processing"
                      class="dataTables_processing card"
                      style={{ display: "none" }}
                    >
                      <div id="overlay" class="text-center py-10 ">
                        <div class="spinner-border text-primary" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="small text-muted mt-1">Loading</div>
                      </div>
                    </div>
                  </div>
                  {/* //3?? */}
                  <table
                    id="unstoppableDomainsTable"
                    class="table table-hover table-align-middle dataTable no-footer"
                    aria-describedby="unstoppableDomainsTable_info"
                    role="grid"
                  >
                    <thead class="align-middle text-nowrap">
                      <tr role="row">
                        <th
                          scope="col"
                          class="sorting_disabled"
                          rowspan="1"
                          colspan="1"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          class="sorting_disabled"
                          rowspan="1"
                          colspan="1"
                        >
                          Address
                        </th>
                        <th
                          scope="col"
                          class="sorting_disabled"
                          rowspan="1"
                          colspan="1"
                        >
                          Age
                        </th>
                        <th
                          scope="col"
                          class="sorting_disabled"
                          rowspan="1"
                          colspan="1"
                        >
                          Domains Name
                        </th>
                        <th
                          scope="col"
                          class="sorting_disabled"
                          rowspan="1"
                          colspan="1"
                        ></th>
                      </tr>
                    </thead>
                    <tbody class="align-middle text-nowrap">
                      {history?.map((item, index) => (
                        <tr
                          key={index}
                          role="row"
                          class={index / 2 == 0 ? "odd" : "event"}
                        >
                          <td>{index + 1}</td>
                          <td>
                            <span class="d-flex d-flex align-items-center gap-2">
                              <a
                                href={`/address/${item.address}`}
                                class="me-1"
                                data-bs-trigger="hover"
                                data-bs-toggle="tooltip"
                              >
                                <span>{shortenAddress(item.address)}</span>
                              </a>
                              <a
                                onClick={() =>
                                  navigator.clipboard.writeText(item.address)
                                }
                                class="js-clipboard link-secondary  "
                              >
                                <i id="linkIcon_UD1" class="far fa-copy fa-fw">
                                  <FaRegCopy />
                                </i>{" "}
                              </a>
                            </span>
                          </td>
                          <td>
                            <span class="showLocalDate">{item.time}</span>
                          </td>
                          <td>
                            <img
                              src="icon.png"
                              width="13"
                              class="filter-grayscale me-1"
                            />
                            <a class="d-inline-flex align-items-center">
                              <span rel="tooltip" class="text-break py-0.5">
                                {item.name}
                              </span>
                            </a>
                          </td>
                          <td>
                            <a class="btn btn-sm btn-secondary">
                              More details{" "}
                              <i class="fal fa-chevron-right small ms-1">
                                <MdKeyboardArrowRight />
                              </i>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NameLookup;
