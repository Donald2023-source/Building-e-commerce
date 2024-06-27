import Card from "./Card";
import chemical from "../../../assets/healthicons_chemical-burn.png";
import paint from "../../../assets/paint.png";
import chair from "../../../assets/chair.png";
import farm from "../../../assets/farm.png";
import power from "../../../assets/power.png";
import spanner from "../../../assets/material-symbols.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const data = [
  {
    name: "construction chemicals",
    path: "construction chemicals",
    img: chemical,
  },
  {
    name: "construction materials",
    path: "construction materials",
    img: spanner,
  },
  {
    name: "electronics",
    path: "electronics",
    img: power,
  },
  {
    name: "farm materials",
    path: "farm materials",
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
    <section className="px-24 border-b-2 border-y-gray-500 py-5 my-8">
      <Card>
        <div className="pb-4">
          <div className="font-semibold text-sm border-l-[12px] border-radius px-2 py-1 border-l-black">
            Categories
          </div>
          <p className="font-semibold text-xl">Browse By Category</p>
        </div>
        <div className="flex items-center justify-between">
          {data.map(({ name, path, img }, index) => (
            <div key={index}>
              <Link
                to={path}
                className=" border border-gray-400 border-radius w-[9rem] py-8 h-28 justify-center flex flex-col items-center "
              >
                <img src={img} alt={img} />
                <span className="text-wrap text-center font-semibold">
                  {name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default Browse;
