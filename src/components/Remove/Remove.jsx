/* eslint-disable react/prop-types */
import { useCartContext } from "../../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";

const Remove = ({ id }) => {
  const { RemoveItemCart } = useCartContext();
  return (
    <button
      onClick={() => {
        RemoveItemCart(id);
      }}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
      <FaRegTrashAlt />
    </button>
  );
};

export default Remove;
