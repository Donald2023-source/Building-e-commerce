import Card from "../main shop/Card";
import rate4 from "../../../../assets/rate49.png";
import rate5 from "../../../../assets/rate5.png";
import star from "../../../../assets/four-star2.png";

export default function Reviews() {
  const data = [
    {
      initials: "pn",
      name: "Steve Matts",
      date: "May 1, 2024",
      img: star,
    },
    {
      initials: "pn",
      name: "Amira Michelle",
      date: "May 1, 2024",
      img: star,
    },
    {
      initials: "pn",
      name: "Jason Mormont",
      date: "May 1, 2024",
      img: star,
    },
    {
      initials: "pn",
      name: "Mark Klassen",
      date: "May 1, 2024",
      img: star,
    },
    {
      initials: "pn",
      name: "Russ Milli",
      date: "May 1, 2024",
      img: star,
    },
  ];
  return (
    <div className="w-[100%] py-6">
      <Card className={"px-8 "}>
        <h6 className="border-b-2 border-b-gray-500 pb-4">Reviews</h6>
        <div className="flex items-start gap-28 justify-start my-10">
          <img src={rate4} alt={rate4} />
          <img src={rate5} alt={rate5} />
        </div>
        <section className="w-full flex flex-col items-start justify-start gap-8 my-3 text-nowrap">
          {data.map(({ name, img, initials, date }, index) => (
            <div key={index} className="flex items-start gap-24 ">
              <div className="flex  items-start gap-6 justify-start">
                <span className="h-12 w-12 flex items-center justify-center bg-black text-white rounded-full">
                  {initials}
                </span>
                <div className="flex flex-col items-start ">
                  <span className="font-bold text-black">{name}</span>
                  <span>{date}</span>
                </div>
              </div>
              <div className=" flex flex-col  gap-2 items-start">
                <img src={img} alt="image" />
                <span>Lorem ipsum dolor sit amet consectetur.</span>
              </div>
            </div>
          ))}
        </section>
      </Card>
    </div>
  );
}
