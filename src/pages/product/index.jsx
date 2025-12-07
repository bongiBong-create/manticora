import { Link, useParams } from "react-router-dom";
import { products } from "../catalog/data";

import { Card } from "../../components/card";
import { List } from "../../components/list";

import "./index.css";

export const Product = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id == id);
  const products_like = products.slice(0, 4);

  return (
    <section className="product">
      <Card item={product} variant="single" />

      <div className="like_container">
        <h2 className="title_like">ВАМ ТАК ЖЕ МОЖЕТ ПОНРАВИТЬСЯ</h2>
        <List
          className="product_list"
          items={products_like}
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
