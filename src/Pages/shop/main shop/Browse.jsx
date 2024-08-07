import Card from "./Card";
import chemical from "../../../assets/healthicons_chemical-burn.png";
import paint from "../../../assets/paint.png";
import chair from "../../../assets/chair.png";
import farm from "../../../assets/farm.png";
import power from "../../../assets/power.png";
import spanner from "../../../assets/material-symbols.png";
import { NavLink } from "react-router-dom";

const data = [
  {
    name: "construction chemicals",
    path: "construction-chemicals",
    img: chemical,
  },
  {
    name: "construction materials",
    path: "construction-materials",
    img: spanner,
  },
  {
    name: "electronics",
    path: "electronics",
    img: power,
  },
  {
    name: "farm materials",
    path: "farm-materials",
    img: farm,
  },
  {
    name: "furniture",
    path: "furniture",
    img: chair,
  },
  {
    name: "paints",
    path: "paints",
    img: paint,
  },
];

const Browse = () => {
  return (
    <section className="hidden lg:block lg:px-24 md:px-2 sm:px-8 px-2 py-5 my-8 lg:border-b-2 lg:border-y-gray-500">
      <Card className="bg-white">
        <div className="pb-8">
          <div className="font-semibold text-sm border-l-[12px] border-radius px-2 py-1 border-l-black">
            Categories
          </div>
          <p className="font-semibold text-xl">Browse By Category</p>
        </div>
        <div className="flex flex-wrap gap-5 items-center justify-around">
          {data.map(({ name, path, img }, index) => (
            <div key={index} className="flex justify-center">
              <NavLink
                to={path}
                className="border border-gray-400 rounded-lg hover:shadow-lg hover:shadow-silver w-[9rem] py-8 h-28 flex flex-col items-center justify-center"
              >
                <img src={img} alt={img} className="w-12 h-12 mb-2" />
                <span className="text-wrap text-center font-semibold">
                  {name}
                </span>
              </NavLink>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default Browse;
