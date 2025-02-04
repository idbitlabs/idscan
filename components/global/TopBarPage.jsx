import React from "react";

const TopBarPage = () => {
  return 
<section id="masterTopBar" class="sticky-top bg-white border-bottom py-2 d-print-none">
    <div class="container-xxl d-flex align-items-center justify-content-between">
    <div id="ethPrice" class="d-none d-md-flex align-items-center gap-4 w-100 fs-sm">
    <div class="text-muted"><span class="text-muted">POL Price:</span> 
    
    <a href="/chart/POLprice">$0.95</a>
    <span data-bs-toggle="tooltip" data-bs-placement="top" title="Changes in the last 24 hours">
        <span class="text-success"> +2.32%</span></span></div><div class="text-muted d-none d-lg-block"><i class="fad fa-gas-pump me-1"></i> Gas: <span id="spanGasTooltip" data-bs-toggle="tooltip" data-bs-html="true"><a href="/gastracker"><span class="gasPricePlaceHolder">49</span> Gwei</a></span></div>
    </div>
    <div class="d-flex justify-content-end align-items-center gap-2 w-100">
    <div id="frmMaster" class="search-panel-container flex-grow-1 position-relative" style="width: 30rem;">
    <form action="/search" method="GET" autocomplete="off" spellcheck="false" class="auto-search-max-height">
    <span class="d-flex align-items-center position-absolute top-0 bottom-0" title="Search" style="left: 0.75rem;">
    <i class="fa-regular fa-search fs-5 text-secondary"></i>
    </span>
    <input type="text" class="form-control form-control-lg bg-light bg-focus-white pe-20" autocomplete="off" spellcheck="false" id="search-panel" name="q" placeholder="Search by Address / Txn Hash / Block / Token / Domain Name" aria-describedby="button-header-search" onkeyup="handleSearchText(this);" maxlength="68" style="padding-left: 2.375rem;" />
    <a href="javascript:;" class="clear-icon d-none align-items-center position-absolute top-0 bottom-0 my-auto d-flex align-items-center" style="right: 3.375rem; cursor:pointer;">
    <i class="fa-regular fa-xmark fs-5 text-secondary"></i>
    </a>
    <a href="javascript:;" class="search-icon d-none btn btn-sm btn-white my-1.5 align-items-center position-absolute top-0 bottom-0 d-flex align-items-center" style="right: 0.75rem; cursor:pointer;">
    <i class="fa-regular fa-arrow-turn-down-left text-secondary"></i>
    </a>
    <input type="hidden" value id="hdnSearchText" />
    <input type="hidden" value id="hdnSearchLabel" />
    <input id="hdnIsTestNet" value="False" type="hidden" />
    <span class="shortcut-slash-icon align-items-center position-absolute top-0 bottom-0 align-items-center d-none d-sm-flex" title="Search" style="right: 0.5rem;">
    <kbd class="bg-dark bg-opacity-25 fw-semibold px-2 py-0.5 text-white">/</kbd>
    </span>
    </form>
    </div>
    <div id="divThemeSetting" class="dropdown d-none d-lg-block">
    <button class="btn btn-lg btn-white text-primary content-center" type="button" id="dropdownMenuTopbarSettings" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false" style="width: 2.375rem; height: 2.375rem;">
    <span class="theme-btn-main"><i class="far fa-sun-bright theme-icon-active" data-href="#fa-sun-bright"></i></span>
    </button>
    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuTopbarSettings">
    <li>
    <button type="button" class="dropdown-item theme-btn active" data-bs-theme-value="light" onclick="setThemeMode('light');">
    <i class="far fa-sun-bright fa-fw dropdown-item-icon theme-icon me-1" data-href="#fa-sun-bright"></i> Light
    </button>
    </li>
    <li>
    <button type="button" class="dropdown-item theme-btn" data-bs-theme-value="dim" onclick="setThemeMode('dim');">
    <i class="far fa-moon-stars fa-fw dropdown-item-icon theme-icon me-1" data-href="#fa-moon-stars"></i> Dim
    </button>
    </li>
    <li>
    <button type="button" class="dropdown-item theme-btn" data-bs-theme-value="dark" onclick="setThemeMode('dark');">
    <i class="far fa-moon fa-fw dropdown-item-icon theme-icon me-1" data-href="#fa-moon"></i> Dark
    </button>
    </li>
    <li>
    <hr class="dropdown-divider">
    </li>
    <li>
    <a class="dropdown-item" href="/settings">
    <i class="far fa-gear fa-fw dropdown-item-icon me-1"></i> Site Settings <i class="far fa-arrow-right ms-1"></i>
    </a>
    </li>
    </ul>
    </div>
    <div id="divTestNet" class="dropdown d-none d-lg-block">
    <button class="btn btn-lg btn-white content-center p-0" type="button" id="dropdownTopbarNetworks" data-bs-toggle="dropdown" aria-expanded="false" style="width: 2.375rem; height: 2.375rem;">
    <img width="18" data-img-theme="light" src="./assets/poly/images/svg/logos/chain-light.svg?v=24.2.2.0" alt="Polygon PoS Chain Logo">
    <img width="18" data-img-theme="dim" src="./assets/poly/images/svg/logos/chain-dim.svg?v=24.2.2.0" alt="Polygon PoS Chain Logo">
    <img width="18" data-img-theme="dark" src="./assets/poly/images/svg/logos/chain-dark.svg?v=24.2.2.0" alt="Polygon PoS Chain Logo">
    </button>
    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownTopbarNetworks">
    <li><a class="dropdown-item active" href="https://polygonscan.com">Polygon Mainnet</a></li><li><a class="dropdown-item" href="https://zkevm.polygonscan.com">zkEVM Mainnet</a></li>
    <li>
    <hr class="dropdown-divider"/>
    </li>
    <li><a class="dropdown-item" href="https://mumbai.polygonscan.com">Mumbai Testnet</a></li><li><a class="dropdown-item" href="https://testnet-zkevm.polygonscan.com">zkEVM Testnet</a></li><li><a class="dropdown-item" href="https://cardona-zkevm.polygonscan.com">Cardona Testnet</a></li>
    </ul>
    </div>
    </div>
    </div>
  </section>
};

export default TopBarPage;
