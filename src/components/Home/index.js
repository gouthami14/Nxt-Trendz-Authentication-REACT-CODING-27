// Write your JS code here
import './index.css'
import {Component} from 'react'
import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="home-body-container">
          <div className="home-content">
            <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
            <img
              className="home-mobile-img"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
            />
            <p className="home-description">Fashion is part of the daily air</p>
            <button type="button" className="shop-now-button">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-desktop-img"
          />
        </div>
      </div>
    )
  }
}

export default Home
