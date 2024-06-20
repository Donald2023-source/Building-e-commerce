import Home from "./Pages/Home/Home";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Nav from "./Pages/Home/nav";
import Footer from "./Pages/Home/Footer";
import "./App.css";
import Shop from "./Pages/Home/shop/main shop/Shop";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
