import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const { Provider } = cartContext;
export const useCartContext = () => {
  return useContext(cartContext);
};

const CartContextProvider = ({ children }) => {
  const [quantityItems, setQuantityItems] = useState(0);

  const contextValue = {
    quantityItems,
    setQuantityItems,
  };

  return <Provider value={contextValue}>{children}</Provider>;
};

export default CartContextProvider;
