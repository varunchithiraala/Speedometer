// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onClickAccelerateButton = () => {
    this.setState(prevState => {
      if (prevState.speed < 200) {
        return {speed: prevState.speed + 10}
      }
      return {speed: prevState.speed}
    })
  }

  onClickBreakButton = () => {
    this.setState(prevState => {
      if (prevState.speed > 0) {
        return {speed: prevState.speed - 10}
      }
      return {speed: prevState.speed}
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-bg-container">
        <div className="speedometer-container">
          <h1 className="speedometer-heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="speedometer-img"
            alt="speedometer"
          />
          <h1 className="speed-heading">Speed is {speed}mph</h1>
          <p className="speed-description">
            Min Limit is 0mph, Max Limit is 200mph
          </p>
          <div className="buttons-container">
            <button
              className="button accelerate-button"
              onClick={this.onClickAccelerateButton}
              type="button"
            >
              Accelerate
            </button>
            <button
              className="button brake-button"
              onClick={this.onClickBreakButton}
              type="button"
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
