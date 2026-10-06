import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AuthSwitch({ question, linkText, to }) {
  return (
    <p className="auth-page__switch">
      {question} <Link to={to}>{linkText}</Link>
    </p>
  );
}

AuthSwitch.propTypes = {
  question: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default AuthSwitch;
