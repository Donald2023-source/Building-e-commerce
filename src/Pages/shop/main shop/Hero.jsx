import { Link } from "react-router-dom";
import gloves from "../../../assets/gloves.png";
import mason from "../../../assets/black-mason.png";
import { IoMdArrowForward } from "react-icons/io";
const Hero = () => {
  return (
    <section className="text-white flex items-center justify-between gap-3 px-24 ">
      <div className=" w-[70%] bg-black flex items-center px-4 justify-between rounded-[4px] py-10 gap-1">
        <div className="flex flex-col gap-3 pl-12 ">
          <h2 className=" uppercase font-bold text-3xl">new</h2>
          <p className=" capitalize font-semibold text-xl whitespace-nowra">
            construction chemicals
          </p>
          <Link to={"#"} className=" flex items-center gap-1">
            <span className=" border-b-2 border-b-silver pb-1">Shop Now</span>
            <IoMdArrowForward className="text-xl" />
          </Link>
        </div>
        <div>
          <img src={mason} alt={mason} />
        </div>
      </div>
      <div className=" bg-white rounded-[4px] w-[30%] h-[23rem]">
        <div className="bg-black text-center text-xl font-bold rounded-[3px] py-2">
          <span>Top Seller</span>
        </div>
        <div className="p-8">
          <div>
            <img src={gloves} alt={gloves} />
          </div>
          <div className=" text-blackk flex flex-col items-center pt-2">
            <span>Name Of Product</span>
            <p>
              <span className=" ">N</span>
              0.00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
