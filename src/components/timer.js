import React from "react";

class Timer extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      time: this.props.time,
      isActive: true
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.countDown, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  /**
   * Count down from timeLeft and update state every second
   */
  countDown = () => {
    let timeLeft = this.state.time - 1;
    this.setState({ time: timeLeft });

    if (timeLeft === 0) {
      clearInterval(this.timer);
      this.props.timeOver();
    }
  }

  pause = () => {
    clearInterval(this.timer);
  }

  resume = () => {
    this.timer = setInterval(this.countDown, 1000);
  }

  render() {
    let min = Math.floor(this.state.time / 60);
    if (min < 10) min = "0" + min;

    let sec = this.state.time % 60;
    if (sec < 10) sec = "0" + sec;

    const style = this.props.theme;
    return(
      <div className="down">
        <h4 style={style.h4}>{'Timer'}</h4>
        <h4 style={style.h4}>{min}:{sec}</h4>
      </div>
    );
  }
}


export default Timer;
