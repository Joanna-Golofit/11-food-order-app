import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [showModal, setShowModal] = useState(false);
  console.log("showModal", showModal)
  return (
    <>
      {showModal && <Cart setShowModal={setShowModal} />}
      <Header setShowModal={setShowModal} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
