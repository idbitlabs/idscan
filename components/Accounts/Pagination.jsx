import React from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Pagination = () => {
  return (
    <form>
      <div class="card-footer d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div class="d-flex align-items-center gap-2">
          <span class="text-nowrap text-muted">Show rows:</span>
          <select class="form-select form-select-sm w-auto">
            <option value="10">10</option>
            <option value="25">25</option>
            <option selected="selected" value="50">
              50
            </option>
            <option value="100">100</option>
          </select>
        </div>

        <nav>
          <ul class="pagination pagination-sm mb-0">
            <li class="page-item disabled">
              <span class="page-link">First</span>
            </li>
            <li class="page-item disabled">
              <span class="page-link px-3">
                <i class="fa fa-chevron-left small">
                  <MdKeyboardArrowLeft />
                </i>
              </span>
            </li>
            <li class="page-item disabled">
              <span class="page-link text-nowrap">Page 1 of 8</span>
            </li>
            <li class="page-item">
              <a class="page-link px-3">
                <span>
                  <i class="fa fa-chevron-right small">
                    <MdKeyboardArrowRight />
                  </i>
                </span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                <span class="sr-only">Last</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </form>
  );
};

export default Pagination;
