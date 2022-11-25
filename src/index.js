import React from "react";
import ReactDOM from "react-dom/client";
import GA4React from "ga-4-react";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";

const ga4react = new GA4React("G-4ZFLENPHX1");

(async (_) => {
  await ga4react
    .initialize()
    .then((res) => console.log("Analytics Success"))
    .catch((err) => console.log("Analytics Failure"))
    .finally(() => {
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(
        <Router>
          <App />
        </Router>
      );
    });
})();
