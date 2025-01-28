import React from "react";

const Explorer = ({ addressExplor }) => {
  return (
    <div
      class="dropdown-menu new_disply_Block_buy_adddess"
      aria-labelledby="dropdownMore1"
      style={{
        marginLeft: "-8rem",
        marginTop: ".5rem",
      }}
    >
      <ul
        class="list-unstyled overflow-y-auto scrollbar-custom mb-0"
        style={{ maxHeight: "15rem" }}
      >
        <a
          class="dropdown-item d-flex align-items-center group gap-1"
          target="_blank"
          href={`https://etherscan.io/address/${addressExplor}`}
        >
          <img
            width="16"
            data-img-theme="light"
            src="https://images.blockscan.com/explorer-logos/etherscan.ico"
            alt=""
          />
          <img
            width="16"
            data-img-theme="darkmode"
            src="https://images.blockscan.com/explorer-logos/dark-etherscan.svg"
            alt=""
          />
          <span class="hash-tag text-truncate flex-grow-1">
            Etherscan <span class="text-muted">($80,821)</span>
          </span>
          <i class="far fa-arrow-up-right-from-square text-muted group-hover ms-2"></i>
        </a>
      </ul>
      <hr class="my-2" />
      <ul class="list-unstyled mb-0">
        <li>
          <a
            class="dropdown-item d-flex align-items-center group gap-1"
            target="_blank"
            href={`//blockscan.com/address/${addressExplor}`}
          >
            <img
              width="16"
              data-img-theme="light"
              src="https://blockscan.com/favicon.ico"
              alt=""
            />
            <img
              width="16"
              data-img-theme="darkmode"
              src="/assets/svg/logos/dark-blockscan.svg"
              alt=""
            />
            <span class="hash-tag text-truncate flex-grow-1">
              Blockscan (View All)
            </span>
            <i class="far fa-arrow-up-right-from-square text-muted group-hover ms-2"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Explorer;
