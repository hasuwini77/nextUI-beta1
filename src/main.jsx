import React from "react";
import ReactDOM from "react-dom";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      {/* To get a custom dark purple use this "dark:dark-purple text-foreground bg-gradient-to-br from-dark-purple to-dark-purple-primary-700" */}
      <main className="dark text-foreground bg-background">
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
