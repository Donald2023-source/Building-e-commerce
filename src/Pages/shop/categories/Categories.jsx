import { Outlet } from "react-router-dom";
import RecentlyViewed from "../main shop/Recent";
import Electronics from "../categories/Electronics";
const Categories = () => {
  return (
    <section className="bg-silver">
      <Electronics />
      <Outlet />
      <RecentlyViewed />
    </section>
  );
};

export default Categories;
