import Card from "./Card";
import Button from "./Button";
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { data } from "./ProductData";

const FeaturedProduct = () => {
  return (
    <section className="px-24   py-5 my-8">
      <Card>
        <div className="pb-4">
          <div className="font-semibold text-sm border-l-[12px] border-radius px-2 py-1 border-l-black">
            This Month
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xl">Featured Products</p>
            <Button>View All</Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {data
            .slice(44)
            .map(({ img, id, price, previousPrice, rate, percent }, index) => (
              <div key={index}>
                <div className="relative py-3 ">
                  <img src={img} alt={img} className="w-[100%]" />
                  <div className="text-silver flex items-start gap-44 px-2 absolute top-6 ">
                    <span className="bg-black text-center border-radius px-2 py-[0.3px] ">
                      -{percent}%
                    </span>
                    <div className="flex flex-col gap-2">
                      <CiHeart className="bg-white text-blackk rounded-full text-center text-2xl cursor-pointer px-1" />
                      <MdOutlineRemoveRedEye className="bg-white text-blackk rounded-full text-center text-2xl cursor-pointer px-1" />
                    </div>
                  </div>
                  <button className="bg-black text-white px-[5.85rem] text-nowrap text-center py-1 absolute bottom-3 border-radius">
                    Add To Cart
                  </button>
                </div>
                <div>
                  <p className="font-semibold text-lg capitalize">{id}</p>
                  <div className="flex items-center gap-3">
                    <p className="text-fadedRed">
                      <span>N</span>
                      {price}
                    </p>
                    <p className="text-gray-700">
                      <span className="">N</span>
                      {previousPrice}
                    </p>
                  </div>
                  <div className="flex items-center justify-normal gap-1">
                    <CiStar className="text-lg text-cantaloupe " />
                    <span className="text-gray-700 text-sm">({rate})</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Card>
    </section>
  );
};

export default FeaturedProduct;
