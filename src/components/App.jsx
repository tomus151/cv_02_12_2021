import React, { Component } from 'react'
import '../styles/App.css';
import background from '../images/cv_full_view.png'
// import background from '../images/cv.png'
import AdminInfo from './AdminInfo';
import ContentList from './ContentList';
class App extends Component {
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
