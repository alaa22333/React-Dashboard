import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ContextProvider } from "./Contexts/stateContext";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { ContextUserProvider } from "./Contexts/UserContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      
          <ContextProvider>
     <ThemeProvider>
    <BrowserRouter> 
            <App />
     
    </BrowserRouter> </ThemeProvider>
          </ContextProvider>
      
  </React.StrictMode>
);
