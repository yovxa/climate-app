import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import WeatherMap from "./weatherMap.jsx";

import Dashboard from "./Dashboard.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/WeatherMap",
    element: <WeatherMap />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
