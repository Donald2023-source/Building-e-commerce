import Searchbar from "./Searchbar";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className=" lg:flex  py-8 gap-8 px-28 items-center hidden">
      <div className=" bg-black p-3 gap-3 rounded-[4px] pr-14 flex justify-center whitespace-nowrap  items-center ">
        <IoMdMenu className=" text-white text-3xl cursor-pointer" />
        <span className=" uppercase text-white">Browse Categories</span>
      </div>
      <Searchbar />
      <div>
        <ul>{}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
