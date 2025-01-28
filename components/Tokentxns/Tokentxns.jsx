import React, { useState } from "react";
import { GoQuestion } from "react-icons/go";
import { MdRemoveRedEye } from "react-icons/md";
import { FaRegCopy, FaArrowRightLong } from "react-icons/fa6";

//INTERNAL IMPORT
import { Input, Title, Pagination, Table, InfoModel } from "./index";

const tokentxns = () => {
  const [infoModel, setInfoModel] = useState(true);
  return (
    <main id="content" class="main-content" role="main">
      <Input />
      <Title />

      <section class="container-xxl pt-5 pb-12">
        <div class="card">
          {/* //1 */}
          {infoModel && <InfoModel setInfoModel={setInfoModel} />}

          {/* //2 */}
          <div class="card-body d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div>
              <span class="text-dark">
                More than 10,000,000 transactions found
              </span>
              <span class="d-block text-muted small">
                (Showing the last 10,000 records only)
              </span>
            </div>
          </div>
          {/* //3 */}

          <Table />
          <Pagination />
        </div>
      </section>
    </main>
  );
};

export default tokentxns;
