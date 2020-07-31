// grayscales
const darkGray = "#535353";
const gray = "#C4C4C4";
const lightGray = '#F0F0F0';
const pink = '#ED0170';

// ocean colors
const clearBlue = 'rgba(0, 123, 217, 0.31)';
const yellow = '#FEB041';

// pacman colors
const darkBlue = '#040210';
const electricBlue = '#2400FC';

export const grayscales = {
  name: 'grayscales',
  h1: {
    color: darkGray
  },
  h2: {
    color: darkGray
  },
  background: {
    backgroundColor: 'white'
  },
  settingsDiv: {
    backgroundColor: lightGray,
  },
  icon:{
    color: darkGray
  },
  sliderOn: pink,
  sliderOff: '#EDC0D5',
  square: {
    backgroundColor: gray,
    borderBottomColor: darkGray,
    borderBottomWidth: 6,
    borderBottomStyle: 'solid'
  },
  squareBlocked: {
    backgroundColor: gray,
    borderBottomColor: darkGray,
    borderBottomWidth: 6,
    borderBottomStyle: 'solid'
  },
  squarePressed: {
    backgroundColor: gray,
    borderBottomColor: pink,
    borderBottomWidth: 6,
    borderBottomStyle: 'solid'
  },
  pressedControl: {
    backgroundColor: gray,
    borderBottomColor: electricBlue,
    borderBottomWidth: 6,
    borderBottomStyle: 'solid'
  }
}

export const pacman = {
  name: 'grayscales',
  h1: {
    color: '#FFFF52'
  },
  h2: {
    color: 'white',
    fontSize: '40px'
  },
  background: {
    backgroundColor: darkBlue
  },
  background2: {
    backgroundImage: `url("${require('../images/pacmanbg.png')}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%'
  },
  settingsDiv: {
    borderColor: electricBlue,
    borderStyle: 'solid'
  },
  icon: {
    color: 'white'
  },
  sliderOn: electricBlue,
  sliderOff: '#6485d1',
  square: {
    borderColor: electricBlue,
    borderStyle: 'solid'
  },
  squareBlocked: {
    borderColor: electricBlue,
    borderStyle: 'solid'
  },
  squarePressed: {
    borderColor: electricBlue,
    borderStyle: 'solid'
  },
  pressedControl: {
    borderColor: electricBlue,
    borderStyle: 'solid'
  }
}

export const ocean = {
  name: 'grayscales',
  h1: {
    color: 'white'
  },
  h2: {
    color: 'white'
  },
  background: {
    backgroundImage: `url("${require('../images/ocean.png')}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%'
  },
  settingsDiv: {
    backgroundColor: clearBlue,
  },
  icon: {
    color: darkBlue
  },
  sliderOn: '#FF7542',
  sliderOff: '#FFAC8F',
  square: {
    borderColor: yellow,
    borderWidth: 6,
    borderStyle: 'solid'
  },
  squareBlocked: {
    borderColor: yellow,
    borderWidth: 6,
    borderStyle: 'solid'
  },
  squarePressed: {
    borderColor: electricBlue,
    borderWidth: 6,
    borderStyle: 'solid'
  },
  pressedControl: {
    borderColor: electricBlue,
    borderWidth: 6,
    borderStyle: 'solid'
  }
}


export const themes = {
  grayscales: grayscales
};