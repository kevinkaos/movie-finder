import { Spinner } from 'reactstrap';
import './Loader.scss';
import React from 'react';

class Loader extends React.Component {

    // Sets the opacity to 0 100ms after component mounted and removes loader from DOM 2 seconds after
  componentDidMount() {
    setTimeout(() => {

      document.querySelector('.loader-container').style.transition = 'opacity 5s';
      document.querySelector('.loader-container').style.opacity = '0';

      setTimeout(() => {
        document.querySelector('.loader-container').remove();
      }, 2000);

    }, 100);
  }

    render() {
        return (
          <div className="loader-container">
            <Spinner color="light" className="spinner" style={{ width: '3rem', height: '3rem' }} />{' '}
          </div>
        );
    }
}

export default Loader;

