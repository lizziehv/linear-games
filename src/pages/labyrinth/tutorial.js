import React from "react";
import Board from "../../components/labyrinth/Board";
import Square from "../../components/labyrinth/Square";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { createRandomMatrix, moves } from "../../components/labyrinth/util";
import { navigate } from "gatsby";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, X, ArrowRightCircle, ArrowLeftCircle } from 'react-feather';

const tutorialGuidelines = (style) => {
  return(
    [
      `YOUR GOAL IS TO WALK THROUGH A PATH OF ${style.names.whiteField} AND COLLECT ALL ${style.names.item}.`,
      `MOVER YOUR PLAYER THROUGH ${style.names.whiteField} USIING ARROWS IN KEYBOARD OR SCREEN.`,
      `CLICK ON ANY SQUARE YOU WANT TO MANIPULATE, EXCEPT THOSE WITH ITEMS OR YOUR PLAYER.`,
      `CLICK ON A CONTORL MATRIX TO MULTIPLY YOUR CHOSEN SQUARE WITH.`,
      `MULTIPLY YOUR CHOSEN MATRIX TO THE LEFT OR RIGHT.`,
      `COLLECT ALL ITEMS BEFORE THE TIMER RUNS OUT.`
    ]
  );
}

class LabyrinthTutorial extends React.Component{
  constructor(props) {
    super(props);

    // choose matrices in control board
    const matrices = [[2, 0, 0, 2], [0, 1, 1, 0]];
    matrices.push(createRandomMatrix());
    matrices.push(createRandomMatrix());

    this.board = React.createRef();

    this.state = {
      step: 0,
      chosenMatrix: -1,
      controlMatrices: matrices,
      items: 0
    }
  };

  handleKeyPress = (e) => {
    const board = this.board.current;    
    if(board){
      switch (e.keyCode) {
        case moves.LEFT:  // left arrow
          board.movePlayerLeft();
          break;
        case moves.UP:  // up arrow
          board.movePlayerUp();
          break;
        case moves.RIGHT:  // right arrow
          board.movePlayerRight();
          break;
        case moves.DOWN:  // down arrow
          board.movePlayerDown();
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

  handleStep = (diff) => {
    const { step } = this.state;
    if(step > 4 || step + diff < 0) {
      navigate("/labyrinth/settings/");
    } else {
      this.setState({ step: step + diff});
    }
  }

  newItem = () => {
    const { items, totalItems } = this.state;
    this.setState({ items: items + 1, totalItems: totalItems + 1 });
  }


  renderControls = () => {
    const { style } = this.props.location.state;
    const { chosenMatrix, controlMatrices } = this.state;

    return(
      <div className="down full-container-height space-around">
        <div className="down">
          {controlMatrices.map((array, i) => 
          <Square matrix={array} pressed={i===chosenMatrix} setPressed={this.chooseMatrix} r={i} c={-1} theme={style}/>)}
        </div>
        <div>
          <button className="general" style={style.button} onClick={this.multiplyLeft}><X /> Left</button>
          <div className="separator" />
          <button className="general" style={style.button} onClick={this.multiplyRight}><X /> Right</button>
        </div>
      </div>
    );
  };

  renderTimer = (style) => {
    return(
      <div className="down">
        <h4 style={style.h4}>{'Timer'}</h4>
        <h4 style={style.h4}>00:59</h4>
      </div>
    );
  }

  renderArrows = () => {
    const board = this.board.current;
    if(!board) return;
    
    const style = this.props.location.state.style;
    return(
      <div>
        <div className="across">
          <button className="general" style={style.button} onClick={board.movePlayerUp}>
            <ArrowUp />
          </button>
        </div>
        <div className="across">
          <button className="general" style={style.button} onClick={board.movePlayerLeft}>
            <ArrowLeft />
          </button>
          <button className="general" style={style.button} onClick={board.movePlayerDown}>
            <ArrowDown />
          </button>
          <button className="general" style={style.button} onClick={board.movePlayerRight}>
            <ArrowRight />
          </button>
        </div>
      </div>
    );
  }

  render() {
    const style = this.props.location.state.style;
    const { step } = this.state;
    const guide = tutorialGuidelines(style);

    return(
      <div className={style.fontClass} style={style.background}>
        <div className="tutorial-headline">
          <h3 style={style.h2}>{guide[step]}</h3>
        </div>
        <Container fluid>
          <Row>
            <Col lg={1}>
              <div className="down full-container-height" >
                <button onClick={() => this.handleStep(-1)}>
                  <ArrowLeftCircle size={60} className="tutorial-arrow"/>
                </button>
              </div> 
            </Col>
            <Col lg={2} xs={{ span: 12, offset: 0 }}>
              {step > 2 && this.renderControls()}
            </Col>
            <Col lg={6}>
              <Board ref={this.board} theme={style} newItem={this.newItem} gameUpdate={() => this.forceUpdate()}/>
            </Col>
            <Col lg={2} xs={{ span: 12, offset: 0 }}>
              <div className="down full-container-height space-around">
                <div style={{height: '40%'}}>
                  {step > 4 && this.renderTimer(style)}
                </div>
                <div style={{height: '40%'}}>
                  <img className="bigItem" src={style.itemImg} alt="" />
                  <h4 style={style.h4}>X {this.state.items}</h4>
                </div>
                <div style={{height: '20%'}}>
                  {step > 0 && this.renderArrows()}
                </div>
              </div>
            </Col>
            <Col lg={1}>
              <div className="down full-container-height">
                <button onClick={() => this.handleStep(1)}>
                  <ArrowRightCircle size={60} className="tutorial-arrow"/>
                </button>
              </div> 
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LabyrinthTutorial;
