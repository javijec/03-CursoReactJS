import { useCartContext } from "../context/CartContext";

const Remove = (id) => {
  const { RemoveItemCart } = useCartContext();
  return (
    <button
      onClick={() => RemoveItemCart(id)}
      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
      Remove
    </button>
  );
};

export default Remove;
