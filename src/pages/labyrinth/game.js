import React from "react";
import Board from "../../components/labyrinth/board";
import Timer from "../../components/timer";
import Square from "../../components/labyrinth/square";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class LabyrinthGame extends React.Component{
  constructor(props) {
    super(props);

    // choose matrices in control board
    var matrices = [];
    matrices.push(<Square matrix={[2, 0, 0, 2]} setPressed={this.chooseMatrix} isControl={true}/>);
    matrices.push(<Square matrix={[0, 1, 1, 0]} setPressed={this.chooseMatrix} isControl={true}/>);
    matrices.push(<Square matrix={null} setPressed={this.chooseMatrix} isControl={true}/>);
    matrices.push(<Square matrix={null} setPressed={this.chooseMatrix} isControl={true}/>);

    this.state = {
      chosenMatrix: null,
      controlMatrices: matrices,
      errorMsg: ""
    }
  };

  chooseMatrix = (square) => {
    // forget previous choice
    if(this.state.chosenMatrix) this.state.chosenMatrix.isPressed(false);

    // update to new matrix
    square.isPressed(true);
    this.setState({ chosenMatrix: square });
  };

  multiplyLeft = () => {
    if(!this.state.chosenMatrix) return;
    else if(!this.board.multiplyLeft(this.state.chosenMatrix.state.matrix)) return;
  }

  multiplyRight = () => {
    if(!this.state.chosenMatrix) return;
    else if(!this.board.multiplyRight(this.state.chosenMatrix.state.matrix)) return;
  }

  renderControls = () => {
    return(
      <>
        <div className="down">
          {this.state.controlMatrices}
        </div>
        <div className="down">
          <button className="general" onClick={this.multiplyLeft}>Multiply Left</button>
          <button className="general" onClick={this.multiplyRight}>Multiply Right</button>
          <button className="general" onClick={this.multiplyRight}>Undo</button>
        </div>
      </>
    );
  };

  render() {
    return(
      <Container fluid>
        <Row>
          <Col lg={3} xs={{ span: 12, offset: 0 }}>
            {this.renderControls()}
          </Col>
          <Col lg={6} xs={{ span: 12, offset: 0 }}>
            <Board ref={ref => (this.board = ref)}/>
          </Col>
          <Col lg={2} xs={{ span: 12, offset: 0 }}>
            <Timer time={60} />
          </Col>
        </Row>
      </Container>
    );
  };
}

export default LabyrinthGame;
