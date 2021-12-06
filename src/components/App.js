import React, { Component } from 'react'
import '../styles/App.scss';
import background from '../images/cv.png'
import AdminInfo from './AdminInfo';
import ContentList from './ContentList';
class App extends Component {
  state = {

  }
  render() {

    return (
      <>
        <img className="layer" src={background} alt="" />
        <div className="app">
          <AdminInfo />
          <ContentList />
        </div>
      </>
    )
  }
}

export default App;
