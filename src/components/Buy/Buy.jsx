import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { db } from "../../firebase/dbConnection";
import { collection, addDoc } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";

const MySwal = withReactContent(Swal);

const Buy = () => {
  const { RemoveAllItems, cart, cartTotal } = useCartContext();

  const handleClick = () => {
    MySwal.fire({
      title: "Formulario de compra",
      html: `
        <input type="text" id="name" class="swal2-input" placeholder="Nombre y Apellido" />
        <input type="text" id="mail" class="swal2-input" placeholder="Mail" />
      `,
      confirmButtonText: "Comprar",
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById("name").value;
        const mail = document.getElementById("mail").value;

        if (!name || !mail) {
          MySwal.showValidationMessage("Por favor, introduzca nombre y mail");
          return false;
        }

        return { name, mail };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // Guarda los datos en Firestore
        addDoc(collection(db, "compras"), {
          name: result.value.name,
          mail: result.value.mail,
          timestamp: new Date(),
          cart: JSON.stringify(cart),
          cartTotal: cartTotal,
        })
          .then(() => {
            console.log("Compra guardada en Firestore");
            RemoveAllItems();
          })
          .catch((error) => {
            console.error("Error al guardar la compra: ", error);
          });
      }
    });
  };

  return (
    <button
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
      onClick={handleClick}>
      Comprar
    </button>
  );
};

export default Buy;
