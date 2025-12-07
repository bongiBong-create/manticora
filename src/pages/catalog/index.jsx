import "./index.css";
import { List } from "../../components/list";
import { Card } from "../../components/card";
import { Link } from "react-router-dom";
import { products } from "./data.js";

export const Catalog = () => {
  return (
    <section className="catalog">
      <div className="catalog_container">
        <List
          className="product_list"
          items={products}
          renderItem={(item) => (
            <Link to={`/${item.id}`}>
              <Card item={item} variant="list" />
            </Link>
          )}
        />
      </div>
    </section>
  );
};
