// src/components/Cart.jsx
const Cart = ({ cart, checkout }) => {
    return (
        <div className="cart">
            <h2>Carrito de compras</h2>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                cart.map((item, index) => <p key={index}>{item.name} - ${item.price}</p>)
            )}
            <button onClick={checkout}>Comprar por WhatsApp</button>
        </div>
    );
};

export default Cart;
