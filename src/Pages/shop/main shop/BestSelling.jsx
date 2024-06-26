import Button from "./Button";
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { data } from "./ProductData";
import Card from "./Card";

const BestSelling = () => {
  return (
    <section className="px-24 border-y-2 border-y-gray-500 py-5 my-8">
      <Card>
        <div>
          <div className="font-semibold text-sm border-l-[12px] border-radius px-2 py-1 border-l-black">
            This Month
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xl">Best Selling Products</p>
            <Button>View All</Button>
          </div>
        </div>
        <div className="flex items-center justify-evenly">
          {data
            .slice(53)
            .map(({ img, id, price, previousPrice, rate, percent }, index) => (
              <div key={index}>
                <div className="relative">
                  <img src={img} alt={img} className="w-[100%]" />
                  <div className="text-silver flex items-center gap-20 absolute">
                    <span className="bg-black text-center border-radius px-2 py-[0.3px]">
                      -{percent}%
                    </span>
                    <div className="flex flex-col gap-2">
                      <CiHeart className="bg-white text-blackk rounded-full text-center" />
                      <MdOutlineRemoveRedEye className="bg-white text-blackk rounded-full text-center" />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-sm capitalize">{id}</p>
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

export default BestSelling;
