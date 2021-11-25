const container = document.getElementById('meme-image-container');

function textInsert() {
  const textInput = document.getElementById('text-input');
  textInput.addEventListener('keyup', () => {
    document.getElementById('meme-text').innerHTML = textInput.value;
  });
}

textInsert();

function borderSpecs(width, style, color) {
  container.style.borderWidth = width;
  container.style.borderStyle = style;
  container.style.borderColor = color;
}

function changeBorder() {
  const fireButton = document.getElementById('fire');
  const waterButton = document.getElementById('water');
  const earthButton = document.getElementById('earth');
  fireButton.addEventListener('click', () => { borderSpecs('3px', 'dashed', 'red'); });
  waterButton.addEventListener('click', () => { borderSpecs('5px', 'double', 'blue'); });
  earthButton.addEventListener('click', () => { borderSpecs('6px', 'groove', 'green'); });
}

changeBorder();
