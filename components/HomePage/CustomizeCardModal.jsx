import React from "react";

const CustomizeCardModal = () => {
  return (
    <div
      class="modal fade"
      id="customizeCardModal"
      tabindex="-1"
      aria-labelledby="customizeCardLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="customizeCardLabel">
              Custom Card
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>Customize this card by selecting one of the options below.</p>
            <form>
              <div id="ContentPlaceHolder1_divSavedAdvancedFiltersOption">
                <h6 class="text-cap fw-medium mb-2">ADVANCED FILTER</h6>
                <div class="d-flex gap-2 mb-4">
                  <div
                    class="position-relative border rounded py-1 px-2"
                    id="checkAdvancedFilterInputWrapper"
                  >
                    <input
                      class="form-check-input me-1"
                      type="radio"
                      name="checkCustomOption"
                      value="AdvancedFilters"
                      id="checkAdvancedFilter"
                    />
                    <label
                      class="form-check-label stretched-link"
                      for="checkAdvancedFilter"
                    >
                      Saved Filters
                    </label>
                  </div>
                </div>
              </div>
              <h6 class="text-cap fw-medium mb-2">PRESET</h6>
              <div class="d-flex flex-wrap gap-2">
                <div class="position-relative border rounded py-1 px-2">
                  <input
                    class="form-check-input me-1"
                    type="radio"
                    name="checkCustomOption"
                    value="LatestBlocks"
                    id="checkPresets1"
                  />
                  <label
                    class="form-check-label stretched-link"
                    for="checkPresets1"
                  >
                    Latest Blocks
                  </label>
                </div>
                <div class="position-relative border rounded py-1 px-2">
                  <input
                    class="form-check-input me-1"
                    type="radio"
                    name="checkCustomOption"
                    value="LatestTransactions"
                    id="checkPresets2"
                  />
                  <label
                    class="form-check-label stretched-link"
                    for="checkPresets2"
                  >
                    Latest Transactions
                  </label>
                </div>
                <div class="position-relative border rounded py-1 px-2">
                  <input
                    class="form-check-input me-1"
                    type="radio"
                    name="checkCustomOption"
                    value="HotContracts"
                    id="checkPresets3"
                  />
                  <label
                    class="form-check-label stretched-link"
                    for="checkPresets3"
                  >
                    Hot Contracts
                  </label>
                </div>
                <div class="position-relative border rounded py-1 px-2">
                  <input
                    class="form-check-input me-1"
                    type="radio"
                    name="checkCustomOption"
                    value="TopGuzzlers"
                    id="checkPresets4"
                  />
                  <label
                    class="form-check-label stretched-link"
                    for="checkPresets4"
                  >
                    Top Guzzlers
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer bg-light">
            <button
              type="button"
              class="btn btn-ghost-white"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" id="btnSaveCardType" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeCardModal;
