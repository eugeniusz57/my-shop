import { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";
import { AddToCartBttn, Description, ProductItem } from "./Product.styled";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <ProductItem>
      <img src={productImage} alt={productName} />
      <Description>
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </Description>
      <AddToCartBttn onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </AddToCartBttn>
    </ProductItem>
  );
};
