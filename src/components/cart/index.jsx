import { Button } from "../button";
import { Card } from "../card";
import { Input } from "../input";
import { List } from "../list";

import "./index.css";

const products = [
  { id: 1, name: "Сумка в корзине1", price: "3 500 Р" },
  { id: 2, name: "Сумка в корзине2", price: "4 000 Р" },
];

export const Cart = ({ isCartOpen, onClose }) => {
  return (
    <section className={`cart ${isCartOpen ? "open" : ""}`}>
      <div className="cart_container">
        <div className="cart_btns">
          <span>КОРЗИНА (0)</span>
          <Button onClick={onClose}>ЗАКРЫТЬ</Button>
        </div>

        <List
          items={products}
          className="cart_list"
          renderItem={(item) => <Card item={item} variant="cart_card" />}
        />

        <form className="cart_form" action="#">
          <div className="form_group">
            <label>ИМЯ</label>
            <Input type="text" className="form_input" />
          </div>
          <div className="form_group">
            <label>ФАМИЛИЯ</label>
            <Input type="text" className="form_input" />
          </div>
          <div className="form_group">
            <label>EMAIL</label>
            <Input type="text" className="form_input" />
          </div>
          <div className="form_group">
            <label>НОМЕР ТЕЛЕФОНА</label>
            <Input
              type="tel"
              className="form_input"
              placeholder="+7 (___) ___-__-__"
            />
          </div>
          <div className="form_group">
            <label>АДРЕС</label>
            <Input
              type="text"
              className="form_input"
              placeholder="Город, улица, дом, квартира"
            />
          </div>
          <div className="form_group">
            <label>СПОСОБ ДОСТАВКИ</label>
            <input type="checkbox" />
            <span>СДЭК</span>
          </div>
          <div className="form_group">
            <label>СПОСОБ ОПЛАТЫ</label>
            <input type="checkbox" />
            <span>БАНКОВСКОЙ КАРТОЙ ОНЛАЙН</span>
          </div>

          <Button className="button_cart">ОФОРМИТЬ ЗАКАЗ</Button>
        </form>
      </div>
    </section>
  );
};
