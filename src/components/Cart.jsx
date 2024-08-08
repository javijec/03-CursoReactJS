import { useCartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, cartTotal, RemoveItemCart } = useCartContext();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-600">
                Precio: ${item.price.toFixed(2)} - Cantidad: {item.quantity}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => RemoveItemCart(item.id)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-right">
        <p className="text-xl font-bold">Total: ${cartTotal.toFixed(2)}</p>
      </div>
    </main>
  );
};

export default Cart;
