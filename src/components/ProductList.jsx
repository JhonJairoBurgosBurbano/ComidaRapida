// src/components/ProductList.jsx
import Product from "./Product";

const ProductList = ({ products, addToCart }) => {
    return (
        <section className="products">
            {products.map(product => (
                <Product key={product.id} product={product} addToCart={addToCart} />
            ))}
        </section>
    );
};

export default ProductList;
