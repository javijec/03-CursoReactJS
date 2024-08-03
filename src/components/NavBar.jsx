import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";
import { getCategory } from "../asyncMock";

const Navbar = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategory()
      .then((data) => setCategory(data))
      .catch((error) => console.error("Error fetching category:", error));
  }, []);

  return (
    <nav className="bg-[#634c52] p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="w-20 h-20 rounded-full mr-4" />
          </NavLink>
          <ol className="flex space-x-8 text-white font-semibold">
            {category.map((category) => (
              <li key={category}>
                <NavLink to={`/category/${category}`}>{category}</NavLink>
              </li>
            ))}
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
