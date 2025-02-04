import React from "react";
import { FaArrowRightLong, FaRegCopy } from "react-icons/fa6";
const Table = () => {
  return (
    <div class="table-responsive">
      <table class="table table-hover table-align-middle mb-0">
        <thead class="text-nowrap">
          <tr>
            <th scope="col" width="20" class="text-center text-muted">
              #
            </th>
            <th scope="col">Address</th>
            <th scope="col">Name Tag</th>
            <th scope="col">
              <i class="far fa-arrow-down-wide-short small text-secondary me-0.5"></i>
              Balance
            </th>
            <th scope="col">Percentage</th>
            <th scope="col">Txn Count</th>
          </tr>
        </thead>
        <tbody class="align-middle text-nowrap">
          {[1, 2, 3, 4, 5, 6, 7, 8, 10].map((item, index) => (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td>
                <span
                  class="d-flex align-items-center"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <i class="far fa-file-alt text-secondary me-1"></i>
                  <a
                    class="me-1"
                    href="/address/0x0000000000000000000000000000000000001010"
                  >
                    <span>0x000000...00001010</span>
                  </a>
                  <a class="js-clipboard link-secondary" href="javascript:;">
                    <i class="far fa-copy fa-fw">
                      <FaRegCopy />
                    </i>{" "}
                  </a>
                </span>
              </td>
              <td>Polygon: POL Token</td>
              <td>
                8,767,507,033<b>.</b>96480922 POL
              </td>
              <td>90.99931930%</td>
              <td>333,893</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
