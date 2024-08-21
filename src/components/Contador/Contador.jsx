/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useCartContext } from "../../context/CartContext";

import AddItem from "../AddItem/AddItem";
import Carrito from "../Carrito/Carrito";
import More from "../More/More";
import Less from "../Less/Less";

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

  const addButton = (quantity) => {
    if (quantity > 0) {
      return <AddItem name={name} id={id} price={price} stock={stock} quantity={quantity} />;
    }
  };

  const boton = () => {
    const exist = cart.find((item) => item.id === id);

    if (exist) {
      return <Carrito />;
    } else {
      return (
        <>
          <div className="flex items-center space-x-4">
            <Less decrement={decrement} />
            <span className="text-lg font-medium">{quantity}</span>
            <More increment={increment} />
          </div>
          <div>{addButton(quantity)}</div>
        </>
      );
    }
  };

  return <div>{boton()}</div>;
};

export default Contador;
