import PropTypes from 'prop-types';

function ActionBar({ children }) {
  return <div className="action-bar">{children}</div>;
}

ActionBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ActionBar;
