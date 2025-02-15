import "./index.css";
import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";

import "./shared/config/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
