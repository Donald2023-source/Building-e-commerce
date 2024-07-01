import { Link } from "react-router-dom";
import home from "../../../assets/home-btn.png";
import save from "../../../assets/save-btn.png";
import search from "../../../assets/searchBtn.png";
import categories from "../../../assets/category-btn.png";
import profile from "../../../assets/profile-btn.png";

const data = [
  {
    img: home,
    name: "home",
  },
  {
    img: categories,
    name: "categories",
  },
  {
    img: search,
    name: "",
  },
  {
    img: save,
    name: "saved",
  },
  {
    img: profile,
    name: "profile",
  },
];
const BottomNav = () => {
  return (
    <footer className="bg-white flex items-center shadow-md w-full z-50 fixed bottom-0 shadow-silver justify-around p-6 lg:hidden text-black">
      {data.map(({ name, img }, i) => (
        <Link
          key={i}
          className="flex
        flex-col items-center hover:text-black hover:font-med  md:w-full  rounded-full p-2"
        >
          <img src={img} alt={name} className=" w-8 md:w-16 " />
          <span className="uppercase text-sm ">{name}</span>
        </Link>
      ))}
    </footer>
  );
};

export default BottomNav;
