import React from "react";

const Title = () => {
  return (
    <section class="container-xxl">
      <div class="d-flex flex-wrap justify-content-between align-items-center border-bottom gap-3 py-5">
        <div class="d-flex flex-wrap align-items-center gap-1">
          <h1 class="h5 me-1 mb-0">Forked Blocks</h1>
          <div class="text-muted text-break">
            Excluded blocks as a result of "Chain Reorganizations"
          </div>
        </div>
      </div>
    </section>
  );
};

export default Title;
