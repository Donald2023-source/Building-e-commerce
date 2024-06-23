import logo from "../assets/Ellipse 1.png";
import cart from "../assets/Cart.png";

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
                <button className="text-white rounded-lg p-2 w-20 border">
                  Sign Up
                </button>
              </span>
            </div>
            <hr className="lg:block hidden my-4 border-gray-500 border-2" />
            <div className="text-white ">
              <ul className="lg:flex gap-12 justify-center py-2 hidden">
                <li>Home</li>
                <li>Shop</li>
                <li>About us</li>
                <li>Contact us</li>
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
