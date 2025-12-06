import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes";
import { App } from "./app";

import "./app/styles/global.css";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
