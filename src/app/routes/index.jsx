import { createHashRouter } from "react-router-dom";
import { App } from "..";
import { Catalog } from "../../pages/catalog";
import { About } from "../../pages/about";
import { Product } from "../../pages/product";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Catalog /> },
      { path: "/about", element: <About /> },
      { path: "/:id", element: <Product /> },
    ],
  },
]);
