import "./app/translation";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { RoutesList } from "./app/router/routes";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./index.scss";
import LoadingContextProvider from "./app/contexts/loading/loading.context";

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
