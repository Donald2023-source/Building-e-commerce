import logo from "../assets/Ellipse 1.png";
import cart from "../assets/Cart.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div>
        <nav>
          <div className="bg-black w-screen">
            <div className="flex lg:justify-around justify-between items-center px-6 py-3">
              <img src={logo} alt="" />

              <img className="lg:hidden" src={cart} alt="" />

              <input
                className="p-1 lg:block hidden rounded-md w-[25rem] ml-36 border-black border-2"
                type="Search"
                placeholder="Search for products"
              />

              <span className="lg:flex gap-10 md:flex hidden">
                <button className="text-white rounded-lg p-2 w-20 border">
                  Login
                </button>
                <Link to={"signup"}>
                  <button className="text-white rounded-lg p-2 w-20 border">
                    Sign Up
                  </button>
                </Link>
              </span>
            </div>
            <hr className="lg:block hidden my-4 border-gray-500 border-2" />
            <div className="text-white ">
              <ul className="lg:flex gap-12 justify-center py-2 hidden">
                <Link to={"/"}>
                  <li>Home</li>
                </Link>
                <Link to={"shop"}>
                  <li>Shop</li>
                </Link>
                <Link to={"about"}>
                  <li>About us</li>
                </Link>
                <Link to={"contact us"}>
                  <li>Contact us</li>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            <input
              className="p-2 lg:hidden mt-3 rounded-md w-[18rem] mx-auto flex border-black border-2"
              type="Search"
              placeholder="Search for products"
            />
          </div>
        </nav>
      </div>
    </>
  );
};
export default Nav;
