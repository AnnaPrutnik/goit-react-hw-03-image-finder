import { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import './Loader.css';

export default class Spinner extends Component {
  //other logic
  render() {
    return (
      <Loader
        type="ThreeDots"
        color="#3f51b5"
        className="Loader"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
}
