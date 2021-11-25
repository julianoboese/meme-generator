const container = document.getElementById('meme-image-container');
const imgOutput = document.getElementById('meme-image');

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

function imgInsert() {
  const imgInput = document.getElementById('meme-insert');
  imgInput.addEventListener('change', (event) => {
    /** Utilizei o código abaixo para inserir a imagem selecionada
     * Source: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
     */
    imgOutput.src = URL.createObjectURL(event.target.files[0]);
    imgOutput.onload = () => {
      URL.revokeObjectURL(imgOutput.src);
    };
  });
}

imgInsert();

function changeBorder() {
  const fireButton = document.getElementById('fire');
  const waterButton = document.getElementById('water');
  const earthButton = document.getElementById('earth');
  fireButton.addEventListener('click', () => { borderSpecs('3px', 'dashed', 'red'); });
  waterButton.addEventListener('click', () => { borderSpecs('5px', 'double', 'blue'); });
  earthButton.addEventListener('click', () => { borderSpecs('6px', 'groove', 'green'); });
}

changeBorder();

function imgSelect() {
  const memeImgs = document.getElementById('memes-pre-prontos').children;
  for (let i = 0; i < memeImgs.length; i += 1) {
    memeImgs[i].addEventListener('click', (event) => {
      console.log(memeImgs[i]);
      imgOutput.src = event.target.src;
      imgOutput.onload = () => {
        URL.revokeObjectURL(imgOutput.src);
      };
    });
  }
}

imgSelect();
