import Nav from "../components/Nav";
import Footer from "../components/Footer";

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Container;
