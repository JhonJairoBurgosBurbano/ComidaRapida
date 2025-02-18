// src/components/Cart.jsx
import React from "react";
import Button from "./Button";

const Cart = ({ cart, removeFromCart, checkout }) => {
  return (
    <div className="cart">
      <h2>🛍 Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <span>{item.name} - ${item.price}</span>
            <Button text="❌" onClick={() => removeFromCart(index)} className="remove-btn" />
          </div>
        ))
      )}
      {cart.length > 0 && <Button text="Comprar por WhatsApp" onClick={checkout} className="checkout-btn" />}
    </div>
  );
};

export default Cart;