import Button from "../../main shop/Button";
import verifedCart from "../../../../assets/verified-cart.png";
const Body = () => {
  return (
    <body className="w-[70%] px-2">
      <div>
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sunt
          natus cupiditate, exercitationem facilis
        </p>
      </div>
      <div>
        <div>
          <span>Color:</span>
          <span className="color-selector">OOOOO</span>
        </div>
        <div>
          <span>Size:</span>
          <span className=" ">
            <button className="uppercase border border-black px-2 py-[0.5] text-center">
              xs
            </button>
          </span>
        </div>
        <div className="flex gap-4 items-center my-3">
          <Button className={"w-[70%] text-nowrap"}>Add To Cart</Button>
          <Button className={"w-[70%] text-nowrap"}>Buy Now</Button>
          <img src={verifedCart} alt={verifedCart} />
        </div>
      </div>
    </body>
  );
};

export default Body;
