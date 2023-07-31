import { useContext } from "react";
import { PRODUCTS } from "../../data/products";
import { useNavigate } from "react-router-dom";
import { CartList, Checkout } from "./Card.styled";
import { CartItem } from "../../components/CartItem/CartItem";
import { ShopContext } from "../../context/Shop-context";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <CartList>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <Checkout>
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout{" "}
          </button>
        </Checkout>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </CartList>
  );
};
