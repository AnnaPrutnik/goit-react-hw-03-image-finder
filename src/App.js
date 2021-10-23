import './App.css';
import { Component } from 'react';
import SearchBar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

class App extends Component {
  state = {
    searchValue: '',
  };
  onSubmit = value => {
    this.setState({ searchValue: value });
  };
  render() {
    const { onSubmit } = this;
    const { searchValue } = this.state;

    return (
      <div className="App">
        <SearchBar onSubmit={onSubmit} />
        {searchValue !== '' && <ImageGallery searchValue={searchValue} />}
      </div>
    );
  }
}

export default App;
