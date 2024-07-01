import Card from "./Card";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import mason from "../../../assets/black-mason.png";
import Button from "./Button";
import pipe from "../../../assets/pipes.png";
import "swiper/css";
import { TbCurrencyNaira } from "react-icons/tb";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Virtual } from "swiper/modules";
import "swiper/css/virtual";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// import required modules
import { A11y, Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { useState } from "react";

const data = [
  {
    category: "construction materials",
    name: "pipes",
    img: pipe,
    price: "25,000",
    rating: "3",
  },
  {
    category: "construction materials",
    name: "mason",
    img: mason,
    price: "100,000",
    rating: "5",
  },
];

const Buynow = () => {
  const [revPerPage, setRevPerPage] = useState(1);
  return (
    <section className="px-2 lg:px-24 py-5 my-8">
      <Card className={"bg-blacked text-white "}>
        <Swiper
          spaceBetween={20}
          slidesPerView={revPerPage}
          modules={[Navigation, Pagination, A11y, Virtual, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: false }}
          className="mySwiper"
        >
          {data.map(({ name, img, price, rating, category }, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col-reverse lg:flex-row items-center px-4 justify-between rounded-[4px] py-10 gap-6 lg:gap-1">
                <div className="flex flex-col gap-3 text-center lg:text-left lg:pl-12">
                  <p className="capitalize font-semibold text-2xl text-black">
                    {category}
                  </p>
                  <h2 className="capitalize font-bold text-3xl lg:text-5xl text-black py-5">
                    {name}
                  </h2>
                  <div className="flex flex-col items-center lg:items-start gap-6">
                    <div className="py-1">
                      <div className="flex items-center gap-4">
                        <p className="flex items-center justify-center text-fadedRed">
                          <TbCurrencyNaira className="text-xl font-semibold" />
                          <span>{price}</span>
                        </p>
                      </div>
                      <div className="flex items-center justify-center lg:justify-normal gap-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <FaStar
                            key={i}
                            className={
                              i < rating
                                ? "text-lg text-cantaloupe"
                                : "text-silver outline-none"
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <Link to={"#"} className="flex items-center gap-1">
                      <Button className={"bg-slate-50 text-black"}>
                        Buy Now
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="w-full lg:w-[45%]">
                  <img src={img} alt={img} className="w-full" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Card>
    </section>
  );
};

export default Buynow;
