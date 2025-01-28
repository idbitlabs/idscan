import React from "react";

const List = () => {
  return (
    <ul
      class="dropdown-menu dropdown-menu-sm-end"
      aria-labelledby="dropdownTxnMore"
      style={{ minWidth: "15rem", marginLeft: "-12.2rem", display: "block" }}
    >
      <a
        href="/vmtrace?txhash=0x6f130410dfd25ad46824ef42a0e92b1ee9692ce3ab663d29fd5b8eb158645010"
        class="dropdown-item"
        rel="nofollow"
      >
        Geth Debug Trace
      </a>
      <a
        href="/vmtrace?txhash=0x6f130410dfd25ad46824ef42a0e92b1ee9692ce3ab663d29fd5b8eb158645010&amp;type=gethtrace2"
        class="dropdown-item"
        rel="nofollow"
      >
        Geth Debug Trace_2
      </a>
    </ul>
  );
};

export default List;
