import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./context/data/data-context";
import { CartProvider } from "./context/cart/cart-context";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
      <CartProvider>
        <DataProvider>
          <Router>
              <App />
          </Router>
        </DataProvider>
      </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
