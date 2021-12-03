import React, { Component } from 'react'
import '../styles/App.scss';
import background from '../images/cv.png'
import AdminInfo from './AdminInfo';

class App extends Component {
  state = {

  }
  render() {

    return (
      <>
        <img className="layer" src={background} alt="" />
        <div className="app">

          <AdminInfo />
        </div>
      </>
    )
  }
}

export default App;
