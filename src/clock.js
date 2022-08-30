import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      clockVisible: true,
    };
    this.timerId = null;
    //    this.clockVisible = true;
  }

  // add the part for update the clock once per second.
  componentDidMount() {
    this.timerId = setInterval(() => {
      //      console.log(new Date());
      return this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  handleClick() {
    console.log("clicked!");
    if (this.state.clockVisible === true)
      this.setState({ clockVisible: false });
    else this.setState({ clockVisible: true });
  }

  render() {
    let clock = <h2>It is {this.state.date.toLocaleTimeString()}.</h2>;
    let button = <button onClick={() => this.handleClick()}>Disappear!</button>;

    if (this.state.clockVisible === false) {
      clock = null;
      button = <button onClick={() => this.handleClick()}>Appear!</button>;
    }

    return (
      <div>
        <h1>Hello, world!</h1>
        {clock}
        {button}
      </div>
    );
  }
}

export default Clock;

// constructor(props) {
//   super(props);
//   this.state = {
//     date: new Date(),
//     clockVisible: true,
//   };
// }

// disappear = () => {
//   this.setState({
//     clockVisible: false,
//   });
//   console.log("disappear");
// };

// appear = () => {
//   this.setState({
//     clockVisible: true,
//   });
//   console.log("appear");
// };

// render() {
//   if (this.state.clockVisible) {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2 style={{ display: "inline" }}>
//           It is {this.state.date.toLocaleTimeString()}.
//         </h2>
//         <button onClick={this.disappear}>Disappear!</button>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2 style={{ display: "none" }}>
//           It is {this.state.date.toLocaleTimeString()}.
//         </h2>
//         <button onClick={this.appear}>Appear!</button>
//       </div>
//     );
//   }
// }

// componentDidMount() {
//   this.timerID = setInterval(() => this.tick(), 1000);
// }

// tick() {
//   this.setState({
//     date: new Date(),
//   });
//   //  this.state.date = new Date();
// }

// componentWillUnmount() {
//   clearInterval(this.timerID);
// }
