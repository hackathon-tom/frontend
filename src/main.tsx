import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import NotificationsHandler from "./NotificationsHandler";

// ---- CSS -------------------------------------
import "./assets/CSS/index.css";
import "./assets/CSS/Footer.css";
import "./assets/CSS/Header.css";
import "./assets/CSS/Pages.css";
import "./assets/CSS/Choose.css";
import {
  ApplicationContext,
  ContextWrapper,
} from "./context/ApplicationContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ContextWrapper>
    <BrowserRouter>
      <App />
      <NotificationsHandler />
    </BrowserRouter>
  </ContextWrapper>
);
