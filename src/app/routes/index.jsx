import { createHashRouter } from "react-router-dom";
import { Catalog } from "../../pages/catalog";
import { About } from "../../pages/about";
import { App } from "..";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Catalog /> },
      { path: "/about", element: <About /> },
    ],
  },
]);
