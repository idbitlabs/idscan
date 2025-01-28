import React from "react";

const QuickLinks = () => {
  return (
    <ul
      class="dropdown-menu dropdown-menu-end new_disply_Block_buy_adddess"
      aria-labelledby="dropdownMore1"
      style={{
        marginLeft: "-10rem",
        marginTop: "1rem",
      }}
    >
      <li>
        <a
          class="dropdown-item"
          href="/tokenapprovalchecker?search=0xeedba2484aaf940f37cd3cd21a5d7c4a7dafbfc0"
        >
          <i class="far fa-memo-circle-check fa-fw dropdown-item-icon me-1"></i>{" "}
          Token Approvals{" "}
          <span class="badge border bg-light text-muted">Beta</span>
        </a>
      </li>
      <a
        class="dropdown-item"
        href="/balancecheck-tool?a=0xeedba2484aaf940f37cd3cd21a5d7c4a7dafbfc0"
      >
        <i class="far fa-history fa-fw dropdown-item-icon me-1"></i> Check
        Previous Balance
      </a>
      <li>
        <hr class="dropdown-divider" />
      </li>
      <li>
        <a
          class="dropdown-item"
          href="/contactus?id=5&amp;a=0xeedba2484aaf940f37cd3cd21a5d7c4a7dafbfc0"
        >
          <i class="far fa-user-tag fa-fw dropdown-item-icon me-1"></i> Update
          Name Tag or Label
        </a>
      </li>
      <li>
        <a class="dropdown-item" href="/contactus?id=6">
          <i class="far fa-flag fa-fw dropdown-item-icon me-1"></i> Report/Flag
          Address
        </a>
      </li>
    </ul>
  );
};

export default QuickLinks;
