/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../asyncMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getProducts()
      .then((data) => {
        if (category !== undefined) {
          return data.filter((product) => product.category === category);
        }
        return data;
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [category]);

  return (
    <div className="text-center">
      <h1 className="text-2xl">Bienvenidos a JECTEC</h1>
      <ItemList products={products} />${console.log(products)}
    </div>
  );
};

export default ItemListContainer;
