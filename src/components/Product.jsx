// src/components/Product.jsx
const Product = ({ product, addToCart }) => {
    return (
        <div className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>${product.price}</strong></p>
            <button onClick={() => addToCart(product)}>🛒 Añadir al carrito</button>
        </div>
    );
};

export default Product;
