import React from "react";
import { PRODUCTS } from "../../data/products";
import { Product } from "../../components/Product/Product";
import { Products, ShopTitle } from "./Shop.styled";

const Shop = () => {
  return (
    <>
      <ShopTitle>
        <h1>Tech Shop</h1>
      </ShopTitle>

      <Products>
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </Products>
    </>
  );
};

export default Shop;
