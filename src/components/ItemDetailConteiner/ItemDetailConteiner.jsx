import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/dbConnection";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getDocument = (id) => {
      const docRef = doc(db, "products", id);

      return getDoc(docRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            return docSnap.data(); // Retorna los datos del documento
          } else {
            return null; // Retorna null o maneja el caso según sea necesario
          }
        })
        .catch((error) => {
          throw error; // Re-lanza el error para que pueda ser manejado fuera de la función
        });
    };

    getDocument(id)
      .then((data) => {
        if (data) {
          setProduct(data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
      {console.log(product)}
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
