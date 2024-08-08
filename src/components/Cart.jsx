import { useCartContext } from "../context/CartContext";
import ContadorCart from "./ContadorCart";
import Remove from "./Remove";
import RemoveAll from "./RemoveAll";

const Cart = () => {
  const { cart, cartTotal } = useCartContext();

  const remove = () => {
    if (cartTotal > 0) {
      return <RemoveAll />;
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900">Carrito de Compras</h1>
      <div className="space-y-6">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-white p-6 rounded-lg shadow-lg">
            <div>
              <p className="text-lg font-semibold text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-600">Precio: ${item.price.toFixed(2)}</p>
              <ContadorCart name={item.name} id={item.id} price={item.price} stock={item.stock} />
              <p> - Stock: {item.stock}</p>
            </div>
            <div className="flex items-center space-x-6">
              <p className="text-lg font-bold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
              <Remove id={item.id} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-right">
        <p className="text-2xl font-bold text-gray-900">Total: ${cartTotal.toFixed(2)}</p>
      </div>

      {remove()}
    </main>
  );
};

export default Cart;
