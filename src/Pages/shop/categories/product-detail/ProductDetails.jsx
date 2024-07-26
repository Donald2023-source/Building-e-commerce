import Button from "../../main shop/Button";
import verifedCart from "../../../../assets/verified-cart.png";
import pickUp from "../../../../assets/pick-up.png";
import verified from "../../../../assets/Frame-v.png";
import delivery from "../../../../assets/white-delivery.png";

const ProductDetails = () => {
  return (
    <>
      <main>
        <section className="image">
          <div className="splited images"></div>
          <div className="single image"></div>
        </section>
        <section>
          <header className=" w-[20%] border-b-2 border-b-gray-900 py-4 mx-2">
            <h1>Name of product</h1>
            <p>
              icon <span>(150 Reviews) / in Stock </span>
            </p>
            <p>
              <span>N </span>0.00
            </p>
          </header>
          <body>
            <div>
              <h2>Description</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
                modi! Fugit, nemo.
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
                <Button>Add To Cart</Button>
                <div className="flex items-center gap-3">
                  <Button>Buy Now</Button>
                  <img src={verifedCart} alt={verifedCart} />
                </div>
              </div>
            </div>
          </body>
          <footer className="flex flex-col justify-center items-center gap-4">
            <section className="w-[60%] bg-black text-white flex items-center justify-between p-8 rounded-xl">
              <div className="flex items-center gap-4">
                <img src={delivery} alt={delivery} className="w-[30%]" />
                <span>
                  <h6>Delivery</h6>
                  <p>Fee: N0.00</p>
                </span>
              </div>
              <img src={verified} alt={verified} />
            </section>
            <section className="w-[60%] bg-white text-black border-2 border-gray-600  flex items-center justify-between p-8 rounded-xl">
              <div className="flex items-center gap-4">
                <img src={pickUp} alt={pickUp} />
                <span>
                  <h6>Pick Up</h6>
                  <p>Fee: N0.00</p>
                </span>
              </div>
              <img src={verified} alt={verified} />
            </section>
          </footer>
        </section>
      </main>
    </>
  );
};

export default ProductDetails;
