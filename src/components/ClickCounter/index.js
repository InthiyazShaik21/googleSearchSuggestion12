import {Component} from 'react'
import './index.css'
class ClickCounter extends Component {
  state = {count: 0}
  increaseCount = () => {
    const {count} = this.state

    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1>
          the button has been clicked<span className="counter">{count}</span>{' '}
          times
        </h1>
        <p>Click the button to increase the count!</p>
        <button onClick={this.increaseCount + 1} className="btn">
          Click me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
