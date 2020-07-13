import React from "react";

class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: this.props.time,
    }

    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    // run countDown at every 1 second interval
    this.timer = setInterval(this.countDown, 1000);
  }

  componentWillUnmount() {
    if (this.timer !== 0) {
      clearInterval(this.timer);
    }
  }

  /**
   * Count down from timeLeft and update state every second
   */
  countDown() {
    let timeLeft = this.state.time - 1;
    this.setState({ time: timeLeft });

    if (timeLeft === 0) {
      clearInterval(this.timer);
      // this.props.timeOver();
    }
  }

  render() {
    let min = Math.floor(this.state.time / 60);
    if (min < 10) min = "0" + min;

    let sec = this.state.time % 60;
    if (sec < 10) sec = "0" + sec;

    return(
      <div className="across">
        <h2>{'Timer\n\n'}</h2>
        <h2>{min}:{sec}</h2>
      </div>
    );
  }
}


export default Timer;
