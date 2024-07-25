import logo from "../assets/Ellipse 1.png";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black w-screen">
        <div className="flex items-center justify-center gap-10 lg:gap-40 mt-7 text-white py-20">
          <div>
            <img src={logo} alt="" />

            <p className="lg:w-[19rem] leading-10 text-sm lg:text-lg">
              Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in
              suscipit turpis enim cursus vulputate amet. Lobortis mi platea
              aliquam senectus tempus mauris neque.
            </p>
          </div>

          <div className="flex lg:flex-row flex-col lg:gap-40 items-center gap-10">
            <div>
              <ul className="lg:block hidden">
                <h2 className="font-bold">Support</h2>
                <li className="py-3">Address</li>
                <li className="py-3">example@gmail.com</li>
                <li className="py-3">+234 00000012</li>
              </ul>

              <select
                className="lg:hidden text-sm bg-black text-white rounded-sm"
                name=""
                id=""
              >
                <option value="">My Account</option>
                <option value="">Login / Register</option>
                <option value="">Cart</option>
                <option value="">Wishlist</option>
                <option value="">Shop</option>
              </select>
            </div>

            <div>
              <h2 className="font-bold lg:block hidden">My Account</h2>
              <ul className="lg:block hidden">
                <li className="py-3">My Account</li>
                <li className="py-3">Login / Register</li>
                <li className="py-3">Cart</li>
                <li className="py-3">WishList</li>
                <li className="py-3">Shop</li>
              </ul>

              <select
                className="lg:hidden text-sm bg-black text-white rounded-sm"
                name=""
                id=""
              >
                <option value="">My Account</option>
                <option value="">Login / Register</option>
                <option value="">Cart</option>
                <option value="">Wishlist</option>
                <option value="">Shop</option>
              </select>
            </div>

            <div>
              <h2 className="font-bold lg:block hidden">Quickk Link</h2>
              <ul className="py-3 lg:block hidden">
                <li className="py-3">Privacy Policy</li>
                <li className="py-3">Terms Of use</li>
                <li className="py-3">FAQ</li>
                <li className="py-3">Contact</li>
              </ul>

              <select
                className="lg:hidden text-sm bg-black text-white rounded-sm"
                name=""
                id=""
              >
                <option value="">My Account</option>
                <option value="">Login / Register</option>
                <option value="">Cart</option>
                <option value="">Wishlist</option>
                <option value="">Shop</option>
              </select>
            </div>
          </div>
        </div>
        <hr className="py-2 mx-40" />
        <h2 className="text-gray-500 text-center py-3">
          Copyright nHub 2024. All right reserved
        </h2>
      </div>
    </footer>
  );
};
export default Footer;
