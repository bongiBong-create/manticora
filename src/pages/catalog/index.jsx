import "./index.css";
import product from "../../assets/product.png";

const products = [
  {
    name: "Сумка Manticore",
    price: "3 500 Р",
  },
  {
    name: "Сумка Manticore",
    price: "3 500 Р",
  },
  {
    name: "Сумка Manticore",
    price: "3 500 Р",
  },
  {
    name: "Сумка Manticore",
    price: "3 500 Р",
  },
  {
    name: "Сумка Manticore",
    price: "3 500 Р",
  },
  {
    name: "Сумка Manticore",
    price: "3 500 Р",
  },
  {
    name: "Сумка Manticore",
    price: "3 500 Р",
  },
  {
    name: "Сумка Manticore",
    price: "3 500 Р",
  },
];

export const Catalog = () => {
  return (
    <section className="catalog">
      <div className="catalog_container">
        <ul className="product_list">
          {products.map((item) => (
            <li className="product_card">
              <div className="product_img">
                <img src={product} alt="product" />
              </div>
              <div className="product_info">
                <h3 className="product_title">{item.name}</h3>
                <h4 className="product_price">{item.price}</h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
