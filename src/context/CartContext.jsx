/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

const cartContext = createContext();

export const { Provider } = cartContext;
export const useCartContext = () => {
  return useContext(cartContext);
};

const CartContextProvider = ({ children }) => {
  const [quantityItems, setQuantityItems] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const cartLocal = localStorage.getItem("cart");
    if (cartLocal) {
      setCart(JSON.parse(cartLocal));
      console.log(cartLocal);
    }
  }, []);

  useEffect(() => {
    setQuantityItems(cart.reduce((accumulator, item) => accumulator + item.quantity, 0));
    setCartTotal(cart.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0));
    //localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const ModifyItemCart = (name, id, price, stock, quantity) => {
    const index = cart.findIndex((item) => item.id === id);
    let newCart = [...cart];
    if (quantity > 0) {
      if (index === -1) {
        newCart = [...cart, { name, id, price, stock, quantity }];
        setCart(newCart);
      } else {
        newCart = [...cart];
        newCart[index].quantity = quantity;
        setCart(newCart);
      }
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const RemoveItemCart = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index === -1) return;

    const NewCart = [...cart];
    const item = NewCart[index];

    setQuantityItems(quantityItems - item.quantity);
    setCartTotal(cartTotal - item.price * item.quantity);

    NewCart.splice(index, 1);
    setCart(NewCart);
    localStorage.setItem("cart", JSON.stringify(NewCart));
  };

  const contextValue = {
    quantityItems,
    cart,
    ModifyItemCart,
    cartTotal,
    RemoveItemCart,
  };

  return <Provider value={contextValue}>{children}</Provider>;
};

export default CartContextProvider;
