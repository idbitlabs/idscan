import React from "react";

const TableHead = () => {
  return (
    <div class="card-body d-flex flex-wrap justify-content-between gap-3">
      <div class="text-muted">
        <span class="text-dark">
          &nbsp;Showing the last 500 verified contracts source code
        </span>
      </div>

      <nav aria-label="Table navigation">
        <ul class="pagination pagination-sm mb-0">
          <li class="page-item disabled">
            <span class="page-link">First</span>
          </li>
          <li class="page-item disabled">
            <span class="page-link px-3">
              <i class="fa fa-chevron-left small"></i>
              <span class="sr-only">Previous</span>
            </span>
          </li>
          <li class="page-item disabled">
            <span Class="page-link">Page 1 of 20</span>
          </li>
          <li class="page-item" data-bs-toggle="tooltip" title="Go to Next">
            <a
              class="page-link px-3"
              href="/contractsVerified/2"
              aria-label="Next"
            >
              <span aria-hidden="true">
                <i class="fa fa-chevron-right small"></i>
              </span>
              <span class="sr-only">Next</span>
            </a>
          </li>
          <li class="page-item" data-bs-toggle="tooltip" title="Go to Last">
            <a class="page-link" href="/contractsVerified/20" aria-label="Last">
              <span aria-hidden="true">Last</span>
              <span class="sr-only">Last</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TableHead;
