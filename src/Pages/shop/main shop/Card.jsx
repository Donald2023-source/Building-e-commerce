import PropTypes from "prop-types";

const Card = ({ className, children }) => {
  return (
    <section className={`${className} bg-white py-6 px-4 border-radius `}>
      {children}
    </section>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
export default Card;
