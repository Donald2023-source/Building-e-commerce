import { useEffect, useState } from "react";
import { data } from "./ProductData";
import { TbCurrencyNaira } from "react-icons/tb";

// Function to shuffle an array
function shuffleArray(array) {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const TopSeller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Shuffle the data array and then slice it
  const shuffledData = shuffleArray(data);
  const topSellers = shuffledData.slice(36);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % topSellers.length);
    }, 7000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [topSellers.length]);
  const { img, id, price } = topSellers[currentIndex];

  return (
    <div className="bg-white rounded-[4px] w-[30%] h-[23rem] hidden  lg:block">
      <div className="bg-black text-center text-xl font-bold rounded-[3px] py-2">
        <span>Top Seller</span>
      </div>
      <div className="p-8 flex flex-col items-center">
        <div className="w-full rounded-lg shadow-lg shadow-silver">
          <img src={img} alt={id} className="w-full" />
        </div>
        <div className="text-black flex flex-col items-center pt-6 text-nowrap">
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
