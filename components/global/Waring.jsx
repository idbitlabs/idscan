import React from "react";

const Waring = ({ readload }) => {
  return (
    <div class="new_notifications-container">
      <div class="new_alert">
        <div class="new_flex">
          <div class="new_alert-prompt-wrap">
            <p class="new_text-sm text-yellow-700">
              Currenctly you are useing the free API, and it has liited number
              of requests you can make//
            </p>
            <a onClick={() => readload()} class="btn btn-primary">
              ReadLoad
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waring;
