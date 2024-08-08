/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useCartContext } from "../context/CartContext";

const min = 0;

const ContadorCart = ({ name, id, price, stock }) => {
  const [quantity, setQuantity] = useState(0);
  const { cart, RemoveItemCart, ModifyItemCart } = useCartContext();

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
      ModifyItemCart(name, id, price, stock, quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > min) {
      ModifyItemCart(name, id, price, stock, quantity - 1);
      setQuantity(quantity - 1);
    } else {
      RemoveItemCart(id);
      console.log("Remove");
    }
  };

  useEffect(() => {
    const exist = cart.find((item) => item.id === id);
    setQuantity(exist ? exist.quantity : 0);
  }, [cart, id]);

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={decrement}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
        -
      </button>
      <span className="text-lg font-medium">{quantity}</span>
      <button
        onClick={increment}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
        +
      </button>
    </div>
  );
};

export default ContadorCart;
