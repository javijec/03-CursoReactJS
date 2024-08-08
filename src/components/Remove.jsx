import { useCartContext } from "../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";

const Remove = ({ id }) => {
  const { RemoveItemCart } = useCartContext();
  return (
    <button
      onClick={() => {
        RemoveItemCart(id);
      }}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
      <FaRegTrashAlt />
    </button>
  );
};

export default Remove;
