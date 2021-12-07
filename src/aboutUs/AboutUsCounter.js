import React, { Component } from "react";
import InnerElements from "./innerCounterEl.js";

var countDatas = [
  { firstLine: "Više od", numData: 10, lastLine: "godina od osnivanja" },
  {
    firstLine: "Više od",
    numData: 10,
    lastLine: "strucnjaka različitih zvanja",
  },
  { firstLine: "Preko", numData: 20, lastLine: "edukacija" },
  { firstLine: "Preko", numData: 30, lastLine: "stalnih klijenata" },
  { firstLine: " ", numData: 0, lastLine: "neuspelih kriznih komunikacija" },
  { firstLine: "Preko", numData: 50, lastLine: "samostalnih projekata" },
  { firstLine: "Preko", numData: 200, lastLine: "konferencija za medije" },
];

class AboutUsCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState((state) => {
          if (this.state.index == countDatas.length - 1) {
            return { index: 0 };
          }
          return { index: this.state.index + 1 };
        }),
      5000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <InnerElements data={countDatas[this.state.index]} />;
  }
}

export default AboutUsCounter;
