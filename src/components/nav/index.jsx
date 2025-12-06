import { useState } from "react";
import { List } from "../list";

import "./index.css";

export const Nav = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <List menu={menu} isOpen={isOpen} />
      <button className="menu_button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "ЗАКРЫТЬ" : "МЕНЮ"}
      </button>

      <button className={isOpen ? "close" : ""}>КОРЗИНА (0)</button>
    </nav>
  );
};
