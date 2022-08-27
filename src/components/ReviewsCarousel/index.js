import './index.css'

import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {value: 0}

  leftArrowClick = () => {
    const {value} = this.state
    if (value < 1) {
      this.setState({value: 0})
    } else {
      this.setState(prev => ({value: prev.value - 1}))
    }
  }

  rightArrowClick = () => {
    const {value} = this.state
    if (value > 2) {
      this.setState({value: 3})
    } else {
      this.setState(prev => ({value: prev.value + 1}))
    }
  }

  render() {
    const {value} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[value]

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Reviews</h1>
          <img alt={username} src={imgUrl} />
          <div className="sub">
            <button
              type="button"
              testId="leftArrow"
              className="btn"
              onClick={this.leftArrowClick}
            >
              <img
                className="arrow-img"
                alt="left arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              />
            </button>
            <p className="h2">{username}</p>
            <button
              type="button"
              testId="rightArrow"
              className="btn"
              onClick={this.rightArrowClick}
            >
              <img
                className="arrow-img"
                alt="right arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              />
            </button>
          </div>
          <p className="p1">{companyName}</p>
          <p className="p2">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
