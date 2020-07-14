import React from "react";
import Square from "./Square";
import { createRandomBoard, placeItems, multiply } from "./util";
import UIfx from 'uifx';
import errorMp3 from '../../static/sounds/error.mp3'

const SIZE = 6;
const error = new UIfx({asset: errorMp3});

/**
 * SIZE*SIZE matrix that renders into a go board
 */
class Board extends React.Component {
  constructor(props) {
    super(props);

    // create board
    let b = createRandomBoard(SIZE);

    // choose random places to place items
    placeItems(b, SIZE);

    this.state = {
      board: b,             // 2d board with matrices in every entry
      pressedR: -1,         // row of matrix pressed
      pressedC: -1,         // col of matrix pressed
      player: {             // players coordinates
        mrow: SIZE-1,
        mcol: SIZE-1,
        mpos: 3
      }
    }
  };

  /**
   * Replace pressed matrix by new pressed matrix
   * 
   * @param {*} r row of pressed matrix
   * @param {*} c col of pressed matrix
   */
  setPressed = (r, c) => { this.setState({ pressedR: r, pressedC: c }); };

  /**
   * @param {*} replacement matrix to replace pressed matrix with
   */
  replacePressed = (replacement) => {
    // make sure a matrix has been pressed
    const { pressedR, pressedC } = this.state;

    this.setState((prevState) => ({ board: 
      prevState.board.map((row, i) => {
        if(i === pressedR){
          return row.map((col, j) => {
            if(j === pressedC){
                return replacement;
            }
            return col;
          })
        }
        return row;
      })
    }));
    return true;
  }

  /**
   * @param {*} other matrix to multiply pressed matrix from the left
   */
  multiplyLeft = (other) => {
    const { board, pressedR, pressedC } = this.state;
    if (pressedR === -1 || pressedC === -1) return false;
    return this.replacePressed(multiply(other, board[pressedR][pressedC])); 
  }

  /**
   * @param {*} other matrix to multiply pressed matrix from the right
   */
  multiplyRight = (other) => {
    const { board, pressedR, pressedC } = this.state;
    if (pressedR === -1 || pressedC === -1) return false;
    return this.replacePressed(multiply(board[pressedR][pressedC], other));
  }

  movePlayerUp = () => {
    const prevPlayer = this.state.player;

    // determine new position
    var newPos = prevPlayer.mpos - 2;
    var newRow = prevPlayer.mrow;
    if(newPos < 0){
      newPos += 4;
      newRow -= 1;
    }

    // can't move anymore
    if(newRow === -1 || this.state.board[newRow][prevPlayer.mcol][newPos] < 2) {
      error.play();
      return;
    }
    
    // new positions
    const newPlayer = { 
      mrow: newRow, 
      mcol: prevPlayer.mcol,
      mpos: newPos 
    };

    // update pos
    this.updatePosition(newPlayer);
  }

  movePlayerDown = () => {
    const prevPlayer = this.state.player;

    // determine new position
    var newPos = prevPlayer.mpos + 2;
    var newRow = prevPlayer.mrow;
    if(newPos > 3){
      newPos -= 4;
      newRow += 1;
    }

    if(newRow === SIZE  || this.state.board[newRow][prevPlayer.mcol][newPos] < 2) return;
    
    const newPlayer = { 
      mrow: newRow, 
      mcol: prevPlayer.mcol,
      mpos: newPos 
    };

    // see if item needs to be picked up
    this.updatePosition(newPlayer);
  }

  movePlayerLeft = () => {
    const prevPlayer = this.state.player;

    // determine new position
    var newPos = prevPlayer.mpos - 1;
    var newCol = prevPlayer.mcol;
    if(newPos < 0 || newPos === 1){
      newPos += 2;
      newCol -= 1;
    }

    if(newCol < 0 || this.state.board[prevPlayer.mrow][newCol][newPos] < 2) return;
    
    const newPlayer = { 
      mrow: prevPlayer.mrow, 
      mcol: newCol,
      mpos: newPos 
    };

    // see if item needs to be picked up
    this.updatePosition(newPlayer);
  }

  movePlayerRight = () => {
    const prevPlayer = this.state.player;

    // determine new position
    var newPos = prevPlayer.mpos + 1;
    var newCol = prevPlayer.mcol;
    if(newPos > 3 || newPos === 2){
      newPos -= 2;
      newCol += 1;
    }

    if(newCol === SIZE || this.state.board[prevPlayer.mrow][newCol][newPos] < 2) return;
    
    const newPlayer = { 
      mrow: prevPlayer.mrow, 
      mcol: newCol,
      mpos: newPos 
    };

    // see if item needs to be picked up
    this.updatePosition(newPlayer);
  }

  /**
   * Update location, picking up coins if necessary
   * @param {*} newPlayer object containing new player locations
   */
  updatePosition = (newPlayer) => {
    const { mrow, mcol, mpos } = newPlayer;

    // if coin needs to be picked up
    if(this.state.board[mrow][mcol][mpos] === 3){
      this.setState((prevState) => ({ 
        board: prevState.board.map((row, i) => {
          if(i === mrow){
            return row.map((col, j) => {
              if(j === mcol){
                  return col.map((entry, k) => {
                    if(k === mpos)
                      return 2;
                    else
                      return entry;
                  });
              }
              return col;
            })
          }
          return row;
        }),
        player: newPlayer
      }));
      this.props.newItem();
    }
    else{
      this.setState({ player: newPlayer });
    }
  }

  /**
   * @param {*} row to render
   */
  renderRow = (row) => {
    const { board, pressedR, pressedC, player } = this.state;
    const { mrow, mcol, mpos } = player;

    return(
      <div className="across">
        {board[row].map((array, col) => <Square 
          matrix={array} 
          pressed={(pressedR===row&&pressedC===col)} 
          setPressed={this.setPressed} 
          r={row} 
          c={col}
          player={{mrow, mcol, mpos}}
        />)}
      </div>
    );
  }

  render() {
    const rows = [];
    for(var i = 0; i < SIZE; i++) rows.push(this.renderRow(i));

    return(<div className="board-container">{rows}</div>);
  }
}

export default Board;
