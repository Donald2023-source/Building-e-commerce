import { Link } from "react-router-dom";
import pipe from "../../../assets/pipes.png";
import mason from "../../../assets/black-mason.png";
import { IoMdArrowForward } from "react-icons/io";
import "swiper/css";
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
import TopSeller from "./TopSeller";

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
const Hero = () => {
  const [revPerPage, setRevPerPage] = useState(1);

  return (
    <section className="text-white flex items-center justify-between gap-3 px-24 ">
      <Swiper
        spaceBetween={20}
        slidesPerView={revPerPage}
        modules={[Navigation, Pagination, A11y, Virtual, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="mySwiper w-[70%] bg-black flex items-center px-4 justify-between rounded-[4px] py-10 gap-1"
      >
        {data.map(({ name, img }, i) => (
          <SwiperSlide
            key={i}
            className="flex flex-col-reverse lg:flex-row items-center gap-36"
          >
            <div className="flex flex-col gap-3 pl-12 ">
              <h2 className=" uppercase font-bold text-3xl">new</h2>
              <p className=" capitalize font-medium text-2xl whitespace-nowrap">
                construction {name}
              </p>
              <Link to={"#"} className=" flex items-center gap-1">
                <span className=" border-b-2 border-b-silver pb-1">
                  Shop Now
                </span>
                <IoMdArrowForward className="text-xl" />
              </Link>
            </div>
            <div>
              <img src={img} alt={img} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <TopSeller />
    </section>
  );
};

export default Hero;
