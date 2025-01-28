import React from "react";

const InfoModel = ({ setInfoModel }) => {
  return (
    <div id="ContentPlaceHolder1_divPublicNote" class="p-4 pb-0">
      <div
        id="ContentPlaceHolder1_divInfoHideTxns"
        class="alert alert-dark text-break alert-dismissible mb-2"
      >
        <div class="d-flex align-items-baseline gap-2">
          <span>
            Transactions involving tokens marked as suspicious, unsafe, spam or
            brand infringement are currently hidden. To show them, go to{" "}
            <a href="#">Site Settings</a>.
          </span>
        </div>
        <button
          type="button"
          class="btn-close"
          onClick={() => setInfoModel(false)}
        ></button>
      </div>
    </div>
  );
};

export default InfoModel;
