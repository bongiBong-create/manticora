import "./index.css";

export const Nav = ({ menu }) => {
  return (
    <nav className="nav">
      <ul className="nav_list">
        {menu.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </nav>
  );
};
