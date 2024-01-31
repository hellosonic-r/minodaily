import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GlobalStyle } from "./styles/GlobalStyle.ts";
import { ManagedUIContext } from "./common/UI/uiContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ManagedUIContext>
      <GlobalStyle />
      <App />
    </ManagedUIContext>
  </React.StrictMode>
);
