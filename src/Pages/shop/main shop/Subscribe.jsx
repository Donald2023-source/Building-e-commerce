import Button from "./Button";
import Card from "./Card";
import cartIcon from "../../../assets/cart-icon.png";
import verified from "../../../assets/verified.png";
import services from "../../../assets/Services.png";

const data = [
  {
    icon: cartIcon,
    name: "shop confindently",
    context: "Lorem ipsum dolor sit amet",
  },
  {
    icon: verified,
    name: "safe payment",
    context: "Lorem ipsum dolor sit amet",
  },
  {
    icon: services,
    name: "convenient delivery",
    context: "Lorem ipsum dolor sit amet  ",
  },
];

const Subscribe = () => {
  return (
    // <section className="px-24 py-5 my-8">
    // Fix this section bg-color and the subscribe container
    <Card className={" bg-transparent"}>
      <div className="flex items-center justify-around gap-10 px-28">
        {data.map(({ icon, name, context }, i) => (
          <div key={i} className="flex flex-col items-center gap-6">
            <img src={icon} alt={icon} />
            <div className=" flex flex-col items-center ">
              <p className="text-lg font-bold uppercase ">{name}</p>
              <p>{context}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" bg-black text-white p-4 rounded-lg mt-32 flex items-center justify-between">
        <div>
          <span className="uppercase font-bold text-xl">
            Subscribe to get updated{" "}
          </span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis.
          </p>
        </div>
        <div className="flex items-center gap-4 mx-10">
          <input
            type="email"
            className="p-2 border-radius"
            placeholder="Enter your email "
          />
          <Button className={" text-black"}>Subscribe Now </Button>
        </div>
      </div>
    </Card>
    // </section>
  );
};

export default Subscribe;
