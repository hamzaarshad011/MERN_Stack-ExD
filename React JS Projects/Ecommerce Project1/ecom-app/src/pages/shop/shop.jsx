import React from "react";
import { Products } from "../../products";
import Product from "./product";
import "./shop.css";
const Shop = () => {
  return (
    <>
      <div className="shop">
        <div className="shopTitle">
          <h1> HG Tech Shop</h1>
        </div>
        <div className="products">
          {Products.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
