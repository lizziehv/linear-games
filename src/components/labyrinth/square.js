import React from "react";
import { moves } from "./util";

/**
 * @param {*} value 0, 1, 2 correspond to empty, black and white
 *                  3 corresponds to white field with item
 */
const Field = ({ value, hasPlayer, theme, lastMove }) => {
  let style = null;
  if(value === 1) style = theme.blackField;
  else if(value >= 2) style = theme.whiteField;
  
  const renderPlayer = () => {
    let img = theme.playerImg;
    if(theme.moveImg){
      switch (lastMove) {
        case moves.UP:
          img = theme.playerUp;
          break;
        case moves.DOWN:
          img = theme.playerDown;
          break;
        case moves.RIGHT:
          img = theme.playerRight;
          break;
        default:
          img = theme.playerImg;
      }
    }
    
    return(<img src={img} alt="" className="icon" />);
  }

  return (
    <div className="field" style={style}>
      {value === 3 && <img src={theme.itemImg} alt="" className="icon" />}
      {hasPlayer && renderPlayer()}
    </div>
  );
}

/**
* 
* @param {*} matrix array representing 2*2 matrix w values 0, 1, 2
* @param {*} pressed is matrix the one pressed?
* @param {*} setPressed function to set this as pressed matrix
* @param {*} hasItem does this matrix have an item?
* @param {*} player player's positions
*/
const Square = ({ matrix, pressed, setPressed, r, c, player, theme, lastMove }) => {
  const hasItem = !matrix.every((entry) => entry < 3);

  const playerInMatrix = (c === -1) ? false : (player.mrow === r && player.mcol === c);
  if (playerInMatrix && pressed) setPressed(-1, -1);
  
  // matrices containing player and items can't be pressed
  const onPress = (!(hasItem || playerInMatrix)|| c === -1) ? 
              () => setPressed(r, c) : () => setPressed(-1, -1);

  let styles = theme.square;
  if(hasItem || playerInMatrix) styles = theme.squareBlocked;
  else if(pressed && c === -1) styles = theme.pressedControl;
  else if (pressed) styles = theme.squarePressed;
 
  return(
    <button className={"square"} style={styles} onClick={onPress} >
      <div className="across">
        <Field value={matrix[0]} hasPlayer={playerInMatrix&&player.mpos===0} theme={theme} lastMove={lastMove}/>
        <Field value={matrix[1]} hasPlayer={playerInMatrix&&player.mpos===1} theme={theme} lastMove={lastMove}/>
      </div>
      <div className="across">
        <Field value={matrix[2]} hasPlayer={playerInMatrix&&player.mpos===2} theme={theme} lastMove={lastMove}/>
        <Field value={matrix[3]} hasPlayer={playerInMatrix&&player.mpos===3} theme={theme} lastMove={lastMove}/>
      </div>
    </button>
  );
  
};

export default Square;
