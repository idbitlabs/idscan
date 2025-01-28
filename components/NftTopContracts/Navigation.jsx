import React from "react";

const Navigation = () => {
  return (
    <ul class="nav nav-pills text-nowrap snap-x-mandatory overflow-x-auto flex-nowrap py-3 gap-2">
      <li class="nav-item snap-align-start ms-auto">
        <div class="btn-group btn-group-sm">
          <input type="radio" class="btn-check" />
          <label class="btn btn-white" for="btnradio0">
            1h
          </label>
          <input type="radio" class="btn-check" />
          <label class="btn btn-white" for="btnradio1">
            6h
          </label>
          <input type="radio" class="btn-check" />
          <label class="btn btn-white" for="btnradio2">
            12h
          </label>
          <input type="radio" class="btn-check" />
          <label class="btn btn-white" for="btnradio3">
            1d
          </label>
          <input type="radio" class="btn-check" />
          <label class="btn btn-white" for="btnradio4">
            7d
          </label>
          <input type="radio" class="btn-check" />
          <label class="btn btn-white" for="btnradio5">
            30d
          </label>
        </div>
      </li>
    </ul>
  );
};

export default Navigation;
