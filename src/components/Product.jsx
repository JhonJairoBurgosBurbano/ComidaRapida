// src/components/Product.jsx
import React from "react";
import Button from "./Button";

const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      <Button text="🛒 Añadir al carrito" onClick={() => addToCart(product)} className="add-cart-btn" />
    </div>
  );
};

export default Product;