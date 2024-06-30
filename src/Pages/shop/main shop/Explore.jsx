import Button from "./Button";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { data } from "./ProductData";
import Card from "./Card";
import { useState } from "react";

const Explore = () => {
  const [isViewAll, setIsViewAll] = useState(false);

  const handleClick = () => {
    setIsViewAll(!isViewAll);
  };
  return (
    <section className="px-24  py-5 my-8">
      <Card>
        <div className="pb-4">
          <div className="font-bold text-sm border-l-[12px] border-radius px-2 py-1 border-l-black">
            Our Products
          </div>
          <p className="font-semibold text-2xl pt-2">Explore Our Products</p>
        </div>
        <div className="flex items-center justify-between flex-wrap">
          {!isViewAll &&
            data.slice(32).map(({ img, id, price, rate, rating }, index) => (
              <div key={index}>
                <div className="relative py-3 ">
                  <img src={img} alt={img} className="w-[100%]" />
                  <div className="text-silver right-2 px-2 absolute top-6 ">
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
                    <div className="flex items-center justify-normal gap-2">
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
              </div>
            ))}
        </div>
        <div className="flex items-center justify-between flex-wrap">
          {isViewAll &&
            data.slice(40).map(({ img, id, price, rate }, index) => (
              <div key={index}>
                <div className="relative py-3 ">
                  <img src={img} alt={img} className="w-[100%]" />
                  <div className="text-silver right-2 px-2 absolute top-6 ">
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
                    <div className="flex items-center justify-normal gap-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < rate
                              ? "text-lg text-cantaloupe "
                              : "text-silver text-3xl outline-none"
                          }
                        />
                      ))}
                      <span className="text-gray-700 text-sm">({rate})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div
          className="flex
        items-center justify-center pt-8"
        >
          <Button onClick={handleClick}>
            {isViewAll ? "View All Products" : "View Less"}
          </Button>
        </div>
      </Card>
    </section>
  );
};

export default Explore;
