import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Navigation = () => {
  return (
    <div class="top d-flex flex-wrap align-items-center justify-content-between gap-3 p-3 topdivdt">
      <div class="datainfo">
        <div
          class="dataTables_info"
          id="datatable_info"
          role="status"
          aria-live="polite"
        >
          <div class="text-muted">
            <span class="text-dark">More than 100,000 records found</span>
            <span class="d-flex small">(Showing last 1000 records)</span>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column gap-2">
        <div class="d-sm-flex align-items-center align-self-sm-end">
          <div class="dataTables_paginate paging_full" id="datatable_paginate">
            <ul class="pagination pagination-sm mb-0">
              <li
                class="paginate_button page-item first disabled"
                id="datatable_first"
              >
                <a
                  href="#"
                  aria-controls="datatable"
                  data-dt-idx="0"
                  tabindex="0"
                  class="page-link"
                >
                  First
                </a>
              </li>
              <li
                class="paginate_button page-item previous disabled"
                id="datatable_previous"
              >
                <a
                  href="#"
                  aria-controls="datatable"
                  data-dt-idx="1"
                  tabindex="0"
                  class="page-link px-3"
                >
                  <i class="fa fa-chevron-left small">
                    <IoIosArrowBack />
                  </i>
                </a>
              </li>
              <li class="page-item disabled">
                <span class="page-link">Page 1 of 40</span>
              </li>
              <li class="paginate_button page-item next" id="datatable_next">
                <a
                  href="#"
                  aria-controls="datatable"
                  data-dt-idx="2"
                  tabindex="0"
                  class="page-link px-3"
                >
                  <i class="fa fa-chevron-right small">
                    <IoIosArrowForward />
                  </i>
                </a>
              </li>
              <li class="paginate_button page-item last" id="datatable_last">
                <a
                  href="#"
                  aria-controls="datatable"
                  data-dt-idx="3"
                  tabindex="0"
                  class="page-link"
                >
                  Last
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
