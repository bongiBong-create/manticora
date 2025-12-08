import "./index.css";

export const Input = ({ type, placeholder, className }) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      required
    />
  );
};
