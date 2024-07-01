import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

const data = [
  {
    path: "construction Chemical",
    name: "Construction Chemical",
  },
  {
    path: "construction material",
    name: "Construction material",
  },
  {
    path: "electronics",
    name: "electronics",
  },
  {
    path: "farm materials",
    name: "farm materials",
  },
  {
    path: "furniture",
    name: "furniture",
  },
  {
    path: "paints",
    name: "paints",
  },
];

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleMenu = () => {
    setIsHidden(!isHidden);
  };

  return (
    <nav className="lg:flex py-8 gap-8 px-24 items-center  hidden relative ">
      <div className="bg-black p-3 gap-3 rounded-[4px] pr-14 flex justify-center whitespace-nowrap items-center">
        <IoMdMenu
          className="text-white text-3xl cursor-pointer"
          onClick={toggleMenu}
        />
        <span className="uppercase text-white">Browse Categories</span>
      </div>
      <Searchbar />
      <div
        className={`${
          isHidden
            ? "hidden"
            : "absolute bottom-0  py-2 text-center w-[86%] px-8"
        }`}
      >
        <ul className="flex flex-col lg:flex-row items-center  justify-start gap-6 font-semibold text-[16px] py- uppercase">
          {data.map(({ name, path }, i) => (
            <Link
              key={i}
              to={path}
              className=" px-1 text-nowrap hover:text-fadedRed"
            >
              {name}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
