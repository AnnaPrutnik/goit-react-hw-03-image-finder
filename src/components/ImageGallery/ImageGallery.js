import { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.css';
import { pixabaySearchPictures } from '../../services/pixabay-api';
import ImageGalleryItem from '../ImageGalleryItem';
import BtnLoadMore from '../Button';
import Spinner from '../Loader';
import Modal from '../Modal';

const search = new pixabaySearchPictures();

export default class ImageGallery extends Component {
  state = {
    searchResults: [],
    isLoaded: false,
    showModal: false,
    activePictureUrl: '',
    activePictureAlt: '',
  };

  componentDidMount() {
    search.query = this.props.searchValue;
    this.searchPicture();
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchValue;
    const nextQuery = this.props.searchValue;
    if (prevQuery !== nextQuery) {
      this.setState({ searchResults: [] });
      search.page = 1;
      search.query = this.props.searchValue;
      this.searchPicture();
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  searchPicture = () => {
    this.setState({ isLoaded: true });
    search
      .searchPictures()
      .then(res => {
        if (res.length > 0) {
          this.setState(prevState => ({
            searchResults: [...prevState.searchResults, ...res],
            isLoaded: false,
          }));
        }
      })
      .catch(error => console.log(error));
  };

  handleClickBtn = () => {
    search.page += 1;
    this.searchPicture();
  };

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  handleClickPicture = e => {
    this.toggleModal();
    const {
      dataset: { source },
      alt,
    } = e.target;
    this.setState({ activePictureUrl: source, activePictureAlt: alt });
  };

  render() {
    const {
      searchResults,
      isLoaded,
      showModal,
      activePictureUrl,
      activePictureAlt,
    } = this.state;
    const { handleClickBtn, handleClickPicture, toggleModal } = this;

    return (
      <>
        <ul className="ImageGallery">
          {searchResults.length > 0 &&
            searchResults.map(picture => (
              <ImageGalleryItem
                key={picture.id}
                src={picture.webformatURL}
                alt={picture.tags}
                onClick={handleClickPicture}
                dataSource={picture.largeImageURL}
              />
            ))}
        </ul>
        {isLoaded ? (
          <Spinner />
        ) : (
          searchResults.length > 0 && <BtnLoadMore onClick={handleClickBtn} />
        )}
        {showModal && (
          <Modal
            onClose={toggleModal}
            url={activePictureUrl}
            alt={activePictureAlt}
          />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchValue: PropTypes.string.isRequired,
};
