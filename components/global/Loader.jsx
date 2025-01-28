import React from "react";

const Loader = () => {
  return (
    <div class="text-center py-10">
      <div class="spinner-border text-primary" role="status">
        <span
          style={{
            visibility: "visible",
          }}
          class=""
        ></span>
      </div>
      <div class="small text-muted mt-1">Loading</div>
    </div>
  );
};

export default Loader;
