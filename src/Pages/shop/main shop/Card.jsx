import propTypes from "prop-types";

const Card = ({ children, className }) => {
  return (
    <section className={`${className} bg-white py-6 px-4 border-radius `}>
      {children}
    </section>
  );
};

Card.prototype = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
};

export default Card;
