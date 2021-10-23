import './ImageGalleryItem.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ src, alt, dataSource, onClick }) {
  return (
    <li className="ImageGalleryItem">
      <img
        src={src}
        alt={alt}
        className="ImageGalleryItem-image"
        onClick={onClick}
        data-source={dataSource}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  dataSource: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
