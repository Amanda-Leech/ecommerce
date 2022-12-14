import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./components/Nav.scss";
import App from "./helper/App";
import reportWebVitals from "./helper/reportWebVitals";
import { StateProvider } from "./helper/StateProvider";
import reducer, { initialState } from "./helper/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
