/* eslint-disable react/prop-types */

import AddItem from "./AddItem";
import Contador from "./Contador";

const ItemDetail = ({ product }) => {
  if (!product) {
    return <div>No product data available.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden m-4">
      <div className="md:flex flex-col md:flex-row">
        <div className="md:flex-shrink-0 w-full md:w-1/2">
          {product.imagen && <img className="h-96  md:h-full" src={product.imagen} alt={product.nombre} />}
        </div>
        <div className="p-8 w-full md:w-1/2">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{product.nombre}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-green-600 mb-2">Precio: ${product.precio}</p>
          <p className="text-gray-600 mb-2">Stock: {product.stock}</p>
          <Contador stock={product.stock} />
          <AddItem product={product} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
