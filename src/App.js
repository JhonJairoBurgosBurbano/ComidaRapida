import Header from "./components/Header";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Tienda React</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Product name="Producto 1" price={29.99} />
          <Product name="Producto 2" price={49.99} />
          <Product name="Producto 3" price={19.99} />
        </div>
        <Cart />
      </main>
      <Footer />
    </div>
  );
}

export default App;
