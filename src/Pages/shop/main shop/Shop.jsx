import BestSelling from "./BestSelling";
import BottomNav from "./BottomNav";
import Browse from "./Browse";
import Buynow from "./Buynow";
import Explore from "./Explore";
import FeaturedProduct from "./FeaturedProduct";
import Flashsales from "./Flashsales";
import Hero from "./Hero";

const Shop = () => {
  return (
    <section className=" bg-silver">
      <Hero />
      <BestSelling />
      <Flashsales />
      <Browse />
      <FeaturedProduct />
      <Buynow />
      <Explore />
      <BottomNav />
    </section>
  );
};

export default Shop;
