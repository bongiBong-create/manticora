import "./index.css";

export const List = ({ items, className, isOpen, renderItem }) => {
  return (
    <ul className={`${className} ${isOpen ? "open" : ""}`}>
      {items.map((item) => renderItem(item))}
    </ul>
  );
};
