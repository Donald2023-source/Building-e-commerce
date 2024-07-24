import Categories from "./Pages/shop/categories/Categories";
import { Outlet } from "react-router-dom";
import OutletBox from "./components/OutletBox";

const CategoriesLayout = () => {
  return (
    <div>
      <Categories />
      <OutletBox className={"w-full px-8 py-12"}>
        <Outlet />
      </OutletBox>
    </div>
  );
};

export default CategoriesLayout;
