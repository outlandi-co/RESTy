import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    // Change the state of the counter... add 1 to this.state.count
    let newState = { count: this.state.count + 1 };
    this.setState(newState);
  };

  decrement = () => {
    // Change the state of the counter... subtract 1 from this.state.count
    let newState = { count: this.state.count - 1 };
    this.setState(newState);
  };

  render() {
    return (
      <>
        <h3>Counter ...</h3>
        <h4>{this.state.count}</h4>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    );
  }
}

export default Counter;
