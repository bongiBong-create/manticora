import { Nav } from "../nav";
import "./index.css";

export const Header = () => {
  const menuItems = [
    { name: "КАТАЛОГ", path: "/" },
    { name: "О БРЕНДЕ", path: "/about" },
    { name: `КОРЗИНА (0)`, path: "/cart" },
  ];

  return (
    <header className="header">
      <div className="logo">MANTICORE</div>
      <Nav menu={menuItems} />
    </header>
  );
};
