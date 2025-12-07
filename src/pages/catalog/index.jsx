import { products } from "./data.js";
import { Link } from "react-router-dom";

import { List } from "../../components/list";
import { Card } from "../../components/card";

import "./index.css";

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
