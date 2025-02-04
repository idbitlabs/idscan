import React from "react";
import { GoQuestion } from "react-icons/go";
const Table = () => {
  return (
    <div class="card-body p-0 new_overflowY">
      <table id="datatable" class="table table-lg table-hover text-nowrap mb-0">
        <thead class="text-nowrap">
          <tr>
            <th scope="col" width="20" class="text-center text-muted">
              #
            </th>
            <th scope="col">Collection</th>
            <th scope="col">Type</th>
            <th scope="col">
              Volume
              <i class="far fa-question-circle text-muted">
                <GoQuestion />
              </i>
            </th>
            <th scope="col">
              Change (%)
              <i class="far fa-question-circle text-muted">
                <GoQuestion />
              </i>
            </th>
            <th scope="col">
              Sales
              <i class="far fa-question-circle text-muted">
                {" "}
                <GoQuestion />
              </i>
            </th>
            <th scope="col" class="text-end">
              Min Price (24H)
              <i class="far fa-question-circle text-muted">
                {" "}
                <GoQuestion />
              </i>
            </th>
            <th scope="col" class="text-end">
              Max Price (24H)
              <i class="far fa-question-circle text-muted">
                {" "}
                <GoQuestion />
              </i>
            </th>
            <th scope="col">
              Transfers
              <i class="far fa-question-circle text-muted">
                {" "}
                <GoQuestion />
              </i>
            </th>
            <th scope="col">
              Owners
              <i class="far fa-question-circle text-muted">
                {" "}
                <GoQuestion />
              </i>
            </th>
            <th scope="col">
              Total Assets
              <i class="far fa-question-circle text-muted">
                <GoQuestion />
              </i>
            </th>
          </tr>
        </thead>
        <tbody class="align-middle">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <tr key={index} role="row" class="odd">
              <td class=" text-center text-muted">{index + 1}</td>
              <td>
                <a
                  class="d-inline-flex align-items-center gap-2 link-dark"
                  href="#"
                >
                  <div>
                    <img class="rounded-circle" width="40" src="icon.png" />
                  </div>
                  <div
                    class="flex-grow-1 text-truncate fw-medium"
                    style={{ maxWidth: "15rem" }}
                  >
                    SAVAGE DOGS OMEGA JR
                  </div>
                </a>
              </td>
              <td>
                <span class="badge border text-dark fw-normal rounded-pill px-2 py-1.5">
                  ERC-721
                </span>
              </td>
              <td>4,000 POL</td>
              <td>
                <span class="text-success">0.00%</span>
              </td>
              <td>4</td>
              <td class=" text-end">
                <div class="text-end">1000 POL</div>
              </td>
              <td class=" text-end">
                <div class="text-end">1000 POL</div>
              </td>
              <td>6,121</td>
              <td>232</td>
              <td>5,834</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
