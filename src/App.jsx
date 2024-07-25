import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/Access/SignUp/";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/shop/main shop/Shop";
import ConstructionChemicals from "./Pages/shop/categories/ConstructionChemicals";
import ConstructionMaterials from "./Pages/shop/categories/ConstructionMaterials";
import Electronics from "./Pages/shop/categories/Electronics";
import FarmMaterials from "./Pages/shop/categories/FarmMaterials";
import Furniture from "./Pages/shop/categories/Furniture";
import Paints from "./Pages/shop/categories/Paints";
import ProductDetails from "./Pages/shop/categories/ProductDetails";
import Errorpage from "./components/error";
import Categories from "./Pages/shop/categories/Categories";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop" element={<Shop />}>
          <Route path="/shop/categories" element={<Categories />} />
          <Route
            path="construction-chemicals"
            element={<ConstructionChemicals />}
          />
          <Route
            path="construction-materials"
            element={<ConstructionMaterials />}
          />
          <Route path="electronics" element={<Electronics />} />
          <Route path="farm-materials" element={<FarmMaterials />} />
          <Route path="furniture" element={<Furniture />} />
          <Route path="paints" element={<Paints />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="*" element={<Errorpage />} />
        </Route>
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
