import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";

const Navbar = () => {


  return (
    <nav className="bg-[#634c52] p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 h-20 rounded-full mr-4" />
          <ol className="flex space-x-8 text-white font-semibold">
            <li className="hover:text-gray-200 transition duration-300">CELULARES</li>
            <li className="hover:text-gray-200 transition duration-300">APPLE</li>
            <li className="hover:text-gray-200 transition duration-300">GAMINGa</li>
          </ol>
        </div>
        <div className="flex items-center">
          <CartWidget />
            </div>
      </div>
   </nav>
  );
};

export default Navbar;
