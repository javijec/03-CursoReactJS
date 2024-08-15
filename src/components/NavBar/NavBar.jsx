import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/dbConnection";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [category, setCategory] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const getDocument = () => {
      const docRef = doc(db, "category", "category");
      return getDoc(docRef).then((docSnap) => {
        return docSnap.data();
      });
    };

    getDocument().then((data) => {
      if (data) {
        console.log(data.category);
        setCategory(data.category);
      }
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#634c52] shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <NavLink to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-auto rounded-full mr-4"
            />
          </NavLink>
          <div className="hidden lg:flex">
            <ol className="flex space-x-8 text-white font-semibold">
              {category.map((category) => (
                <li key={category}>
                  <NavLink to={`/category/${category}`}>{category}</NavLink>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="flex items-center">
          <CartWidget />
          <button className="lg:hidden text-white ml-4" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden">
          <ol className="flex flex-col items-center bg-[#634c52] text-white font-semibold space-y-4 p-4">
            {category.map((category) => (
              <li key={category}>
                <NavLink
                  to={`/category/${category}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </NavLink>
              </li>
            ))}
          </ol>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
