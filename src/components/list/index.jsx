import { Link } from "react-router-dom";
import "./index.css";

export const List = ({ menu, isOpen }) => {
  return (
    <ul className={`nav_list ${isOpen ? "open" : ""}`}>
      {menu.map((item) => (
        <li key={item.id}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};
