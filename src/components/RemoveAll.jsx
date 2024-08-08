import { useCartContext } from "../context/CartContext";
const RemoveAll = () => {
  const { RemoveAllItems } = useCartContext();
  return (
    <button
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
      onClick={RemoveAllItems}>
      Remove All
    </button>
  );
};

export default RemoveAll;
