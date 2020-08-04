// grayscales
const darkGray = "#535353";
const darkerGray = "#828282";
const grayBlocked = "#969696";
const gray = "#C4C4C4";
const lightGray = '#F0F0F0';
const pink = '#ED0170';

// ocean colors
const clearBlue = 'rgba(0, 123, 217, 0.31)';
const yellow = '#FEB041';
const orange = '#FF7542';
const blue = '#2E6CB8';

// pacman colors
const darkBlue = '#040210';
const electricBlue = '#2400FC';

export const grayscales = {
  h1: {
    color: darkGray
  },
  h2: {
    color: darkGray
  },
  h4: {
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
  button: {
    color: darkGray,
    backgroundColor: gray
  },
  square: {
    backgroundColor: gray,
    borderBottom: `6px solid ${darkerGray}`
  },
  squareBlocked: {
    backgroundColor: grayBlocked,
    borderBottom: `6px solid ${darkGray}`
  },
  squarePressed: {
    backgroundColor: gray,
    borderBottom: `6px solid ${pink}`
  },
  pressedControl: {
    backgroundColor: gray,
    borderBottom: `6px solid ${electricBlue}`
  },
  whiteField: {
    backgroundColor: 'white',
    border: `2px solid ${darkerGray}`,
    borderRadius: '100%'
  },
  blackField: {
    backgroundColor: darkGray,
    borderRadius: '100%'
  },
  itemImg: require('../images/labyrinth/coin.png'),
  playerImg: require("../images/labyrinth/player.png"),
  moveImg: false
}

export const pacman = {
  fontClass: 'pacman-font',
  h1: {
    color: '#FFFF52',
    fontSize: '50px'
  },
  h2: {
    color: 'white',
    fontSize: '20px'
  },
  h4: {
    color: 'white'
  },
  background: {
    backgroundColor: darkBlue
  },
  background2: {
    backgroundImage: `url("${require('../images/labyrinth/pacmanbg.png')}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100vw 100vh'
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
  button: {
    color: electricBlue,
    backgroundColor: 'white',
    fontSize: '15px'
  },
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
  },
  whiteField: {
    backgroundImage: `url("${require('../images/labyrinth/dot.png')}")`,
    backgroundSize: '100% 100%',
  },
  blackField: {
    border: `4px solid ${electricBlue}`,
    borderRadius: "10px"
  },
  itemImg: require('../images/labyrinth/cherry.png'),
  playerImg: require("../images/labyrinth/pacman.png"),
  moveImg: true,
  playerUp: require("../images/labyrinth/pacman-up.png"),
  playerDown: require("../images/labyrinth/pacman-down.png"),
  playerRight: require("../images/labyrinth/pacman-right.png"),
}

export const ocean = {
  h1: {
    color: 'white'
  },
  h2: {
    color: 'white'
  },
  h4: {
    color: 'white'
  },
  background: {
    backgroundImage: `url("${require('../images/labyrinth/ocean.png')}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100vw 100vh'
  },
  settingsDiv: {
    backgroundColor: clearBlue,
  },
  icon: {
    color: lightGray
  },
  sliderOn: orange,
  sliderOff: '#FFAC8F',
  button: {
    color: darkGray,
    backgroundColor: lightGray
  },
  square: {
    border: `6px solid ${yellow}`,
  },
  squareBlocked: {
    border: `6px solid #CF8A27`,
    backgroundColor: `rgb(0, 131, 196, 0.4)`,
  },
  squarePressed: {
    border: `6px solid ${blue}`,
  },
  pressedControl: {
    border: `6px solid ${blue}`,
  },
  whiteField: {
    backgroundImage: `url("${require('../images/labyrinth/bubble.png')}")`,
    backgroundSize: '100% 100%',
    zIndex: 1
  },
  blackField: {
    backgroundImage: `url("${require('../images/labyrinth/apple.png')}")`,
    backgroundSize: '100% 100%'
  },
  itemImg: require('../images/labyrinth/starfish.png'),
  playerImg: require("../images/labyrinth/fish.png"),
  moveImg: false
}