import Head from "next/head";
import "../styles/globals.css";

import { INFINITY_Provider } from "../context/ContextProvider";
import toast, { Toaster } from "react-hot-toast";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <INFINITY_Provider>
      <Component {...pageProps} />
    </INFINITY_Provider>
    <Toaster />

    <script src="assets/vendor/jquery/dist/jquery.min.js?v=24.2.2.0"></script>
    <script type="text/javascript" src="jss/blockies.js?v=24.2.2.0"></script>
    <script
      type="text/javascript"
      src="assets/js/theme-appearance.js?v=24.2.2.0"
    ></script>
    <script src="assets/vendor/jquery-ui/jquery-ui.min.js?v=24.2.2.0"></script>
    <script src="assets/vendor/jquery-migrate/dist/jquery-migrate.min.js?v=24.2.2.0"></script>
    <script src="assets/vendor/bootstrap/bootstrap.bundle.min.js?v=24.2.2.0"></script>
  </div>
);

export default MyApp;
