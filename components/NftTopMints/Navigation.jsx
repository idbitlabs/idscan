import React from "react";

const Navigation = () => {
  return (
    <ul
      class="nav nav-pills text-nowrap snap-x-mandatory overflow-x-auto flex-nowrap py-3 gap-2"
      role="Filters"
    >
      <li class="nav-item snap-align-start ms-auto">
        <div class="btn-group btn-group-sm">
          <input type="radio" class="btn-check" />
          <label class="btn btn-white" for="btnradio0">
            1m
          </label>
          <input type="radio" class="btn-check" />
          <label class="btn btn-white" for="btnradio1">
            3m
          </label>
          <input type="radio" class="btn-check" />
          <label class="btn btn-white" for="btnradio2">
            5m
          </label>
          <input type="radio" class="btn-check" />
          <label class="btn btn-white" for="btnradio3">
            15m
          </label>
          <input type="radio" class="btn-check" />
          <label class="btn btn-white" for="btnradio4">
            20m
          </label>
          <input type="radio" class="btn-check" />
          <label class="btn btn-white" for="btnradio5">
            1h
          </label>
        </div>
      </li>
    </ul>
  );
};

export default Navigation;
