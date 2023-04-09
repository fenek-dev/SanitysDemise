import "./app/translation";
import "./app/samples/node-api";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { RoutesList } from "./app/router/routes";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <RoutesList />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
