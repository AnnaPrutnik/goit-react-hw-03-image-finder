import { Component } from 'react';
import PropTypes from 'prop-types';
import './Serachbar.css';

export default class SearchBar extends Component {
  state = {
    searchValue: '',
  };

  handlerSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchValue);
  };

  handlerChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    const { handlerSubmit, handlerChange } = this;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handlerSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchValue}
            onChange={handlerChange}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
