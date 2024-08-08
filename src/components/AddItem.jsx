/* eslint-disable react/prop-types */
import { useCartContext } from "../context/CartContext";

const AddItem = ({ name, id, price, count }) => {
  const { cart, AddItemCart } = useCartContext();

  const handleAddItem = () => {
    AddItemCart(name, id, price, count);
  };

  const exist = cart.find((item) => item.id === id);
  const text = exist ? `Modificar` : "Agregar";

  return (
    <button
      onClick={handleAddItem}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 m-1">
      {text}
    </button>
  );
};

export default AddItem;
