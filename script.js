function createColorPalette() {
  const colorPalette = document.querySelector('#color-palette');
  for (let i = 0; i < 4; i += 1) {
    const colorOptions = document.createElement('li');
    colorOptions.className = 'color';
    colorOptions.className += ` color-${i}`;
    colorPalette.appendChild(colorOptions);
  }
}

createColorPalette();

function attributesBlackColorClass() {
  const firstColorSelected = document.querySelector('.color-0');
  firstColorSelected.className += ' selected';
}

attributesBlackColorClass();

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
document.addEventListener('click', (event) => {
  const color = event.target;
  if (event.target.classList.contains('color')) {
    const firstSelectedColor = document.querySelector('.selected');
    // https://www.w3schools.com/howto/howto_js_remove_class.asp
    firstSelectedColor.classList.remove('selected');
    color.className += ' selected';
  }
});

// https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/
document.addEventListener('click', (event) => {
  const select = event.target;
  if (event.target.classList.contains('pixel')) {
    const colorUsed = document.querySelector('.selected');
    const properties = window.getComputedStyle(colorUsed).getPropertyValue('background-color');
    select.style.backgroundColor = properties;
  }
});

function addsCleanButton() {
  const parentNode = document.querySelector('main');
  const pixelBoard = document.querySelector('#pixel-board');
  const cleanButton = document.createElement('button');
  cleanButton.innerText = 'Limpar';
  cleanButton.id = 'clear-board';
  parentNode.insertBefore(cleanButton, pixelBoard);
}

addsCleanButton();

function clearsBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

const cleanButton = document.querySelector('#clear-board');
cleanButton.addEventListener('click', clearsBoard);

function addsInputOfSize() {
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
  const parentNode = document.querySelector('main');
  const addsInput = document.createElement('input');
  addsInput.id = 'board-size';
  addsInput.type = 'number';
  addsInput.min = 1;
  addsInput.placeholder = 'Defina o tamanho da grade';
  parentNode.insertBefore(addsInput, cleanButton);
}

addsInputOfSize();

function addsButtonOfSize() {
  const parentNode = document.querySelector('main');
  const clearBoard = document.querySelector('#clear-board');
  const addsSizeButton = document.createElement('button');
  addsSizeButton.id = 'generate-board';
  addsSizeButton.innerText = 'VQV';
  parentNode.insertBefore(addsSizeButton, clearBoard);
}

addsButtonOfSize();

const generationButton = document.querySelector('#generate-board');
const generationInput = document.querySelector('#board-size');
const pixelBoardContainer = document.querySelector('main');
const pixelBoard = document.createElement('section');
pixelBoard.id = 'pixel-board';
pixelBoardContainer.appendChild(pixelBoard);

function changesPixelBoardSize(number) {
  const pixelBoardColumns = document.querySelector('#pixel-board');
  pixelBoardColumns.style.setProperty('--main-number', number);
}

function createStaticGridOfPixels(number) {
  for (let i = 0; i < (number ** 2); i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}

createStaticGridOfPixels(5);

function removesActualGrid() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].remove();
  }
}

function changesGridOfPixels() {
  let { value } = generationInput;
  if (value < 1) {
    alert('Board inválido!');
  } else if (value < 5) {
    removesActualGrid();
    changesPixelBoardSize(5);
    createStaticGridOfPixels(5);
  } else if (value > 50) {
    value = 50;
    removesActualGrid();
    changesPixelBoardSize(50);
    createStaticGridOfPixels(50);
  } else {
    removesActualGrid();
    changesPixelBoardSize(value);
    createStaticGridOfPixels(value);
  }
}

generationButton.addEventListener('click', changesGridOfPixels);

function generatesRandomColor() {
  const color = Math.floor(Math.random() * 256);
  return color;
}

function attributesRandomColor() {
  const rgb = [];
  for (let i = 0; i < 3; i += 1) {
    rgb[i] = generatesRandomColor();
  }
  return rgb;
}

function setsRandomColor() {
  const color1 = document.querySelector('.color-1');
  const back1 = attributesRandomColor();
  const color2 = document.querySelector('.color-2');
  const back2 = attributesRandomColor();
  const color3 = document.querySelector('.color-3');
  const back3 = attributesRandomColor();

  color1.style.backgroundColor = `rgb(${back1[0]}, ${back1[1]}, ${back1[2]})`;
  color2.style.backgroundColor = `rgb(${back2[0]}, ${back2[1]}, ${back2[2]})`;
  color3.style.backgroundColor = `rgb(${back3[0]}, ${back3[1]}, ${back3[2]})`;

  return 0;
}

setsRandomColor();
