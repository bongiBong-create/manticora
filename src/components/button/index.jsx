import "./index.css";

export const Button = ({ className = "", children, onClick }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
