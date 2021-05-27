/* const simpleFlipper = ;
const hexFlipper = ; */
const flipperButton = document.querySelector('.flipperBtn');
const backgroundWeb = document.querySelector('.container');
const colorName = document.querySelector('.color-name');

const arrHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let randomNum;
let hex = '#';

const getRandomNumber = () => {
  randomNum = Math.floor(Math.random() * arrHex.length);
};

const changeColor = () => {
  for (let i = 0; i < 6; i++) {
    getRandomNumber();
    hex += arrHex[randomNum];
  }

  backgroundWeb.setAttribute('style', `background-color: ${hex}`);
  colorName.textContent = hex;
  colorName.setAttribute('style', `color: ${hex}`);
  hex = '#';
};

document.addEventListener('DOMContentLoaded', changeColor);
flipperButton.addEventListener('click', changeColor);
