import React from "react";

import Square from "./Square";
import { createRandomBoard, placeItems, multiply, moves } from "./util";

const SIZE = 6;

/**
 * SIZE*SIZE matrix that renders into a go board
 */
class Board extends React.Component {
  constructor(props) {
    super(props);

    // create board
    let b = createRandomBoard(SIZE, props.level);

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
      },
      lastMove: moves.LEFT
    }
    this.renderRow = this.renderRow.bind(this);
  };

  componentDidMount() {
    // update game with reference to board
    this.props.gameUpdate();
  }

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
    let newPos = prevPlayer.mpos - 2;
    let newRow = prevPlayer.mrow;
    if(newPos < 0){
      newPos += 4;
      newRow -= 1;
    }

    // can't move anymore
    if(newRow === -1){
      return false;
    } else if (this.state.board[newRow][prevPlayer.mcol][newPos] >= 2) {
      // new positions
      const newPlayer = { 
        mrow: newRow, 
        mcol: prevPlayer.mcol,
        mpos: newPos 
      };

      // update pos
      this.updatePosition(newPlayer, moves.UP);
    }
    return true;
  }

  movePlayerDown = () => {
    const prevPlayer = this.state.player;

    // determine new position
    let newPos = prevPlayer.mpos + 2;
    let newRow = prevPlayer.mrow;
    if(newPos > 3){
      newPos -= 4;
      newRow += 1;
    }

    if(newRow === SIZE){
      return false;
    } else if (this.state.board[newRow][prevPlayer.mcol][newPos] >= 2){
      const newPlayer = { 
        mrow: newRow, 
        mcol: prevPlayer.mcol,
        mpos: newPos 
      };
  
      // see if item needs to be picked up
      this.updatePosition(newPlayer, moves.DOWN);
    }
    return true;
  }

  movePlayerLeft = () => {
    const prevPlayer = this.state.player;

    // determine new position
    let newPos = prevPlayer.mpos - 1;
    let newCol = prevPlayer.mcol;
    if(newPos < 0 || newPos === 1){
      newPos += 2;
      newCol -= 1;
    }

    if(newCol < 0){
      return false;
    } else if(this.state.board[prevPlayer.mrow][newCol][newPos] >= 2){
      const newPlayer = { 
        mrow: prevPlayer.mrow, 
        mcol: newCol,
        mpos: newPos 
      };
  
      // see if item needs to be picked up
      this.updatePosition(newPlayer, moves.LEFT);
    }
    return true;
  }

  movePlayerRight = () => {
    const prevPlayer = this.state.player;

    // determine new position
    let newPos = prevPlayer.mpos + 1;
    let newCol = prevPlayer.mcol;
    if(newPos > 3 || newPos === 2){
      newPos -= 2;
      newCol += 1;
    }

    if(newCol === SIZE){
      return false;
    } else if (this.state.board[prevPlayer.mrow][newCol][newPos] >= 2){
      const newPlayer = { 
        mrow: prevPlayer.mrow, 
        mcol: newCol,
        mpos: newPos 
      };
  
      // see if item needs to be picked up
      this.updatePosition(newPlayer, moves.RIGHT);
    }
    return true;
  }

  /**
   * Update location, picking up coins if necessary
   * @param {*} newPlayer object containing new player locations
   */
  updatePosition = (newPlayer, move) => {
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
        player: newPlayer,
        lastMove: move
      }));
      this.props.newItem();
    }
    else{
      this.setState({ player: newPlayer, lastMove: move });
    }
  }

  /**
   * @param {*} row to render
   */
  renderRow = (row) => {
    const { board, pressedR, pressedC, player, lastMove } = this.state;
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
          theme={this.props.theme}
          lastMove={lastMove}
        />)}
      </div>
    );
  }

  render() {
    const rows = [];
    for(let i = 0; i < SIZE; i++) rows.push(this.renderRow(i));

    return(<div>{rows}</div>);
  }
}

export default Board;
