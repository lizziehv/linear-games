const chance0 = 5; // 4 out of 10 
const chance1 = 5; // 4 out of 10
const totalChance = 20;

export const moves = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}

/**
 * Random number between 0 and 2, with different probabilities
 */
const randomMatrixValue = () => {
  const randInRange = Math.floor(Math.random()*(totalChance + 1));
  if(randInRange < chance0){
    return 0;
  } else if (randInRange < chance1 + chance0){
    return 1;
  } else {
    return 2;
  }
}

/**
 * Returns a random array representing a 2*2 matrix
 * with nonzero determinant
 */
export const createRandomMatrix = () => {
  let array = [0, 0, 0, 0];

  // choose two random values 
  let randomI = Math.floor(Math.random()*(4));
  let randomJ;
  do { randomJ = Math.floor(Math.random()*(4)); } 
  while(randomJ === randomI);

  // set two random to 2
  for(let i = 0; i < 4 ;i++){
    if(i !== randomI && i !== randomJ) array[i] = 2;
  }
      
  // fill other two values
  do {
    array[randomI] = randomMatrixValue();
    array[randomJ] = randomMatrixValue();

  } // repeat until the matrix has nonzero determinant
  while ((array[0]*array[3] - array[1]*array[2])%3 === 0);

  return array;
}

/**
 * Creates random board of size * size
 * where each entry is a 2*2 matrix
 * 
 * @param {*} size matrix size
 * 
 * @return board
 */
export const createRandomBoard = (size) => {
  let rows = new Array(size);

  for(let r = 0; r < size; r++){
    let row = new Array(size);
    for(let c = 0; c < size; c++){
      // last matrix is fixed (all white)
      if(r === size-1 && c === size-1)
        row[c] = [2, 2, 2, 2];
      else
        row[c] = createRandomMatrix();
    }
    
    rows[r] = row;
  }

  return rows;
}

/**
 * Returns product of two 2*2 matrices a*b
 * 
 * @param {*} a left matrix
 * @param {*} b right matrix
 * 
 * @return a*b
 */
export const multiply = (a, b) => {
  const result = [0, 0, 0, 0]

  result[0] = (a[0]*b[0] + a[1]*b[2])%3;
  result[1] = (a[0]*b[1] + a[1]*b[3])%3;
  result[2] = (a[2]*b[0] + a[3]*b[2])%3;
  result[3] = (a[2]*b[1] + a[3]*b[3])%3;

  return result;
};

/**
 * Make some of the items in the board 3 (white fields with item)
 * 
 * @param {*} board 2d matrix with squares or 2*2 matrices
 * @param {*} size size of board
 * 
 * @return board where matrices with items are true
 */
export const placeItems = (board, size) => {
  // choose random places to place items
  for(let r = 0; r < size; r++){
    let randC;
    do { randC = Math.floor(Math.random()*size); }// random column 
    while (r===size-1 && randC===size-1);
    
    // choose an index
    let randI;
    do { randI = Math.floor(Math.random()*4); }
    while(board[r][randC][randI] !== 2);

    board[r][randC][randI] = 3;
  }
}