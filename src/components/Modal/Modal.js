import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.css';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.listenerForCloseWindow);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.listenerForCloseWindow);
  }

  listenerForCloseWindow = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { url, alt } = this.props;
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={url} alt={alt} />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  alt: 'Modal for current picture',
};
