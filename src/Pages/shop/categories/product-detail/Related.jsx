import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { data } from "../../main shop/ProductData";
import Card from "../../main shop/Card";
import { TbCurrencyNaira } from "react-icons/tb";
import Button from "../../main shop/Button";
import { useState } from "react";

export default function RelatedItems() {
  const [isViewAll, setIsViewAll] = useState(false);

  const handleClick = () => {
    setIsViewAll(!isViewAll);
  };

  return (
    <section className="lg:px-24 md:px-2 sm:px-8 px-2 py-5 my-8 ">
      <Card className="bg-white">
        <div className="pb-4">
          <div className="font-bold text-sm border-l-[12px] border-radius px-2 py-1 border-l-black">
            Related Items
          </div>
          <Button onClick={handleClick}>
            {isViewAll ? "View Less" : "View All"}
          </Button>
        </div>
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {data
            .slice(44)
            .map(
              (
                { img, id, price, previousPrice, rate, percent, rating },
                index
              ) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <div className="relative py-3 ">
                    <img src={img} alt={img} className="w-full" />
                    <div className="text-silver flex items-start justify-between px-2 absolute top-6 left-0 right-0">
                      <span className="bg-black text-center border-radius px-2 py-[0.3px] ">
                        -{percent}%
                      </span>
                      <div className="flex flex-col gap-2">
                        <CiHeart className="bg-white text-blackk rounded-full text-center text-2xl cursor-pointer px-1" />
                        <MdOutlineRemoveRedEye className="bg-white text-blackk rounded-full text-center text-2xl cursor-pointer px-1" />
                      </div>
                    </div>
                    <button className="bg-black text-white w-full text-center py-1 absolute bottom-3 border-radius opacity-0 hover:opacity-100">
                      Add To Cart
                    </button>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-sm md:text-lg capitalize">
                      {id}
                    </p>
                    <div className="flex items-center text-sm lg:text-lg gap-3 ">
                      <p className="flex items-center  lg:text-lg justify-center text-sm text-fadedRed">
                        <TbCurrencyNaira className="text-xl font-semibold " />
                        <span>{price}</span>
                      </p>
                      <p className="flex items-center justify-center text-gray-700 line-through">
                        <TbCurrencyNaira className="text-sm md:text-xl font-semibold " />
                        <span>{previousPrice}</span>
                      </p>
                    </div>
                    <div className="flex items-center justify-normal gap-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < rating
                              ? "text-sm md:text-lg text-cantaloupe "
                              : "text-silver text-sm md:text-lg outline-none"
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
}
