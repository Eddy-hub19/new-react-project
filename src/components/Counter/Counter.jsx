import React, { Component } from 'react';
import Controls from './Controls';
import css from './counter.module.css';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  // static propTypes = {};

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };
  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div className={css.Counter}>
        <span className={css.CounterValue}>{this.state.value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
