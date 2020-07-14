/**
 * Returns a random array representing a 2*2 matrix
 * with nonzero determinant
 */
export const createRandomMatrix = () => {
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

/**
 * Creates random board of size * size
 * where each entry is a 2*2 matrix
 * 
 * @param {*} size matrix size
 * 
 * @return board
 */
export const createRandomBoard = (size) => {
  var rows = new Array(size);

  for(var r = 0; r < size; r++){
    var row = new Array(size);
    for(var c = 0; c < size; c++){
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

  var count = 0;
  while(count < size){
    let randR = Math.floor(Math.random()*size); // random row
    let randC = Math.floor(Math.random()*size); // random column

    // place item if no item in matrix
    if(board[randR][randC].every((entry) => entry < 3) && !(randR===size-1 && randC===size-1)){
      do{ var randI = Math.floor(Math.random()*4); }
      while(board[randR][randC][randI] !== 2);

      board[randR][randC][randI] = 3;
      count = count + 1;
    }
  }
}