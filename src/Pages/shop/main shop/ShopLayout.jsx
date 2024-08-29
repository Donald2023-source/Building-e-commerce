import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Subscribe from "../main shop/Subscribe";

const ShopLayout = () => {
  return (
    <section className=" bg-silver">
      <Navbar />
      <Outlet />
      <Subscribe />
    </section>
  );
};

export default ShopLayout;
