import React from "react";
import Board from "../../components/labyrinth/Board";
import Timer from "../../components/Timer";
import Square from "../../components/labyrinth/Square";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { createRandomMatrix } from "../../components/labyrinth/util";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Pause, X } from 'react-feather';

const SIZE = 6;
const itemImg = require("../../components/labyrinth/images/bigCoin.png");

class LabyrinthGame extends React.Component{
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
      gameOver: false,
      gamePaused: false
    }
  };

  handleKeyPress = (e) => {
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

  componentDidMount() {
    // make component update again with reference to board
    this.forceUpdate();
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
    const { items } = this.state;
    if(items === SIZE-1){
      this.setState({ items: items + 1, gameOver: true })
    } else {
      this.setState({ items: items + 1 });
    }
  }

  nextGame = () => {
    this.setState({
      chosenMatrix: -1, 
      gameOver: false,
      items: 0,
      gamePaused: false
    });
    this.forceUpdate();
  }

  renderControls = () => {
    const style = this.props.location.state.style;
    const { chosenMatrix, controlMatrices } = this.state;

    return(
      <div className="down full-height">
        <div className="down">
          {controlMatrices.map((array, i) => 
          <Square matrix={array} pressed={i===chosenMatrix} setPressed={this.chooseMatrix} r={i} c={-1} theme={style}/>)}
        </div>  
        <div className="down">
          <button className="general" onClick={this.multiplyLeft}><X /> Left</button>
          <div className="separator" />
          <button className="general" onClick={this.multiplyRight}><X /> Right</button>
          <div className="across space-around">
            <button className="general" onClick={this.timer.current ? this.timer.current.pause : null}>
              <Pause />
            </button>
            <div className="separator" />
            <button className="general" onClick={this.multiplyRight}>U</button>
          </div>
        </div>
      </div>
    );
  };

  renderArrows = () => {
    return(
    <div>
      <div className="across">
        <button className="general" onClick={this.board.current ? this.board.current.movePlayerUp : null}>
          <ArrowUp />
        </button>
      </div>
      <div className="across">
        <button className="general" onClick={this.board.current ? this.board.current.movePlayerLeft : null}>
          <ArrowLeft />
        </button>
        <button className="general" onClick={this.board.current ? this.board.current.movePlayerDown : null}>
          <ArrowDown />
        </button>
        <button className="general" onClick={this.board.current ? this.board.current.movePlayerRight : null}>
          <ArrowRight />
        </button>
      </div>
    </div>
    )
  }

  render() {
    const style = this.props.location.state.style;
    const timerOn = this.props.location.state.timerOn;

    if(this.state.gameOver){
      return(
        <Container fluid>
          <h1>Game Over</h1>
          <button className="general" onClick={this.nextGame}>
            Next Game
          </button>
        </Container>
      );
    }
    else{
      return(
        <Container fluid style={style.background}>
          <Row>
            <Col lg={3} xs={{ span: 12, offset: 0 }}>
              {this.renderControls()}
            </Col>
            <Col lg={6} xs={{ span: 12, offset: 0 }}>
              <Board ref={this.board} theme={style} newItem={this.newItem} />
            </Col>
            <Col lg={3} xs={{ span: 12, offset: 0 }}>
              <div className="down full-height">
                {timerOn &&
                <Timer 
                  ref={this.timer} 
                  time={60} 
                  timeOver={() => {this.setState({ gameOver: true })}
                }/>}
                <div className="across">
                  <img src={itemImg} alt="" />
                  <h4>X {this.state.items}</h4>
                </div>
                {this.renderArrows()}
              </div>
            </Col>
          </Row>
        </Container>
      );
    }
  };
}

export default LabyrinthGame;
