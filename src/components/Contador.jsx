/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useCartContext } from "../context/CartContext";
import AddItem from "./AddItem";

const min = 0;

const Contador = ({ name, id, price, stock }) => {
  const [count, setCount] = useState(0);
  const { cart } = useCartContext();

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    const exist = cart.find((item) => item.id === id);
    setCount(exist ? exist.quantity : 0);
  }, [cart, id]);

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={decrement}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
        -
      </button>
      <span className="text-lg font-medium">{count}</span>
      <button
        onClick={increment}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
        +
      </button>
      <AddItem name={name} id={id} price={price} count={count} />
    </div>
  );
};

export default Contador;
