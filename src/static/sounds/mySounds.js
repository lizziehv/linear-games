
import errorMp3 from './error.mp3'
import coin from './coin.mp3'
import UIfx from 'uifx';

export const errBeep = typeof document !== `undefined` ? new UIfx(errorMp3, {
  volume: 0.3, // number between 0.0 ~ 1.0
  throttleMs: 100
}) : null;

export const coinCollect = typeof document !== `undefined` ? new UIfx(coin, {
  volume: 0.3, // number between 0.0 ~ 1.0
  throttleMs: 100
}) : null;


// const UIfx = typeof document !== `undefined` ? require('uifx') : null;

// export const errBeep = typeof document !== `undefined` ? new UIfx(errorMp3, {
//   volume: 0.3, // number between 0.0 ~ 1.0
//   throttleMs: 100
// }) : null;

// export const coinCollect = typeof document !== `undefined` ? new UIfx(coin, {
//   volume: 0.3, // number between 0.0 ~ 1.0
//   throttleMs: 100
// }) : null;