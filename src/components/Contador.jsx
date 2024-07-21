import React, { useState } from "react";

const min = 0;

const Contador = ({ stock }) => {
  const [count, setCount] = useState(0);

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

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={decrement}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
      >
        -
      </button>
      <span className="text-lg font-medium">{count}</span>
      <button
        onClick={increment}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
      >
        +
      </button>
    </div>
  );
};

export default Contador;
