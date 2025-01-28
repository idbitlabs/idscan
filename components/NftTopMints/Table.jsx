import React from "react";

const Table = () => {
  return (
    <div class="card-body p-0">
      <table id="datatable" class="table table-lg table-hover text-nowrap mb-0">
        <thead class="text-nowrap">
          <tr>
            <th scope="col" width="20" class="text-center text-muted">
              #
            </th>
            <th scope="col">Collection</th>
            <th scope="col">Type</th>
            <th scope="col">Mints</th>
            <th scope="col">Unique Minters</th>
            <th scope="col">Total Owners</th>
            <th scope="col">Total Assets</th>
          </tr>
        </thead>
        <tbody class="align-middle">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <tr role="row" class={index / 2 == 0 ? "odd" : "even"}>
              <td class=" text-center text-muted">{index + 1}</td>
              <td>
                <a
                  class="d-inline-flex align-items-center gap-2 link-dark"
                  href="/token/0x93b125e0d21303be4cbdb548b1f889bda08b68de"
                >
                  <div>
                    <img
                      class="rounded-circle"
                      width="40"
                      src="icon.png"
                      onerror="this.src='/images/main/nft-placeholder.svg'"
                    />
                  </div>
                  <div
                    class="flex-grow-1 text-truncate fw-medium"
                    style={{ maxWidth: "15rem" }}
                  >
                    Airdrop at ethliq.top
                  </div>
                </a>
              </td>
              <td>
                <span class="badge border text-dark fw-normal rounded-pill px-2 py-1.5">
                  ERC-721
                </span>
              </td>
              <td>
                <div class="d-flex justify-content-start align-items-center gap-2">
                  <div>
                    508<span class="ms-1 small text-muted">(N/A)</span>
                  </div>
                  <div
                    class="progress"
                    style={{
                      height: "0.25rem",
                      minWidth: "4rem",
                      maxWidth: "4rem",
                    }}
                  >
                    <div
                      class="progress-bar bg-primary"
                      role="progressbar"
                      aria-label="Basic example"
                      style={{ width: "0%" }}
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </td>
              <td>
                <div class="d-flex justify-content-start align-items-center gap-2">
                  <div>
                    508
                    <span class="ms-1 small text-muted">(100.00%)</span>
                  </div>
                  <div
                    class="progress"
                    style={{
                      height: "0.25rem",
                      minWidth: "4rem",
                      maxWidth: "4rem",
                    }}
                  >
                    <div
                      class="progress-bar bg-primary"
                      role="progressbar"
                      aria-label="Basic example"
                      style={{ width: "100.00%" }}
                      aria-valuenow="100.00"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </td>
              <td>4,929</td>
              <td>
                0{" "}
                <span
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  data-bs-boundary="viewport"
                  aria-label="Note: Filtered by  totalSupply() , method returned a zero value."
                >
                  <i class="fa fa-info-circle text-secondary"></i>
                </span>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
