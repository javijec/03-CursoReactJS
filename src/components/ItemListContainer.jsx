/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../asyncMock";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-2xl">Bienvenidos a JECTEC</h1>
      <ItemList products={products} />${console.log(products)}
    </div>
  );
};

export default ItemListContainer;
