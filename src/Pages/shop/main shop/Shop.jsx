import Container from "../../../components/Container";
import BestSelling from "./BestSelling";
import Browse from "./Browse";
import Buynow from "./Buynow";
import Explore from "./Explore";
import FeaturedProduct from "./FeaturedProduct";
import Flashsales from "./Flashsales";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Subscribe from "./Subscribe";

const Shop = () => {
  return (
    <section className=" bg-silver">
      <Container>
        <Navbar />
        <Hero />
        <BestSelling />
        <Flashsales />
        <Browse />
        <FeaturedProduct />
        <Buynow />
        <Explore />
        <Subscribe />
      </Container>
    </section>
  );
};

export default Shop;
