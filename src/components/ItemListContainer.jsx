import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../asyncMock";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((data) => {
        if (category !== undefined) {
          return data.filter((product) => product.category === category);
        }
        return data;
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="text-center">
      <h1 className="text-2xl mb-4">Bienvenidos a JECTEC</h1>
      {loading ? <Spinner /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
