import { useParams } from "react-router-dom";
import { Card } from "../../components/card";
import "./index.css";
import { products } from "../catalog/data";

export const Product = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id == id);

  return (
    <section className="product">
      <Card item={product} variant="single" />
    </section>
  );
};
