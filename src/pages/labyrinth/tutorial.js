import React from "react";
import Board from "../../components/labyrinth/Board";
import Timer from "../../components/Timer";
import Square from "../../components/labyrinth/Square";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { createRandomMatrix } from "../../components/labyrinth/util";
import { navigate } from "gatsby";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Pause, X, Play, Star } from 'react-feather';

const SIZE = 6;
const REPS = 1;
const TIME = 60;

class LabyrinthTutorial extends React.Component{
  constructor(props) {
    super(props);

    // choose matrices in control board
    var matrices = [[2, 0, 0, 2], [0, 1, 1, 0]];
    matrices.push(createRandomMatrix());
    matrices.push(createRandomMatrix());

    this.timer = React.createRef();
    this.board = React.createRef();

    this.state = {
      chosenMatrix: -1,
      controlMatrices: matrices,
      errorMsg: "",
      items: 0,
      totalItems: 0,
      gameOver: false,
      gamePaused: false,
      repetitionNum: 0
    }
  };

  handleKeyPress = (e) => {
    if(this.state.gamePaused) return;
    
    if(this.board.current){
      switch (e.keyCode) {
        case 37:  // left arrow
          this.board.current.movePlayerLeft();
          break;
        case 38:  // up arrow
          this.board.current.movePlayerUp();
          break;
        case 39:  // right arrow
          this.board.current.movePlayerRight();
          break;
        case 40:  // down arrow
          this.board.current.movePlayerDown();
          break;
        default:
          return;
      }
    }
  }

