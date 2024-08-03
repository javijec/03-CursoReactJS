import { getProduct } from "../asyncMock";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id)
      .then((product) => setProduct(product))
      .catch((error) => console.log(error));
  }, [id]);

  if (!product) {
    return (
      <div>
        {" "}
        <Spinner />{" "}
      </div>
    );
  }

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
