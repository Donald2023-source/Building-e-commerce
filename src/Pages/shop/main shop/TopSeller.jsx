import { useEffect, useState } from "react";
import { data } from "./ProductData";
import { TbCurrencyNaira } from "react-icons/tb";

const TopSeller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const topSellers = data.slice(40);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % topSellers.length);
    }, 7000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [topSellers.length]);
  const { img, id, price } = topSellers[currentIndex];

  return (
    <div className="bg-white rounded-[4px] w-[30%] h-[22rem] ">
      <div className="bg-black text-center text-xl font-bold rounded-[3px] py-2">
        <span>Top Seller</span>
      </div>
      <div className="p-8 flex flex-col items-center">
        <div className="w-[80%] rounded-lg shadow-lg shadow-silver">
          <img src={img} alt={id} className="w-full" />
        </div>
        <div className="text-black flex flex-col items-center pt-2">
          <span className="font-semibold text-xl capitalize">{id}</span>
          <p className="flex items-center text-fadedRed">
            <TbCurrencyNaira className="text-lg font-semibold " />
            <span>{price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopSeller;
