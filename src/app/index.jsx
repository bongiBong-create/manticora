import { useEffect, useState } from "react";

import { Header } from "../components/header";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";
import { Cart } from "../components/cart";

export const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isCartOpen]);

  return (
    <>
      {isCartOpen && <div className="overlay"></div>}
      <Header onCartClick={() => setIsCartOpen(true)} />

      <Cart isCartOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
