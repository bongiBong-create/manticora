import product from "../../assets/product.png";
import { Link } from "react-router-dom";
import { CardList } from "./ui/cardList";
import { CardSingle } from "./ui/cardSingle";
import { CardCart } from "./ui/cardCart";

import "./index.css";

export const Card = ({ item, variant }) => {
  const renderCard = () => {
    switch (variant) {
      case "single":
        return <CardSingle item={item} />;
      case "cart_card":
        return <CardCart item={item} />;
      default:
        return <CardList item={item} />;
    }
  };

  return (
    <li className={`product_card ${variant}`}>
      <div className="product_img">
        {variant == "cart_card" ? (
          <Link to={`/${item.id}`}>
            <img src={product} alt="product" />
          </Link>
        ) : (
          <img src={product} alt="product" />
        )}
      </div>
      <div className={`product_info ${variant}`}>
        <div className={`product_container ${variant}`}>{renderCard()}</div>
      </div>
    </li>
  );
};
