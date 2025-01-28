import React from "react";
import Link from "next/link";
//ICON
import { LuArrowUpToLine } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const Footer = () => {
  const footerMenu = [
    { name: "Brand Assets", link: "/brandassets" },
    { name: "Contact Us", link: "/contactus" },
    { name: "Terms", link: "/terms" },
  ];

  const tools = [
    { name: "Gas Tracker", link: "/gastracker" },
    { name: "Node Tracker", link: "/nodetracker" },
    { name: "Domain Name", link: "/name-lookup" },
    { name: "Unit Converter", link: "/unitconverter" },
  ];

  const product = [
    { name: "Token Approval", link: "/tokenapprovalchecker" },
    { name: "Verified Signatures", link: "/verifiedSignatures" },
    { name: "Dex Tracker", link: "/dex" },
    { name: "Code Reader", link: "/code-reader" },
    { name: "Similar Contracts", link: "/find-similar-contracts" },
    { name: "NFT Top Contracts", link: "/nftTopContracts" },
    { name: "Tokens", link: "/tokens" },
  ];
  return (
    <footer id="masterFooter" class="bg-light mt-auto d-print-none">
      <div class="container-xxl">
        <div class="d-flex justify-content-between align-items-baseline py-6">
          <div class="d-flex gap-2">
            <Link href="https://www.theblockchaincoders.com/">
              <a class="link-dark" rel="nofollow noopener" target="_blank">
                <i class="fab  me-0.5">
                  <FaXTwitter />
                </i>{" "}
                Twitter
              </a>
            </Link>
          </div>

          <a class="link-dark" href="#">
            <i class="far  me-1">
              <LuArrowUpToLine />
            </i>
            Back to Top
          </a>
        </div>
        <hr class="my-0" />

        <div class="row justify-content-md-between py-8 py-lg-10">
          <div class="col-lg-4 pe-xl-16 mb-4 mb-lg-0">
            <div class="d-flex align-items-center mb-3">
              <img
                class="me-2"
                width="28"
                data-img-theme="light"
                src="/icon.png"
                alt="Polygon PoS Chain Logo"
              />

              <span class="fs-5">Idbit Explorer</span>
            </div>
            <p class="fs-sm">
              Idbit is a Block Explorer and Analytics Platform for Infinity
              Inf Chain.
            </p>
            <button
              type="button"
              class="btn btn-sm btn-secondary"
              onclick="addNetwork('web3');"
            >
              <img
                class="me-1"
                width="18"
                src="/images/svg/brands/metamask.svg"
                alt="Metamask"
              />
              Add Idbit Network
            </button>
          </div>
          <div class="col-6 col-md-4 col-lg mb-10 mb-md-0">
            <h4 class="h6 mb-3">Company</h4>

            <ul class="list-unstyled list-sm-space fs-sm mb-0">
              {footerMenu.map((footer, index) => (
                <li>
                  <a href={footer.link} class="link-dark">
                    {footer.name}
                  </a>
                </li>
              ))}

              <li>
                <a
                  class="link-dark"
                  href="https://etherscan.io/bugbounty"
                  target="_blank"
                >
                  Bug Bounty
                </a>
                <i class="far fa-arrow-up-right-from-square text-muted ms-1"></i>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md-4 col-lg mb-10 mb-md-0">
            <h4 class="h6 mb-3">Tools</h4>

            <ul class="list-unstyled list-sm-space fs-sm mb-0">
              {tools.map((tool, index) => (
                <li key={tool.name}>
                  <a href={tool.link} class="link-dark">
                    {tool.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div class="col-6 col-md-4 col-lg">
            <h4 class="h6 mb-3">Products &amp; Services</h4>

            <ul class="list-unstyled list-sm-space fs-sm mb-0">
              {product.map((item, index) => (
                <li key={item.name}>
                  <a href={item.link} class="link-dark">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div class="border-top py-4">
          <div class="row justify-content-between align-items-center fs-sm">
            <div class="col-md mb-2 mb-md-0">
              <p class="mb-0">
                IDBit © 2025 (IDT-V1)
                <span class="mx-1">|</span> ⛏ Built by Team
                <a href="https://www.idbit.org/" target="_blank">
                  <strong>@idbitlabs</strong>
                  <i class="far fa-arrow-up-right-from-square text-muted ms-1">
                    <FaExternalLinkAlt />
                  </i>
                </a>
              </p>
            </div>
            <div class="col-md text-md-end">
              <p class="mb-0">
                Donations:
                <a
                  class="me-1"
                  href="/address/0xb87a51209240968f6e98f754c6894bee10800b7b"
                >
                  <span id="spanDonateAddress" runat="server">
                    0xb87a51209240968f6e98f754c6894bee10800b7b
                  </span>
                </a>
                <i class="fas fa-heart text-danger"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
