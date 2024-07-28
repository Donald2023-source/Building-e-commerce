import pickUp from "../../../../assets/pick-up.png";
import verified from "../../../../assets/Frame-v.png";
import delivery from "../../../../assets/white-delivery.png";
export default function Footer() {
  return (
    <footer className="flex flex-col items-start gap-4 px-2">
      <section className="w-[70%] bg-black text-white flex items-center justify-between p-6 rounded-xl">
        <div className="flex items-center gap-4">
          <img src={delivery} alt={delivery} className="w-[30%]" />
          <span>
            <h6>Delivery</h6>
            <p>Fee: N0.00</p>
          </span>
        </div>
        <img src={verified} alt={verified} />
      </section>
      <section className="w-[70%] bg-white text-black border-2 border-gray-500  flex items-center justify-between p-6 rounded-xl">
        <div className="flex items-center gap-4">
          <img src={pickUp} alt={pickUp} />
          <span>
            <h6>Pick Up</h6>
            <p>Fee: None</p>
          </span>
        </div>
        <img src={verified} alt={verified} />
      </section>
    </footer>
  );
}
