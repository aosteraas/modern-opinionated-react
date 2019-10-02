import React, { Component } from 'react';
import { Props, State } from './AirlineFoodTypes';

class AirlineFood extends Component<Props, State> {
  state = { open: false };
  // mounting
  constructor(props: Props) {
    super(props);
    this.state = { open: false };
    this.getFood = this.getFood.bind(this);
  }
  getFood() {
    //
  }
  static getDerivedStateFromProps = (props: Props, state: State) => {};
  componentDidMount = () => {};
  // updating
  componentDidUpdate = (prevProps: Props, prevState: State) => {};
  shouldComponentUpdate = (nextProps: Props, nextState: State) => {
    return false;
  };
  // unmounting
  componentWillUnmount = () => {};
  render() {
    return (
      <div>
        {this.props.text}
        <p>What's the deal with airline food?</p>
      </div>
    );
  }
}

export default AirlineFood;
