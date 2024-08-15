import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Buy = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  const handleClick = () => {
    MySwal.fire({
      title: "Formulario de compra",
      html: (
        <div>
          <input
            type="text"
            id="name"
            className="swal2-input"
            placeholder="Nombre y Apellido"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            id="mail"
            className="swal2-input"
            placeholder="Mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
      ),
      confirmButtonText: "Comprar",
      focusConfirm: false,
      preConfirm: () => {
        if (!name || !mail) {
          MySwal.showValidationMessage("Por favor, introduzca nombre y mail");
          return false;
        }
        return { name, mail };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Nombre:", result.value.name);
        console.log("Mail:", result.value.mail);
      }
    });
  };

  return (
    <button
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
      onClick={handleClick}
    >
      Comprar
    </button>
  );
};

export default Buy;
