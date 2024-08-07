/* eslint-disable react/prop-types */
import Contador from "./Contador";
import Detail from "./Detail";

const Item = ({ id, nombre, precio, stock, img }) => {
  return (
    <div
      key={id}
      className=" grid border border-gray-200 rounded-lg shadow-md p-4 bg-white justify-items-center"
    >
      <img
        src={img}
        alt={nombre}
        className="w-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{nombre}</h2>
      <p className="text-lg font-bold text-green-600 mb-2">Price: ${precio}</p>
      <p className="text-sm text-gray-600 mb-4">Stock: {stock}</p>
      <Contador stock={stock} />
      <Detail id={id} />
    </div>
  );
};

export default Item;
