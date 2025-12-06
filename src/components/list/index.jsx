import "./index.css";

export const List = ({ menu, isOpen }) => {
  return (
    <ul className={`nav_list ${isOpen ? "open" : ""}`}>
      {menu.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};
