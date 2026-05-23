import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.addCount = this.addCount.bind(this);
    this.subCount = this.subCount.bind(this);
  }

  addCount() {
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  }

  subCount() {
    this.setState((prev) => {
      return { count: prev.count - 1 };
    });
  }

  render() {
    const date = new Date();
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <p>Today: {date.toDateString()}</p>
        <button onClick={this.subCount}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.addCount}>+</button>
      </div>
    );
  }
}
export default Counter;
