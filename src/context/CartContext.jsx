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
    setQuantityItems(cart.reduce((accumulator, item) => accumulator + item.quantity, 0));
    setCartTotal(cart.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0));
  }, [cart]);

  const AddItemCart = (name, id, price, stock, quantity) => {
    const index = cart.findIndex((item) => item.id === id);
    if (quantity > 0) {
      if (index === -1) {
        const newCart = [...cart, { name, id, price, stock, quantity }];
        setCart(newCart);
      } else {
        const newCart = [...cart];
        newCart[index].quantity = quantity;
        setCart(newCart);
      }
    }
    console.log(cart);
  };

  const RemoveItemCart = ({ id }) => {
    const index = cart.findIndex((item) => item.id === id);
    const NewCart = [...cart];
    setQuantityItems(quantityItems - cart[index].quantity);
    setCartTotal(cartTotal - cart[index].price * cart[index].quantity);
    NewCart.splice(index, 1);
    setCart(NewCart);
  };

  const contextValue = {
    quantityItems,
    cart,
    AddItemCart,
    cartTotal,
    RemoveItemCart,
  };

  return <Provider value={contextValue}>{children}</Provider>;
};

export default CartContextProvider;
