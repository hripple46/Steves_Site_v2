import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TheCryingWolf from "./pages/TheCryingWolf.jsx";
import DownAndAway from "./pages/DownAndAway.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/downandaway",
    element: <DownAndAway />,
  },
  {
    path: "/thecryingwolf",
    element: <TheCryingWolf />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
