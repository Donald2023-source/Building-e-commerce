import Home from "../Pages/Home/Home";
// import SignUp from "../Pages/Access/SignUp";

import Shop from "../Pages/shop/main shop/Shop";
import Categories from "../Pages/shop/categories/Categories";
import ConstructionChemicals from "../Pages/shop/categories/ConstructionChemicals";
import CategoriesLayout from "../CategoriesLayout";
import Errorpage from "../error";
import ConstructionMaterials from "../Pages/shop/categories/ConstructionMaterials";
import Electronics from "../Pages/shop/categories/Electronics";
import FarmMaterials from "../Pages/shop/categories/FarmMaterials";
import Furniture from "../Pages/shop/categories/Furniture";
import Paints from "../Pages/shop/categories/Paints";
import ProductDetails from "../Pages/shop/categories/ProductDetails";

const routes = {
  path: "/",
  element: <RootLayout />,
  errorElement: <Errorpage/>,
  children: [
    {
      index: true,
      element: <Home />,
    },
    // {
    //   path: "about",
    //   element: <About />,
    // },
    // {
    //   path: "contact",
    //   element: <Contact />,
    // },

    {
      path: "shop",
      element: <Shop />,
      children: [
        {
          element: <CategoriesLayout />,
        },
        {
          path: "categories",
          element: <Categories />,
          children: [
            {
              index: true,
              path: "Construction/chemical",
              element: <ConstructionChemicals />,
            },
            {
              path: "construction/material",
              element: <ConstructionMaterials />,
            },
            {
              path: "electronics",
              element: <Electronics/>,
            },
            {
              path: "farm/material",
              element: <FarmMaterials/>,
            },
            {
              path: "furniture",
              element: <Furniture/>,
            },
            {
              path: "paints",
              element: <Paints />,
            },
            {
              path: "product/:id",
              element: <ProductDetails />,
            },
          ],
        },
        // {
        //   path: "profile",
        //   element: <Profile />,
        // },
      ],
    },
  ],
};
export default routes;
