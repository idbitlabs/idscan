import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import { Input, Banner, Body } from "./index";
import { CONTEXT } from "../../context/ContextProvider";
import { shortenAddress, convertIntoMatic } from "../../utils/index";

const homePage = () => {
  const { GET_STATS } = useContext(CONTEXT);
  const [Data, setData] = useState();

  useEffect(() => {}, []);

  useEffect(() => {
    GET_STATS().then((items) => {
      setData(items);
      console.log(items);
    });
  }, []);
  return (
    <main id="content" class="main-content" role="main">
      <Input />
      <Banner />
      <Body Data={Data} />
    </main>
  );
};

export default homePage;
