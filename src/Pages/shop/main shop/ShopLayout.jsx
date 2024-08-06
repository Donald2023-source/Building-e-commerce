import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Subscribe from "../main shop/Subscribe";

const ShopLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Subscribe />
    </>
  );
};

export default ShopLayout;
