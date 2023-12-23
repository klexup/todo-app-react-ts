import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router";
import TodoProvider from "./contexts/todoContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoProvider>
      <Router />
    </TodoProvider>
  </React.StrictMode>
);
