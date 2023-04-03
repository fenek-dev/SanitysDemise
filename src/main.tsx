import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./app/samples/node-api";
import "./index.scss";
import { RoutesList } from "./app/router/routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <RoutesList />
    </HashRouter>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
