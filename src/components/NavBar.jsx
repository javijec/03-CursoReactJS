import CartWidget from "./CartWidget";
import logo from "../assets/logo.png"; // Asegúrate de que la ruta a la imagen del logo sea correcta.

const Navbar = () => {
  return (
    <nav className="bg-amber-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 rounded-full" />
       
        </div>
        <div className="flex items-center"> 
            <ol className="flex space-x-4 text-white">
              <li>uno</li>
              <li>dos</li>
              <li>tres</li>
            </ol>
          </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
