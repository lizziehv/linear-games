import React from "react";

const itemImg = require("./images/coin.png");
const playerImg = require("./images/player.png");

/**
 * @param {*} value 0, 1, 2 correspond to empty, black and white
 *                  3 corresponds to white field with item
 */
const Field = ({ value, hasPlayer}) => {
  var name = "field";
  if(value === 1) name = "field black";
  else if(value >= 2) name = "field white";
  
  return (
    <div className={name}>
      {value === 3 && <img src={itemImg} alt="" className="icon" />}
      {hasPlayer && <img src={playerImg} alt="" className="icon" />}
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
const Square = ({ matrix, pressed, setPressed, r, c, player}) => {
  var type = pressed ? "square pressed" : "square";
  if(pressed && c === -1) type = "square pressed-control";
  const hasItem = !matrix.every((entry) => entry < 3);

  const playerInMatrix = (c === -1) ? false : (player.mrow === r && player.mcol === c);
  if (playerInMatrix && pressed) setPressed(-1, -1);
  
  // matrices containing player and items can't be pressed
  const onPress = (!(hasItem || playerInMatrix)|| c === -1) ? 
              () => setPressed(r, c) : () => setPressed(-1, -1);
  
  return(
    <button className={type} onClick={onPress}>
      <div className="across">
        <Field value={matrix[0]} hasPlayer={playerInMatrix&&player.mpos===0} />
        <Field value={matrix[1]} hasPlayer={playerInMatrix&&player.mpos===1} />
      </div>
      <div className="across">
        <Field value={matrix[2]} hasPlayer={playerInMatrix&&player.mpos===2} />
        <Field value={matrix[3]} hasPlayer={playerInMatrix&&player.mpos===3} />
      </div>
    </button>
  );
  
};

export default Square;
