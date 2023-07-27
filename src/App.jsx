import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
