import React from "react";

/**
 * @param {*} value 0, 1, 2 correspond to empty, black and white
 * @param {*} item (boolean) does field have one of 6 items?
 */
const Field = ({ value, item }) => {
  var name = "field";
  if(value === 1) name = "field black";
  else if(value === 2) name = "field white";
  
  return (
    <div className={name}>
      {item && <img src={require("./images/coin.png")} alt="" />}
    </div>
  );
}

/**
 * Props: matrix (if null it will be set to a random matrix)
 */
class Square extends React.Component {
  constructor(props) {
    super(props);

    // fill random array if necessary
    var array = props.matrix ? props.matrix : [0, 0, 0, 0];

    if(!props.matrix){ 
      // choose two random values not set to 2 initially
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
    }

    this.state = {
      matrix: array,
      pressed: false,
      itemI: -1
    }
  }

  componentDidMount() {
    if(this.props.hasItem) this.placeItem();
  }

  /**
   * @param {*} bool is this the last pressed matrix ?
   */
  isPressed = (bool) => { this.setState({ pressed: bool}) };

  /**
   * Set this.state.matrix to the matrix product a*b
   * 
   * @param {*} a left matrix
   * @param {*} b right matrix
   */
  multiply = (a, b) => {
    const result = [0, 0, 0, 0]

    result[0] = (a[0]*b[0] + a[1]*b[2])%3;
    result[1] = (a[0]*b[1] + a[1]*b[3])%3;
    result[2] = (a[2]*b[0] + a[3]*b[2])%3;
    result[3] = (a[2]*b[1] + a[3]*b[3])%3;

    this.setState({ matrix: result });
  };

  /**
   * Set this.state.matrix to the matrix product other*this.state.matrix
   * 
   * @param {*} other left matrix
   */
  multiplyLeft = (other) => { this.multiply(other, this.state.matrix) };

  /**
   * Set this.state.matrix to the matrix product this.state.matrix*other
   * 
   * @param {*} other right matrix
   */
  multiplyRight = (other) => { this.multiply(this.state.matrix, other) };

  placeItem = (number) => {
    do { var randI = Math.floor(Math.random()*(4)); } 
    while(this.state.matrix[randI] !== 2);

    this.setState({ itemI: randI });
  }

  renderSquare() {
    const type = this.state.pressed ? "square pressed" : "square";
    return(
      <button className={type} onClick={ () => this.props.setPressed(this) }>
        <div className="across">
          <Field value={this.state.matrix[0]} item={this.state.itemI === 0}/>
          <Field value={this.state.matrix[1]} item={this.state.itemI === 1}/>
        </div>
        <div className="across">
          <Field value={this.state.matrix[2]} item={this.state.itemI === 2}/>
          <Field value={this.state.matrix[3]} item={this.state.itemI === 3}/>
        </div>
      </button>
    );
  }
};

export default Square;
