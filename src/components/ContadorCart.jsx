import { useState, useEffect } from "react";
import { useCartContext } from "../context/CartContext";
import Remove from "./Remove";
import More from "./More";

const ContadorCart = ({ name, id, price, stock }) => {
  const [quantity, setQuantity] = useState(0);
  const { cart, ModifyItemCart } = useCartContext();

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
      ModifyItemCart(name, id, price, stock, quantity + 1);
    }
  };

  const decrement = () => {
    setQuantity(quantity - 1);
    ModifyItemCart(name, id, price, stock, quantity - 1);
  };

  const button = () => {
    if (quantity > 1) {
      return (
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
          -
        </button>
      );
    } else {
      return <Remove id={id} />;
    }
  };

  useEffect(() => {
    const exist = cart.find((item) => item.id === id);
    setQuantity(exist ? exist.quantity : 0);
  }, [cart, id]);

  return (
    <div className="flex items-center space-x-4">
      {button()}
      <span className="text-lg font-medium">{quantity}</span>
      <More increment={increment} />
    </div>
  );
};

export default ContadorCart;
