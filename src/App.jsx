import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "../src/pages/Home/Home";
import Cart from "../src/pages/Cart/Cart";
import PlaceOrder from "../src/pages/PlaceOrder/PlaceOrder";

function App() {
  return (
    <div className=" h-auto max-w-full mx-28 ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
}

export default App;
