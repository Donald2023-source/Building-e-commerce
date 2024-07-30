import Card from "../../main shop/Card";
import rate4 from "../../../../assets/rate49.png";
import rate5 from "../../../../assets/rate5.png";
import star from "../../../../assets/four-star2.png";

export default function Reviews() {
  return (
    <div className="w-[100%] py-6">
      <Card className={"px-8"}>
        <h6 className="border-b-2 border-b-gray-500 pb-4">Reviews</h6>
        <div className="flex items-start gap-28 justify-start my-10">
          <img src={rate4} alt={rate4} />
          <img src={rate5} alt={rate5} />
        </div>
        <section className="flex items-center gap-24 my-3">
          <div className="flex items-center gap-3 text-silver">
            <span className="font-semibold bg-black text-white p-2 text-center rounded-full">
              PN
            </span>
            <div className=" flex flex-col  justify-start items-start">
              <span className="font-bold text-black">Profile Name</span>
              <span>May 1, 2024</span>
            </div>
          </div>
          <div>
            <img src={star} alt={star} />
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </div>
        </section>
        <section className="flex items-center gap-24 my-3">
          <div className="flex items-center gap-3 text-silver">
            <span className="font-semibold bg-black text-white p-2 text-center rounded-full">
              PN
            </span>
            <div className=" flex flex-col  justify-start items-start">
              <span className="font-bold text-black">Profile Name</span>
              <span>May 1, 2024</span>
            </div>
          </div>
          <div>
            <img src={star} alt={star} />
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </div>
        </section>
        <section className="flex items-center gap-24 my-3">
          <div className="flex items-center gap-3 text-silver">
            <span className="font-semibold bg-black text-white p-2 text-center rounded-full">
              PN
            </span>
            <div className=" flex flex-col  justify-start items-start">
              <span className="font-bold text-black">Profile Name</span>
              <span>May 1, 2024</span>
            </div>
          </div>
          <div>
            <img src={star} alt={star} />
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </div>
        </section>
        <section className="flex items-center gap-24 my-3">
          <div className="flex items-center gap-3 text-silver">
            <span className="font-semibold bg-black text-white p-2 text-center rounded-full">
              PN
            </span>
            <div className=" flex flex-col  justify-start items-start">
              <span className="font-bold text-black">Profile Name</span>
              <span>May 1, 2024</span>
            </div>
          </div>
          <div>
            <img src={star} alt={star} />
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </div>
        </section>
        <section className="flex items-center gap-24 my-3">
          <div className="flex items-center gap-3 text-silver">
            <span className="font-semibold bg-black text-white p-2 text-center rounded-full">
              PN
            </span>
            <div className=" flex flex-col  justify-start items-start">
              <span className="font-bold text-black">Profile Name</span>
              <span>May 1, 2024</span>
            </div>
          </div>
          <div>
            <img src={star} alt={star} />
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </div>
        </section>
      </Card>
    </div>
  );
}
