import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./utils/ScrollToTop";
import "./index.css";
import { loadAdSnippets } from "./config/adConfig";

const Root = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    loadAdSnippets().then(() => setReady(true));
  }, []);

  if (!ready) return <div>Cargando anuncios...</div>;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
