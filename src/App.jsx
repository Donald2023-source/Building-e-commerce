import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/Access/SignUp/";
import Home from "./Pages/Home/Home";
import "./App.css";
import Shop from "./Pages/shop/main shop/Shop";
import ConstructionChemicals from "./Pages/shop/categories/ConstructionChemicals";
import ConstructionMaterials from "./Pages/shop/categories/ConstructionMaterials";
import Electronics from "./Pages/shop/categories/Electronics";
import FarmMaterials from "./Pages/shop/categories/FarmMaterials";
import Furniture from "./Pages/shop/categories/Furniture";
import Paints from "./Pages/shop/categories/Paints";
import ProductDetails from "./Pages/shop/categories/ProductDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/signup" element={<SignUp />} />
          <Route path="shop" element={<Shop />}>
            <Route
              path="shop/construction-chemicals"
              element={<ConstructionChemicals />}
            />
            <Route
              path="shop/construction-materials"
              element={<ConstructionMaterials />}
            />
            <Route path="shop/electronics" element={<Electronics />} />
            <Route path="shop/farm-materials" element={<FarmMaterials />} />
            <Route path="shop/furniture" element={<Furniture />} />
            <Route path="shop/paints" element={<Paints />} />
            <Route path="shop/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
