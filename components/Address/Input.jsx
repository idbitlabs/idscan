import React from "react";

const Input = () => {
  return (
    <>
      <input
        type="hidden"
        name="hdnAgeText"
        id="hdnAgeText"
        defaultValue="Age"
      />
      <input
        type="hidden"
        name="hdnDateTimeText"
        id="hdnDateTimeText"
        defaultValue="Date Time (UTC)"
      />
      <input
        type="hidden"
        name="hdnAgeTitle"
        id="hdnAgeTitle"
        defaultValue="Click to show Age Format"
      />
      <input
        type="hidden"
        name="hdnDateTimeTitle"
        id="hdnDateTimeTitle"
        defaultValue="Click to show Datetime Format"
      />
      <input
        type="hidden"
        name="hdnTxnText"
        id="hdnTxnText"
        defaultValue="Txn Fee"
      />
      <input
        type="hidden"
        name="hdnGasPriceText"
        id="hdnGasPriceText"
        defaultValue="Gas Price"
      />
      <input
        type="hidden"
        name="hdnTxnFeeTitle"
        id="hdnTxnFeeTitle"
        defaultValue="(Gas Price * Gas Used by Txns) in MATIC"
      />
      <input
        type="hidden"
        name="hdnGasPriceTitle"
        id="hdnGasPriceTitle"
        defaultValue="Gas Price in Gwei"
      />
      <input
        type="hidden"
        name="hdnSiteName"
        id="hdnSiteName"
        defaultValue="polygonscan"
      />
      <input
        type="hidden"
        name="hdnSiteEmptyToken"
        id="hdnSiteEmptyToken"
        defaultValue="../assets/poly/images/svg/empty-token.svg?v=24.2.2.0"
      />
      <input
        type="hidden"
        name="hdnSiteShortUrl"
        id="hdnSiteShortUrl"
        defaultValue="polygonscan.com"
      />
      <input
        name="ctl00$ContentPlaceHolder1$hdnAddress"
        type="hidden"
        id="hdnAddress"
        defaultValue="0x127685d6dd6683085da4b6a041efcef1681e5c9c"
      />
      <input
        name="ctl00$ContentPlaceHolder1$hdnEnsText"
        type="hidden"
        id="hdnEnsText"
      />
      <input
        name="ctl00$ContentPlaceHolder1$hdnIsEnsContainUnicodeChars"
        type="hidden"
        id="hdnIsEnsContainUnicodeChars"
      />
      <input
        name="ctl00$ContentPlaceHolder1$hdnIsEnsContainZeroWidthChars"
        type="hidden"
        id="hdnIsEnsContainZeroWidthChars"
      />
      <input
        name="ctl00$ContentPlaceHolder1$hdnIsUDContainUnicodeChars"
        type="hidden"
        id="hdnIsUDContainUnicodeChars"
      />
      <input
        name="ctl00$ContentPlaceHolder1$hdnIsUDContainZeroWidthChars"
        type="hidden"
        id="hdnIsUDContainZeroWidthChars"
      />
    </>
  );
};

export default Input;
