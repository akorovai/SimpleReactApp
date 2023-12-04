import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
