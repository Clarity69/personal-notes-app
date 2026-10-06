import PropTypes from 'prop-types';

function ActionButton({
  title,
  icon,
  onClick = undefined,
  type = 'button',
  disabled = false,
  isLoading = false,
  variant = 'primary',
}) {
  const className = variant === 'danger' ? 'action action--danger' : 'action';

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={className}
      title={title}
      aria-label={title}
      onClick={onClick}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
    >
      {icon}
    </button>
  );
}

ActionButton.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit']),
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'danger']),
};

export default ActionButton;