  componentWillMount() {
    if(!this.props.location.state.style){
      navigate("/labyrinth/settings/");
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', e => this.handleKeyPress(e));
  }

  componentWillUnmount() {
    window.removeEventListener('keydown',  e => this.handleKeyPress(e));
  }

  chooseMatrix = (r, c) => {
    // update to new matrix
    this.setState({ chosenMatrix: r });
  };

  multiplyLeft = () => {
    const { chosenMatrix, controlMatrices } = this.state;
    if(chosenMatrix === -1) return;
    this.board.current.multiplyLeft(controlMatrices[chosenMatrix]);
  }

  multiplyRight = () => {
    const { chosenMatrix, controlMatrices } = this.state;
    if(chosenMatrix === -1) return;
    else if(!this.board.current.multiplyRight(controlMatrices[chosenMatrix])) return;
  }

  newItem = () => {
    const { items, totalItems } = this.state;
    if(items === SIZE-1){
      this.setState({ items: items + 1, totalItems: totalItems + 1 });
      this.endGame();
    } else {
      this.setState({ items: items + 1, totalItems: totalItems + 1 });
    }
  }

  nextGame = () => {
    this.setState({
      chosenMatrix: -1, 
      gameOver: false,
      items: 0,
      gamePaused: false,
    });
  }

  endGame = () => {
    this.setState(prevState => ({ 
      gameOver: true,  
      repetitionNum: prevState.repetitionNum + 1
    }));
  }

  quit = (e) => {
    e.preventDefault(); 
    navigate("/");
  }

  handlePause = () => {
    const { gamePaused } = this.state;
    if(this.timer.current){
      if(gamePaused) { this.timer.current.resume(); }
      else { this.timer.current.pause(); }
    }

    this.setState({ gamePaused: !gamePaused });
  }

  renderControls = () => {
    const { style, timerOn } = this.props.location.state;
    const { chosenMatrix, controlMatrices, gamePaused } = this.state;

    return(
      <div className="down full-height">
        <div className="down">
          {controlMatrices.map((array, i) => 
          <Square matrix={array} pressed={i===chosenMatrix} setPressed={this.chooseMatrix} r={i} c={-1} theme={style}/>)}
        </div>  
        <div className="down">
          <button className="general" style={style.button} onClick={this.multiplyLeft}><X /> Left</button>
          <div className="separator" />
          <button className="general" style={style.button} onClick={this.multiplyRight}><X /> Right</button>
          <div className="across space-around">
            {timerOn && <button className="general" style={style.button} onClick={this.handlePause}>
              {gamePaused ? <Play /> : <Pause />}
            </button>}
            <div className="separator" />
            <button className="general" style={style.button} onClick={this.multiplyRight}>U</button>
          </div>
        </div>
      </div>
    );
  };

  renderArrows = () => {
    if(!this.board.current) return;
    
    const style = this.props.location.state.style;
    const { gamePaused } = this.state;
    return(
      <div>
        <div className="across">
          <button className="general" style={style.button} onClick={!gamePaused ? this.board.current.movePlayerUp : null}>
            <ArrowUp />
          </button>
        </div>
        <div className="across">
          <button className="general" style={style.button} onClick={!gamePaused ? this.board.current.movePlayerLeft : null}>
            <ArrowLeft />
          </button>
          <button className="general" style={style.button} onClick={!gamePaused ? this.board.current.movePlayerDown : null}>
            <ArrowDown />
          </button>
          <button className="general" style={style.button} onClick={!gamePaused ? this.board.current.movePlayerRight : null}>
            <ArrowRight />
          </button>
        </div>
      </div>
    );
  }

  renderRatings = (num, total) => {
    const numOfStars = Math.ceil((5*num)/(total));
    const filledStar = new Array(5);
    for(let i = 0; i < 5; i++){
      filledStar[i] = i < numOfStars ? true : false;
    }
    return(
      <div className="star-box">
        <Col sm={{span: 6, offset: 3}} xs={12}>
          <div className="across">
            {filledStar.map(filled => {
              return <Star size={60} className={filled ? "rating-star-filled" : "rating-star"} />
            })}
          </div>
        </Col>
      </div>
    );
  }

  render() {
    const style = this.props.location.state.style;
    const timerOn = this.props.location.state.timerOn;
    const { gameOver, items, repetitionNum, totalItems } = this.state;

    if(repetitionNum === REPS){
      return(
        <div className="fixed" style={style.background}>
          <div className="content-container" >
            <h1 style={style.h1}>
              Game Over !
            </h1>
            {this.renderRatings(totalItems, SIZE*REPS)}
            <Row>
              <Col sm={{span: 3, offset: 3}} xs={{ span: 10, offset: 1 }}>
                <button className="general" style={style.button} onClick={e => this.quit(e)}>
                  Leave Game
                </button>
              </Col>
              <Col sm={{span: 3, offset: 0}} xs={{ span: 10, offset: 1 }}>
                <button className="general" style={style.button} onClick={e => {
                  e.preventDefault(); 
                  navigate("/labyrinth/settings/");
                }}>
                  Play Again
                </button>
              </Col>
            </Row>
          </div>
        </div>
      );
    }
    else if(gameOver){
      return(
        <div className="fixed" style={style.background}>
          <div className="content-container" >
            <h2 style={{...style.h2, textAlign: 'center'}}>
              {'You collected ' + items + " out of " + SIZE + " items."}
            </h2>
            {this.renderRatings(items, SIZE)}
            <Row>
              <Col sm={{span: 3, offset: 3}} xs={{ span: 10, offset: 1 }}>
                <button className="general" style={style.button} onClick={e => this.quit(e)}>
                  End Game
                </button>
              </Col>
              <Col sm={{span: 3, offset: 0}} xs={{ span: 10, offset: 1 }}>
                <button className="general" style={style.button} onClick={this.nextGame}>
                  Next Game
                </button>
              </Col>
            </Row>
          </div>
        </div>
      );
    }
    else {
      return(
        <div>
          <Container fluid style={style.background}>
            <Row>
              <Col lg={3} xs={{ span: 12, offset: 0 }}>
                {this.renderControls()}
              </Col>
              <Col lg={6} xs={{ span: 12, offset: 0 }}>
                <Board ref={this.board} theme={style} newItem={this.newItem} gameUpdate={() => this.forceUpdate()}/>
              </Col>
              <Col lg={3} xs={{ span: 12, offset: 0 }}>
                <div className="down full-height">
                  {timerOn &&
                  <Timer 
                    ref={this.timer} 
                    time={TIME} 
                    timeOver={this.endGame}/>}
                  <div className="across">
                    <img className="bigItem" src={style.itemImg} alt="" />
                    <h4 style={style.h4}>X {this.state.items}</h4>
                  </div>
                  {this.renderArrows()}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}

export default LabyrinthTutorial;
