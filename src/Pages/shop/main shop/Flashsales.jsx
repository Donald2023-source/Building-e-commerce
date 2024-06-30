import Button from "./Button";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { data } from "./ProductData";
import Card from "./Card";
import { useState } from "react";
const Flashsales = () => {
  const [isViewAll, setIsViewAll] = useState(false);

  const handleClick = () => {
    setIsViewAll(!isViewAll);
  };
  return (
    <section className="px-24 border-b-2 border-y-gray-500 py-5 my-8">
      <Card>
        <div className="pb-4">
          <div className="font-semibold text-sm border-l-[12px] border-radius px-2 py-1 border-l-black">
            Today's
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-12 items-center">
              <p className="font-semibold text-xl">Flash Sales</p>
              <div>timer</div>
            </div>
            <Button onClick={handleClick}>
              {isViewAll ? "View Less" : "View All "}
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between flex-wrap">
          {!isViewAll &&
            data
              .slice(44)
              .map(
                (
                  { img, id, price, previousPrice, rate, percent, rating },
                  index
                ) => (
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
                        {Array.from({ length: 5 }, (_, i) => (
                          <FaStar
                            key={i}
                            className={
                              i < rating
                                ? "text-lg text-cantaloupe "
                                : "text-silver  outline-none"
                            }
                          />
                        ))}
                        <span className="text-gray-700 text-sm">({rate})</span>
                      </div>
                    </div>
                  </div>
                )
              )}
        </div>

        <div className="flex items-center justify-between flex-wrap">
          {isViewAll &&
            data
              .slice(40)
              .map(
                (
                  { img, id, price, previousPrice, rate, percent, rating },
                  index
                ) => (
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
                        {Array.from({ length: 5 }, (_, i) => (
                          <FaStar
                            key={i}
                            className={
                              i < rating
                                ? "text-lg text-cantaloupe "
                                : "text-silver  outline-none"
                            }
                          />
                        ))}
                        <span className="text-gray-700 text-sm">({rate})</span>
                      </div>
                    </div>
                  </div>
                )
              )}
        </div>
      </Card>
    </section>
  );
};

export default Flashsales;
