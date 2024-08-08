/* eslint-disable react/prop-types */
import { useCartContext } from "../context/CartContext";

const AddItem = ({ name, id, price, stock, quantity }) => {
  const { cart, ModifyItemCart, RemoveItemCart } = useCartContext();

  const handleAddItem = () => {
    if (quantity === 0) {
      RemoveItemCart(id);
      console.log(cart);
    } else {
      ModifyItemCart(name, id, price, stock, quantity);
      console.log(cart);
    }
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
