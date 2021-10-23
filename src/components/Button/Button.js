import './Button.css';
import PropTypes from 'prop-types';

export default function BtnLoadMore({ onClick }) {
  return (
    <button type="button" className="Button" onClick={onClick}>
      Load more
    </button>
  );
}

BtnLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
