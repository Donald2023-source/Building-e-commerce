import PropTypes from "prop-types";
const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={` bg-black text-white py-2 text-center px-6 border-radius ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
