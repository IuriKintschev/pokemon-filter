import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import StyledGlobal from "./css/styledGlobal";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <StyledGlobal />
  </React.StrictMode>,
  document.getElementById("root")
);
