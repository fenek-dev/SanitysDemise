import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import LoadingContextProvider from "./app/contexts/loading/loading.context";
import { RoutesList } from "./app/router/routes";
import { store } from "./app/store";
import "./app/translation";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LoadingContextProvider>
      <Provider store={store}>
        <HashRouter>
          <RoutesList />
        </HashRouter>
      </Provider>
    </LoadingContextProvider>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
