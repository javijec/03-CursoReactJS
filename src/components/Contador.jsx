/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useCartContext } from "../context/CartContext";
import AddItem from "./AddItem";
import Remove from "./Remove";
import More from "./More";

const min = 0;

const Contador = ({ name, id, price, stock }) => {
  const [quantity, setCount] = useState(0);
  const { cart } = useCartContext();

  const increment = () => {
    if (quantity < stock) {
      setCount(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > min) {
      setCount(quantity - 1);
    }
  };

  useEffect(() => {
    const exist = cart.find((item) => item.id === id);
    setCount(exist ? exist.quantity : 0);
  }, [cart, id]);

  const boton = () => {
    const exist = cart.find((item) => item.id === id);

    if (quantity === 0 && exist) {
      return <Remove id={id} />;
    } else if (quantity > 0) {
      return <AddItem name={name} id={id} price={price} stock={stock} quantity={quantity} />;
    }
  };

  return (
    <>
      <div className="flex items-center space-x-4">
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
          -
        </button>
        <span className="text-lg font-medium">{quantity}</span>
        <More increment={increment} />
      </div>
      <div>{boton()}</div>
    </>
  );
};

export default Contador;
