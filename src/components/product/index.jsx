import product from "../../assets/product.png";
import "./index.css";

export const Product = ({ item }) => {
  return (
    <li className="product_card">
      <div className="product_img">
        <img src={product} alt="product" />
      </div>
      <div className="product_info">
        <h3 className="product_title">{item.name}</h3>
        <h4 className="product_price">{item.price}</h4>
      </div>
    </li>
  );
};
