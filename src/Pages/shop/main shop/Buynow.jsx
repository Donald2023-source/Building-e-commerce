import Card from "./Card";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import mason from "../../../assets/black-mason.png";
import Button from "./Button";
import pipe from "../../../assets/pipes.png";

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
  return (
    <section className="px-24 py-5 my-8">
      <Card className={"bg-orange-700 text-white"}>
        {data.map(({ name, img, price, category }, i) => (
          <div key={i}>
            <div className=" flex items-center px-4 justify-between rounded-[4px] py-10 gap-1">
              <div className="flex flex-col gap-3 pl-12 ">
                <p className=" capitalize font-semibold text-xl whitespace-nowra">
                  {category}
                </p>
                <h2 className=" capitalize font-bold text-4xl">{name}</h2>
                <div className="flex flex-col items-start gap-8">
                  <div className="flex flex-col items-start gap-3">
                    <span className="text-fadedRed">
                      <span>N</span>
                      {price}
                    </span>
                    <CiStar />
                  </div>
                  <Link to={"#"} className=" flex items-center gap-1">
                    <Button className={"bg-slate-50 text-black"}>
                      Buy Now
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <img src={img} alt={img} className="w-[" />
              </div>
            </div>
          </div>
        ))}
      </Card>
    </section>
  );
};

export default Buynow;
