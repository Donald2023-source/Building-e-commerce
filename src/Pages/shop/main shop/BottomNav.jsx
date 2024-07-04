import { Link, NavLink } from "react-router-dom";
import home from "../../../assets/home-btn.png";
import save from "../../../assets/save-btn.png";
import search from "../../../assets/searchBtn.png";
import categories from "../../../assets/category-btn.png";
import profile from "../../../assets/profile-btn.png";
import { useEffect, useState } from "react";

const data = [
  {
    img: home,
    name: "home",
    path: "/",
  },
  {
    img: categories,
    name: "categories",
    path: "categories",
  },
  {
    img: search,
    name: "",
    path: "search",
  },
  {
    img: save,
    name: "saved",
    path: "#",
  },
  {
    img: profile,
    name: "profile",
    path: "#",
  },
];
const BottomNav = () => {
  const [IsFixed, setIsFixed] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const toggleMenu = () => {
    setIsHidden(!isHidden);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      className={` bg-opacity-0 ${
        IsFixed
          ? "bg-white flex items-center shadow-md w-full z-50 fixed bottom-0 shadow-silver justify-around p-6 lg:hidden text-black bg-opacity-100"
          : ""
      }`}
    >
      <div
        className={`${
          isHidden
            ? "hidden"
            : "absolute bottom-0  py-2 text-center w-[86%] px-8"
        }`}
      >
        <ul className="flex flex-col lg:flex-row items-center  justify-start gap-6 font-semibold text-[16px] py- uppercase">
          {data.map(({ name, path }, i) => (
            <NavLink
              key={i}
              to={path}
              className=" px-1 text-nowrap hover:text-fadedRed"
              onClick={toggleMenu}
            >
              {name}
            </NavLink>
          ))}
        </ul>
      </div>
      {data.map(({ name, img, path }, i) => (
        <Link
          key={i}
          path={path}
          className="flex
        flex-col items-center hover:text-black hover:font-med  md:w-full  rounded-full p-2"
        >
          <img src={img} alt={name} className=" w-7 md:w-16 " />
          <span className="uppercase text-sm ">{name}</span>
        </Link>
      ))}
    </footer>
  );
};

export default BottomNav;
