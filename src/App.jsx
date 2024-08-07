// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import Layout from "./components/Layout";
import Error from "./components/Error";
import ItemDetailConteiner from "./components/ItemDetailConteiner";
import CartContextProvider from "./context/CartContext";

const App = () => {
  return (
    <CartContextProvider value={{}}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer props={"Bienvenidos a JECTEC"} />}
            />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailConteiner />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
