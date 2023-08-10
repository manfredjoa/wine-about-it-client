import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./tailwind.css";
import { BrowserRouter as Router } from "react-router-dom";
<script src="https://kit.fontawesome.com/7f42122fa0.js" crossorigin="anonymous"></script>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
