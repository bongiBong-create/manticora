import { Button } from "../../button";

export const CardSingle = ({ item }) => {
  return (
    <>
      <h3 className="product_title">{item.name}</h3>
      <h4 className="product_price">{item.price}</h4>
      <p className="description">
        Принт «коровка» — это акцент, который сразу выделяет тебя из потока.
        Лёгкая, хлопковая, вместительная — и в то же время способная менять
        форму.
      </p>
      <div className="button_container">
        <Button className="button_size" children="ONE SIZE" />
        <Button className="button_cart" children="ДОБАВИТЬ В КОРЗИНУ" />
      </div>
      <div className="options">
        <span>ДОСТУПНЫЕ ЦВЕТА</span>
        <span>ДЕТАЛИ</span>
        <span>ДОСТАВКА</span>
      </div>
    </>
  );
};
