import React from 'react';
import PropTypes from 'prop-types'
const Dialog = ({ onClose, title, children, isOpen }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="dialog">
      <div className="dialog_heading">
        <h4 className="dialog__title">{title}</h4>
        <button onClick={onClose} className="dialog__close-btn">+</button>
      </div>
      <div className="dialog__content">{children}</div>
    </div>
  )
};

Dialog.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string
};

Dialog.defaultProps = {
  title: '',
  isOpen: false
};

export default Dialog;