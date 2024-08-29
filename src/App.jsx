import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./Pages/Access/SignUp/";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/shop/main shop/Shop";
import Errorpage from "./components/error"; 
import Categories from "./Pages/shop/categories/Categories";
import RootLayout from "./Pages/layout/RootLayout";
import ShopLayout from "./Pages/shop/main shop/ShopLayout";
import SearchPage from "./components/SearchPage";

const App = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <RootLayout />,
          errorElement: <Errorpage />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "shop",
              element: <ShopLayout />,
              children: [
                {
                  index: true,
                  element: <Shop />,
                },
                {
                  path: "categories/:name",
                  element: <Categories />,
                },
                {
                  path: "search",
                  element: <SearchPage />,
                },
              ],
            },
            {
              path: "about",
              element: <>About</>,
            },
            {
              path: "contact",
              element: <>Contact</>,
            },
            {
              path: "signup",
              element: <SignUp />,
            },
            {
              path: "signin",
              element: <>Sign In</>,
            },
          ],
        },
      ])}
    />
  );
};

export default App;
