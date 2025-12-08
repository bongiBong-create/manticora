import { Header } from "../components/header";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";
import { Cart } from "../components/cart";
import { useState } from "react";

export const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

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
