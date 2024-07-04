import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer props={'Bienvenidos a JECTEC'} />
    </>
  );
};

export default App;
