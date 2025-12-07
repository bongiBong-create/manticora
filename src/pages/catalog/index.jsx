import "./index.css";
import { List } from "../../components/list";
import { Product } from "../../components/product";

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
        <List
          className="product_list"
          items={products}
          renderItem={(item) => <Product item={item} />}
        />
      </div>
    </section>
  );
};
