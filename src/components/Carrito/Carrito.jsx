import { Link } from "react-router-dom";

const Carrito = () => {
  return (
    <div>
      <Link to={`/cart`}>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 m-1">
          Carrito
        </button>
      </Link>
    </div>
  );
};

export default Carrito;
