import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./Pages/Access/SignUp/";
// import Home from "./Pages/Home/Home";
import Shop from "./Pages/shop/main shop/Shop";
import ConstructionChemicals from "./Pages/shop/categories/ConstructionChemicals";
import ConstructionMaterials from "./Pages/shop/categories/ConstructionMaterials";
import Electronics from "./Pages/shop/categories/Electronics";
import FarmMaterials from "./Pages/shop/categories/FarmMaterials";
import Furniture from "./Pages/shop/categories/Furniture";
import Paints from "./Pages/shop/categories/Paints";
import ProductDetails from "./Pages/shop/categories/product-detail/ProductDetails";
import Errorpage from "./components/error";
import Layout from "./Pages/layout/layout";
import Categories from "./Pages/shop/categories/Categories";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<ProductDetails />}>
      <Route path="signup" element={<SignUp />} />
      <Route path="shop" element={<Shop />}>
        <Route element={<Layout />} />
        <Route path="categories" element={<Categories />} />
        <Route
          path="categories/construction-chemicals"
          element={<ConstructionChemicals />}
        />
        <Route
          path="categories/construction-materials"
          element={<ConstructionMaterials />}
        />
        <Route path="categories/electronics" element={<Electronics />} />
        <Route path="categories/farm-materials" element={<FarmMaterials />} />
        <Route path="categories/furniture" element={<Furniture />} />
        <Route path="categories/paints" element={<Paints />} />
        <Route path="categories/product/:id" element={<ProductDetails />} />
      </Route>
      <Route path="*" element={<Errorpage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
