// src/components/Cart.jsx
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
                        <button onClick={() => removeFromCart(index)}>❌</button>
                    </div>
                ))
            )}
            {cart.length > 0 && <button onClick={checkout}>Comprar por WhatsApp</button>}
        </div>
    );
};

export default Cart;
