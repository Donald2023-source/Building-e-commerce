// import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/Access/SignUp/";
import "./App.css";
import Shop from "./Pages/shop/main shop/Shop";
// import Categories from "./Pages/shop/categories/Categories";
import ConstructionChemicals from "./Pages/shop/categories/ConstructionChemicals";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConstructionChemicals />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
