import axios from 'axios';

export class pixabaySearchPictures {
  constructor() {
    this.baseURL = 'https://pixabay.com/api/';
    this.key_api = '23114500-22e254b478d4c1f3e17503cc3';
    this._query = '';
    this._page = 1;
    this.perPage = 12;
  }
  get query() {
    return this._query;
  }
  set query(value) {
    return (this._query = value);
  }

  get page() {
    return this._page;
  }
  set page(number) {
    return (this._page = number);
  }

  searchPictures() {
    axios.defaults.baseURL = this.baseURL;
    return axios
      .get(
        `?q=${this._query}&page=${this._page}&key=${this.key_api}&image_type=photo&orientation=horizontal&per_page=${this.perPage}`,
      )
      .then(result => result.data.hits);
  }
}
