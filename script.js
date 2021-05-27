/* const simpleFlipper = ;
const hexFlipper = ; */
const flipperButton = document.querySelector('.flipperBtn');
const backgroundWeb = document.querySelector('.container');
const colorName = document.querySelector('.color-name');

const arrSimpleColors = [
  'black',
  'blue',
  'brown',
  'cyan',
  'fuchsia',
  'gold',
  'gray',
  'green',
  'indigo',
  'magenta',
  'orange',
  'pink',
  'purple',
  'red',
  'skyblue',
  'turquoise',
  'white',
  'yellow',
];

let lastRandomNumber = [0, 0];
let randomNum;

const getRandomNumberSimple = () => {
  lastRandomNumber.shift();
  randomNum = Math.floor(Math.random() * arrSimpleColors.length);
  lastRandomNumber.push(randomNum);
};

const changeColor = () => {
  do {
    getRandomNumberSimple();
  } while (lastRandomNumber[0] === lastRandomNumber[1]);
  backgroundWeb.setAttribute(
    'style',
    `background-color: ${arrSimpleColors[randomNum]}`
  );

  colorName.textContent = arrSimpleColors[randomNum];
  colorName.setAttribute('style', `color: ${arrSimpleColors[randomNum]}`);
};

document.addEventListener('DOMContentLoaded', changeColor);
flipperButton.addEventListener('click', changeColor);
