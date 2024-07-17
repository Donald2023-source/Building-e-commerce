// import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/Access/SignUp/";
import Home from "./Pages/Home/Home";
import "./App.css";
import Shop from "./Pages/shop/main shop/Shop";
// import Categories from "./Pages/shop/categories/Categories";
import ConstructionChemicals from "./Pages/shop/categories/ConstructionChemicals";
import ConstructionMaterials from "./Pages/shop/categories/ConstructionMaterials";
import Electronics from "./Pages/shop/categories/Electronics";
import FarmMaterials from "./Pages/shop/categories/FarmMaterials";
import Furniture from "./Pages/shop/categories/Furniture";
import Paints from "./Pages/shop/categories/Paints";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cons" element={<ConstructionChemicals />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="construction-materials" element={<ConstructionMaterials/>}/>
          <Route path="electronics" element={<Electronics/>}/>
          <Route path="farm-materials" element={<FarmMaterials/>}/>
          <Route path="furniture" element={<Furniture/>}/>
          <Route path="paints" element={<Paints/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
