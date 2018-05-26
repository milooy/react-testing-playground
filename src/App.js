import React, {Component} from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  onIncrement = () => {
    this.setState(state => ({
      counter : state.counter + 1
    }))
  }

  onDecrement = () => {
    this.setState(state => ({
      counter: state.counter - 1
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>Zangna Counter</h1>
        <div>Your counter:
          <span>{this.state.counter}</span>
        </div>
        <button onClick={this.onDecrement}>{"<"}</button>
        <button onClick={this.onIncrement}>{">"}</button>
      </div>
    );
  }
}

export default App;
