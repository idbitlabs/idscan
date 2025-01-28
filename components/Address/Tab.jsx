import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import { IoMdDownload } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";

const Tab = ({ activeComp, setActiveComp }) => {
  const tab = [
    "Transactions",
    "Internal Transactions",
    "Token Transfers (ERC-20)",
    "NFT Transfers",
    "Produced Blocks",
    "Multichain Portfolio",
  ];
  return (
    <div class="d-flex align-items-start flex-wrap pb-3">
      <ul
        class="nav nav-pills text-nowrap snap-x-mandatory overflow-x-auto flex-nowrap scrollbar-custom flex-grow-1 pt-4 gap-2 nav_tabs1"
        id="nav_tabs"
        role="tablist"
      >
        {tab.map((item, index) => (
          <li class="nav-item snap-align-start">
            <a
              onClick={() => setActiveComp(item)}
              class={`nav-link ${item == activeComp ? "active" : ""} `}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div class="pt-2 pt-md-4">
        <a class="btn btn-sm btn-white text-nowrap" href="#">
          <i class="far fa-filters me-0.5">
            <FiFilter />
          </i>{" "}
          Advanced Filter
        </a>
      </div>
    </div>
  );
};

export default Tab;
