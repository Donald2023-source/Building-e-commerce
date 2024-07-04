import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
// import { TbTruckDelivery } from "react-icons/tb";
// import { MdVerifiedUser } from "react-icons/md";

const Searchbar = () => {
  return (
    <div className=" flex items-center gap-6">
      <div className="flex ">
        <input
          className="p-[12px] rounded-l-[4px] lg:w-[45rem]  relative border-silver border-2 border-r-0 pr-12  "
          type="Search"
          placeholder="Search for products"
        />
        <div className=" bg-black text-white text-3xl p-[10px] rounded-r-[4px] cursor-pointer ab">
          {/* <input type="submit" value="" /> */}
          <CiSearch />
        </div>
      </div>
      <div className=" bg-black text-white text-4xl p-[10px]  text-center rounded-[4px]  cursor-pointer relative hidden lg:block">
        <FaShoppingCart />
        <div className="absolute bg-red-600 text-white flex items-center justify-center rounded-full w-[18.4px] top-2 right-1 text-center h-[18px]">
          <span className=" text-[12px] font-semibold">2</span>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
