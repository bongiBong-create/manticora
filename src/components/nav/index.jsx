import { useState } from "react";
import { Link } from "react-router-dom";
import { List } from "../list";
import { Button } from "../button";

import "./index.css";

export const Nav = ({ menu, onCartClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <List
        className="nav_list"
        items={menu}
        isOpen={isOpen}
        renderItem={(item) => (
          <li key={item.id}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        )}
      />
      <Button className="menu_button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "ЗАКРЫТЬ" : "МЕНЮ"}
      </Button>

      <Button className={isOpen ? "close" : ""} onClick={onCartClick}>
        КОРЗИНА (0)
      </Button>
    </nav>
  );
};
