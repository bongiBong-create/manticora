import { useState } from "react";
import { Button } from "../../button";

import "./index.css";

export const CardCart = ({ item }) => {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <h3 className="product_title">{item.name}</h3>
      <h4 className="product_price">{item.price}</h4>

      <div className="card_cart-btns">
        <Button
          className="counter_btn"
          onClick={() => setCounter((prev) => Math.max(prev - 1, 1))}
        >
          <svg
            width="6"
            height="2"
            viewBox="0 0 6 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1.152V0H5.28V1.152H0Z" fill="black" />
          </svg>
        </Button>
        {counter}
        <Button
          className="counter_btn"
          onClick={() => setCounter((prev) => prev + 1)}
        >
          <svg
            width="7"
            height="7"
            viewBox="0 0 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.688 6.408V3.768H0V2.616H2.688V0H3.888V2.616H6.564V3.768H3.888V6.408H2.688Z"
              fill="black"
            />
          </svg>
        </Button>
      </div>
    </>
  );
};
