import React, { Component } from "react";

class InnerElements extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState((state) => {
          if (this.state.index >=this.props.data.numData) {
            return { index: this.props.data.numData };
          }
          return { index: this.state.index + 1 };
        }),
      25 0
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="numberCounter">
        <div className="countsWrap">
          <div className="numbsWrap">
            <h1 className="countFirstLine">{this.props.data.firstLine}</h1>
            <h1 className="numCount">{this.state.index}</h1>
            <h1 className="countLastLine ">{this.props.data.lastLine}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default InnerElements;
