import React from "react";
import Square from "./square";

const SIZE = 6;

/**
 * Function that returns a random array representing a 2*2 matrix
 * with nonzero determinant
 */
const createRandomMatrix = () => {
  var array = [0, 0, 0, 0];

  // choose two random values 
  var randomI = Math.floor(Math.random()*(4));
  do { var randomJ = Math.floor(Math.random()*(4)); } 
  while(randomJ === randomI);

  // set two random to 2
  for(var i = 0; i < 4 ;i++){
    if(i !== randomI && i !== randomJ) array[i] = 2;
  }
      
  // fill other two values
  do {
    array[randomI] = Math.floor(Math.random()*(3));
    array[randomJ] = Math.floor(Math.random()*(3));

  } // repeat until the matrix has nonzero determinant
  while ((array[0]*array[3] - array[1]*array[2])%3 === 0);

  return array;
}

class Board extends React.Component {
  constructor(props) {
    super(props);

    // choose random places to place items
    var itemLocations = new Array(SIZE);
    for(var r = 0; r < SIZE; r++){
      itemLocations[r] = Array(SIZE).fill(false);
    }
    var count = 0;
    while(count < SIZE){
      var randR = Math.floor(Math.random()*(SIZE));
      var randC = Math.floor(Math.random()*(SIZE));

      if(!itemLocations[randR][randC]){
        itemLocations[randR][randC] = true;
        count = count + 1;
      }
    }

    // start array
    var rows = new Array(SIZE);

    for(r = 0; r < SIZE; r++){
      var row = new Array(SIZE);
      for(var c = 0; c < SIZE; c++){ 
        row[c] = <Square matrix={null} setPressed={this.setPressed} hasItem={itemLocations[r][c]}/>;
        //row[c] = new Square({matrix: null, setPressed: this.setPressed, hasItem: itemLocations[r][c]});
      }
      rows[r] = row;
    }

    this.state = {
      board: rows,
      pressed: null
    }
  };

  /**
   * @param {*} square to set as pressed
   */
  setPressed = (square) => {
    // forget previous pressed
    if(this.state.pressed) this.state.pressed.isPressed(false);

    // update new pressed
    square.isPressed(true);
    this.setState({ pressed: square });
  };

  /**
   * @param {*} other matrix to multiply pressed matrix from the left
   */
  multiplyLeft = (other) => {
    if (!this.state.pressed || !other) return false;
    this.state.pressed.multiplyLeft(other);
    return true;
  }

  /**
   * @param {*} other matrix to multiply pressed matrix from the right
   */
  multiplyRight = (other) => {
    if (!this.state.pressed || !other) return false;
    this.state.pressed.multiplyRight(other);
    return true;
  }

  /**
   * @param {*} row
   */
  renderRow = (row) => {
    return(
      <div className="across">
        {this.state.board[row][0].renderSquare()}
      </div>
    );
  }

  render() {
    const rows = [];

    for(var i = 0; i < SIZE; i++){
      rows.push(this.renderRow(i));
    }

    return(
      <div>
        {rows}
      </div>
    );
  }
}

export default Board;
