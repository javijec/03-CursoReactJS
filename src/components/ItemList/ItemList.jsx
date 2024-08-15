/* eslint-disable react/prop-types */
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          nombre={product.nombre}
          precio={product.precio}
          stock={product.stock}
          img={product.imagen}
        />
      ))}
    </div>
  );
};

export default ItemList;
