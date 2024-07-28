import gloves1 from "../../../../assets/gloves-xl.png";
import gloves2 from "../../../../assets/gloves.png";
import Body from "./Body";
import Footer from "./footer";
import Description from "./Description";
import Container from "../../../../components/Container";
import Reviews from "./Review";
import RelatedItems from "./Related";

const ProductDetails = () => {
  return (
    <Container>
      <section className="bg-gray-100 px-24">
        <main className="flex items-center justify-center gap-6 ">
          <section className="flex ">
            <aside className=" flex flex-col gap-4 py-6 w-[58%]">
              <img src={gloves2} alt={gloves2} className="w-[65%] " />
              <img src={gloves2} alt={gloves2} className="w-[65%]  " />
              <img src={gloves2} alt={gloves2} className="w-[65%] " />
              <img src={gloves2} alt={gloves2} className="w-[65%] " />
            </aside>
            <div className=" py-6 w-full ">
              <img src={gloves1} alt={gloves1} />
            </div>
          </section>
          <section className="py-6">
            <header className=" w-[70%] border-b-2 border-b-gray-900 py-4 mx-2">
              <h1>Name of product</h1>
              <p className=" text-nowrap">
                icon <span>(150 Reviews) / in Stock </span>
              </p>
              <p>
                <span>N </span>0.00
              </p>
            </header>
            <Body />
            <Footer />
          </section>
        </main>
        <Description />
        <Reviews />
        <RelatedItems />
      </section>
    </Container>
  );
};

export default ProductDetails;
