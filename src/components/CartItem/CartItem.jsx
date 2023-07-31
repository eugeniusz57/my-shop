import { useContext } from "react";

import { CountHandler, Description, Item } from "./CartItem.styed";
import { ShopContext } from "../../context/Shop-context";

export const CartItem = ({ data }) => {
  const { id, productName, price, productImage } = data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <Item>
      <img src={productImage} alt={productName} />
      <Description>
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <CountHandler>
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </CountHandler>
      </Description>
    </Item>
  );
};
