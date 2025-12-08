import { Nav } from "../nav";
import "./index.css";

export const Header = ({ onCartClick }) => {
  const menuItems = [
    { id: 1, name: "КАТАЛОГ", path: "/" },
    { id: 2, name: "О БРЕНДЕ", path: "/about" },
  ];

  return (
    <header className="header">
      <div className="logo">MANTICORE</div>
      <Nav menu={menuItems} onCartClick={onCartClick} />
    </header>
  );
};
