import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { data } from "../main shop/ProductData.js";
import Card from "../main shop/Card.jsx";
import { useState } from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import Categories from "./Categories";
import Button from "../main shop/Button.jsx";
import { FaStar } from "react-icons/fa";

const ItemsPerPage = 16;

const FarmMaterials = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage === data.length ? 0 : prevPage + 1));
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : 0));
  };

  const startIndex = currentPage * ItemsPerPage;
  const displayData = data.slice(
    16 + startIndex,
    28 + startIndex + ItemsPerPage
  );
  return (
    <div>
      <Categories>
        <section className="lg:px-24 px-2 py-5 my-8 lg:border-b-2 lg:border-y-gray-500">
          <Card>
            <div className="pb-4">
              <div className="font-bold text-sm border-l-[12px] border-radius px-2 py-1 border-l-black">
                Category
              </div>
              <p className="font-semibold text-2xl pt-2">
                Construction Chemicals
              </p>
            </div>
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
              {displayData.map(
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
                      <div className="flex items-center gap-3 ">
                        <p className="flex items-center justify-center text-sm text-fadedRed">
                          <TbCurrencyNaira className="text-xl font-semibold " />
                          <span>{price}</span>
                        </p>
                        <p className="flex items-center justify-center text-gray-700 text-sm lg:text-lg line-through">
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
            <div className="flex items-center justify-center gap-6 pt-8">
              <Button
                onClick={handlePrevious}
                disabled={currentPage === 0}
                className="capitalize text-center"
              >
                Prev
              </Button>
              <Button
                onClick={handleNext}
                disabled={startIndex + ItemsPerPage >= data.length - 20}
                className="capitalize text-center"
              >
                Next
              </Button>
            </div>
          </Card>
        </section>
      </Categories>
    </div>
  );
};

export default FarmMaterials;
