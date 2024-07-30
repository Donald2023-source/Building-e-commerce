import { Outlet } from "react-router-dom";
import Categories from "../shop/categories/Categories";

export default function Layout() {
  return (
    <div>
      <Categories />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
