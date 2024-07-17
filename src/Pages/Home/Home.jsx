
import Container from "../../components/Container";
import Preview from "./preview";
import Services from "./Services";
import BrowseCategory from "./BrowseCategory";
import FeaturedProducts from "./FeaturedProducts";
const Home = () => {
  return (
    <div>
      <Container>
        <Preview />
        <Services/>
       <BrowseCategory/>
       <FeaturedProducts/>
      </Container>
    </div>
  );
};
export default Home;
