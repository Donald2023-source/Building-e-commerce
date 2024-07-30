import RecentlyViewed from "../main shop/Recent";
import Subscribe from "../main shop/Subscribe";
import Container from "../../../components/Container.jsx";
import PropTypes from "prop-types";
import Navbar from "../main shop/Navbar.jsx";

const Categories = () => {
  return (
    <section className="bg-silver">
      <Container>
        <Navbar />
        <RecentlyViewed />
        <Subscribe />
      </Container>
    </section>
  );
};

Categories.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Categories;
