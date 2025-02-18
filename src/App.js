// src/App.jsx
import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./styles.css";

const productsData = [
    { id: 1, name: "Cubanito Solo Pollo", price: 12000, description: "Delicioso pollo con nuestra salsa especial.", image: "https://i.imgur.com/dY4KETf.jpeg" },
    { id: 2, name: "Cubanito Pollo y Piña", price: 14000, description: "Pollo jugoso con un toque dulce de piña.", image: "https://i.imgur.com/J3HfRfw.jpeg" },
    { id: 3, name: "Cubanito Pollo y Tocino", price: 15000, description: "Pollo con tocino crujiente, ¡irresistible!", image: "https://i.imgur.com/TCiYJkL.jpeg" },
    { id: 4, name: "Cubanito Hawaiano", price: 17000, description: "La combinación perfecta de pollo, piña y tocino.", image: "https://i.imgur.com/HpfQUPf.jpeg" },
    { id: 5, name: "Cubanito Especial", price: 18000, description: "Un festival de sabores en un solo bocado.", image: "https://i.imgur.com/IPwuh8V.jpeg" }
];

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const checkout = () => {
        if (cart.length === 0) {
            alert("El carrito está vacío.");
            return;
        }
        const message = cart.map(item => `- ${item.name}: $${item.price}`).join("%0A");
        const whatsappURL = `https://wa.me/3187460088?text=Quiero%20comprar:%0A${message}`;
        window.open(whatsappURL, "_blank");
    };

    return (
        <div>
            <Header />
            <div className="container">
                <ProductList products={productsData} addToCart={addToCart} />
                <Cart cart={cart} checkout={checkout} />
            </div>
        </div>
    );
};

export default App;
