// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Layout from "./components/Layout/Layout";
import Error from "./components/Error/Error";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";
import CartContextProvider from "./context/CartContext";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <CartContextProvider value={{}}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer props={"Bienvenidos a JECTEC"} />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailConteiner />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
