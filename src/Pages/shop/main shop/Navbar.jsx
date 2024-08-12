import { NavLink, useLocation } from "react-router-dom";
import Searchbar from "./Searchbar";
import { IoMdMenu } from "react-icons/io";
import { useState, useEffect } from "react";

const baseUrl = "categories";
const data = [
  {
    path: baseUrl + "/construction-Chemical",
    name: "Construction Chemical",
  },
  {
    path: baseUrl + "/construction-material",
    name: "Construction material",
  },
  {
    path: baseUrl + "/electronics",
    name: "electronics",
  },
  {
    path: baseUrl + "/farm-materials",
    name: "farm materials",
  },
  {
    path: baseUrl + "/furniture",
    name: "furniture",
  },
  {
    path: baseUrl + "/paints",
    name: "paints",
  },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const found = data.find((item) => item.path === currentPath);
    if (found) {
      setActiveLink(found.path);
    } else {
      setActiveLink("");
    }
  }, [location]);

  const openMenu = () => {
    setIsHidden(!isHidden);
  };

  const closeMenu = () => {
    setIsHidden(isHidden);
  };

  return (
    <nav className="lg:flex py-8 gap-8 px-24 items-center hidden relative">
      <div className="bg-black p-3 gap-3 rounded-[4px] pr-14 flex justify-center whitespace-nowrap items-center">
        <IoMdMenu
          className="text-white text-3xl cursor-pointer"
          onMouseOver={openMenu}
          
        />
        <span className="uppercase text-white">Browse Categories</span>
      </div>
      <Searchbar />
      <div
        className={`${
          isHidden
            ? "hidden"
            : "absolute top-24 z-50 bg-slate-100 py-2 flex flex-col items-center justify-center rounded-lg  w-[20%] h-[25rem] shadow-lg  "
        }`}
      >
        <ul className="flex flex-col  items-center justify-center gap-6 font-semibold text-[16px] py- uppercase">
          {data.map(({ name, path }, i) => (
            <NavLink
              key={i}
              to={path}
              className={`px-1 text-nowrap hover:transform hover:scale-110 transition-transform duration-300 ${
                path === activeLink ? "text-fadedRed" : ""
              }`}
            >
              {name}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
