import React from "react";
import ReactDOM from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const interval = 5 * 1000;

registerSW({
  immediate: true,
  onRegisteredSW(_, registration) {
    registration &&
      setInterval(() => {
        console.log("updating...");
        registration.update().then(() => console.log("updated!"));
      }, interval);
  },
});
