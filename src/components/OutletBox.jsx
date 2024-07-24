import PropTypes from "prop-types";

const OutletBox = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

OutletBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default OutletBox;
