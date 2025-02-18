import Button from "./Button";

function Product({ name, price }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">${price.toFixed(2)}</p>
      <Button text="Añadir al carrito" />
    </div>
  );
}

export default Product;
